import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { CtaSection } from "@/components/CtaSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    n: "Formasyon Hazırlık",
    title: "Hazırlık Dönemi",
    slug: "formasyon-hazirlik",
    text: "Psikodiyalektik Formasyona Hazırlık Programı psikodiyalektik düşüncenin kaynakları olan bilgi türlerine dair bütüncül bir yaklaşım edinmeye yöneliktir. Diyalektik düşünce ve ruhsallık bilgisinin yaşadığımız coğrafyanın dinamikleriyle buluşturulmasını amaçlar.",
  },
  {
    n: "1. Modül",
    title: "Psikodiyalektik Teori ve Pratik",
    slug: "1-modul",
    text: "Psikodiyalektik yaklaşımın teorik temellerini ve uygulama pratiklerini bir araya getirerek katılımcının ruhsallık, birey ve toplumsallık arasındaki ilişkileri derinlemesine kavramasını hedefler. Bireysel çalışmadan grup süreçlerine uzanan bu bütünsel yapı, düşünceyi deneyimle buluşturarak gerçek bir dönüşüm alanı açar.",
  },
  {
    n: "2. Modül",
    title: "Psikodiyalektik Çalışma",
    slug: "2-modul",
    text: "Psikodiyalektik düşünce bu aşamada yalnızca öğrenilmez, doğrudan çalışma içinde uygulanır. Kuramsal çerçeve; olgu analizleri, grup süreçleri ve bireysel deneyimle iç içe ilerleyerek katılımcının düşünme, anlama ve müdahale etme kapasitesini somut bir pratik içinde geliştirir.",
  },
  {
    n: "3. Modül",
    title: "Psikodiyalektik Formasyon İleri Kursu",
    slug: "3-modul",
    text: "Psikodiyalektik formasyonun derinleştiği ve katılımcının kendi çalışma biçimini kurmaya başladığı ileri bir aşamayı temsil eder. Kuram, klinik perspektif ve kültürel incelemeler bir araya gelerek düşünme ve uygulama arasında bütünlüklü bir yetkinlik oluşturur.",
  },
  {
    n: "4. Modül",
    title: "Tamamlayıcı Çalışmalar",
    slug: "4-modul",
    text: "Formasyonun ötesine geçmek isteyenler için düşünceyi derinleştiren bir eşlik sunar. Kavram çalışmaları, dil ve edebiyat üzerinden ruhsallık çok katmanlı bir biçimde yeniden düşünülür.",
  },
];

const Formation = () => (
  <>
    <PageHeader
      eyebrow="Kurslar"
      title={<>Beş aşamada <em className="italic font-normal">yapılandırılmış</em> bir gelişim yolculuğu.</>}
      description="Formasyon programımız; teori, diyalog ve uygulama olmak üzere üç eksen üzerinde, toplam 5 yıl süren modüler bir yapı içerir."
    />

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

    <CtaSection />
  </>
);

export default Formation;
