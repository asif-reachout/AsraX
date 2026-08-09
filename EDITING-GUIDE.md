# Editing the AsraX Media Website

A guide for changing the website's text, images, and links **without being a developer**.

You do not need to install anything. Everything here is done in your web browser on GitHub.

---

## How the website works (30 seconds)

The website's text lives in files on GitHub. When you change a file and save it, GitHub automatically rebuilds the site and puts it live on asraxmedia.com. This takes about **2–4 minutes**.

```
You edit a file on GitHub  →  GitHub rebuilds the site  →  asraxmedia.com updates
```

Nothing you do here can break the live site permanently. Every change is saved in history and can be undone.

---

## Making your first edit

1. Go to **https://github.com/asif-reachout/AsraX**
2. Click the file you want to change (use the table below to find it)
3. Click the **pencil icon** ✏️ at the top right of the file
4. Change the text between the quote marks
5. Scroll down, type a short note like `Updated phone number`, click **Commit changes**
6. Wait 2–4 minutes, then check asraxmedia.com

### Checking that your change went live

After saving, click the **Actions** tab at the top of the GitHub page. You will see your change listed with a spinning yellow dot 🟡. When it turns into a green tick ✅ the site is updated. A red ✗ means something went wrong — see [If something breaks](#if-something-breaks).

---

## The golden rules

These four rules prevent 99% of problems.

**1. Only change words inside quote marks.**

```
title: "Website Development"
        ↑___ change this ___↑
```

Do not change `title:` or delete the quote marks or the comma.

**2. If your text contains an apostrophe, watch out.**

This breaks the site:
```
body: "You're getting more leads"      ← fine, double quotes outside
```
This also breaks the site:
```
body: 'You're getting more leads'      ← BROKEN, apostrophe ends the text early
```
Rule of thumb: if the line starts with a `"` double quote, apostrophes are safe. If it starts with a `'` single quote, avoid apostrophes or ask a developer.

**3. Never delete brackets, commas, or angle brackets.**

Things like `{`, `}`, `[`, `]`, `<`, `>`, `/>` are the website's plumbing. Leave them exactly as they are.

**4. Change one thing at a time.**

Make one edit, save, check the site. If something looks wrong you know exactly what caused it.

---

## Where everything lives

### Page text

| What you want to change | File to open |
|---|---|
| Home page (hero, services, reviews, standards, process) | `src/routes/index.tsx` |
| About page (story, team bios, FAQ) | `src/routes/about.tsx` |
| Careers page (culture, job openings) | `src/routes/careers.tsx` |
| Contact page (form fields, dropdown options) | `src/routes/contact.tsx` |
| Case studies list page | `src/routes/case-studies.tsx` |
| Individual case study content | `src/routes/case-studies.$slug.tsx` |
| Blog page | `src/routes/blog.tsx` |
| Services overview page | `src/routes/services.index.tsx` |
| Website Development service page | `src/routes/services.website-development.tsx` |
| Content Marketing service page | `src/routes/services.content.tsx` |
| SEO / GEO / AEO service page | `src/routes/services.seo.tsx` |
| Paid Marketing service page | `src/routes/services.google-ads.tsx` |
| Social Media service page | `src/routes/services.social-media.tsx` |
| Performance Reporting service page | `src/routes/services.reporting.tsx` |

### Site-wide things

| What you want to change | File to open |
|---|---|
| Top menu (nav links) | `src/components/site/SiteHeader.tsx` |
| Footer (links, address, email, phone, social icons) | `src/components/site/SiteFooter.tsx` |
| The red "Ready to grow" band at the bottom of pages | `src/components/site/CTA.tsx` |

### Images

All images live in the `public/img/` folder on GitHub.

---

## Common jobs, step by step

### Change the phone number, email, or address

Open `src/components/site/SiteFooter.tsx`. Look for the block with `Mail`, `Phone`, and `MapPin`. You will see:

```
hello@asraxmedia.com
+44 7986 952432
78 Whalebone Grove,
Romford, RM6 8BL
```

Each appears twice — once as the visible text, once inside the link (`mailto:` or `wa.me`). **Change both.** For WhatsApp the number has no spaces, plus, or zeros: `+44 7986 952432` becomes `447986952432`.

### Add the Facebook and Instagram links

Right now these icons go nowhere. Open `src/components/site/SiteFooter.tsx` and find:

```
<SocialIcon href="#" label="Facebook">
<SocialIcon href="#" label="Instagram">
```

Replace each `#` with the full page address, keeping the quote marks:

```
<SocialIcon href="https://www.facebook.com/yourpage" label="Facebook">
```

### Change any headline or paragraph

Use the table above to find the page, then use your browser's **Ctrl+F** (Cmd+F on Mac) to search for a few words of the current text. Change the words between the quote marks.

### Add a job opening to the Careers page

Open `src/routes/careers.tsx` and find this line near the top:

```
const openJobs: { title: string; type: string; desc: string; duties: string[]; requirements: string[] }[] = [];
```

Replace it with this, filling in your own text:

```
const openJobs = [
  {
    title: "Marketing Intern",
    type: "Internship · Remote",
    desc: "Hands-on experience running real client campaigns.",
    duties: [
      "Support the PPC team on live accounts.",
      "Help with reporting and campaign checks."
    ],
    requirements: [
      "Curious, organised, and happy to learn fast.",
      "Basic understanding of digital marketing."
    ]
  }
];
```

To add a second job, copy everything from `{` to `},` and paste it before the closing `]`. To take all jobs down again, put the original empty line back — the page then shows "No open roles right now" automatically.

### Add a team member

Open `src/routes/about.tsx` and find `const team = [`. Copy one existing block and change the details:

```
  {
    name: "New Person",
    role: "Their Job Title",
    img: team1,
    bio: "Two or three sentences about them."
  },
```

For a new photo you need a developer's help — team photos are stored differently from other images.

### Add or edit a case study

Open `src/routes/case-studies.$slug.tsx`. Each case study is one block starting with a line like `"montessori-toys": {`.

To edit one, change the text inside the quote marks. The parts are:

| Field | What it is |
|---|---|
| `clientName` | Client's name |
| `industry`, `services`, `duration` | The grey strip near the top |
| `headline` | The big result line |
| `challengeLeft` | Bold summary of the problem |
| `challengeParagraphs` | The problem, in full |
| `approach` | What you did (one line per bullet) |
| `resultsText` | The results explanation |
| `stats` | The three big numbers |
| `testimonialQuote` / `Author` / `Role` | Client quote (leave `""` empty for none) |
| `proof` | The dashboard screenshots |

**After adding a brand new case study** you must also add it in two other places or it will not appear: `src/routes/case-studies.tsx` (the list page) and `vite.config.ts` (so the page gets built). Ask a developer for this part — it is two lines but easy to get wrong.

### Change a picture

1. Go to the `public/img/` folder on GitHub
2. Click **Add file → Upload files**
3. Give your new image **exactly the same filename** as the one you are replacing (e.g. `team-office.jpg`)
4. Commit

Same name means every page using that image updates at once. Keep images under about 500 KB or pages get slow.

Case study screenshots live in `public/img/case/`.

### Change the options in the contact form dropdown

Open `src/routes/contact.tsx` and find the lines that look like:

```
<option>Build or rebuild my website</option>
```

Change the text between `<option>` and `</option>`. To add one, copy a whole line and paste it below.

---

## What you should NOT change yourself

Ask a developer for these:

- Adding a completely new page
- Changing the menu structure or page addresses (URLs)
- Anything in `src/components/ui/` — these are shared building blocks
- Anything in the `php-api` folder — this handles form submissions
- The blog: the page exists but has no article system yet
- Colours, fonts, and spacing (`src/styles.css`)
- The form emails you receive — those come from files that are not on GitHub

---

## If something breaks

**Don't panic. Nothing is lost.** Every version is saved.

### The site looks broken or the Actions tab shows a red ✗

This means a typo — usually a missing quote mark, comma, or bracket. To undo:

1. Go to the repository's main page
2. Click **Commits** (near the top, shows a clock icon and a number)
3. Find your change in the list and click it
4. Click the **⋯** button at the top right and choose **Revert**
5. Confirm

The site goes back to how it was, and rebuilds itself in a few minutes.

### The site didn't change after 5 minutes

- Check the **Actions** tab — is it still yellow 🟡, or red ✗?
- Try a hard refresh in your browser: **Ctrl+Shift+R** (Cmd+Shift+R on Mac)
- Check you edited the file on the **main** branch, not a different one

---

## Quick reference

| | |
|---|---|
| Repository | https://github.com/asif-reachout/AsraX |
| Live site | https://asraxmedia.com |
| Time for a change to go live | 2–4 minutes |
| Where to check status | the **Actions** tab on GitHub |
| How to undo | **Commits** → your change → **⋯** → **Revert** |
