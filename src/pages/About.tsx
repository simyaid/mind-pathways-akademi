import { PageHeader } from "@/components/PageHeader";
import akademiLogo from "@/assets/AkademiLogo.png";

const About = () => (
  <>
    <PageHeader
      eyebrow="Hakkımızda"
      title={<>Psikodiyalektik:<br />Yeni Bir Paradigma Önerisi</>}
      description={<>
        <p>Akademi Psikodiyalektik; insanlığın tarihiyle ve insanın evrensel hakikatiyle uyarlı bir ruhsallık bilgisinin geliştirilmesi ve bu bilginin uygulama alanlarının ve kültürünün oluşturulması için kurulmuştur.</p>
        <p>1990’ların ikinci yarısında Bakırköy Ruh ve Sinir Hastalıkları Hastanesi’nde çıkan aura dergisinden başlayan ve Akıl Defteri dergisi ve sonrasında Psikodiyalektik Araştırmalar Derneği ile devam eden arayışın geldiği aşamadır.</p>
      </>}
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <img src={akademiLogo} alt="Akademi Psikodiyalektik" className="h-24 w-auto object-contain ml-[25px] pl-[20px]" />
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
      <div className="container-tight grid gap-16 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <img src="/halkicinpsikoterapilogo.png" alt="Halk İçin Psikoterapi" className="h-[165px] w-auto max-w-[165px] object-contain ml-[25px] pl-[20px]" />
        </div>
        <div className="lg:col-span-8 space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
          HALK İÇİN PSİKOTERAPİ DERNEĞİ’nin temsil ettiği değerlerin ve ilkelerin en somut örneklerinden biri olan psikodiyalektik formasyon süreci ve psikodiyalektik kültür üretimi çabası ile AKADEMİ PSİKODİYALEKTİK ruhsallık alanında yeni bir anlayışın temsilcisidir.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default About;
