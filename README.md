# Netra Dynamics website

Company website built with the MERN stack: React (Vite) front end and an Express + MongoDB API for the contact form.

```
client/   React site (pages, components, images, brochure PDF)
server/   Express API: saves enquiries to MongoDB and emails them to the team
```

## Run it on your computer

```bash
npm run install:all     # first time only
npm run dev             # site on http://localhost:5173, API on http://localhost:5001
```

## Settings (`server/.env`)

Copy `server/.env.example` to `server/.env` and fill it in. This file is private and is never committed to git.

| Setting | What it does |
| --- | --- |
| `MONGO_URI` | Where enquiries are saved (MongoDB Atlas or local). |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Sends every enquiry to the team's inbox. For Gmail, create an **App password** at <https://myaccount.google.com/apppasswords> and use it as `SMTP_PASS`. |
| `MAIL_TO` | Who receives the notifications (default `netradynamics@gmail.com`). |
| `CORS_ORIGIN` | Only needed if the site and API are on different domains. |

An enquiry counts as received if it is saved to the database **or** emailed. If both are off, the form tells the visitor to email or WhatsApp instead. `GET /api/health` shows whether the database and email are connected.

## Email notifications (get every enquiry in your inbox)

Every time someone sends the contact form, the details (name, email, service, message) are emailed to `MAIL_TO`. You reply to that email and it goes straight to the visitor. To switch it on with Gmail:

1. Sign in to the Gmail account that will send the emails (netradynamics@gmail.com).
2. Turn on **2-Step Verification**: <https://myaccount.google.com/signinoptions/two-step-verification>.
3. Create an **App password**: <https://myaccount.google.com/apppasswords>. Name it "Netra website" and copy the 16-character code Google shows (it is shown only once).
4. Open `server/.env` and paste it after `SMTP_PASS=` (spaces in the code are fine).
5. Check it works: `npm run test:mail` (from the main project folder, or from inside `server`). A test email should arrive within a minute (check Spam the first time).
6. Restart the server. On start-up it prints `Email notifications ON`.

Use the App password only, never your normal Gmail password. If you ever lose it, delete it in your Google account and create a new one.

## Settings for the website (`client/.env.production`)

See `client/.env.example`: `VITE_SITE_URL` (your domain, for share previews and sitemap), `VITE_API_URL` (only if the API is on another domain) and `VITE_GA_ID` (Google Analytics, optional).

## Put it online

**Option A, one server (simplest):** host the whole project on any Node host (Render, Railway, a VPS).

```bash
npm run install:all
npm run build           # builds the site into client/dist
npm start               # one server serves the site and the API
```

**Option B, split:** the site on Vercel or Netlify and the API on Render or Railway.

1. API: deploy the `server` folder (build `npm install`, start `npm start`). Add the settings above, and set `CORS_ORIGIN` to your site's address.
2. Site: deploy the `client` folder. Set `VITE_API_URL` to the API's address and `VITE_SITE_URL` to your domain. `vercel.json` and `public/_redirects` already make addresses like `/services/chatbots` open directly.

## Where to edit things

| To change | Edit |
| --- | --- |
| Services, packages, prices, projects, contact numbers | `client/src/data.js` |
| Wording of each service page, FAQs, comparison | `client/src/serviceContent.js` |
| Privacy Policy and Terms | `client/src/pages/Legal.jsx` |
| Colours and layout | `client/src/styles.css` |
| Brochure | replace `client/public/Netra-Dynamics-Brochure.pdf` and the previews `client/public/images/brochure-p1..3.jpg` |
| Share-preview image | `client/public/og-image.jpg` (1200 x 630) |

## Notes

- Photos are from Unsplash (free to use, no credit required).
- Project screenshots in `client/public/projects/` are static images of the live sites; retake them if those sites change.
