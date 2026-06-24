import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, COUNTDOWN_TARGET, WA_MESSAGES } from "@/lib/constants";

const pad = (n) => String(n).padStart(2, "0");

const computeRemaining = (target) => {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, expired: diff === 0 };
};

const TimeUnit = ({ value, label, testid }) => (
  <div
    data-testid={testid}
    className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-5 sm:px-6 sm:py-7 min-w-[78px] sm:min-w-[110px]"
  >
    <span className="font-serif text-4xl sm:text-6xl text-white tabular-nums leading-none">
      {pad(value)}
    </span>
    <span className="mt-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/70">
      {label}
    </span>
  </div>
);

export const Countdown = () => {
  const [time, setTime] = useState(() => computeRemaining(COUNTDOWN_TARGET));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(computeRemaining(COUNTDOWN_TARGET));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="countdown"
      data-testid="countdown-section"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        backgroundColor: "#3A0808",
      }}
    >
      {/* Decorative gradient + pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #8B1A1A 0%, transparent 50%), radial-gradient(circle at 80% 70%, #5A0F0F 0%, transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-20 -right-20 text-[14rem] leading-none font-serif text-white/5 select-none hidden md:block"
      >
        ﷽
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs tracking-widest uppercase text-white/80">
            <Clock className="h-3.5 w-3.5" />
            Penawaran Terbatas
          </div>

          <h2
            data-testid="countdown-heading"
            className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Paket November Berakhir Dalam
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70 text-base sm:text-lg">
            Hanya tersisa <span className="text-white font-semibold">9 kursi</span>{" "}
            untuk keberangkatan November. Amankan tempat Anda sebelum 30 Juni 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          data-testid="countdown-timer"
          className="mt-12 flex items-center justify-center gap-3 sm:gap-5"
        >
          <TimeUnit value={time.days} label="Hari" testid="countdown-days" />
          <span className="text-white/30 font-serif text-3xl">:</span>
          <TimeUnit value={time.hours} label="Jam" testid="countdown-hours" />
          <span className="text-white/30 font-serif text-3xl">:</span>
          <TimeUnit
            value={time.minutes}
            label="Menit"
            testid="countdown-minutes"
          />
          <span className="text-white/30 font-serif text-3xl">:</span>
          <TimeUnit
            value={time.seconds}
            label="Detik"
            testid="countdown-seconds"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href={buildWhatsAppLink(WA_MESSAGES.countdownNovember)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="countdown-cta-button"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#8B1A1A] transition-all hover:-translate-y-0.5 animate-glow-pulse"
          >
            <MessageCircle className="h-5 w-5" />
            Amankan Kursi Saya
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
