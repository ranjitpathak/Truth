# TRUTH

A free, universal knowledge platform for exploring religions, philosophies, spiritual traditions, scriptures, history, and scholarship.

## Run locally on Fedora

Install Git and a maintained Node.js LTS release with npm. Then, from this folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Stop the server with `Ctrl+C`.

To make a production build locally:

```bash
npm run build
npm run preview
```

## GitHub Pages

This is a static site; it needs no always-on server or database. A GitHub Actions workflow builds and publishes the site when changes are pushed to `main` or `master`. For a repository site, the Vite configuration derives the `/repository-name/` base path from GitHub Actions. For a user or organization site (`*.github.io`), it uses `/`.

After creating a GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, then push the chosen default branch. No repository or deployment has been created by this setup.
