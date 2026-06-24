// Brand constants for Menuju Mekah landing page
const WA_BASE_NUMBER = "6285155412377";

export const BRAND = {
  name: "Menuju Mekah",
  website: "www.menujumekah.com",
  whatsappNumber: "0851-5541-2377",
  whatsappLink: "https://wa.me/6285155412377",
  instagram: "https://instagram.com/menuju.mekah",
  tiktok: "https://tiktok.com/@menuju.mekah",
  handle: "@menuju.mekah",
};

// Build a wa.me link with a prefilled message (handles all encoding)
export const buildWhatsAppLink = (message) => {
  if (!message) return `https://wa.me/${WA_BASE_NUMBER}`;
  return `https://wa.me/${WA_BASE_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Centralized prefilled messages so the agency knows the source/intent of every chat
export const WA_MESSAGES = {
  general:
    "Assalamu'alaikum kak, saya ingin konsultasi mengenai paket Umrah Menuju Mekah. Mohon info lebih lanjut, terima kasih.",
  navbar:
    "Assalamu'alaikum kak Menuju Mekah, saya ingin bertanya mengenai layanan Umrah kakak.",
  hero:
    "Assalamu'alaikum kak, saya melihat website Menuju Mekah dan tertarik untuk konsultasi paket Umrah. Mohon informasinya ya kak.",
  countdownNovember:
    "Assalamu'alaikum kak, saya tertarik untuk mengamankan kursi Paket Umrah November (Rp 31,9 Juta) sebelum promo berakhir. Mohon info pembayaran & pendaftarannya kak.",
  floating:
    "Assalamu'alaikum kak Menuju Mekah, saya ingin bertanya mengenai paket Umrah yang tersedia. Terima kasih.",
  footer:
    "Assalamu'alaikum kak, saya ingin bertanya seputar layanan Umrah Menuju Mekah.",
};

// Countdown target: 30 Juni 2026, 23:59:59 WIB (UTC+7)
export const COUNTDOWN_TARGET = new Date("2026-06-30T23:59:59+07:00").getTime();

// Authentic photos uploaded by Menuju Mekah (jamaah perjalanan)
export const IMAGES = {
  // Hero: wide Kaaba shot with Masjidil Haram clock tower (group jamaah)
  hero: "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/mqdnc4fj_IMG_9318.jpeg",
  // Agustus: pasangan jamaah (akan ditampilkan grayscale karena sold out)
  packageAgustus:
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/q7e9yc19_IMG_9324.jpeg",
  // November: rombongan dengan banner "Jalan Menuju Mekah" di bandara (branded)
  packageNovember:
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/ov5rxmx4_IMG_9305.jpeg",
  // Ramadhan: close-up jamaah pria di depan Kaaba (paling sakral)
  packageRamadhan:
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/r3rowrwz_IMG_9297.jpeg",
  featuresBg:
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/mqdnc4fj_IMG_9318.jpeg",
  // Gallery / testimoni assets (foto otentik jamaah)
  gallery: [
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/r3rowrwz_IMG_9297.jpeg",
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/mqdnc4fj_IMG_9318.jpeg",
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/ov5rxmx4_IMG_9305.jpeg",
    "https://customer-assets.emergentagent.com/job_hajj-packages-3/artifacts/q7e9yc19_IMG_9324.jpeg",
  ],
};

export const PACKAGES = [
  {
    id: "agustus",
    title: "Paket Agustus",
    departure: "Keberangkatan Agustus",
    price: "Rp 30.9 Juta",
    duration: "Durasi 9 Hari",
    status: "sold_out",
    statusLabel: "Sold Out",
    image: IMAGES.packageAgustus,
    seats: null,
    cta: "Selengkapnya",
    waMessage:
      "Assalamu'alaikum kak, saya tertarik dengan Paket Umrah Agustus (Rp 30,9 Juta — 9 hari). Apakah masih ada waiting list atau jadwal serupa berikutnya kak?",
  },
  {
    id: "november",
    title: "Paket November",
    departure: "Keberangkatan November",
    price: "Rp 31.9 Juta",
    duration: "Durasi 9 Hari",
    status: "limited",
    statusLabel: "Terbatas",
    image: IMAGES.packageNovember,
    seats: 9,
    cta: "Daftar Sekarang",
    featured: true,
    waMessage:
      "Assalamu'alaikum kak, saya tertarik untuk daftar Paket Umrah November (Rp 31,9 Juta — 9 hari, sisa 9 kursi). Mohon info pendaftaran, DP, dan jadwal manasiknya ya kak.",
  },
  {
    id: "ramadhan",
    title: "Paket Ramadhan 1448 H",
    departure: "Keberangkatan Ramadhan 2027",
    price: "Rp 37.9 Juta",
    duration: "Durasi 12 Hari",
    status: "available",
    statusLabel: "Tersedia",
    image: IMAGES.packageRamadhan,
    seats: 35,
    cta: "Amankan Kursi",
    waMessage:
      "Assalamu'alaikum kak, saya ingin mengamankan kursi Paket Umrah Ramadhan 1448 H / 2027 (Rp 37,9 Juta — 12 hari). Mohon info pendaftaran dan ketersediaan kursinya kak.",
  },
];

// Generic inclusions for all packages (duration is overridden per-package)
export const PACKAGE_INCLUSIONS = [
  "Penerbangan Saudia Airlines",
  "Hotel Bintang 3 (Jalan Kaki ke Masjid)",
  "Handling Bandara & Hotel",
  "Perlengkapan Umrah Premium",
  "Vaksinasi Meningitis",
];

export const FEATURES = [
  {
    icon: "Plane",
    title: "Saudia Airlines",
    description: "Penerbangan langsung dengan maskapai resmi Kerajaan Arab Saudi.",
  },
  {
    icon: "Building2",
    title: "Hotel Bintang 3",
    description:
      "Akomodasi nyaman dengan akses jalan kaki ke Masjidil Haram & Masjid Nabawi.",
  },
  {
    icon: "Briefcase",
    title: "Handling Lengkap",
    description: "Pengurusan bandara, hotel, dan transportasi selama perjalanan.",
  },
  {
    icon: "Package",
    title: "Perlengkapan Umrah",
    description:
      "Koper, ihram, mukena, tas paspor, dan kelengkapan lain berkualitas premium.",
  },
  {
    icon: "Syringe",
    title: "Vaksinasi Meningitis",
    description: "Pengurusan vaksinasi wajib sebelum keberangkatan tanpa repot.",
  },
  {
    icon: "CalendarDays",
    title: "Durasi 9 Hari",
    description:
      "Perjalanan khusyuk yang dirancang penuh agar setiap ibadah terasa sempurna.",
  },
];
