import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => (
  <section className="py-24 lg:py-32">
    <div className="container-tight">
      <div className="relative overflow-hidden rounded-xl bg-navy-deep px-8 py-16 lg:px-16 lg:py-24 shadow-card">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--amber)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-amber">Sürece Katıl</span>
          <h2 className="mt-6 font-display text-3xl lg:text-5xl leading-tight font-medium text-primary-foreground">
            Düşünmeyi bir disipline dönüştürmek için ilk adımı atın.
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-primary-foreground/70 max-w-xl">
            Yeni dönem başvuruları açık. Formasyon programının kapsamını inceleyin ya da
            doğrudan bizimle iletişime geçin.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="amber" size="lg">
              <Link to="/formasyon">Programı İncele <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-navy-deep">
              <Link to="/iletisim">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
