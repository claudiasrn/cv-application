import { useState } from "react";
import { X } from "lucide-react";

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
			<div>
				<label htmlFor="skills">Skills</label>
				<div className="skills">
					{skills.map((entry) => (
						<div className="skill" key={entry.id}>
							<p>{entry.skill}</p>
							<button onClick={() => handleDeleteSkill(entry.id)}><X/></button>
						</div>
					))}
				</div>
				<input
					type="text"
					id="skills"
					value={inputValue}
					placeholder="Type a skill and press Enter"
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							addEntry();
						}
					}}
				/>
			</div>
			<button onClick={handleNext}>Next</button>
		</div>
	);
}
