import { PageHeader } from "@/components/PageHeader";

const About = () => (
  <>
    <PageHeader
      eyebrow="Hakkımızda"
      title={<>Bir arayışın vardığı değil,<br /><span className="underline decoration-amber decoration-2 underline-offset-4 font-bold">devam ettiği</span> yer.</>}
      description={<>
        <p>Akademi Psikodiyalektik; insanlığın tarihiyle ve insanın evrensel hakikatiyle uyarlı bir ruhsallık bilgisinin geliştirilmesi ve bu bilginin uygulama alanlarının ve kültürünün oluşturulması için kurulmuştur.</p>
        <p>1990’ların ikinci yarısında Bakırköy Ruh ve Sinir Hastalıkları Hastanesi’nde çıkan aura dergisinden başlayan ve Akıl Defteri dergisi ve sonrasında Psikodiyalektik Araştırmalar Derneği ile devam eden arayışın geldiği aşamadır.</p>
      </>}
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-2xl lg:text-3xl text-navy-deep leading-tight">
              Bilgi değil, kültür üretir.
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
          Akademi Psikodiyalektik; psikodiyalektik bilginin üretiminin ve ruh sağlığı alanında temel bir anlayış olarak gelişiminin adresidir, 
          bu yönde araştırma ve incelemeler yapar, ruhsal çalışmaların nitelikli ve eşitlikçi bir biçimde topluma 
          ulaştırılmasının koşullarını yaratır ve psikodiyalektik çalışmacı adaylarının formasyon sürecinin sorumluluğunu 
          üstlenir. 

          </p>
          <p>
          Psikodiyalektik bir kültürün oluşturulması için yazılı ve görsel kültür ürünleri üretir, yayınlar ve 
          yaygınlaştırılması için olanaklar yaratır.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-surface border-y border-border">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-2xl lg:text-3xl text-navy-deep leading-tight">
            Akademik bir boşluğu doldurmak üzere kuruldu.
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
          Bu çalışmaları  HALK İÇİN PSİKOTERAPİ DERNEĞİ ile emek birliği içinde ve karşılıklı sorumluluk bilinciyle gerçekleştirir. 

          </p>
          <p>
          HALK İÇİN PSİKOTERAPİ DERNEĞİ’nin temsil ettiği değerlerin ve ilkelerin en somut örneklerinden biri olan psikodiyalektik formasyon süreci ve psikodiyalektik kültür üretimi çabası ile AKADEMİ PSİKODİYALEKTİK ruhsallık alanında yeni bir anlayışın temsilcisidir.

          </p>
          <blockquote className="border-l-2 border-amber pl-6 py-2 mt-10 font-display italic text-xl text-navy-deep leading-snug">
            "Bir formasyon süreci, kişiyi sadece donatmaz; onu yeniden biçimlendirir."
          </blockquote>
        </div>
      </div>
    </section>
  </>
);

export default About;
