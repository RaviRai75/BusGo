# BusGo

A bus-travel landing page built with React, Vite and Tailwind CSS. This project demonstrates component-based UI development, responsive layouts and animated travel content.

## Features

- Rotating hero images with origin, destination and travel-date inputs
- Popular-route cards with sample fares, travel times and offers
- Separate header, about, features, statistics, testimonials and call-to-action components
- Responsive grid layouts and hover transitions

## Technology

React 19, JavaScript, Vite 7, Tailwind CSS 3, Flowbite React and Lucide React.

## Run locally

Use a Node.js version supported by Vite 7 (Node.js 20.19+ or 22.12+).

```bash
git clone https://github.com/RaviRai75/BusGo.git
cd BusGo
npm ci
npm run dev
```

Open the local URL printed by Vite.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production frontend in `dist/` |
| `npm run preview` | Preview the built frontend |
| `npm run lint` | Run ESLint |

## Structure

- `src/App.jsx`: application composition
- `src/Components/`: reusable page sections
- `src/index.css`: global styling
- `public/`: static assets

## Project scope

This repository is a frontend demonstration. Route information, fares, offers and testimonials are sample content. The search form and booking buttons are not connected to a booking API, payment gateway or live seat inventory.

## Author

[Ravi Ranjan Rai](https://github.com/RaviRai75) — Full Stack and React Native Developer.
