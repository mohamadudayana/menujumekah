import { motion } from "framer-motion";
import {
  Plane,
  Building2,
  Briefcase,
  Package,
  Syringe,
  CalendarDays,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const ICON_MAP = {
  Plane,
  Building2,
  Briefcase,
  Package,
  Syringe,
  CalendarDays,
};

export const Features = () => {
  return (
    <section
      id="fasilitas"
      data-testid="features-section"
      className="relative bg-[#FAFAFA] py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="divider-ornament mb-5">
            <span className="text-[11px] tracking-[0.35em] uppercase">
              All-in Includes
            </span>
          </div>
          <h2
            data-testid="features-heading"
            className="font-serif text-4xl sm:text-5xl text-gray-900 tracking-tight leading-tight"
          >
            Fasilitas premium untuk{" "}
            <span className="italic text-[#8B1A1A]">ibadah yang khusyuk</span>
          </h2>
          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Setiap detail telah kami rancang agar Anda dapat fokus pada ibadah —
            tanpa khawatir urusan teknis.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = ICON_MAP[feature.icon] || Package;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                data-testid={`feature-card-${idx}`}
                className="group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5 hover:border-[#8B1A1A]/30"
              >
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors"
                  style={{ backgroundColor: "#FDE8E8" }}
                >
                  <Icon
                    className="h-7 w-7"
                    strokeWidth={1.5}
                    style={{ color: "#8B1A1A" }}
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-gray-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 h-px w-10 bg-gray-200 group-hover:w-16 group-hover:bg-[#8B1A1A] transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
