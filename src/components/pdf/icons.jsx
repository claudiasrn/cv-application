import { Svg, Path, Rect, Circle } from "@react-pdf/renderer";

export function MailIcon({ size = 16, color = "#000" }) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			<Rect
				x="2"
				y="4"
				width="20"
				height="16"
				rx="2"
				stroke={color}
				strokeWidth={2}
				fill="none"
			/>
			<Path
				d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				stroke={color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</Svg>
	);
}

export function PhoneIcon({ size = 16, color = "#000" }) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			<Path
				d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
				stroke={color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</Svg>
	);
}

export function HomeIcon({ size = 16, color = "#000" }) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			<Path
				d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
				stroke={color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<Path
				d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				stroke={color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</Svg>
	);
}

export function GlobeIcon({ size = 16, color = "#000" }) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			<Circle
				cx="12"
				cy="12"
				r="10"
				stroke={color}
				strokeWidth={2}
				fill="none"
			/>
			<Path
				d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
				stroke={color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<Path
				d="M2 12h20"
				stroke={color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</Svg>
	);
}

export function GithubIcon({ size = 16, color = "#000" }) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			<Path
				d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
				fill={color}
			/>
		</Svg>
	);
}

export function LinkedinIcon({ size = 16, color = "#000" }) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			<Path
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				fill={color}
			/>
		</Svg>
	);
}
