# Menuju Mekah — Landing Page

Landing page premium untuk **Menuju Mekah** — biro perjalanan Umrah terpercaya. Website resmi: [menujumekah.my.id](https://menujumekah.my.id)

> *"Melangkah Pasti Menuju Tanah Suci Bersama Menuju Mekah"*

![Bahasa](https://img.shields.io/badge/bahasa-Indonesia-red) ![Status](https://img.shields.io/badge/status-Live-success) ![Stack](https://img.shields.io/badge/stack-React%2019%20%2B%20Tailwind-blue)

---

## Tentang

Landing page modern bertema spiritual untuk biro travel Umrah **Menuju Mekah**. Fokus utama: konversi WhatsApp dari calon jamaah dengan tampilan premium, foto otentik perjalanan, dan urgency timer untuk paket terbatas.

### Fitur Utama

- **Hero Section** — Foto Kaaba & jamaah Menuju Mekah dengan headline elegan
- **6 Fasilitas Premium** — Saudia Airlines, Hotel Bintang 3, Handling, Perlengkapan, Vaksinasi, Durasi
- **3 Paket Umrah** — Agustus (Sold Out), November (Terbatas — 9 kursi), Ramadhan 1448 H (Tersedia — 35 kursi, 12 hari)
- **Countdown Timer** — Hitung mundur ke 30 Juni 2026 untuk urgency paket November
- **Pesan WhatsApp Otomatis Per Paket** — Tim Anda langsung tahu paket mana yang ditanyakan calon jamaah
- **Floating WhatsApp Button** — Akses cepat di setiap halaman
- **Responsive Design** — Mobile-first, animasi halus, micro-interactions

---

## Tech Stack

| Layer        | Tech                                                          |
|--------------|---------------------------------------------------------------|
| Framework    | React 19 (CRA + craco)                                        |
| Styling      | TailwindCSS 3, custom CSS variables, Playfair Display + Outfit |
| Animations   | Framer Motion                                                 |
| Icons        | lucide-react                                                  |
| UI Library   | shadcn/ui (Radix UI primitives)                               |
| Routing      | react-router-dom 7                                            |

> Folder `backend/` berisi template FastAPI + MongoDB dari Emergent — **tidak digunakan** karena landing page statis. Aman untuk dihapus jika tidak diperlukan.

---

## Struktur Project

```
/app/
├── frontend/
│   ├── public/
│   │   └── brand/                  # Logo Menuju Mekah (gold, black, transparent)
│   │       ├── logo-black-transparent.png
│   │       ├── logo-gold-transparent.png
│   │       └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Packages.jsx
│   │   │   ├── Countdown.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FloatingWhatsApp.jsx
│   │   │   └── ui/                  # shadcn components
│   │   ├── pages/
│   │   │   └── Landing.jsx
│   │   ├── lib/
│   │   │   └── constants.js         # Brand, packages, pesan WhatsApp
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env                         # REACT_APP_BACKEND_URL (unused)
├── backend/                         # FastAPI template (unused)
├── memory/
│   └── PRD.md                       # Product requirements doc
└── README.md
```

---

## Setup Lokal

### Prerequisite

- Node.js 18+ 
- Yarn (bukan npm)

### Install & Run

```bash
cd frontend
yarn install
yarn start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
cd frontend
yarn build
# Output: frontend/build/
```

Folder `frontend/build/` siap di-deploy ke static hosting (Vercel, Netlify, Cloudflare Pages, dll.)

---

## Kustomisasi Cepat

Semua konten dinamis ada di **`frontend/src/lib/constants.js`**:

### Ubah Nomor WhatsApp

```js
const WA_BASE_NUMBER = "6285155412377";   // ← ganti di sini
```

### Ubah Harga / Status Paket

```js
export const PACKAGES = [
  {
    id: "november",
    price: "Rp 31.9 Juta",       // ← harga
    status: "limited",            // sold_out | limited | available
    seats: 9,                     // ← sisa kursi
    duration: "Durasi 9 Hari",
    ...
  },
];
```

### Ubah Target Countdown

```js
export const COUNTDOWN_TARGET = new Date("2026-06-30T23:59:59+07:00").getTime();
```

### Ubah Pesan WhatsApp Otomatis

```js
waMessage: "Assalamu'alaikum kak, saya tertarik ...",
```

### Ganti Foto

Upload foto baru ke `frontend/public/brand/` atau update URL di `IMAGES` constant.

---

## Brand Assets

| File                              | Penggunaan                       |
|-----------------------------------|----------------------------------|
| `logo-black-transparent.png`      | Navbar di atas background terang |
| `logo-gold-transparent.png`       | Navbar (hero) & footer (gelap)   |
| `logo.png`                        | Logo asli 4 variasi (untuk reference) |

---

## Deployment

Deployed via **Emergent** ke domain custom **[menujumekah.my.id](https://menujumekah.my.id)**.

Untuk redeploy:
1. Klik tombol **Deploy** di interface Emergent
2. Pilih **Deploy Now** → tunggu 10-15 menit

---

## Kontak & Sosial Media

- WhatsApp: [+62 851-5541-2377](https://wa.me/6285155412377)
- Instagram: [@menuju.mekah](https://instagram.com/menuju.mekah)
- TikTok: [@menuju.mekah](https://tiktok.com/@menuju.mekah)
- Website: [menujumekah.my.id](https://menujumekah.my.id)

---

## Lisensi

© 2026 Menuju Mekah. Semua hak cipta dilindungi.

*Labbaik Allahumma Labbaik.*
