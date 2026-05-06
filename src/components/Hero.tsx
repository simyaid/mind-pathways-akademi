import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroGorsel1png from "@/assets/herogorsel (1).png";
import heroGorsel1jpg from "@/assets/herogorsel (1).jpg";
import heroGorsel1jpeg from "@/assets/herogorsel (1).jpeg";
import heroGorsel2 from "@/assets/herogorsel (2).jpg";
import heroGorsel3 from "@/assets/herogorsel (3).jpg";
import heroGorsel4 from "@/assets/herogorsel (4).jpg";
import herooGorsel from "@/assets/heroogorsel.jpeg";
import heroGoGorsel from "@/assets/hero görsel.jpeg";
import herogorsell1 from "@/assets/herogorsell (1).jpg";
import herogorsell2 from "@/assets/herogorsell (2).jpg";
import herogorsell3 from "@/assets/herogorsell (3).JPG";
import herogorsell4 from "@/assets/herogorsell (4).JPG";
import herogorsell5 from "@/assets/herogorsell (5).jpg";

const heroImages = [
  heroGorsel1jpeg,
  heroGorsel2,
  heroGorsel1png,
  heroGorsel1jpg,
  heroGorsel3,
  heroGorsel4,
  herooGorsel,
  heroGoGorsel,
  herogorsell1,
  herogorsell2,
  herogorsell3,
  herogorsell4,
  herogorsell5,
];

const INTERVAL = 4000;

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Arka plan görseller */}
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={heroImages[current]}
          alt=""
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 w-full h-full object-cover ${current === heroImages.length - 1 ? "object-center" : "object-bottom"}`}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/80 via-navy-deep/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />

      {/* İçerik */}
      <div className="container-tight relative z-10 py-32 lg:py-40 flex flex-col items-end pr-0 md:pr-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl pt-3"
        >
          <blockquote>
            <p className="font-display text-[1.25rem] sm:text-[1.45rem] lg:text-[1.65rem] leading-[1.45] font-medium text-white tracking-tight italic">
              "…daha başlangıçta, biri kitledeki bireylerin, ötekisi babanın, kitlenin başındaki kişinin, şefin ya da liderin olmak üzere iki ayrı ruhsallık vardı."
            </p>
            <footer className="mt-6 text-sm text-white/60 font-medium tracking-wide">
              Sigmund Freud,{" "}
              <cite className="not-italic text-white/80">Kitle Ruhsallığı ve Ben Çözümlemesi</cite>{" "}
              (1921)
            </footer>
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild variant="amber" size="lg">
              <Link to="/basvuru">
                Başvur <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
              <Link to="/hakkimizda">
                <BookOpen /> Hakkımızda
              </Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-8 max-w-md border-t border-white/20 pt-8">
            <div>
              <dt className="text-2xl font-display font-semibold text-white">12+</dt>
              <dd className="text-xs uppercase tracking-wider text-white/60 mt-1">Öğretici</dd>
            </div>
            <div>
              <dt className="text-2xl font-display font-semibold text-white">700+</dt>
              <dd className="text-xs uppercase tracking-wider text-white/60 mt-1">Saat</dd>
            </div>
            <div>
              <dt className="text-2xl font-display font-semibold text-white">4</dt>
              <dd className="text-xs uppercase tracking-wider text-white/60 mt-1">Yıl</dd>
            </div>
          </dl>
          {/* Dot göstergesi */}
          <div className="flex gap-2 mt-12">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-amber" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
