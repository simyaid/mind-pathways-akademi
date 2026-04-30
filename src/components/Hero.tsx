import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--navy-deep)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy-deep)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-tight relative grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 items-center pt-12 pb-20 lg:pt-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow mb-7">Psikoloji · Felsefe · Formasyon</span>

          <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] font-medium text-navy-deep tracking-tight">
            Ruhsallık,{" "}
            <span className="italic text-navy-700">öğrenilen</span>{" "}
            değil{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">deneyimlenen</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-amber/40 -z-0" />
            </span>{" "}
            bir süreçtir.
          </h1>

          <p className="mt-7 max-w-xl text-base lg:text-[1.05rem] leading-relaxed text-muted-foreground">
            Akademi Psikodiyalektik; psikoloji, felsefe ve etik üzerine yapılandırılmış formasyon programlarıyla
            düşünme pratiğini bir disipline dönüştürür. Burada cevaplar değil, daha iyi sorular aranır.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="amber" size="lg">
              <Link to="/formasyon">
                Formasyona Başla <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="navyOutline" size="lg">
              <Link to="/hakkimizda">
                <BookOpen /> Yaklaşımımız
              </Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-8 max-w-md border-t border-border pt-8">
            <div>
              <dt className="text-2xl font-display font-semibold text-navy-deep">12+</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Eğitmen</dd>
            </div>
            <div>
              <dt className="text-2xl font-display font-semibold text-navy-deep">800+</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Mezun</dd>
            </div>
            <div>
              <dt className="text-2xl font-display font-semibold text-navy-deep">9</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Modül</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-surface rounded-2xl -z-10" />
          <img
            src={heroImg}
            alt="Düşünce ve diyalog ilişkisini gösteren editöryal illüstrasyon"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
          {/* Quote badge */}
          <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-navy-deep text-primary-foreground px-5 py-4 rounded-md shadow-card max-w-[260px]">
            <p className="font-display italic text-sm leading-snug">"Sorgulanmamış bir hayat, yaşanmaya değmez."</p>
            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-amber">— Sokrates</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
