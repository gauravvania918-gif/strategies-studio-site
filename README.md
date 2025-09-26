# Strategies Studio – HR Consulting (GitHub Pages)

## How to deploy (5 minutes)
1) Create a **public** repo on GitHub (e.g., `strategiesstudio-site`).
2) Upload all files from this folder to the repo **root**.
3) Repo **Settings → Pages** → `Deploy from branch` (Branch: `main`, Folder: `/root`).
4) Set **Custom domain** to `strategiesstudio.com` and then enable **Enforce HTTPS** (after DNS is propagated).
5) Done!

## DNS (GoDaddy)
- A `@` → 185.199.108.153
- A `@` → 185.199.109.153
- A `@` → 185.199.110.153
- A `@` → 185.199.111.153
- CNAME `www` → `gauravvania918.github.io`
- (Leave MX/TXT/SRV records as-is for email.)

## Editing
- Update text in `index.html` (services, about, contact).
- Style tweaks in `style.css`.
- The `CNAME` file keeps the custom domain `strategiesstudio.com` set.
