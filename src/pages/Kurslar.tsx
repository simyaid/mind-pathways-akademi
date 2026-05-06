import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const steps = [
  {
    n: "Formasyon Hazırlık",
    title: "Psikodiyalektik Formasyona Hazırlık Programı",
    slug: "hazirlik",
    text: "Psikodiyalektik düşüncenin kaynakları olan bilgi türlerine dair bütüncül bir yaklaşım edinmeye yöneliktir. Diyalektik düşünce ve ruhsallık bilgisinin yaşadığımız coğrafyanın dinamikleriyle buluşturulmasını amaçlar.",
  },
  {
    n: "1. Yıl",
    title: "Psikodiyalektik Teori ve Pratik",
    slug: "formasyon-hazirlik",
    text: "Psikodiyalektik yaklaşımın teorik temellerini ve uygulama pratiklerini bir araya getirerek katılımcının ruhsallık, birey ve toplumsallık arasındaki ilişkileri derinlemesine kavramasını hedefler.",
  },
  {
    n: "2. Yıl",
    title: "Psikodiyalektik Çalışma",
    slug: "2-yil",
    text: "Psikodiyalektik düşünce bu aşamada yalnızca öğrenilmez, doğrudan çalışma içinde uygulanır. Kuramsal çerçeve; olgu analizleri, grup süreçleri ve bireysel deneyimle iç içe ilerleyerek katılımcının düşünme, anlama ve müdahale etme kapasitesini somut bir pratik içinde geliştirir.",
  },
  {
    n: "3. Yıl",
    title: "Psikodiyalektik Formasyon İleri Kursu",
    slug: "2-modul",
    text: "Psikodiyalektik formasyonun derinleştiği ve katılımcının kendi çalışma biçimini kurmaya başladığı ileri bir aşamayı temsil eder.",
  },
  {
    n: "4. Yıl",
    title: "Tamamlayıcı Çalışmalar",
    slug: "3-modul",
    text: "Formasyonun ötesine geçmek isteyenler için düşünceyi derinleştiren bir eşlik sunar.",
  },
];

const Formation = () => (
  <>
    <PageHeader
      eyebrow="Psikodiyalektik Formasyon"
      title={<>Psikodiyalektik<br />Formasyon Programı</>}
      description="Psikodiyalektik çalışmacı adayları için AKADEMİ PSİKODİYALEKTİK tarafından oluşturulmuş formasyon programının adıdır."
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight max-w-3xl space-y-4 text-[1.05rem] leading-relaxed text-muted-foreground">
        <p className="font-semibold text-navy-deep">Psikodiyalektik Formasyon Programı için kabul koşulları şunlardır:</p>
        <ul className="space-y-2 pl-4">
          <li className="flex items-start gap-3"><span className="h-0.5 w-4 bg-amber flex-shrink-0 mt-3" />Psikodiyalektik Formasyona Hazırlık Programı'nı tamamlamış olmak.</li>
          <li className="flex items-start gap-3"><span className="h-0.5 w-4 bg-amber flex-shrink-0 mt-3" />Psikodiyalektik çalışmada kendi ruhsallığını çalışıyor olmak.</li>
          <li className="flex items-start gap-3"><span className="h-0.5 w-4 bg-amber flex-shrink-0 mt-3" />Yapılacak görüşme sonrasında Psikodiyalektik Formasyon'a kabul almış olmak.</li>
        </ul>
        <p>Psikodiyalektik Formasyon Programının birinci yılı; psikodiyalektik teori ve pratik ile ilgili dersleri ve uygulamaları içerir. İkinci yılı kuramsal ve pratik deneyimi yetkinleştirilmeye yöneliktir.</p>
        <p>Formasyondaki adaylar, formasyonun ikinci yıl ile birlikte formasyonda <strong>Psikodiyalektik Çalışmacı</strong> olarak adlandırılırlar ve psikodiyalektik çalışma için başvuruları kabul ederler.<br />Bu süreçte;<br />
        İleri teorik çalışmalar,<br />
        Psikodiyalektik çalışma temrinleri<br />
        Olgu ve süpervizyon çalışmaları<br />
        Psikodiyalektik kültür çalışmaları yapılır.</p>
        <div className="border border-border rounded-lg p-6 bg-surface text-sm">
          En az bir yıl psikodiyalektik çalışmacı olarak Psikodiyalektik çalışma süreci yürüten aday, özgün bir metin yazımı ve bir psikodiyalektik kültür çalışması yaptıktan sonra Psikodiyalektik Çalışmacı ünvanı alır ve belgesi Akademi Psikodiyalektik değerlendirmesi sonrası Halk İçin Psikoterapi Derneği ile ortak düzenlenir.
        </div>
        <div className="border border-border rounded-lg p-6 bg-surface text-sm">
          Adaylar, formasyonun ikinci yılı ile birlikte HALK İÇİN PSİKOTERAPİ DERNEĞİ'ne üye olurlar ve Halk İçin Psikoterapi Derneği tüzüğünün üyeler için belirlediği sorumluluğu yerine getirmekle yükümlüdürler.
        </div>
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-navy-deep pt-8">
          Psikodiyalektik Formasyona Hazırlık Programı
        </h2>
        <p>Psikodiyalektik Formasyona Hazırlık Programı psikodiyalektik düşüncenin kaynakları olan bilgi türlerine dair bütüncül bir yaklaşım edinmeye yöneliktir. Diyalektik düşünce ve ruhsallık bilgisinin yaşadığımız coğrafyanın dinamikleriyle buluşturulmasını amaçlar.</p>
        <p>Psikodiyalektik Formasyona Hazırlık Programı tüm disiplinlerden katılımcılara açıktır.</p>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="container-tight">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-2 bottom-2 w-px bg-border -translate-x-px hidden sm:block" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className={`relative grid sm:grid-cols-[auto_1fr] lg:grid-cols-2 gap-6 lg:gap-16 items-start ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Number side */}
                <div className={`relative ${i % 2 === 1 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"} lg:col-span-1`}>
                  <div className="hidden sm:flex absolute left-4 lg:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-amber ring-4 ring-background z-10" />
                  <div className={`pl-12 sm:pl-16 lg:pl-0`}>
                    <span className="font-display text-5xl lg:text-7xl font-medium text-navy-deep/15 leading-none">
                      {s.n}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`pl-12 sm:pl-16 lg:pl-0 ${i % 2 === 1 ? "lg:pr-16 lg:order-1" : "lg:pl-16"} lg:col-span-1`}>
                  <div className="bg-card border border-border rounded-lg p-7 lg:p-8 shadow-soft">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-navy-deep">{s.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{s.text}</p>
                    <div className="mt-5 flex justify-end">
                      <Link
                        to={`/kurslar/${s.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-deep hover:text-amber transition-colors"
                      >
                        Detayları görün <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>


</>
);

export default Formation;
