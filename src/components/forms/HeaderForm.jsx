import { useRef, useState } from "react";
import { Camera, X } from "lucide-react";

export function HeaderForm({ handleNext, updateHeader, header }) {
	const fileInputRef = useRef(null);
	const [isDraggingOver, setIsDraggingOver] = useState(false);

	function handlePhotoSelect(file) {
		if (header.photoPreview) {
			URL.revokeObjectURL(header.photoPreview);
		}
		const previewUrl = URL.createObjectURL(file);
		updateHeader("photoPreview", previewUrl);
		updateHeader("photo", file);

		const reader = new FileReader();
		reader.onload = () => {
			updateHeader("photoBase64", reader.result);
		};
		reader.readAsDataURL(file);
	}

	function removePicture() {
		if (header.photoPreview) {
			URL.revokeObjectURL(header.photoPreview);
		}
		updateHeader("photoPreview", "");
		updateHeader("photo", "");
		updateHeader("photoBase64", "");
	}

	function handleFieldChange(field, value) {
		updateHeader(field, value);
	}

	return (
		<div className="header-form">
			<div className="header">
				<div className="photo">
					<label htmlFor="photo">Photo</label>
					<input
						id="photo"
						type="file"
						accept="image/*"
						onChange={(e) => handlePhotoSelect(e.target.files[0])}
						style={{ display: "none" }}
						ref={fileInputRef}
					></input>
					<div
						className={
							isDraggingOver ? "picture-dropzone dragging" : "picture-dropzone"
						}
						onClick={() => fileInputRef.current.click()}
						onDragOver={(e) => {
							e.preventDefault();
							setIsDraggingOver(true);
						}}
						onDragLeave={() => setIsDraggingOver(false)}
						onDrop={(e) => {
							e.preventDefault();
							setIsDraggingOver(false);
							handlePhotoSelect(e.dataTransfer.files[0]);
						}}
					>
						{header.photoPreview ? (
							<>
								<img src={header.photoPreview} alt="Preview" />
								<button onClick={() => removePicture()}>
									<X />
								</button>
							</>
						) : (
							<Camera />
						)}
					</div>
				</div>
				<div>
					<label htmlFor="full-name">Full name</label>
					<input
						type="text"
						id="full-name"
						value={header.name}
						onChange={(e) => handleFieldChange("name", e.target.value)}
					/>
					<label htmlFor="subtitle">Subtitle</label>
					<input
						type="text"
						id="subtitle"
						value={header.subtitle}
						onChange={(e) => handleFieldChange("subtitle", e.target.value)}
					/>
				</div>
			</div>
			<div className="contact">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={header.email}
					placeholder="name@email.com"
					onChange={(e) => handleFieldChange("email", e.target.value)}
				/>
				<label htmlFor="phone">Phone</label>
				<input
					type="tel"
					id="phone"
					value={header.phone}
					placeholder="+49 176 12345678"
					onChange={(e) => handleFieldChange("phone", e.target.value)}
				/>

				<label htmlFor="address">Address</label>
				<input
					type="text"
					id="address"
					value={header.address}
					onChange={(e) => handleFieldChange("address", e.target.value)}
				/>
			</div>
			<div className="links">
				<p>Links</p>
				<label htmlFor="github">GitHub</label>
				<input
					type="text"
					id="github"
					value={header.github}
					placeholder="github.com/yourusername"
					onChange={(e) => handleFieldChange("github", e.target.value)}
				/>
				<label htmlFor="linkedin">LinkedIn</label>
				<input
					type="text"
					id="linkedin"
					value={header.linkedin}
					placeholder="linkedin.com/in/yourname"
					onChange={(e) => handleFieldChange("linkedin", e.target.value)}
				/>
				<label htmlFor="portfolio">Portfolio</label>
				<input
					type="text"
					id="portfolio"
					value={header.portfolio}
					placeholder="yourportfolio.com"
					onChange={(e) => handleFieldChange("portfolio", e.target.value)}
				/>
			</div>
			<button onClick={() => handleNext()}>Next</button>
		</div>
	);
}
