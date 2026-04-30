import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/i1.png";

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

      <div className="container-tight relative grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 items-center pt-6 pb-20 lg:pt-6 lg:pb-28 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="self-end mt-[180px]"
        >
          <div>
<h1 className="font-display text-[1.875rem] sm:text-[2.25rem] lg:text-[38pt] leading-[1.05] font-medium text-navy-deep tracking-tight">
            Uzun Bir{" "}
            <span className="italic text-navy-500">Arayışın</span>
            <br />
            <span className="whitespace-nowrap">
              Bugünkü{" "}
              <span className="underline decoration-amber decoration-2 underline-offset-4">Karşılığı</span>
            </span>
          </h1>

          <div className="mt-6 mb-6 w-12 h-[2px] bg-amber" />

          <p className="max-w-xl text-base lg:text-[1.05rem] leading-relaxed text-muted-foreground">
            Akademi Psikodiyalektik insanlığın tarihiyle ve evrensel<br />hakikatiyle uyarlı bir ruhsallık bilgisinin geliştirilmesi için kurulmuştur.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="amber" size="lg">
              <Link to="/formasyon">
                Kaydol <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="navyOutline" size="lg">
              <Link to="/hakkimizda">
                <BookOpen /> Hakkımızda
              </Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-8 max-w-md border-t border-border pt-8">
            <div>
              <dt className="text-2xl font-display font-semibold text-navy-deep">12+</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Eğitmen</dd>
            </div>
            <div>
              <dt className="text-2xl font-display font-semibold text-navy-deep">700</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Saat</dd>
            </div>
            <div>
              <dt className="text-2xl font-display font-semibold text-navy-deep">4</dt>
              <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Modül</dd>
            </div>
          </dl>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative self-start"
        >
          <div className="absolute -inset-6 bg-surface rounded-2xl -z-10" />
          <img
            src={heroImg}
            alt="Düşünce ve diyalog ilişkisini gösteren editöryal illüstrasyon"
            width={1024}
            height={1024}
            className="w-full h-auto scale-150 origin-top"
          />
        </motion.div>
      </div>
    </section>
  );
};
