import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WA_MESSAGES } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#paket", label: "Paket" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#countdown", label: "Promo" },
  { href: "#kontak", label: "Kontak" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <a
            href="#hero"
            data-testid="navbar-logo"
            className="flex items-center gap-3 group"
          >
            <img
              src={
                scrolled
                  ? "/brand/logo-black-transparent.png"
                  : "/brand/logo-gold-transparent.png"
              }
              alt="Menuju Mekah"
              className="h-11 sm:h-12 w-auto transition-opacity duration-300"
            />
            <span
              className={`hidden sm:inline font-serif text-xl tracking-tight transition-colors ${
                scrolled ? "text-[#8B1A1A]" : "text-white"
              }`}
            >
              Menuju Mekah
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`navbar-link-${link.label.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-[#8B1A1A]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={buildWhatsAppLink(WA_MESSAGES.navbar)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-whatsapp-button"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#8B1A1A" }}
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Kami
          </a>

          <button
            type="button"
            data-testid="navbar-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border ${
              scrolled
                ? "border-gray-300 text-gray-800"
                : "border-white/40 text-white"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div
            data-testid="navbar-mobile-menu"
            className="md:hidden bg-white border-t border-gray-200 py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-testid={`navbar-mobile-link-${link.label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-gray-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildWhatsAppLink(WA_MESSAGES.navbar)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="navbar-mobile-whatsapp-button"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: "#8B1A1A" }}
              >
                <MessageCircle className="h-4 w-4" />
                Hubungi via WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
