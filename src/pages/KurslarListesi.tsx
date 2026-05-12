import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Node =
  | { kind: "text"; value: string }
  | { kind: "header"; value: string }
  | { kind: "items"; values: string[] };

type Kurs = {
  title: string;
  instructor: string;
  content: Node[];
};

const kurslar: Kurs[] = [
  {
    title: "Psikodiyalektik Düşünceye Giriş Kursu",
    instructor: "Cemal Dindar",
    content: [
      { kind: "items", values: ["Ruhsallık kavramı üzerine", "Diyalektik düşünmenin temelleri", "Canlılık – ruhsallık – toplumsallık", "Tarihsel ve güncel çerçeve"] },
      { kind: "header", value: "Freud" },
      { kind: "items", values: ["Rüya çalışmasının diyalektiği", "Kitle ruhsallığı", "Totem ve Tabu", "Uygarlık ve ruhsallık"] },
      { kind: "header", value: "Winnicott" },
      { kind: "items", values: ["Geçiş diyalektiği", "İç ve dış dünya diyalektiği: kültürün yeri"] },
      { kind: "header", value: "Klein" },
      { kind: "items", values: ["Klein teorisi", "Başlangıçlara dair: bebeklik ve ilksellik", "Paranoid-şizoid ve depresif konum: kaos ve kozmos"] },
      { kind: "items", values: ["Psikososyolojik grup teorileri: Foulkes ve diğerleri", "Frankfurt Okulu"] },
      { kind: "header", value: "Grupanaliz Tarihçesi" },
      { kind: "items", values: ["Öncüler", "Fransız okulu", "İngiliz okulu"] },
      { kind: "header", value: "Psikodiyalektik Çalışmanın Temel Uğrakları" },
      { kind: "items", values: ["Öngörüşme", "Psikodiyalektik bireysel çalışma", "Psikodiyalektik küçük grup çalışması", "Psikodiyalektik büyük grup çalışması"] },
    ],
  },
  {
    title: "Psikodiyalektik Çalışma Başlangıç Kursu",
    instructor: "Cemal Dindar",
    content: [
      { kind: "items", values: [
        "Psikodiyalektik çalışma ve gelişim",
        "Psikodiyalektik çalışma: teori ve pratik",
        "Psikodiyalektik çalışmada zarf ve mazruf",
        "'İnsan olmak'",
        "'Kendini bilmek'",
        "Ruhsal çalışmanın metaforu olarak 'büyümek'",
        "Bireyden gruba… zaman ve mekan duyumları",
        "İç dünya – dış dünya diyalektiği",
        "Psikodiyalektik terapinin uygulama aşamaları",
        "Bireysel çalışma tekniği",
        "Küçük grup oluşumu: cinselliğin düzenlenmesi",
        "Büyük grup oluşumu: saldırganlığın düzenlenmesi",
        "Toplumsal bağ: cinsellik ve saldırganlık diyalektiği",
        "Psikodiyalektik eğitimin nitelikleri: acı dirlik – şenlikli bilgi",
        "Psikodiyalektik süreçte deneyimden öğrenmek",
      ]},
    ],
  },
  {
    title: "Psikodiyalektik Çalışmanın İlkeleri Kursu",
    instructor: "Cemal Dindar",
    content: [
      { kind: "header", value: "Bireysel Çalışmada İlkeler" },
      { kind: "items", values: [
        "Ruhsal çalışma: çalışmanın mobiusu",
        "Geçiş alanları",
        "Aktarım ve karşı-aktarımın / işgal ve karşı-işgalin niteliği ve dinamikleri",
      ]},
      { kind: "header", value: "Küçük Gruplarda İlkeler" },
      { kind: "items", values: [
        "Ruhsal çalışmanın üçgenleşme olanağı: çalışmacı – grup üyeleri – grup",
        "Küçük gruplarda zarf ve mazruf",
        "Küçük gruplarda geçiş alanları",
      ]},
      { kind: "header", value: "Büyük Gruplarda İlkeler" },
      { kind: "items", values: [
        "Ruhsal çalışmanın çoklu evreni: dört-boyutluluk",
        "Büyük gruplarda zarf ve mazruf",
        "Geçiş alanları",
        "Sonlu – sonsuz diyalektiği",
      ]},
      { kind: "header", value: "Psikodiyalektik Çalışmada Süreç" },
      { kind: "items", values: [
        "Özgürleşmek – kendini bilmek metaforu olarak büyümek",
        "Bireyselden gruba… zaman ve mekan duyumları",
        "İç dünya – dış dünya diyalektiği",
        "Sfenks'in bilmecesi",
        "Sonlanış",
      ]},
    ],
  },
  {
    title: "Psikodiyalektik Formasyon İleri Kursu",
    instructor: "Cemal Dindar",
    content: [],
  },
  {
    title: "Psikoterapinin Temel İlkeleri Kursu",
    instructor: "Yunus Emre Aydın",
    content: [
      { kind: "items", values: [
        "İlk görüşme",
        "Çerçeve ve etik ilkeler",
        "Terapötik işbirliği",
        "Psikanalitik dinleme",
        "Olgu çalışması",
        "İçgörü ve değişim",
        "Aktarım",
        "Karşı aktarım",
        "Direnç ve olumsuz terapötik tepki",
        "Derinlemesine çalışma",
        "Olgu sunumu",
      ]},
    ],
  },
  {
    title: "Temel Psikopatoloji Kursu",
    instructor: "Cem Atbaşoğlu – E. Timuçin Oral",
    content: [
      { kind: "text", value: "Bu kursta tıbbi yaklaşım ve psikiyatrinin iş gördüğü alanın tanımlanması, bu alanda birikmiş olan bilgi ve deneyim ile kursa katılanların psikopatolojinin farklı kategorilerini tanılama ve ayırıcı tanı oluşturma becerisinin artırılması amaçlanmaktadır." },
      { kind: "text", value: "Psikozlar, duygudurum, anksiyete ve obsesif kompulsif spektrum, nörogelişimsel olgular ve genel tıbbi duruma bağlı psikopatolojiler ayırıcı ve tanımlayıcı yönleriyle değerlendirilecektir." },
      { kind: "header", value: "Kurs Programı" },
      { kind: "items", values: [
        "Hekim kimliği, psikiyatrinin iş tanımı, genel tıpta psikiyatrik semptomlar",
        "Psikozlar: belirtiler ve ayırıcı tanı",
        "Duygudurum ve bozuklukları",
        "Anksiyete bozuklukları ve OKB spektrumu",
        "Nörogelişimsel bozukluklar",
        "Genel tıbbi duruma bağlı psikiyatrik tablolar",
      ]},
    ],
  },
  {
    title: "Merkezin Dışındaki Sesler: Psikanalizde Dilsel Hegemonya ve Görmezden Gelinen Öncüler Kursu",
    instructor: "Ahmet S. Kilisli",
    content: [
      { kind: "text", value: "Psikanaliz tarihi, sıklıkla Londra, Paris ve Kuzey Amerika ekseninde yazılmış; İngilizce ve Fransızcanın dilsel hakimiyetiyle sınırları çizilmiş yekpare bir anlatı olarak sunulur. Peki, bu katı kurumsal çerçevenin ve dilsel tekelin dışında kalan, ana akım tarafından uzun yıllar görmezden gelinen veya \"periferi\" olarak kodlanan o devasa klinik ve kuramsal üretim alanında neler yaşandı?" },
      { kind: "text", value: "Bu sunum, psikanalitik kurumların \"merkez\" dışındaki sesleri nasıl ötekileştirdiğine ve sessizliğe mahkum ettiğine eleştirel bir mercek tutuyor." },
      { kind: "text", value: "Sándor Ferenczi'nin radikal teknik yenilikleri nedeniyle aforoz edilişinden başlayarak; Arjantin ve İspanyolca konuşulan dünyanın psikanaliz sahnesindeki devrimci isimlerine (José Bleger, Heinrich Racker, Enrique Pichon-Rivière), İtalyan ve Brezilya ekolünün (Ignacio Matte Blanco, Armando Bianco Ferrari) bedeni, mantığı ve analitik alanı yeniden tanımlayan sarsıcı çıkışlarına uzanan alternatif bir haritanın izini süreceğiz." },
      { kind: "text", value: "Psikanalizin ana dillerin ve büyük kurumların konforlu sınırlarından çıkıp; İspanyolca, İtalyanca ve Macarca gibi \"öteki\" dillerde nasıl zenginleştiği, çerçevenin ve karşıaktarımın nasıl yeniden icat edildiği anlatılmaya çalışılacaktır." },
      { kind: "items", values: [
        "Sándor Ferenczi",
        "José Bleger, Heinrich Racker, Enrique Pichon-Rivière",
        "Ignacio Matte Blanco, Armando Bianco Ferrari",
        "Arminda Aberastury",
        "Silvia Bleichmar",
        "Luciana Nissim Momigliano",
        "Marie Langer",
        "Madeleine Baranger",
        "Sabina Spielrein",
      ]},
    ],
  },
  {
    title: "Bağlanma – Travma – Utanç",
    instructor: "İshak Sayğılı",
    content: [
      { kind: "items", values: [
        "John Bowlby ve Bağlanma Kuramı'nı Yeniden Psikanalizin İçinden Düşünmek",
        "Sadizm ve Mazoşizmin Ruhsal Güzergahları Üzerine (Psikanalitik güdü kuramının tanıtımı)",
        "Travma ve Psikanaliz (Freud'un düşünüşünde travmanın seyri, Winnicott ve S. Erlich'in kavramları üzerine)",
        "Travmanın Negatifi (Botella'ların kavramları ve Torok ve Abraham'ın kavramları üzerine)",
        "Travmanın Dili (Dana Amir ve Travmatik Dil)",
        "Utancın Ruhsal Güzergahları (Amati Sas'ın Utanç ve Travma Kuramı üzerine)",
      ]},
    ],
  },
];

function renderNode(node: Node, i: number) {
  if (node.kind === "text") {
    return <p key={i} className="text-sm leading-relaxed text-muted-foreground">{node.value}</p>;
  }
  if (node.kind === "header") {
    return (
      <p key={i} className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500 pt-4">
        {node.value}
      </p>
    );
  }
  return (
    <ul key={i} className="space-y-1.5">
      {node.values.map((v, j) => (
        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
          <span className="h-px w-3 bg-amber flex-shrink-0 mt-[0.6rem]" />
          {v}
        </li>
      ))}
    </ul>
  );
}

const KurslarListesi = () => (
  <>
    <PageHeader
      eyebrow="Psikodiyalektik Formasyon"
      title="Kurslar"
      description=""
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight max-w-3xl">
        <Accordion type="multiple" className="space-y-2">
          {kurslar.map((k, i) => (
            <AccordionItem
              key={i}
              value={String(i)}
              className="border border-border rounded-lg px-6 bg-card shadow-soft"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <div className="text-left">
                  <p className="font-medium text-navy-deep leading-snug">{k.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-3 pt-2 border-t border-border">
                  <p className="text-xs font-medium text-navy-500">Öğretici: {k.instructor}</p>
                  {k.content.map((node, j) => renderNode(node, j))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default KurslarListesi;
