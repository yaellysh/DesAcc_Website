# DesAcc Quantitate Website

Welcome to the DesAcc Quantitate website repository. This project is built using Astro, React, and Tailwind CSS to deliver a modern, responsive web experience.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)

## Project Structure
All main files for the website are stored within the src folder (except all graphics which are saved in the public folder). Within the src folder we have
- Components
    - Contains the following React components: Footer, Navbar, VendorCard and ScrollButton
- Pages
    - Contains the main page (index.astro) and three information pages (cookies, privacy and terms)

Some notes:
-  Footer is split into two files. One of them is used for the main page (FooterTop.jsx) and contains scrolling links to headers on the page, while the other is used for the information pages. These could be consolidated into one file but I could not figure out how to get the links to work properly from another page.
- A similar deal with the Navbar (Navbar.jsx vs. NavbarMain.jsx), again an issue with gettings links to work on pages other than the index.tsx page

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/desacc-quantitate-website.git
   cd desacc-quantitate-website
   npm install
   npm run dev```

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `preview`: Previews the production build.

## Configuration

- **Astro Configuration:** See [astro.config.mjs](astro.config.mjs)
- **Tailwind Configuration:** See [tailwind.config.mjs](tailwind.config.mjs)
- **TypeScript Configuration:** See [tsconfig.json](tsconfig.json)

## Dependencies

- **Astro:** ^5.1.1
- **React:** ^19.0.0
- **Tailwind CSS:** ^3.4.17
- **React Router DOM:** ^7.1.1

## License
This project is licensed under the MIT License.
