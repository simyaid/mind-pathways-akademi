import { motion } from "framer-motion";
import { Users, Scale, Sprout, Megaphone } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Dayanışma",
    text: "Bilgi paylaşıldıkça çoğalır. Akademik dayanışma, bireysel başarının önündedir.",
  },
  {
    icon: Scale,
    title: "Etik",
    text: "Her formasyon süreci, etik bir sorumluluk taahhüdüyle başlar ve onunla biter.",
  },
  {
    icon: Sprout,
    title: "Gelişim",
    text: "Sürekli gelişim, bir hedef değil; yaşam boyu sürdürülen bir disiplin pratiğidir.",
  },
  {
    icon: Megaphone,
    title: "Temsil",
    text: "Mesleğin saygınlığı, onu temsil edenlerin entelektüel duruşuyla ölçülür.",
  },
];

export const ValuesSection = () => (
  <section className="py-24 lg:py-32 bg-surface">
    <div className="container-tight">
      <div className="max-w-2xl mb-16">
        <span className="eyebrow mb-5">Değerlerimiz</span>
        <h2 className="font-display text-3xl lg:text-[2.5rem] leading-tight font-medium text-navy-deep mt-4">
          Akademi, dört temel ilke üzerine kuruludur.
        </h2>
      </div>

      <div className="grid gap-px bg-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-4 shadow-soft">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-card p-8 lg:p-10 transition-colors hover:bg-navy-deep"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-deep/5 text-navy-deep group-hover:bg-amber group-hover:text-navy-deep transition-colors">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-navy-deep mt-6 group-hover:text-primary-foreground transition-colors">
              {v.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/75 transition-colors">
              {v.text}
            </p>
            <span className="mt-6 inline-block text-[0.7rem] tracking-[0.2em] uppercase text-navy-300 group-hover:text-amber transition-colors">
              0{i + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
