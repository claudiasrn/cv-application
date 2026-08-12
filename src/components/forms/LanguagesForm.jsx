import { EntryCard } from "../EntryCard";

export function LanguagesForm({ handleNext, updateLanguages, languages }) {
	function handleDeleteLanguage(id) {
		updateLanguages(languages.filter((entry) => entry.id !== id));
	}

	function handleFieldChange(field, id, value) {
		updateLanguages(
			languages.map((entry) =>
				entry.id === id ? { ...entry, [field]: value } : entry,
			),
		);
	}

	function addEntry() {
		const newEntry = {
			id: Date.now(),
			language: "",
			proficiency: "",
		};
		updateLanguages([...languages, newEntry]);
	}

	return (
		<div className="languages-form">
			{languages.map((entry) => (
				<EntryCard
					key={entry.id}
					entryId={entry.id}
					removeEntry={handleDeleteLanguage}
				>
					<label htmlFor="language">Language</label>
					<input
						type="text"
						id="language"
						value={entry.language}
						onChange={(e) =>
							handleFieldChange("language", entry.id, e.target.value)
						}
					/>
					<label htmlFor="proficiency">Proficiency</label>
					<select
                        id="proficiency"
						value={entry.proficiency}
						onChange={(e) =>
							handleFieldChange("proficiency", entry.id, e.target.value)
						}
					>
						<option value="">Select level</option>
						<option value="Native">Native</option>
						<option value="Fluent">Fluent</option>
						<option value="Advanced">Advanced</option>
						<option value="Intermediate">Intermediate</option>
						<option value="Basic">Basic</option>
					</select>
				</EntryCard>
			))}
			<button onClick={addEntry}>+ Add language</button>
			<button onClick={handleNext}>Finish</button>
		</div>
	);
}
