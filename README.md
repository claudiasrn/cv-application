# CV Builder

A small React application that lets you build a CV/résumé section by section and export it as a polished PDF — built as my the first React project.

## Features

- **Step-by-step form flow** — fill in your info across six sections (Personal Info, Work Experience, Education, Projects, Skills, Languages), navigating via a section menu that locks upcoming sections until the previous one is submitted
- **Live preview** — see your CV update in real time as you type, styled to match the final exported document
- **Photo upload** — drag-and-drop or click to upload a profile photo, with live preview and the ability to remove/replace it
- **Repeatable entries** — add or remove as many jobs, degrees, projects, or languages as you need, each with its own bullet points
- **PDF export** — download a polished, pixel-matched PDF of your finished CV, built with [`@react-pdf/renderer`](https://react-pdf.org/).
- **Reset** — clear the form and start over.
## Tech stack

- **React** + **Vite**
- **@react-pdf/renderer** for PDF generation, with a self-hosted Inter font registered for consistent typography between the preview and the exported PDF
- **lucide-react** and **react-icons** for icons
- Plain CSS with custom properties for theming

## Project structure

```
src/
├── assets/
│   └── fonts/           # Self-hosted Inter font files (used by index.css and the PDF renderer)
├── components/
│   ├── forms/            # One form component per CV section
│   ├── pdf/                # react-pdf document + icon components
│   ├── preview/             # Live on-screen CV preview
│   ├── App.jsx
│   ├── EntryCard.jsx        # Reusable card for repeatable entries
│   └── SectionMenu.jsx
├── data/
│   ├── initialData.js      # Empty starting shape for the CV data
│   └── theme.js             # Shared color/spacing/font constants
└── styles/
    ├── App.css
    └── CVPreview.css
```
