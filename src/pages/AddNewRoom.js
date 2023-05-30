import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export const AddNewRoom = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		size: "",
		capacity: 0,
		price: 0,
		description: "",
		images: {},
	});

	const { name, size, capacity, price, description, images } = formData;

	const auth = getAuth();
	const navigate = useNavigate();
	// const isMounted = useRef(true);

	// useEffect(() => {
	// 	if (isMounted) {
	// 		onAuthStateChanged(auth, (user) => {
	// 			if (user) {
	// 				setFormData({ ...formData, userRef: user.uid });
	// 			} else {
	// 				navigate("/signin");
	// 			}
	// 		});
	// 	}

	// 	return () => {
	// 		isMounted.current = false;
	// 	};
	// }, [isMounted]);

	const onSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		if (images.length > 6) {
			setLoading(false);
			toast.error("Maksymalnie 6 zdjęć!");
			return;
		}

		const storeImage = async (image) => {
			return new Promise((resolve, reject) => {
				const storage = getStorage();
				const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

				const storageRef = ref(storage, "images/" + filename);

				const uploadTask = uploadBytesResumable(storageRef, image);

				uploadTask.on(
					"state_changed",
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						console.log("Uplpoad is " + progress + "% done");
						switch (snapshot.state) {
							case "paused":
								console.log("Upload is paused");
								break;
							case "running":
								console.log("Upload is running");
								break;
							default:
								break;
						}
					},
					(error) => {
						reject(error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							resolve(downloadURL);
						});
					}
				);
			});
		};

		const imgUrls = await Promise.all(
			[...images].map((image) => storeImage(image))
		).catch(() => {
			setLoading(false);
			toast.error("Images not uploaded");
			return;
		});

		const formDataCopy = {
			...formData,
			imgUrls,
			timestamp: serverTimestamp(),
		};

		delete formDataCopy.images;

		const docRef = await addDoc(collection(db, "rooms"), formDataCopy);
		setLoading(false);
		toast.success("Listing saved");
		navigate(`/rooms/${docRef.id}`);
	};

	const onMutate = (e) => {
		let boolean = null;

		if (e.target.value === "true") {
			boolean = true;
		}
		if (e.target.value === "false") {
			boolean = false;
		}

		//Files
		if (e.target.files) {
			setFormData((prevState) => ({
				...prevState,
				images: e.target.files,
			}));
		}

		// Text/Booleans/Numbers
		if (!e.target.files) {
			setFormData((prevState) => ({
				...prevState,
				[e.target.id]: boolean ?? e.target.value,
			}));
		}
	};

	if (loading) {
		return <Spinner />;
	}
	return (
		<div className = "m-24">
			<header>
				<p>Create a Listing</p>
			</header>
			<main>
				<form onSubmit={onSubmit} className="flex flex-col">
					<label className="formLabel"> name </label>
					<input
						className="formInputName"
						type="text"
						id="name"
						value={name}
						onChange={onMutate}
						maxLength="32"
						minLength="10"
						autoComplete="off"
						required
					/>

					<label className="formLabel"> description </label>
					<input
						className="formInputName"
						type="text"
						id="description"
						value={description}
						onChange={onMutate}
						maxLength="640"
						minLength="25"
						autoComplete="off"
						required
					/>

					<label className="formLabel"> capacity </label>
					<input
						className="formInputName"
						type="number"
						id="capacity"
						value={capacity}
						onChange={onMutate}
						min="1"
						autoComplete="off"
						required
					/>

					<label className="formLabel"> size </label>
					<input
						className="formInputName"
						type="text"
						id="size"
						value={size}
						onChange={onMutate}
						maxLength="5"
						minLength="1"
						autoComplete="off"
						required
					/>

					<label className="formLabel"> price </label>
					<input
						className="formInputName"
						type="number"
						id="price"
						value={price}
						onChange={onMutate}
						min="1"
						autoComplete="off"
						required
					/>

					<label className="formLabel"> images </label>
					<input
						className="formInputName"
						type="file"
						id="images"
						onChange={onMutate}
						max="6"
						accept=".jpg, .png, .jpeg"
						multiple
						required
					/>

					<button type="submit" className="primaryButton createListingButton">
						Create Listing
					</button>
				</form>
			</main>
		</div>
	);
};
