import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const AboutPreview = () => (
  <section className="py-24 lg:py-32">
    <div className="container-tight grid gap-14 lg:grid-cols-12 items-start">
      <div className="lg:col-span-5">
        <span className="eyebrow mb-5">Hakkımızda</span>
        <h2 className="font-display text-3xl lg:text-[2.4rem] leading-tight font-medium text-navy-deep mt-4">
          Ruhsallık alanında yeni bir anlayışın temsilcisi
        </h2>
      </div>
      <div className="lg:col-span-7 space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
        <p>
          Akademi Psikodiyalektik; insanlığın tarihiyle ve insanın evrensel hakikatiyle uyarlı bir ruhsallık bilgisinin geliştirilmesi ve bu bilginin uygulama alanlarının ve kültürünün oluşturulması için kurulmuştur.
        </p>
        <p>
          1990'ların ikinci yarısında Bakırköy Ruh ve Sinir Hastalıkları Hastanesi'nde çıkan aura dergisinden başlayan ve Akıl Defteri dergisi ve sonrasında Psikodiyalektik Araştırmalar Derneği ile devam eden arayışın geldiği aşamadır.
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
