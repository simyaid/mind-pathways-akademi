import { PageHeader } from "@/components/PageHeader";

const dersler = [
  { title: "Psikodiyalektik Düşünceye Giriş Kursu", instructor: "Cemal Dindar" },
  { title: "Psikodiyalektik Çalışma Başlangıç Kursu", instructor: "Cemal Dindar" },
  { title: "Psikodiyalektik Çalışmanın İlkeleri Kursu", instructor: "Cemal Dindar" },
  { title: "Psikodiyalektik Formasyon İleri Kursu", instructor: "Cemal Dindar" },
  { title: "Psikoterapinin Temel İlkeleri Kursu", instructor: "Yunus Emre Aydın" },
  { title: "Temel Psikoterapi Kursu", instructor: "Cem Atbaşoğlu – E. Timuçin Oral" },
  { title: "Merkezin Dışındaki Sesler: Psikanalizde Dilsel Hegemonya ve Görmezden Gelinen Öncüler", instructor: "Ahmet S. Kilisli" },
  { title: "Bağlanma – Travma – Utanç", instructor: "İshak Saygılı" },
];

const Dersler = () => (
  <>
    <PageHeader
      eyebrow="Psikodiyalektik Formasyon"
      title="Dersler"
      description=""
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight max-w-3xl">
        <div className="divide-y divide-border">
          {dersler.map((d, i) => (
            <div key={i} className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="font-medium text-navy-deep leading-snug">{d.title}</p>
              <p className="text-sm text-muted-foreground sm:text-right sm:shrink-0 sm:ml-8">{d.instructor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Dersler;
