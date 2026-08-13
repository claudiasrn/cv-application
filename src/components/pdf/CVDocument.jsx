import {
	Document,
	Page,
	View,
	Text,
	Image,
	Link,
	StyleSheet,
	Font,
} from "@react-pdf/renderer";
import {
	MailIcon,
	PhoneIcon,
	HomeIcon,
	GlobeIcon,
	GithubIcon,
	LinkedinIcon,
} from "./icons.jsx";
import { theme } from "../../data/theme.js";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

// react-pdf uses points (72 DPI), theme.js was written in px (96 DPI) for the
// browser preview. Convert every raw pixel value the same way before using it.
const px = (value) => value * 0.75;

// don't break words (names, etc.) across lines with a hyphen
Font.registerHyphenationCallback((word) => [word]);

import InterRegular from "../../assets/fonts/inter-v20-latin-regular.ttf";
import InterBold from "../../assets/fonts/inter-v20-latin-700.ttf";
import InterExtraBold from "../../assets/fonts/inter-v20-latin-800.ttf";
import InterItalic from "../../assets/fonts/inter-v20-latin-italic.ttf";

Font.register({
	family: "Inter",
	fonts: [
		{ src: InterRegular, fontWeight: 400 },
		{ src: InterBold, fontWeight: 700 },
		{ src: InterExtraBold, fontWeight: 800 },
		{ src: InterItalic, fontWeight: 400, fontStyle: "italic" },
	],
});

const pdfTheme = {
	colors: theme.colors,
	spacing: {
		sm: px(theme.spacing.sm),
		md: px(theme.spacing.md),
		lg: px(theme.spacing.lg),
	},
	fontSizes: {
		name: px(theme.fontSizes.name),
		sectionLabel: px(theme.fontSizes.sectionLabel),
		body: px(theme.fontSizes.body),
	},
};

const ICON_SIZE = px(16);
const PHOTO_SIZE = px(130);
const BORDER_THIN = px(1);
const BORDER_THICK = px(3);

const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
		backgroundColor: pdfTheme.colors.background,
		paddingLeft: pdfTheme.spacing.lg,
		fontFamily: "Inter",
	},
	leftSide: {
		flex: 0,
		flexShrink: 1,
		flexGrow: 1,
		paddingRight: pdfTheme.spacing.lg,
		borderLeftWidth: BORDER_THIN,
		borderLeftColor: pdfTheme.colors.accent,
		borderLeftStyle: "solid",
	},
	name: {
		fontSize: pdfTheme.fontSizes.name,
		textAlign: "right",
		marginBottom: pdfTheme.spacing.sm,
		color: pdfTheme.colors.text,
		fontWeight: 700,
	},
	subtitle: {
		fontSize: pdfTheme.fontSizes.body,
		textAlign: "right",
		color: pdfTheme.colors.text,
		fontStyle: "italic",
	},
	marginTopLg: {
		marginTop: pdfTheme.spacing.lg,
	},
	sectionBlock: {
		flexDirection: "column",
		marginTop: pdfTheme.spacing.md,
		marginBottom: pdfTheme.spacing.lg,
	},
	sectionHeading: {
		fontSize: pdfTheme.fontSizes.sectionLabel,
		marginBottom: pdfTheme.spacing.md,
		marginLeft: pdfTheme.spacing.sm,
		letterSpacing: 2,
		color: pdfTheme.colors.accent,
		fontWeight: 800,
	},
	entryRow: {
		flexDirection: "row",
		gap: pdfTheme.spacing.lg,
	},
	entryRowSpaced: {
		flexDirection: "row",
		gap: pdfTheme.spacing.lg,
		marginTop: pdfTheme.spacing.lg,
	},
	datesText: {
		borderLeftWidth: BORDER_THICK,
		borderLeftColor: pdfTheme.colors.accent,
		borderLeftStyle: "solid",
		paddingLeft: pdfTheme.spacing.sm,
		paddingRight: pdfTheme.spacing.lg,
		fontSize: pdfTheme.fontSizes.sectionLabel,
		color: pdfTheme.colors.text,
	},
	entryTitle: {
		fontSize: pdfTheme.fontSizes.sectionLabel,
		color: pdfTheme.colors.text,
		fontWeight: 700,
		marginLeft: pdfTheme.spacing.sm,
		marginBottom: pdfTheme.spacing.sm,
	},
	subtitleRow: {
		flexDirection: "row",
		gap: pdfTheme.spacing.sm,
		fontSize: pdfTheme.fontSizes.sectionLabel,
		color: pdfTheme.colors.text,
		marginLeft: pdfTheme.spacing.sm,
		marginBottom: pdfTheme.spacing.sm,
	},
	subtitleBold: {
		fontWeight: 700,
	},
	bulletsList: {
		flexDirection: "column",
		gap: pdfTheme.spacing.sm,
	},
	bulletRow: {
		flexDirection: "row",
		gap: pdfTheme.spacing.sm,
		fontSize: pdfTheme.fontSizes.body,
		color: pdfTheme.colors.textMuted,
	},
	projectLink: {
		textDecoration: "none",
		color: pdfTheme.colors.accent,
		fontSize: pdfTheme.fontSizes.sectionLabel,
		marginLeft: pdfTheme.spacing.sm,
		marginBottom: pdfTheme.spacing.sm,
	},
	projectBullets: {
		flexDirection: "column",
		gap: pdfTheme.spacing.sm,
		marginLeft: pdfTheme.spacing.sm,
	},
	rightSide: {
		flex: "auto",
		flexGrow: 0,
		flexShrink: 0,
		backgroundColor: pdfTheme.colors.accent,
		flexDirection: "column",
		paddingHorizontal: pdfTheme.spacing.md,
		gap: pdfTheme.spacing.sm,
	},
	photo: {
		width: PHOTO_SIZE,
		height: PHOTO_SIZE,
		borderRadius: PHOTO_SIZE / 2,
		objectFit: "cover",
		marginBottom: pdfTheme.spacing.md,
		marginHorizontal: "auto",
	},
	contactRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: pdfTheme.spacing.sm,
	},
	link: {
		textDecoration: "none",
		color: pdfTheme.colors.background,
		fontSize: pdfTheme.fontSizes.body,
		marginLeft: pdfTheme.spacing.sm,
		fontWeight: "normal",
	},
	addressText: {
		color: pdfTheme.colors.background,
		fontSize: pdfTheme.fontSizes.body,
		marginLeft: pdfTheme.spacing.sm,
		fontWeight: "normal",
	},
	sidebarSection: {
		flexDirection: "column",
		alignItems: "flex-start",
		marginTop: pdfTheme.spacing.lg,
	},
	sidebarHeading: {
		fontSize: pdfTheme.fontSizes.sectionLabel,
		letterSpacing: 2,
		color: pdfTheme.colors.background,
		fontWeight: 800,
		marginBottom: pdfTheme.spacing.md,
	},
	skillRow: {
		flexDirection: "row",
		gap: pdfTheme.spacing.sm,
		marginLeft: pdfTheme.spacing.sm,
		color: pdfTheme.colors.background,
		fontSize: pdfTheme.fontSizes.body,
		fontWeight: "normal",
	},
});

export function CVDocument({ cvData }) {
	// --- figure out which left-side element is actually first ---
	const hasName = !!cvData.header.name;
	const hasSubtitle = !!cvData.header.subtitle;
	const hasExperience = cvData.experience.length > 0;
	const hasEducation = cvData.education.length > 0;
	const hasProjects = cvData.projects.length > 0;

	const subtitleIsFirst = !hasName && hasSubtitle;
	const experienceIsFirst = !hasName && !hasSubtitle && hasExperience;
	const educationIsFirst =
		!hasName && !hasSubtitle && !hasExperience && hasEducation;
	const projectsIsFirst =
		!hasName && !hasSubtitle && !hasExperience && !hasEducation && hasProjects;

	// --- figure out which right-side element is actually first ---
	const hasPhoto = !!cvData.header.photoBase64;
	const hasEmail = !!cvData.header.email;
	const hasPhone = !!cvData.header.phone;
	const hasAddress = !!cvData.header.address;
	const hasGithub = !!cvData.header.github;
	const hasLinkedin = !!cvData.header.linkedin;
	const hasPortfolio = !!cvData.header.portfolio;

	const emailIsFirst = !hasPhoto && hasEmail;
	const phoneIsFirst = !hasPhoto && !hasEmail && hasPhone;
	const addressIsFirst = !hasPhoto && !hasEmail && !hasPhone && hasAddress;
	const githubIsFirst =
		!hasPhoto && !hasEmail && !hasPhone && !hasAddress && hasGithub;
	const linkedinIsFirst =
		!hasPhoto &&
		!hasEmail &&
		!hasPhone &&
		!hasAddress &&
		!hasGithub &&
		hasLinkedin;
	const portfolioIsFirst =
		!hasPhoto &&
		!hasEmail &&
		!hasPhone &&
		!hasAddress &&
		!hasGithub &&
		!hasLinkedin &&
		hasPortfolio;

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.leftSide}>
					{cvData.header.name ? (
						<Text style={[styles.name, styles.marginTopLg]}>
							{cvData.header.name}
						</Text>
					) : null}
					{cvData.header.subtitle ? (
						<Text
							style={
								subtitleIsFirst
									? [styles.subtitle, styles.marginTopLg]
									: styles.subtitle
							}
						>
							{cvData.header.subtitle}
						</Text>
					) : null}
					{hasExperience ? (
						<View
							style={
								experienceIsFirst
									? [styles.sectionBlock, styles.marginTopLg]
									: styles.sectionBlock
							}
						>
							<Text style={styles.sectionHeading}>WORK EXPERIENCE</Text>
							{cvData.experience.map((entry, index) => {
								return (
									<View
										key={entry.id}
										style={index > 0 ? styles.entryRowSpaced : styles.entryRow}
									>
										{entry.startDate || entry.endDate ? (
											<View>
												<Text style={styles.datesText}>{entry.startDate}</Text>
												<Text style={styles.datesText}>{entry.endDate}</Text>
											</View>
										) : null}
										<View>
											{entry.title ? (
												<Text style={styles.entryTitle}>{entry.title}</Text>
											) : null}
											<View style={styles.subtitleRow}>
												{entry.company ? (
													<Text style={styles.subtitleBold}>
														{entry.company}
													</Text>
												) : null}
												{entry.company && entry.location ? (
													<Text> | </Text>
												) : null}
												{entry.location ? <Text>{entry.location}</Text> : null}
											</View>
											{entry.bullets.length > 0 ? (
												<View style={styles.bulletsList}>
													{entry.bullets.map((bullet) => {
														return (
															<View style={styles.bulletRow} key={bullet.id}>
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
					{hasEducation ? (
						<View
							style={
								educationIsFirst
									? [styles.sectionBlock, styles.marginTopLg]
									: styles.sectionBlock
							}
						>
							<Text style={styles.sectionHeading}>EDUCATION</Text>
							{cvData.education.map((entry, index) => {
								return (
									<View
										key={entry.id}
										style={index > 0 ? styles.entryRowSpaced : styles.entryRow}
									>
										{entry.startDate || entry.endDate ? (
											<View>
												<Text style={styles.datesText}>{entry.startDate}</Text>
												<Text style={styles.datesText}>{entry.endDate}</Text>
											</View>
										) : null}
										<View>
											{entry.degree ? (
												<Text style={styles.entryTitle}>{entry.degree}</Text>
											) : null}
											<View style={styles.subtitleRow}>
												{entry.institution ? (
													<Text style={styles.subtitleBold}>
														{entry.institution}
													</Text>
												) : null}
												{entry.institution && entry.location ? (
													<Text> | </Text>
												) : null}
												{entry.location ? <Text>{entry.location}</Text> : null}
											</View>
											{entry.bullets.length > 0 ? (
												<View style={styles.bulletsList}>
													{entry.bullets.map((bullet) => {
														return (
															<View style={styles.bulletRow} key={bullet.id}>
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
					{hasProjects ? (
						<View
							style={
								projectsIsFirst
									? [styles.sectionBlock, styles.marginTopLg]
									: styles.sectionBlock
							}
						>
							<Text style={styles.sectionHeading}>PROJECTS</Text>
							{cvData.projects.map((entry, index) => {
								return (
									<View
										key={entry.id}
										style={
											index > 0 ? { marginTop: pdfTheme.spacing.lg } : null
										}
									>
										{entry.name ? (
											<Text style={styles.entryTitle}>{entry.name}</Text>
										) : null}
										{entry.link ? (
											<Link href={entry.link} style={styles.projectLink}>
												Open project
											</Link>
										) : null}
										{entry.bullets.length > 0 ? (
											<View style={styles.projectBullets}>
												{entry.bullets.map((bullet) => {
													return (
														<View style={styles.bulletRow} key={bullet.id}>
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
				<View style={styles.rightSide}>
					{hasPhoto ? (
						<Image
							src={cvData.header.photoBase64}
							style={[styles.photo, styles.marginTopLg]}
							wrap={false}
						/>
					) : null}
					{hasEmail ? (
						<View
							style={
								emailIsFirst
									? [styles.contactRow, styles.marginTopLg]
									: styles.contactRow
							}
						>
							<MailIcon size={ICON_SIZE} color={pdfTheme.colors.background} />
							<Link href={`mailto:${cvData.header.email}`} style={styles.link}>
								{cvData.header.email}
							</Link>
						</View>
					) : null}
					{hasPhone ? (
						<View
							style={
								phoneIsFirst
									? [styles.contactRow, styles.marginTopLg]
									: styles.contactRow
							}
						>
							<PhoneIcon size={ICON_SIZE} color={pdfTheme.colors.background} />
							<Link href={`tel:${cvData.header.phone}`} style={styles.link}>
								{cvData.header.phone}
							</Link>
						</View>
					) : null}
					{hasAddress ? (
						<View
							style={
								addressIsFirst
									? [styles.contactRow, styles.marginTopLg]
									: styles.contactRow
							}
						>
							<HomeIcon size={ICON_SIZE} color={pdfTheme.colors.background} />
							<Text style={styles.addressText}>{cvData.header.address}</Text>
						</View>
					) : null}
					{hasGithub ? (
						<View
							style={
								githubIsFirst
									? [styles.contactRow, styles.marginTopLg]
									: styles.contactRow
							}
						>
							<GithubIcon size={ICON_SIZE} color={pdfTheme.colors.background} />
							<Link href={cvData.header.github} style={styles.link}>
								Click to open GitHub
							</Link>
						</View>
					) : null}
					{hasLinkedin ? (
						<View
							style={
								linkedinIsFirst
									? [styles.contactRow, styles.marginTopLg]
									: styles.contactRow
							}
						>
							<LinkedinIcon
								size={ICON_SIZE}
								color={pdfTheme.colors.background}
							/>
							<Link href={cvData.header.linkedin} style={styles.link}>
								Click to open LinkedIn
							</Link>
						</View>
					) : null}
					{hasPortfolio ? (
						<View
							style={
								portfolioIsFirst
									? [styles.contactRow, styles.marginTopLg]
									: styles.contactRow
							}
						>
							<GlobeIcon size={ICON_SIZE} color={pdfTheme.colors.background} />
							<Link href={cvData.header.portfolio} style={styles.link}>
								Click to open portfolio
							</Link>
						</View>
					) : null}
					{cvData.skills.length > 0 ? (
						<View style={styles.sidebarSection}>
							<Text style={styles.sidebarHeading}>SKILLS</Text>
							{cvData.skills.map((entry) => {
								return (
									<View style={styles.skillRow} key={entry.id}>
										<Text>•</Text>
										<Text>{entry.skill}</Text>
									</View>
								);
							})}
						</View>
					) : null}
					{cvData.languages.length > 0 ? (
						<View style={styles.sidebarSection}>
							<Text style={styles.sidebarHeading}>LANGUAGES</Text>
							{cvData.languages.map((entry) => {
								return (
									<View style={styles.skillRow} key={entry.id}>
										<Text>•</Text>
										<Text>{entry.language}</Text>
										{entry.proficiency ? (
											<Text> | {entry.proficiency}</Text>
										) : null}
									</View>
								);
							})}
						</View>
					) : null}
				</View>
			</Page>
		</Document>
	);
}
