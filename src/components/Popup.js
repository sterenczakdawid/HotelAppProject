import { createPortal } from "react-dom";

export const Popup = ({ open, children, onClose }) => {
	if (!open) return null;
	return (
		<>
			{createPortal(
				<>
					<div
						className="bg-black/[.70] fixed top-0 left-0 right-0 bottom-0 z-1000"
						onClick={onClose}
					/>
					<div className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 p-10 flex flex-col items-center justify-center bg-white z-1000">
						{children}
						<button onClick={onClose}>Zamknij okno</button>
					</div>
				</>,
				document.getElementById("portal")
			)}
		</>
	);
};
