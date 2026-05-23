# 2nd Year Physics Tracker

A mobile-friendly, responsive, offline-ready syllabus tracker tailored for PHYS 201-207. 

**Live Website:** [https://al1n3waj.github.io/2nd/](https://al1n3waj.github.io/2nd/)

## Files
- `index.html` — Cleaned dashboard interface with hardcoded reference points.
- `style.css` — Modern dark/light theme matrix featuring multi-column topic grids.
- `script.js` — Core application logic featuring progress tracking and explicit links to your global Google Drive repository.
- `manifest.json` — Web app configuration enabling mobile standalone compatibility.

## Deployment & Hosting
This project is hosted live using GitHub Pages. 

To update or host your own mirror:
1. Create a repository on GitHub.
2. Upload these files directly to the root directory.
3. Go to repository **Settings** -> **Pages**.
4. Set the build source to deploy from the `main` or `master` branch (`/root`).
5. Open your generated live GitHub Pages URL (currently active at `https://al1n3waj.github.io/2nd/`).

## Features
- **Integrated Repository Routing:** Every course card features an instant-access button directly routed to your centralized Google Drive notes and PYQs folder.
- **Responsive Multi-Column Grid:** Interactive checkboxes are organized into clean grid columns on desktop screens to minimize vertical scrolling and maximize screen space.
- **Dynamic Mastery Badges:** Tracks real-time topic progress per course, displaying a highlighted completion badge (`🏆 100% Completed`) once a module's chapters are fully cleared.
- **Syllabus Metrics Dashboard:** Provides high-level visibility of study progress across the entire academic year by displaying *Done*, *Total*, and *Progress Percentage* metrics.
- **Interactive External Lecture Indexes:** Includes direct connections to high-yield external lecture series and reference tools matching specific exam requirements.
- **Local Persistence & Security:** Saves all checkbox metrics and custom study planner parameter choices directly into your browser's local storage.
- **Data Portability:** Features full configuration backup options via JSON export to let you transfer or restore milestone progress.
