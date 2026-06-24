import { Instagram, Globe, Phone, MapPin } from "lucide-react";
import { BRAND, buildWhatsAppLink, WA_MESSAGES } from "@/lib/constants";

// TikTok icon (lucide doesn't have official TikTok; inline SVG)
const TikTokIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-1.84-.21z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer
      id="kontak"
      data-testid="footer-section"
      className="relative bg-[#0E0606] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/brand/logo-gold-transparent.png"
                alt="Menuju Mekah"
                className="h-14 w-auto"
              />
              <span className="font-serif text-2xl">Menuju Mekah</span>
            </div>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Mendampingi langkah Anda menuju Baitullah dengan pelayanan penuh
              hati, kenyamanan terbaik, dan kepercayaan yang teruji.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-tiktok-link"
                aria-label="TikTok"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-colors"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:bg-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.25em] uppercase text-white/60">
              Jelajahi
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="footer-link-beranda"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#fasilitas"
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="footer-link-fasilitas"
                >
                  Fasilitas
                </a>
              </li>
              <li>
                <a
                  href="#paket"
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="footer-link-paket"
                >
                  Paket Umrah
                </a>
              </li>
              <li>
                <a
                  href="#countdown"
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="footer-link-promo"
                >
                  Promo November
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.25em] uppercase text-white/60">
              Hubungi Kami
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-[#F5C6C6]" />
                <div>
                  <div className="text-white/60 text-xs">WhatsApp</div>
                  <a
                    href={buildWhatsAppLink(WA_MESSAGES.footer)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-whatsapp-number"
                    className="text-white hover:text-[#F5C6C6] transition-colors"
                  >
                    {BRAND.whatsappNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-4 w-4 mt-1 text-[#F5C6C6]" />
                <div>
                  <div className="text-white/60 text-xs">Website</div>
                  <span
                    className="text-white"
                    data-testid="footer-website"
                  >
                    {BRAND.website}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-4 w-4 mt-1 text-[#F5C6C6]" />
                <div>
                  <div className="text-white/60 text-xs">Sosial Media</div>
                  <span className="text-white">{BRAND.handle}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Menuju Mekah. Semua hak cipta dilindungi.
          </p>
          <p className="text-xs text-white/40 italic font-serif">
            Labbaik Allahumma Labbaik
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
