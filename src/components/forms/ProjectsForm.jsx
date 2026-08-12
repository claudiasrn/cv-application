import { EntryCard } from "../EntryCard";

export function ProjectsForm({ handleNext, updateProjects, projects }) {
    function handleDeleteProject(id) {
        updateProjects(projects.filter((entry) => entry.id !== id));
    }

    function handleFieldChange(field, id, value) {
        updateProjects(
            projects.map((entry) =>
                entry.id === id ? { ...entry, [field]: value } : entry,
            ),
        );
    }

    function addEntry() {
        const newEntry = {
            id: Date.now(),
            name: "",
            link: "",
            bullets: [],
        };
        updateProjects([...projects, newEntry]);
    }

    function handleAddBullet(id) {
        const newBullet = { id: Date.now(), text: "" };
        updateProjects(
            projects.map((entry) => {
                if (entry.id === id) {
                    return { ...entry, bullets: [...entry.bullets, newBullet] };
                }
                return entry;
            }),
        );
    }

    function handleBulletChange(id, bulletId, value) {
        updateProjects(
            projects.map((entry) => {
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
        updateProjects(
            projects.map((entry) => {
                if (entry.id !== id) return entry;
                return {
                    ...entry,
                    bullets: entry.bullets.filter((bullet) => bullet.id !== bulletId),
                };
            }),
        );
    }

    return (
        <div className="projects-form">
            {projects.map((entry) => (
                <EntryCard
                    key={entry.id}
                    entryId={entry.id}
                    removeEntry={handleDeleteProject}
                >
                    <label htmlFor="name">Project name</label>
                    <input
                        type="text"
                        id="name"
                        value={entry.name}
                        onChange={(e) =>
                            handleFieldChange("name", entry.id, e.target.value)
                        }
                    />
                    <label htmlFor="link">Link</label>
                    <input
                        type="text"
                        id="link"
                        value={entry.link}
                        onChange={(e) =>
                            handleFieldChange("link", entry.id, e.target.value)
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
                                <button onClick={() => handleRemoveBullet(entry.id, bullet.id)}>
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
            <button onClick={addEntry}>+ Add project</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}