export function SectionMenu({ currentSection, submittedSections, goToSection }) {
    const sections = {
        0: "Personal Info",
        1: "Work Experience",
        2: "Education",
        3: "Projects",
        4: "Skills",
        5: "Languages",
        6: "Download"
    }


    function renderButton(index) {
        if(index === currentSection) {
            return <button className="active">{sections[index]}</button>
        }

        if(index === 0 || submittedSections[index - 1]) {
            return <button className="unlocked" onClick={() => goToSection(index)}>{sections[index]}</button>
        }

        return <button className="locked">{sections[index]}</button>
    }

	return (
		<div className="section-menu">
			{renderButton(0)}
            {renderButton(1)}
            {renderButton(2)}
            {renderButton(3)}
            {renderButton(4)}
            {renderButton(5)}
            {renderButton(6)}
		</div>
	);
}
