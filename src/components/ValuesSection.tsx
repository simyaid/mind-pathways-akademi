import { motion } from "framer-motion";
import { Users, Scale, Sprout, Megaphone, BookOpen } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Formasyona Hazırlık",
    text: "Ruhsallık, diyalektik düşünce ve psikanalitik kuramın temel kavramlarıyla tanışma.",
  },
  {
    icon: Scale,
    title: ["Teori ve", "Pratik"],
    text: "Kuram, olgu ve deneyim bir araya gelir. Psikodiyalektik düşünce, çalışma içinde anlam kazanır.",
  },
  {
    icon: Sprout,
    title: "Psikodiyalektik Çalışma",
    text: "Bireysel ve grup çalışmalarıyla düşünce pratiğe dönüşür.",
  },
  {
    icon: Megaphone,
    title: ["İleri", "Aşama"],
    text: "Kuram, deneyim ve yorum birleşir. Psikodiyalektik yaklaşım kişisel bir kavrayışa dönüşür.",
  },
  {
    icon: BookOpen,
    title: "Tamamlayıcı Çalışmalar",
    text: "Formasyonun ötesine geçmek isteyenler için düşünceyi derinleştiren bir eşlik sunar.",
  },
];

export const ValuesSection = () => (
  <section className="py-24 lg:py-32 bg-surface border-b border-border">
    <div className="container-tight">
      <div className="max-w-2xl mb-16">
        <span className="eyebrow mb-5">Formasyon Süreci</span>
        <h2 className="font-display text-3xl lg:text-[2.5rem] leading-tight font-medium text-navy-deep mt-4">
          Düşünceden deneyime, bireyden gruba uzanan beş aşamalı bir süreç.
        </h2>
      </div>

      <div className="grid gap-px bg-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-5 shadow-soft">
        {values.map((v, i) => (
          <motion.div
            key={Array.isArray(v.title) ? v.title.join("-") : v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-card p-8 lg:p-10 transition-colors hover:bg-navy-deep flex flex-col h-full"
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

            {/* SAYIYI EN ALTA SABİTLE */}
            <span className="mt-auto pt-6 inline-block text-[0.7rem] tracking-[0.2em] uppercase text-navy-300 group-hover:text-amber transition-colors">
              0{i + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);