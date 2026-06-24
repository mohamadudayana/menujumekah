import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { buildWhatsAppLink, IMAGES, WA_MESSAGES } from "@/lib/constants";

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="font-serif text-3xl sm:text-4xl text-white">{value}</div>
    <div className="text-[11px] tracking-[0.2em] uppercase text-white/70 mt-1">
      {label}
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Ka'bah di Masjidil Haram"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
      </div>

      {/* Arabic ornament watermark */}
      <div
        aria-hidden
        className="absolute -right-20 top-1/3 text-[18rem] leading-none font-serif text-white/[0.05] select-none hidden lg:block"
      >
        ﷽
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="divider-ornament mx-auto text-white/80 mb-6"
        >
          <span className="text-[11px] tracking-[0.35em] uppercase">
            Travel Umrah Terpercaya
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          data-testid="hero-headline"
          className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
        >
          Melangkah Pasti{" "}
          <span className="italic text-[#F5C6C6]">Menuju Tanah Suci</span>
          <br />
          Bersama Menuju Mekah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/85 leading-relaxed"
        >
          Perjalanan Umrah yang aman, nyaman, dan terpercaya. Kami mengurus
          seluruh kebutuhan Anda — dari keberangkatan hingga kembali ke tanah
          air — dengan pelayanan penuh hati.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={buildWhatsAppLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-button"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
            style={{ backgroundColor: "#8B1A1A" }}
          >
            <MessageCircle className="h-5 w-5" />
            Konsultasi via WhatsApp
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#paket"
            data-testid="hero-view-packages"
            className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            Lihat Paket Tersedia
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/15 pt-8"
        >
          <Stat label="Tahun Pengalaman" value="10+" />
          <Stat label="Jamaah Terlayani" value="1.500+" />
          <Stat label="Rating Jamaah" value="4.9" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#fasilitas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-float-soft"
        data-testid="hero-scroll-indicator"
        aria-label="Gulir ke bawah"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
};

export default Hero;
