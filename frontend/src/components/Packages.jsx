import { motion } from "framer-motion";
import { Check, Plane, Building2, Briefcase, Syringe, CalendarDays, Package as PackageIcon, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, PACKAGES, PACKAGE_INCLUSIONS } from "@/lib/constants";

const STATUS_STYLES = {
  sold_out: {
    badge: "bg-gray-200 text-gray-700",
    dot: "bg-gray-500",
    label: "Sold Out",
  },
  limited: {
    badge: "bg-amber-100 text-amber-800",
    dot: "bg-amber-500",
    label: "Terbatas",
  },
  available: {
    badge: "bg-emerald-100 text-emerald-800",
    dot: "bg-emerald-500",
    label: "Tersedia",
  },
};

const INCLUSION_ICONS = [Plane, Building2, Briefcase, PackageIcon, Syringe, CalendarDays];

const PackageCard = ({ pkg, index }) => {
  const style = STATUS_STYLES[pkg.status];
  const isSoldOut = pkg.status === "sold_out";
  const isFeatured = pkg.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      data-testid={`package-card-${pkg.id}`}
      className={`relative flex flex-col bg-white rounded-3xl overflow-hidden border transition-all duration-500 ${
        isFeatured
          ? "border-[#8B1A1A]/40 shadow-xl shadow-[#8B1A1A]/10 lg:scale-[1.03] lg:-translate-y-2"
          : "border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
      } ${isSoldOut ? "opacity-90" : ""}`}
    >
      {isFeatured && (
        <div
          className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-white"
          style={{ backgroundColor: "#8B1A1A" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Paling Diminati
        </div>
      )}

      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className={`h-full w-full object-cover transition-transform duration-700 ${
            isSoldOut ? "grayscale" : "group-hover:scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${style.badge} ${
              pkg.status === "limited" ? "animate-brand-pulse" : ""
            }`}
            data-testid={`package-status-${pkg.id}`}
          >
            <span className={`h-2 w-2 rounded-full ${style.dot}`} />
            {style.label}
            {pkg.seats && pkg.status !== "sold_out" && (
              <span className="ml-1 opacity-90">· {pkg.seats} kursi</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-7 sm:p-8">
        <div className="text-xs tracking-[0.2em] uppercase text-gray-500">
          {pkg.departure}
        </div>
        <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-gray-900 leading-tight">
          {pkg.title}
        </h3>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Mulai
          </span>
          <span
            className="font-serif text-3xl sm:text-4xl"
            style={{ color: "#8B1A1A" }}
            data-testid={`package-price-${pkg.id}`}
          >
            {pkg.price}
          </span>
          <span className="text-xs text-gray-500">/ jamaah</span>
        </div>

        <ul className="mt-6 space-y-3 flex-1">
          {[...PACKAGE_INCLUSIONS, pkg.duration].map((item, i) => {
            const Icon = INCLUSION_ICONS[i] || Check;
            return (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <span
                  className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full shrink-0"
                  style={{ backgroundColor: "#FDE8E8" }}
                >
                  <Icon
                    className="h-3.5 w-3.5"
                    strokeWidth={2}
                    style={{ color: "#8B1A1A" }}
                  />
                </span>
                {item}
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          {isSoldOut ? (
            <button
              type="button"
              disabled
              data-testid={`package-cta-${pkg.id}`}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold bg-gray-100 text-gray-500 cursor-not-allowed"
            >
              {pkg.cta}
            </button>
          ) : (
            <a
              href={buildWhatsAppLink(pkg.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`package-cta-${pkg.id}`}
              className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                isFeatured
                  ? "text-white animate-glow-pulse"
                  : "text-[#8B1A1A] border-2 border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white"
              }`}
              style={
                isFeatured
                  ? { backgroundColor: "#8B1A1A" }
                  : undefined
              }
            >
              <MessageCircle className="h-4 w-4" />
              {pkg.cta}
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export const Packages = () => {
  return (
    <section
      id="paket"
      data-testid="packages-section"
      className="relative bg-white py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="divider-ornament mx-auto mb-5">
            <span className="text-[11px] tracking-[0.35em] uppercase">
              Pilihan Paket
            </span>
          </div>
          <h2
            data-testid="packages-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight"
          >
            Tiga keberangkatan,{" "}
            <span className="italic text-[#8B1A1A]">satu tujuan suci</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Setiap paket sudah termasuk seluruh fasilitas premium. Pilih waktu
            keberangkatan yang paling sesuai untuk Anda dan keluarga.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 items-stretch">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-gray-500 tracking-wide">
          *Harga dapat berubah sesuai ketersediaan kursi dan kurs maskapai. Hubungi kami untuk informasi terkini.
        </p>
      </div>
    </section>
  );
};

export default Packages;
