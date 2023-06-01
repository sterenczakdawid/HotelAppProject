import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
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
						// console.log("Uplpoad is " + progress + "% done");
						switch (snapshot.state) {
							case "paused":
								// console.log("Upload is paused");
								break;
							case "running":
								// console.log("Upload is running");
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
		toast.success("Pokój został pomyślnie dodany");
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
		<div>
			<header>
				<div
					className={`flex items-center justify-center flex-col bg-white h-[400px] bg-add-edit bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
					<div className="absolute w-full h-full bg-black/[.80] -z-10" />
					<div className="flex flex-col content-center items-center z-5">
						<h1 className="p-10 text-7xl font-['Dancing_Script']">
							Dodawanie nowego pokoju
						</h1>
					</div>
				</div>
			</header>
			<div className="bg-gray-200 pt-10">
				<main>
					<form onSubmit={onSubmit} className="space-y-7">
						<div>
							<label className="block mb-2 text-3xl"> Nazwa pokoju </label>
							<input
								className="w-1/2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								type="text"
								id="name"
								placeholder="Nazwa pokoju (10-32 znaków)"
								value={name}
								onChange={onMutate}
								maxLength="32"
								minLength="10"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label className="block mb-2 text-3xl"> Opis pokoju </label>
							<textarea
								className="w-1/2 h-[150px] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white resize-none"
								type="text"
								id="description"
								placeholder="Tutaj wpisz opis pokoju (25-640 znakow)"
								value={description}
								onChange={onMutate}
								maxLength="640"
								minLength="25"
								autoComplete="off"
								required
							/>
						</div>
						<div className="flex items-center justify-around">
							<div>
								<label className="block mb-2 text-3xl"> Pojemność </label>
								<input
									className="w-[80px] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
									type="number"
									id="capacity"
									value={capacity}
									onChange={onMutate}
									min="1"
									autoComplete="off"
									required
								/>
								<span className="w-[10px] px-5 text-2xl">osób</span>
							</div>
							<div>
								<label className="block mb-2 text-3xl"> Metraż pokoju </label>
								<input
									className="w-[80px] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
									type="text"
									id="size"
									value={size}
									onChange={onMutate}
									maxLength="5"
									minLength="1"
									autoComplete="off"
									required
								/>
								<span className="w-[10px] px-5 text-2xl">
									m<sup>2</sup>
								</span>
							</div>
							<div>
								<label className="block mb-2 text-3xl"> Cena </label>
								<input
									className="w-[80px] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
									type="number"
									id="price"
									value={price}
									onChange={onMutate}
									min="1"
									autoComplete="off"
									required
								/>
								<span className="w-[10px] px-5 text-2xl">zł/noc</span>
							</div>
						</div>
						<div>
							<label className="block mb-2 text-3xl">
								{" "}
								Zdjęcia pokoju - max 6{" "}
							</label>
							<input
								className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								type="file"
								id="images"
								onChange={onMutate}
								max="6"
								accept=".jpg, .png, .jpeg"
								multiple
								required
							/>
						</div>

						<div>
							<button
								type="submit"
								className="rounded-lg border border-black px-7 py-3 m-3 mb-7 hover:bg-black hover:text-white transition duration-300">
								Zatwierdź
							</button>

							<button>
								<Link
									to="/rooms"
									className="rounded-lg border border-black px-7 py-3 m-3 mb-7 hover:bg-black hover:text-white transition duration-300">
									Anuluj
								</Link>
							</button>
						</div>
					</form>
				</main>
			</div>
		</div>
	);
};
