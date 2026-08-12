import {
	Document,
	Page,
	View,
	Text,
	Image,
	Link,
} from "@react-pdf/renderer";

export function CVDocument({ cvData }) {
	return (
        <Document>
            <Page size="A4">
                <View>
                    <View>
                        {cvData.header.name ? <Text>{cvData.header.name}</Text> : null}
                        {cvData.header.subtitle ? <Text>{cvData.header.subtitle}</Text> : null}
                        {cvData.experience.length > 0 ? (
                            <View>
                                <Text>WORK EXPERIENCE</Text>
                                {cvData.experience.map((entry) => {
                                    return (
                                        <View key={entry.id}>
                                            {entry.startDate || entry.endDate ? (
                                                <View>
                                                    <Text>{entry.startDate}</Text>
                                                    <Text>{entry.endDate}</Text>
                                                </View>
                                            ) : null}
                                            <View>
                                                {entry.title ? <Text>{entry.title}</Text> : null}
                                                <View>
                                                    {entry.company ? <Text>{entry.company}</Text> : null}
                                                    {entry.company && entry.location ? (
                                                        <Text> | </Text>
                                                    ) : null}
                                                    {entry.location ? <Text>{entry.location}</Text> : null}
                                                </View>
                                                {entry.bullets.length > 0 ? (
                                                    <View>
                                                        {entry.bullets.map((bullet) => {
                                                            return (
                                                                <View key={bullet.id}>
                                                                    <Text>•</Text>
                                                                    <Text>{bullet.text}</Text>
                                                                </View>
                                                            );
                                                        })}
                                                    </View>
                                                ) : null}
                                            </View>
                                        </View>
                                    );
                                })}
                            </View>
                        ) : null}
                        {cvData.education.length > 0 ? (
                            <View>
                                <Text>EDUCATION</Text>
                                {cvData.education.map((entry) => {
                                    return (
                                        <View key={entry.id}>
                                            {entry.startDate || entry.endDate ? (
                                                <View>
                                                    <Text>{entry.startDate}</Text>
                                                    <Text>{entry.endDate}</Text>
                                                </View>
                                            ) : null}
                                            <View>
                                                {entry.degree ? <Text>{entry.degree}</Text> : null}
                                                <View>
                                                    {entry.institution ? (
                                                        <Text>{entry.institution}</Text>
                                                    ) : null}
                                                    {entry.institution && entry.location ? (
                                                        <Text> | </Text>
                                                    ) : null}
                                                    {entry.location ? <Text>{entry.location}</Text> : null}
                                                </View>
                                                {entry.bullets.length > 0 ? (
                                                    <View>
                                                        {entry.bullets.map((bullet) => {
                                                            return (
                                                                <View key={bullet.id}>
                                                                    <Text>•</Text>
                                                                    <Text>{bullet.text}</Text>
                                                                </View>
                                                            );
                                                        })}
                                                    </View>
                                                ) : null}
                                            </View>
                                        </View>
                                    );
                                })}
                            </View>
                        ) : null}
                        {cvData.projects.length > 0 ? (
                            <View>
                                <Text>PROJECTS</Text>
                                {cvData.projects.map((entry) => {
                                    return (
                                        <View key={entry.id}>
                                            {entry.name ? <Text>{entry.name}</Text> : null}
                                            {entry.link ? (
                                                <Link href={entry.link}>Open project</Link>
                                            ) : null}
                                            {entry.bullets.length > 0 ? (
                                                <View>
                                                    {entry.bullets.map((bullet) => {
                                                        return (
                                                            <View key={bullet.id}>
                                                                <Text>•</Text>
                                                                <Text>{bullet.text}</Text>
                                                            </View>
                                                        );
                                                    })}
                                                </View>
                                            ) : null}
                                        </View>
                                    );
                                })}
                            </View>
                        ) : null}
                    </View>
                    <View>
                        {cvData.header.photoPreview ? (
                            <Image src={cvData.header.photoBase64} />
                        ) : null}
                        {cvData.header.email ? (
                            <Link href={`mailto:${cvData.header.email}`}>
                                {cvData.header.email}
                            </Link>
                        ) : null}
                        {cvData.header.phone ? (
                            <Link href={`tel:${cvData.header.phone}`}>{cvData.header.phone}</Link>
                        ) : null}
                        {cvData.skills.length > 0 ? (
                            <View>
                                <Text>SKILLS</Text>
                                {cvData.skills.map((entry) => {
                                    return (
                                        <View key={entry.id}>
                                            <Text>•</Text>
                                            <Text>{entry.skill}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        ) : null}
                        {cvData.languages.length > 0 ? (
                            <View>
                                <Text>LANGUAGES</Text>
                                {cvData.languages.map((entry) => {
                                    return (
                                        <View key={entry.id}>
                                            <Text>•</Text>
                                            <Text>{entry.language}</Text>
                                            {entry.proficiency ? (
                                                <>
                                                    <Text>|</Text> <Text>{entry.proficiency}</Text>
                                                </>
                                            ) : null}
                                        </View>
                                    );
                                })}
                            </View>
                        ) : null}
                    </View>
                </View>
            </Page>
        </Document>
	);
}
