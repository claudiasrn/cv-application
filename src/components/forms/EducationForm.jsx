import { EntryCard } from "../EntryCard";
import { X, Plus } from "lucide-react";

export function EducationForm({ handleNext, updateEducation, education }) {
	function handleDeleteEducation(id) {
		updateEducation(education.filter((entry) => entry.id !== id));
	}

	function handleFieldChange(field, id, value) {
		updateEducation(
			education.map((entry) =>
				entry.id === id ? { ...entry, [field]: value } : entry,
			),
		);
	}

	function addEntry() {
		const newEntry = {
			id: Date.now(),
			degree: "",
			institution: "",
			location: "",
			startDate: "",
			endDate: "",
			bullets: [],
		};
		updateEducation([...education, newEntry]);
	}

	function handleAddBullet(id) {
		const newBullet = { id: Date.now(), text: "" };
		updateEducation(
			education.map((entry) => {
				if (entry.id === id) {
					return { ...entry, bullets: [...entry.bullets, newBullet] };
				}
				return entry;
			}),
		);
	}

	function handleBulletChange(id, bulletId, value) {
		updateEducation(
			education.map((entry) => {
				if (entry.id !== id) return entry;
				return {
					...entry,
					bullets: entry.bullets.map((bullet) =>
						bullet.id === bulletId ? { ...bullet, text: value } : bullet,
					),
				};
			}),
		);
	}

	function handleRemoveBullet(id, bulletId) {
		updateEducation(
			education.map((entry) => {
				if (entry.id !== id) return entry;
				return {
					...entry,
					bullets: entry.bullets.filter((bullet) => bullet.id !== bulletId),
				};
			}),
		);
	}

	return (
		<div className="education-form">
			{education.map((entry) => (
				<EntryCard
					key={entry.id}
					entryId={entry.id}
					removeEntry={handleDeleteEducation}
				>
					<div className="education-info">
						<div>
							<label htmlFor="degree">Degree</label>
							<input
								type="text"
								id="degree"
								value={entry.degree}
								onChange={(e) =>
									handleFieldChange("degree", entry.id, e.target.value)
								}
							/>
						</div>
						<div>
							<label htmlFor="institution">Institution</label>
							<input
								type="text"
								id="institution"
								value={entry.institution}
								onChange={(e) =>
									handleFieldChange("institution", entry.id, e.target.value)
								}
							/>
						</div>
					</div>
					<div className="education-details">
						<div>
							<label htmlFor="location">Location</label>
							<input
								type="text"
								id="location"
								value={entry.location}
								onChange={(e) =>
									handleFieldChange("location", entry.id, e.target.value)
								}
							/>
						</div>
						<div>
							<label htmlFor="start-date">Start date</label>
							<input
								type="text"
								id="start-date"
								value={entry.startDate}
								placeholder="XX/20XX"
								onChange={(e) =>
									handleFieldChange("startDate", entry.id, e.target.value)
								}
							/>
						</div>
						<div>
							<label htmlFor="end-date">End date</label>
							<input
								type="text"
								id="end-date"
								value={entry.endDate}
								placeholder="Present"
								onChange={(e) =>
									handleFieldChange("endDate", entry.id, e.target.value)
								}
							/>
						</div>
					</div>
					<div className="responsibilities">
						<p>Highlights</p>
						{entry.bullets.map((bullet) => (
							<div key={bullet.id}>
								<input
									type="text"
									value={bullet.text}
									onChange={(e) =>
										handleBulletChange(entry.id, bullet.id, e.target.value)
									}
								/>
								<button onClick={() => handleRemoveBullet(entry.id, bullet.id)}>
									<X/>
								</button>
							</div>
						))}
						<button onClick={() => handleAddBullet(entry.id)}>
							<Plus/>Add bullet point
						</button>
					</div>
				</EntryCard>
			))}
			<button onClick={addEntry}><Plus/> Add education</button>
			<button onClick={handleNext}>Next</button>
		</div>
	);
}
