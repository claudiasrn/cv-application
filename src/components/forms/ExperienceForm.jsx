import { EntryCard } from "../EntryCard";

export function ExperienceForm({ handleNext, updateExperience, experience }) {
	function handleDeleteExperience(id) {
		updateExperience(experience.filter((entry) => entry.id !== id));
	}

	function handleFieldChange(field, id, value) {
		updateExperience(
			experience.map((entry) =>
				entry.id === id ? { ...entry, [field]: value } : entry,
			),
		);
	}

	function addEntry() {
		const newEntry = {
			id: Date.now(),
			title: "",
			company: "",
			location: "",
			startDate: "",
			endDate: "",
			bullets: [],
		};
		updateExperience([...experience, newEntry]);
	}

	function handleAddBullet(id) {
		const newBullet = { id: Date.now(), text: "" };
		updateExperience(
			experience.map((entry) => {
				if (entry.id === id) {
					return { ...entry, bullets: [...entry.bullets, newBullet] };
				}
				return entry;
			}),
		);
	}

	function handleBulletChange(id, bulletId, value) {
		updateExperience(
			experience.map((entry) => {
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
		updateExperience(
			experience.map((entry) => {
				if (entry.id !== id) return entry;
				return {
					...entry,
					bullets: entry.bullets.filter((bullet) => bullet.id !== bulletId),
				};
			}),
		);
	}

	return (
		<div className="experience-form">
			{experience.map((entry) => (
				<EntryCard
					key={entry.id}
					entryId={entry.id}
					removeEntry={handleDeleteExperience}
				>
					<label htmlFor="job-title">Job title</label>
					<input
						type="text"
						id="job-title"
						value={entry.title}
						onChange={(e) =>
							handleFieldChange("title", entry.id, e.target.value)
						}
					/>
					<label htmlFor="company">Company</label>
					<input
						type="text"
						id="company"
						value={entry.company}
						onChange={(e) =>
							handleFieldChange("company", entry.id, e.target.value)
						}
					/>
					<label htmlFor="location">Location</label>
					<input
						type="text"
						id="location"
						value={entry.location}
						onChange={(e) =>
							handleFieldChange("location", entry.id, e.target.value)
						}
					/>
					<label htmlFor="start-date">Start date</label>
					<input
						type="text"
						id="start-date"
						value={entry.startDate}
						onChange={(e) =>
							handleFieldChange("startDate", entry.id, e.target.value)
						}
					/>
					<label htmlFor="end-date">End date</label>
					<input
						type="text"
						id="end-date"
						value={entry.endDate}
						onChange={(e) =>
							handleFieldChange("endDate", entry.id, e.target.value)
						}
					/>
					<div className="responsibilities">
						{entry.bullets.map((bullet) => (
							<div key={bullet.id}>
								<input
									type="text"
									value={bullet.text}
									onChange={(e) =>
										handleBulletChange(entry.id, bullet.id, e.target.value)
									}
								/>
								<button
									onClick={() => handleRemoveBullet(entry.id, bullet.id)}
								>
									×
								</button>
							</div>
						))}
						<button onClick={() => handleAddBullet(entry.id)}>
							Add bullet point
						</button>
					</div>
				</EntryCard>
			))}
			<button onClick={addEntry}>+ Add job</button>
			<button onClick={handleNext}>Next</button>
		</div>
	);
}
