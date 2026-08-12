import { useState } from "react";

export function SkillsForm({ handleNext, updateSkills, skills }) {
	function handleDeleteSkill(id) {
		updateSkills(skills.filter((entry) => entry.id !== id));
	}

	const [inputValue, setInputValue] = useState("");

	function addEntry() {
		if (inputValue.trim() === "") return;
		const newEntry = { id: Date.now(), skill: inputValue };
		updateSkills([...skills, newEntry]);
		setInputValue("");
	}

	return (
		<div className="skills-form">
			<label htmlFor="skills">Skills</label>
			<div className="skills">
				{skills.map((entry) => (
					<div className="skill" key={entry.id}>
						<p>{entry.skill}</p>
						<button onClick={() => handleDeleteSkill(entry.id)}>x</button>
					</div>
				))}
			</div>
			<input
				type="text"
				id="skills"
                value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						addEntry();
					}
				}}
			/>
			<button onClick={handleNext}>Next</button>
		</div>
	);
}
