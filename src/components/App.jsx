import { useState } from "react";
import { HeaderForm } from "./forms/HeaderForm.jsx";
import { EducationForm } from "./forms/EducationForm.jsx";
import { ExperienceForm } from "./forms/ExperienceForm.jsx";
import { LanguagesForm } from "./forms/LanguagesForm.jsx";
import { ProjectsForm } from "./forms/ProjectsForm.jsx";
import { SkillsForm } from "./forms/SkillsForm.jsx";
import { CVPreview } from "./preview/CVPreview.jsx";
import { SectionMenu } from "./SectionMenu.jsx";
import { cvData as initialData } from "../data/initialData.js";

export default function App() {
	const [cvData, setCVData] = useState(initialData);
	const [currentSection, setCurrentSection] = useState(0);
	const [submittedSections, setSubmittedSections] = useState({});

	function handleNext() {
		setSubmittedSections((prev) => ({ ...prev, [currentSection]: true }));
		setCurrentSection(currentSection + 1);
	}

	function goToSection(index) {
		setCurrentSection(index);
	}

	function renderSection() {
		switch (currentSection) {
			case 0:
				return <HeaderForm handleNext={handleNext} />;
			case 1:
				return <ExperienceForm handleNext={handleNext} />;
			case 2:
				return <EducationForm handleNext={handleNext} />;
			case 3:
				return <ProjectsForm handleNext={handleNext} />;
			case 4:
				return <SkillsForm handleNext={handleNext} />;
			case 5:
				return <LanguagesForm handleNext={handleNext} />;
		}
	}

	return (
		<>
			<SectionMenu
				currentSection={currentSection}
				submittedSections={submittedSections}
                goToSection={goToSection}
			/>
			{renderSection()}
			<CVPreview cvData={cvData} />
		</>
	);
}
