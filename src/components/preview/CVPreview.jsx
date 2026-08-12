export function CVPreview({ cvData }) {
	return (
		<div className="preview">
			<div className="left-side">
				{cvData.header.name ? <h1>{cvData.header.name}</h1> : null}
				{cvData.header.subtitle ? <em>{cvData.header.subtitle}</em> : null}
				{cvData.experience.length > 0 ? (
					<div className="work-experience">
						<h2>WORK EXPERIENCE</h2>
						{cvData.experience.map((entry) => {
							return (
								<div className="work" key={entry.id}>
									{entry.startDate || entry.endDate ? (
										<div className="dates">
											<p>{entry.startDate}</p>
											<p>{entry.endDate}</p>
										</div>
									) : null}
									<div className="info">
										{entry.title ? <h3>{entry.title}</h3> : null}
										<div className="subtitle">
											{entry.company ? <p>{entry.company}</p> : null}
											{entry.company && entry.location ? <p> | </p> : null}
											{entry.location ? <p>{entry.location}</p> : null}
										</div>
										{entry.bullets.length > 0 ? (
											<div className="bullets">
												{entry.bullets.map((bullet) => {
													return (
														<div className="bullet" key={bullet.id}>
															<p>•</p>
															<p>{bullet.text}</p>
														</div>
													);
												})}
											</div>
										) : null}
									</div>
								</div>
							);
						})}
					</div>
				) : null}
				{cvData.education.length > 0 ? (
					<div className="education">
						<h2>EDUCATION</h2>
						{cvData.education.map((entry) => {
							return (
								<div className="degree" key={entry.id}>
									{entry.startDate || entry.endDate ? (
										<div className="dates">
											<p>{entry.startDate}</p>
											<p>{entry.endDate}</p>
										</div>
									) : null}
									<div className="info">
										{entry.degree ? <h3>{entry.degree}</h3> : null}
										<div className="subtitle">
											{entry.institution ? <p>{entry.institution}</p> : null}
											{entry.institution && entry.location ? <p> | </p> : null}
											{entry.location ? <p>{entry.location}</p> : null}
										</div>
										{entry.bullets.length > 0 ? (
											<div className="bullets">
												{entry.bullets.map((bullet) => {
													return (
														<div className="bullet" key={bullet.id}>
															<p>•</p>
															<p>{bullet.text}</p>
														</div>
													);
												})}
											</div>
										) : null}
									</div>
								</div>
							);
						})}
					</div>
				) : null}
				{cvData.projects.length > 0 ? (
					<div className="projects">
						<h2>PROJECTS</h2>
						{cvData.projects.map((entry) => {
							return (
								<div className="project" key={entry.id}>
									{entry.name ? <h3>{entry.name}</h3> : null}
									{entry.link ? <a href={entry.link}>Open project</a> : null}
									{entry.bullets.length > 0 ? (
										<div className="bullets">
											{entry.bullets.map((bullet) => {
												return (
													<div className="bullet" key={bullet.id}>
														<p>•</p>
														<p>{bullet.text}</p>
													</div>
												);
											})}
										</div>
									) : null}
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className="right-side">
				{cvData.header.photoPreview ? (
					<img src={cvData.header.photoPreview} />
				) : null}
				{cvData.header.email ? (
					<a href={`mailto:${cvData.header.email}`}>{cvData.header.email}</a>
				) : null}
				{cvData.header.phone ? (
					<a href={`tel:${cvData.header.phone}`}>{cvData.header.phone}</a>
				) : null}
				{cvData.skills.length > 0 ? (
					<div className="skills">
						<h2>SKILLS</h2>
						{cvData.skills.map((entry) => {
							return (
								<div className="skill" key={entry.id}>
									<p>•</p>
									<p>{entry.skill}</p>
								</div>
							);
						})}
					</div>
				) : null}
				{cvData.languages.length > 0 ? (
					<div className="languages">
						<h2>LANGUAGES</h2>
						{cvData.languages.map((entry) => {
							return (
								<div className="language" key={entry.id}>
									<p>•</p>
									<p>{entry.language}</p>
									{entry.proficiency ? (
										<>
											<p>|</p> <p>{entry.proficiency}</p>
										</>
									) : null}
								</div>
							);
						})}
					</div>
				) : null}
			</div>
		</div>
	);
}
