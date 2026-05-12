import { motion } from "framer-motion";
import { Users, Scale, Sprout, Megaphone } from "lucide-react";

const values = [
  {
    icon: Users,
    title: ["Formasyona", "Hazırlık"],
    text: "Ruhsallık bilgileri, insan bilimleri ve diyalektik düşüncenin temel kuramlarını içeren dersler.",
  },
  {
    icon: Scale,
    title: ["Teori ve", "Pratik"],
    text: "Psikodiyalektik düşüncenin temel kavramları ve psikodiyalektik çalışmanın ilkeleri.",
  },
  {
    icon: Sprout,
    title: ["Psikodiyalektik", "Çalışma"],
    text: "Psikodiyalektik çalışmacı olmak ve psikokültür uygulamaları.",
  },
  {
    icon: Megaphone,
    title: "Psikodiyalektik Araştırmalar",
    text: "İleri psikodiyalektik araştırma ve incelemeleri.",
  },
];

export const ValuesSection = () => (
  <section className="py-24 lg:py-32 bg-surface border-b border-border">
    <div className="container-tight">
      <div className="max-w-2xl mb-4">
        <span className="eyebrow mb-5">Formasyon Süreci</span>
      </div>

      <div className="grid gap-px bg-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-4 shadow-soft">
        {values.map((v, i) => (
          <motion.div
            key={Array.isArray(v.title) ? v.title.join("-") : v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-card p-[21px] lg:p-7 transition-colors hover:bg-navy-deep flex flex-col h-full"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-deep/5 text-navy-deep group-hover:bg-amber group-hover:text-navy-deep transition-colors">
              <v.icon className="h-5 w-5" />
            </div>

            <h3 className="font-display text-base font-semibold text-navy-deep mt-6 group-hover:text-primary-foreground transition-colors">
              {Array.isArray(v.title) ? (
                <>
                  {v.title[0]}
                  <br />
                  {v.title[1]}
                </>
              ) : (
                v.title
              )}
            </h3>

            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground group-hover:text-primary-foreground/75 transition-colors">
              {v.text}
            </p>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
);