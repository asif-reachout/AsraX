# Project Completion Report: AsraX Media Website & PHP API Integration

**Date**: June 22, 2026  
**Project**: AsraX Media Production Website Redeployment  
**Status**: Successfully Completed & Deployed Live  

This document serves as the formal summary of all modifications, system upgrades, and API configurations implemented during the project lifecycle.

---

## 1. Executive Summary

The AsraX Media digital platform has been fully redesigned and upgraded to a secure, premium growth platform. All external form providers (Web3Forms) and intrusive captchas (hCaptcha) have been removed and replaced with a custom-built, secure PHP API that runs directly on the Hostinger servers under a dedicated subdomain. 

The front-end has been fully rebuilt using **React, TypeScript, and Tailwind CSS v4**, featuring static page prerendering (SSG) for ultra-fast load times and optimal SEO search indexing.

---

## 2. Front-End Enhancements & UI Redesign

- **Premium Design System**: Implemented a cohesive, high-impact aesthetic utilizing brand-aligned colors: Primary Red (`#C0392B`), Charcoal Dark (`#1A1A1A`), and Neutral Light (`#F4F4F5`).
- **Interactive Background Video**: Upgraded the homepage Hero background from a static image to a looping, high-definition **NASA Earth rotation video (`earth.mp4`)**. Styled with a translucent dark gradient overlay and custom grid alignment to ensure all text remains highly readable.
- **Active Navigation Highlights**: Updated the navigation bar to dynamically highlight the current active page with a translucent brand-red pill (`bg-brand/10 text-brand`). The parent "Services" item automatically highlights when navigating any service-specific subpage.
- **Mobile Side-Drawer Navigation**: Replaced the default dropdown menu with a native-style, slide-out drawer panel (sliding from right to left).
- **Background Scroll Locking**: Integrated React state hooks to lock the background body scroll when the mobile drawer is open, preventing page shifts and layout scroll glitches.
- **Collapsible Mobile Accordion**: Grouped services under an interactive accordion menu with smooth expanding transitions and rotating chevrons to keep the mobile drawer clean.
- **SEO & Social Performance**: Configured static route mappings, page titles, and meta descriptions to improve Google indexing and visibility.

---

## 3. Backend PHP API & Integrations

A custom-built API has been deployed at the subdomain **`api.asraxmedia.com`** mapped to a secure path on the Hostinger server.

### Strategy Call Form (`contact.php`)
- Captures lead detail fields (Name, Email, Company, Website, Goal, Budget, and Business details).
- Sends instant notifications using the **PHPMailer** library using SMTP over Hostinger mail client servers (`hello@asraxmedia.com`).
- Delivers a professionally styled, responsive HTML email template directly to the sales inbox.

### Careers Application Form (`apply.php`)
- Handles multipart/form-data submissions from applicants.
- Custom resume parser validates file types (`.pdf`, `.docx`), enforces a strict 5MB size limit, and verifies actual file mime types using PHP's `finfo` magic-byte verification (protecting against spoofed file extensions).
- **Secure File Storage**: Resumes are automatically renamed and uploaded to a private directory (`/home/u150244648/uploads/`) **outside of the web public root** (`public_html`). Resumes are not accessible via web URLs, preventing data leaks.
- Resumes are securely sent as email attachments to `hello@asraxmedia.com`.

---

## 4. Security & Anti-Spam Measures

To eliminate spam without degrading user experience with annoying image-selection challenges, we built double-layered silent protection:

1. **Honeypot Protection**: Hidden input fields (`website_confirm`) are embedded in the forms. Since bots fill out all input fields automatically while humans cannot see them, any submissions containing data in these fields are silently discarded (succeeding instantly for the bot but doing nothing on the backend).
2. **Time-based Verification**: The form logs the Unix timestamp of when the page was loaded (`form_loaded_at`). If a submission occurs in under 3 seconds, it is rejected as a machine bot.
3. **Apache Guard Rules (`.htaccess`)**:
   - Egress paths are secured. The `.htaccess` file in `/api/` forces HTTPS and blocks access to any files except `apply.php` and `contact.php`.
   - The `.htaccess` file in the private `/uploads/` directory strictly blocks all direct HTTP access, returning a `403 Forbidden` response for all public traffic.

---

## 5. Deployment Directory Map (Hostinger Server)

The server directories have been cleaned and structured to separate public assets from private server-side processing:

```
/home/u150244648/
├── 📁 domains/asraxmedia.com/public_html/   ← React Static App (Auto-deployed via GitHub Actions)
│   ├── 📁 api/                              ← api.asraxmedia.com subdomain root
│   │   ├── apply.php                        ← Careers handler
│   │   ├── contact.php                      ← Contact handler
│   │   └── .htaccess                        ← Routing guards & file match whitelist
│   ├── 📁 assets/                           ← Compiled React styles & scripts
│   └── index.html                           ← App entry point
│
├── 📁 uploads/                              ← Secure resume folder (Below webroot)
│   └── .htaccess                            ← Enforces "Deny from all" public block
│
├── 📁 vendor/                               ← PHPMailer libraries (Installed via Composer)
└── composer.json                            ← Composer dependency config
```

---

## 6. Live Testing & Verification

- **API Subdomain Resolution**: Verified that `https://api.asraxmedia.com/` points correctly to the backend and responds to requests under SSL protection.
- **SMTP Functionality**: Confirmed that emails generated by both the contact form and careers form are successfully delivered using the Hostinger SMTP settings.
- **Auto-Deployment Pipeline**: Verified that all frontend visual updates trigger and deploy automatically within minutes of a code push to the `main` branch.
