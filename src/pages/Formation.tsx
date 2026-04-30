import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { CtaSection } from "@/components/CtaSection";

const steps = [
  {
    n: "01",
    title: "Başvuru ve Ön Görüşme",
    text: "Programa ilgi duyan adaylarla yapılan kısa motivasyon görüşmesi. Beklentilerin ve yönelimin netleşmesi.",
    duration: "1 hafta",
  },
  {
    n: "02",
    title: "Teorik Modül",
    text: "Klasik psikoloji ekolleri, kıta felsefesi ve etik temelleri. Okuma listesi ve seminer çalışmaları.",
    duration: "8 hafta",
  },
  {
    n: "03",
    title: "Diyalektik Tartışma",
    text: "Küçük gruplarla yürütülen yapılandırılmış tartışma oturumları. Argümantasyon ve kavramsal netlik.",
    duration: "6 hafta",
  },
  {
    n: "04",
    title: "Vaka Çalışmaları",
    text: "Klinik vaka örnekleri üzerinden uygulamalı analiz. Süpervizyon eşliğinde yürütülen atölyeler.",
    duration: "8 hafta",
  },
  {
    n: "05",
    title: "Bireysel Proje",
    text: "Katılımcının kendi ilgi alanı doğrultusunda hazırladığı bir bitirme çalışması ve sunumu.",
    duration: "4 hafta",
  },
  {
    n: "06",
    title: "Sertifikasyon",
    text: "Akademik kurul değerlendirmesinin ardından formasyon sertifikası ve mezunlar ağına katılım.",
    duration: "—",
  },
];

const Formation = () => (
  <>
    <PageHeader
      eyebrow="Formasyon Süreci"
      title={<>Altı aşamada <em className="italic font-normal">yapılandırılmış</em> bir gelişim yolculuğu.</>}
      description="Formasyon programımız; teori, diyalog ve uygulama olmak üzere üç eksen üzerinde, toplam 27 hafta süren modüler bir yapı içerir."
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
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-amber">{s.duration}</p>
                  </div>
                </div>

                {/* Content side */}
                <div className={`pl-12 sm:pl-16 lg:pl-0 ${i % 2 === 1 ? "lg:pr-16 lg:order-1" : "lg:pl-16"} lg:col-span-1`}>
                  <div className="bg-card border border-border rounded-lg p-7 lg:p-8 shadow-soft">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-navy-deep">{s.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{s.text}</p>
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
