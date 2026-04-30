import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const AboutPreview = () => (
  <section className="py-24 lg:py-32">
    <div className="container-tight grid gap-14 lg:grid-cols-12 items-start">
      <div className="lg:col-span-5">
        <span className="eyebrow mb-5">Hakkımızda</span>
        <h2 className="font-display text-3xl lg:text-[2.4rem] leading-tight font-medium text-navy-deep mt-4">
          Bir okul değil, bir düşünme zemini.
        </h2>
      </div>
      <div className="lg:col-span-7 space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
        <p>
          Akademi Psikodiyalektik, psikolojiyi yalnızca bir uygulama alanı olarak değil; felsefi sorgulamayla
          beslenen, etik bir <em className="text-navy-deep not-italic font-medium">tutum</em> olarak ele alır.
          Programlarımız, klasik psikoloji ekollerini çağdaş düşünce pratikleriyle yan yana getirir.
        </p>
        <p>
          Burada bilgi, ezberlenen bir içerik değil; üzerinde durulan, sınanan ve yeniden inşa edilen bir
          süreçtir. Eğitim modüllerimiz; teori, vaka çalışması ve diyalektik tartışma olmak üzere üç katmanlı
          biçimde yapılandırılmıştır.
        </p>
        <Link
          to="/hakkimizda"
          className="inline-flex items-center gap-2 mt-2 text-navy-deep font-medium border-b border-amber pb-1 hover:text-navy-700"
        >
          Daha fazlasını okuyun <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);
