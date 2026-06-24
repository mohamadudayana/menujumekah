# PRD — Menuju Mekah Landing Page

## Problem Statement
Build a modern, clean, premium landing page for an Umrah travel agency named **"Menuju Mekah"** (www.menujumekah.com) in Bahasa Indonesia. Premium spiritual aesthetic (elegant maroon, clean white, silver/gray accents), smooth scroll animations, high-quality Kaaba/Mecca imagery. Static landing page only (no backend) with WhatsApp as primary CTA channel.

## User Personas
- **Calon Jamaah Umrah (Indonesia)** — looking for a trustworthy, premium Umrah package with clear pricing and contact channel.
- **Keluarga Pendaftar** — comparing packages by departure month, seats, and price.

## Core Requirements (Static)
- Indonesian language only
- Brand color: elegant maroon `#8B1A1A` on clean white
- Typography: Playfair Display (serif headings) + Outfit (sans body)
- WhatsApp CTA: `https://wa.me/6285155412377`
- Social: Instagram `@menuju.mekah`, TikTok `@menuju.mekah`
- Three packages: Agustus (Sold Out, Rp 30.9 Juta), November (Terbatas — 9 kursi, Rp 31.9 Juta, featured), Ramadhan 1448H/2027 (Tersedia — 35 kursi, Rp 37.9 Juta)
- Countdown timer to **30 Juni 2026 23:59 WIB**

## Architecture
- Stack: React 19 (CRA + craco) + TailwindCSS + Framer Motion + lucide-react
- No backend used (FastAPI/Mongo template untouched)
- Single page composition: `pages/Landing.jsx` → Navbar / Hero / Features / Packages / Countdown / Footer / FloatingWhatsApp
- Brand & content constants centralized in `src/lib/constants.js`

## What's Been Implemented (Dec 2025 — Initial MVP)
- **Navbar** with transparent-over-hero → opaque-on-scroll behavior, mobile menu, brand mark, WhatsApp CTA
- **Hero** with full-bleed Kaaba image, ornament divider, headline w/ italic accent, dual CTAs, trust stats (10+ yrs, 1.500+ jamaah, 4.9 rating), scroll-indicator
- **Features** — 6-card grid: Saudia Airlines, Hotel Bintang 3, Handling, Perlengkapan, Vaksinasi, Durasi 9 Hari (lucide icons, fade-in-up on scroll, hover lift)
- **Packages** — 3-column grid with status badges (Sold Out / Terbatas / Tersedia), prices, full inclusion list per card; November card featured + glow CTA; Agustus CTA disabled
- **Countdown** — live JS countdown to 30 Juni 2026 with days/hours/minutes/seconds card units on maroon background + ﷽ watermark, glow CTA
- **Footer** — brand block, navigation, contact (WA, website, social handles), Instagram + TikTok + WhatsApp icon buttons, copyright + Labbaik tagline
- **Floating WhatsApp** button (bottom-right with ping animation)
- Smooth scroll between sections, scroll-reveal animations via framer-motion
- 100% Indonesian copy
- Full data-testid coverage; testing_agent_v3 iteration_1: 100% pass

## Prioritized Backlog (Next)
### P1
- Replace placeholder Unsplash images with user-uploaded logo & Kaaba photos
- Testimoni section (jamaah quotes + photos) for stronger trust
- Itinerary timeline modal per package (Selengkapnya for November/Ramadhan)
- Manasik schedule / FAQ accordion

### P2
- Gallery section (foto perjalanan)
- Multi-language toggle (ID/EN/AR)
- Lead capture form → email/WA (would require backend)
- Blog / artikel persiapan umrah
- Schema.org TravelAgency + LocalBusiness for SEO
- Open Graph / favicon / metadata polish

### P3
- Admin panel to update seat counts & package status without code changes (requires backend)
- Pixel / GA4 analytics
- WhatsApp chat with prefilled message per package

## Notes
- All third-party links use `target="_blank" rel="noopener noreferrer"`
- Countdown target uses Asia/Jakarta timezone (+07:00)
- No env keys or backend integration required for current scope
