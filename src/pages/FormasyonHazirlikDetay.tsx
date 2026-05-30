import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowLeft, Info } from "lucide-react";
import { ReactNode } from "react";

type DersKonu = string | { grup: string; maddeler: string[] } | { aciklama: string };

type Ders = {
  baslik: string;
  egitmen: string;
  tarih: string;
  tur: string;
  konular: DersKonu[];
};

type Kurs = {
  modul: string;
  title: ReactNode;
  description: string;
  amac: ReactNode;
  icerik: { baslik: ReactNode; metin: string; not?: string; egitmen?: string; tarih?: string; tur?: string; konular?: DersKonu[] }[];
  sure: string;
  kimler: string;
  alinti?: string;
  katilimKosullari?: ReactNode;
  dersler?: Ders[];
  icerikBaslik?: string;
  modulIcerikBaslik?: string;
  not?: string;
  not2?: string;
};

const kurslar: Record<string, Kurs> = {
  "hazirlik": {
    modul: "Formasyon Hazırlık",
    title: <>Psikodiyalektik<br />Formasyona Hazırlık Programı</>,
    description: "Psikodiyalektik düşüncenin kaynakları olan bilgi türlerine dair bütüncül bir yaklaşım edinmeye yöneliktir. Diyalektik düşünce ve ruhsallık bilgisinin yaşadığımız coğrafyanın dinamikleriyle buluşturulmasını amaçlar.",
    amac: "Psikodiyalektik Formasyona Hazırlık Programı tüm disiplinlerden katılımcılara açıktır.",
    icerik: [
      { baslik: "Psikodiyalektik Düşünceye Giriş Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "18-19-20 Eylül 2026", tur: "Yüz yüze",
        konular: [
          "Ruhsallık kavramı üzerine",
          "Diyalektik düşünmenin temelleri",
          "Canlılık - ruhsallık - toplumsallık",
          "Tarihsel ve güncel çerçeve",
          { grup: "FREUD", maddeler: ["Rüya çalışmasının diyalektiği", "Kitle ruhsallığı", "Totem ve Tabu", "Uygarlık ve ruhsallık"] },
          { grup: "WİNNICOTT", maddeler: ["Geçiş diyalektiği", "İç ve dış dünya diyalektiği: kültürün yeri"] },
          { grup: "KLEIN", maddeler: ["Klein teorisi", "Başlangıçlara dair: bebeklik ve ilksellik", "Paranoid-şizoid ve depresif konum: kaos ve kozmos"] },
          "Psikososyolojik grup teorileri: Foulkes ve diğerleri",
          "Frankfurt Okulu",
          { grup: "GRUPANALİZ TARİHÇESİ", maddeler: ["Öncüler", "Fransız okulu", "İngiliz okulu"] },
          { grup: "PSİKODİYALEKTİK ÇALIŞMANIN TEMEL UĞRAKLARI", maddeler: ["Öngörüşme", "Psikodiyalektik bireysel çalışma", "Psikodiyalektik küçük grup çalışması", "Psikodiyalektik büyük grup çalışması"] },
        ],
      },

      { baslik: "25 Eylül 2026 - 21 Mayıs 2027", metin: "" },

      { baslik: "Psikodiyalektik", metin: "22 Eylül 2026 - 25 Mayıs 2027 tarihleri arasında Salı günleri saat 20.30-22.00 arasında yapılacaktır. 'Anadolu Ruhsallığı' ile dönüşümlü gerçekleştirilecektir.", egitmen: "Cemal Dindar", tur: "Hibrit",
        konular: [
          "Ruhsallık ve İnsanın Tarihi",
          "'Rüyaların Yorumu' ve 'Totem ve Tabu'",
          "Bilinç / Bilinçsiz-Olan Diyalektiği",
          "Bastırma ve Bastırılanın Geri Dönüşü, Semptom, Dil",
          "Ben ve O",
          "Ben Ülküsü ve Üstben",
          "Oidipus Bütünlüğü: Bireyin ve Türün Eşiği",
          "Tekinsizlik, Temel Acizlik, Tümgüçlülük, Yasa",
          "Kitle Ruhsallığı, Bölme, Özdeşleşme, Yansıtma",
          "Yansıtmalı Özdeşleşme",
          "Birey ve Grup Ruhsallığı",
        ],
      },
      { baslik: "Anadolu Ruhsallığı", metin: "22 Eylül 2026 - 25 Mayıs 2027 tarihleri arasında Salı günleri saat 20.30-22.00 arasında yapılacaktır. 'Psikodiyalektik Düşüncenin Kaynakları' ile dönüşümlü gerçekleştirilecektir.", egitmen: "Cemal Dindar", tur: "Hibrit",
        konular: [
          { grup: "Kuramsal temeller", maddeler: ["Avcı ve derleyiciler", "Çoban ve çiftçi", "Mezopotamya ve bozkır göçebe birikimi", "Medine ve çöl: İbni Haldun'un Mukaddime'si"] },
          { grup: "Temel karşıtlıklar ve birliği", maddeler: ["Anacıllık ve ataerkillik", "Kan bağı ve yer bağı", "Göçebe ve yerleşik", "Acı (ve) dirlik", "Şaman ve rahip kişilikleri"] },
          { grup: "Kuramsal sonuçlar", maddeler: ["Emek ve oluş: evcilleştirme süreçleri", "Göbeklitepe - Çatalhöyük - Troya: insan ruhsallığının sabitlik ve süreklilikleri", "Birincil süreçler ve üçgenleşme"] },
        ],
      },

      { baslik: "Video Dersler — 1. Dönem — 25 Eylül - 3 Aralık 2026", metin: "" },

      { baslik: "İnsanın Arkeolojisi", metin: "", egitmen: "İsmail Gezgin",
        konular: ["Konuşan/anlatan insan", "Kimlik sorunu ve inşası", "Sanat hangi ihtiyacın karşılığı?", "Uygarlık, inanç ve arkeoloji"],
      },
      { baslik: "Dilbilim ve BilinçsizOlan", metin: "", egitmen: "Zeynep Erk Emeksiz",
        konular: ["Dilbilimde temel kavramlar", "Dilde ve söylemde anlamın oluşumu", "Freud düşüncesi"],
      },
      { baslik: "Sınıf Deneyimlerinin Ruhsal Dinamikleri", metin: "", egitmen: "Hakan Koçak",
        konular: ["Çalışma acısı - çalışma neşesi: emek süreci, oyun ve gerçeklik", "Çalışma biçimleri ve kişilik", "Maddi değer ve ruhsal değer ilişkisi", "Bir örselenme biçimi olarak işsizlik: Çalışamayan emek ve melankoli"],
      },
      { baslik: "Psikomitoloji", metin: "", egitmen: "M. Bilgin Saydam",
        konular: ["Dünyadalığın serencâmı: öyküle(n)me", "Mitler: insanın kurucu öyküleri", "Mitsel zaman versus tarihsel zaman", "Mitlerin işlevi / Mitoloji - Mitojeni"],
      },
      { baslik: "Sosyal Teoride İnsan ve Toplum", metin: "", egitmen: "Göksel Aymaz",
        konular: ["Birer kavram olarak 'insan' ve 'toplum'", "Teorinin prehistoryası", "Mitsel düşüncede insan ve toplum", "Toplumun ilk insancıl eleştirisi: İslâm ve Hristiyan rönesansı"],
      },
      { baslik: "Ruh Sağlığı Tarihi", metin: "", egitmen: "Fatih Artvinli",
        konular: ["Ruh sağlığı ve tarihsellik"],
      },
      { baslik: "Nöropsikanaliz", metin: "", egitmen: "Hakan Atalay",
        konular: ["Kısa sinirbilim", "Kısa psikanaliz", "Kısa nöropsikanaliz"],
      },
      { baslik: "Yoksulluk ve Ruhsallık", metin: "", egitmen: "Hacer Foggo",
        konular: ["Derin yoksulluk halleri"],
      },

      { baslik: "Öğreticilerle Buluşma ve Atölyeler (4-5-6 Aralık 2026)" },
      { baslik: "4 Aralık 2026 Cuma", metin: "", tur: "Yüz yüze",
        konular: [
          "10.00-12.30: İnsanın Arkeolojisi Atölyesi / İsmail Gezgin",
          "13.30-16.00: Sosyal Teoride İnsan ve Toplum Atölyesi / Göksel Aymaz",
          "16.30-19.00: Yoksulluk ve Ruhsallık / Hacer Foggo",
        ],
      },
      { baslik: "5 Aralık 2026 Cumartesi", metin: "", tur: "Yüz yüze",
        konular: [
          "10.00-12.30: Nöropsikanaliz Atölyesi / Hakan Atalay",
          "13.30-16.00: Psikomitoloji Atölyesi / M. Bilgin Saydam",
          "16.30-19.00: Sınıf Deneyimlerinin Ruhsal Dinamikleri Atölyesi / Hakan Koçak",
        ],
      },
      { baslik: "6 Aralık 2026 Pazar", metin: "", tur: "Yüz yüze",
        konular: [
          "11.00-13.30: Ruh Sağlığı Tarihi Atölyesi / Fatih Artvinli",
          "14.30-17.00: Türkçenin Ruh Hali: Edebiyat Aynasında Ruhsallık Atölyesi / Fatih Artvinli",
        ],
      },

      { baslik: "Video Dersler — 2. Dönem — 11 Aralık 2026 - 25 Şubat 2027", metin: "" },

      { baslik: "İnsanın Arkeolojisi", metin: "", egitmen: "İsmail Gezgin",
        konular: ["Uygarlık ve ilerleme paradoksu", "Kimlik ve sabitlik"],
      },
      { baslik: "Sınıf Deneyimlerinin Ruhsal Dinamikleri", metin: "", egitmen: "Hakan Koçak",
        konular: ["Bastırılmış olanın geri dönüşü: Gizli yaralar", "Dayanışma ruhsallığı"],
      },
      { baslik: "Psikomitoloji", metin: "", egitmen: "M. Bilgin Saydam",
        konular: ["Oedipus Turcica"],
      },
      { baslik: "Sosyal Teoride İnsan ve Toplum", metin: "", egitmen: "Göksel Aymaz",
        konular: ["İnsanın ilk toplumsal eleştirisi: J. J. Rousseau ve Aydınlanma", "Birey ve toplumsal uyum: A. Comte, E. Durkheim ve M. Weber", "Tarih yapıcı özne olarak insan: G. Vico, J. G. Herder ve H. Spencer"],
      },
      { baslik: "Nöropsikanaliz", metin: "", egitmen: "Hakan Atalay",
        konular: ["Toplumsal beyin", "Psikoterapi ve beyin"],
      },
      { baslik: "Narsisizm, Oidipus ve Ötesi", metin: "", egitmen: "Hakan Kızıltan",
        konular: ["Narsisizm", "Oidipus"],
      },
      { baslik: "Bebek Ruhsallığı: Başlangıçlara Dair", metin: "", egitmen: "Beril Bayrak",
        konular: ["Bebek ruhsallığına dair tarihsel ve güncel bakışlar", "Bebeğin bildiği - Yetişkinin unuttuğu"],
      },
      { baslik: "Dil, İletişim, Ruhsallık", metin: "", egitmen: "Nehir Durna",
        konular: [
          "Dilbilim ve anlambilim: temel kavramlar",
          "Yapısal dilbilim: Saussure ve Göstergebilim — 'Genel Dilbilim Dersleri'",
          "Lévi-Strauss: 'Yapısal Antropoloji'",
          "Dil düzeni ve özne konumlanışı arasında BilinçsizOlan'ın izini sürmek: Freud, Lacan, Levinas, Kristeva",
        ],
      },

      { baslik: "Öğreticilerle Buluşma ve Atölyeler (26-27-28 Şubat 2027)" },
      { baslik: "26 Şubat 2027 Cuma", metin: "", tur: "Yüz yüze",
        konular: [
          "10.00-12.30: İnsanın Arkeolojisi Atölyesi / İsmail Gezgin",
          "13.30-16.00: Sosyal Teoride İnsan ve Toplum Atölyesi / Göksel Aymaz",
          "16.30-19.00: Bebek Ruhsallığı: Başlangıçlara Dair / Beril Bayrak",
        ],
      },
      { baslik: "27 Şubat 2027 Cumartesi", metin: "", tur: "Yüz yüze",
        konular: [
          "10.00-12.30: Nöropsikanaliz Atölyesi / Hakan Atalay",
          "13.30-16.00: Psikomitoloji Atölyesi / M. Bilgin Saydam",
          "16.30-19.00: Sınıf Deneyimlerinin Ruhsal Dinamikleri Atölyesi / Hakan Koçak",
        ],
      },
      { baslik: "28 Şubat 2027 Pazar", metin: "", tur: "Yüz yüze",
        konular: [
          "11.00-13.30: Dil, İletişim, Ruhsallık Atölyesi / Nehir Durna",
          "14.30-17.00: Narsisizm, Oidipus ve Ötesi / Hakan Kızıltan",
        ],
      },



      { baslik: "Video Dersler — 3. Dönem — 5 Mart - 27 Mayıs 2027", metin: "" },

      { baslik: "İnsanın Arkeolojisi", metin: "", egitmen: "İsmail Gezgin",
        konular: ["Maddi kültür ve okuma sorunu", "Ekmeğin dikte ettiği yaşam"],
      },
      { baslik: "Sınıf Deneyimlerinin Ruhsal Dinamikleri", metin: "", egitmen: "Hakan Koçak",
        konular: ["Emek, ekmek ve haysiyet: Üstbenin soykütüğü", "Sınıf deneyimleri ve ruhsallık: genel değerlendirme"],
      },
      { baslik: "Psikomitoloji", metin: "", egitmen: "M. Bilgin Saydam",
        konular: ["Psikoterapi: Bir mitoplasti uygulaması"],
      },
      { baslik: "Sosyal Teoride İnsan ve Toplum", metin: "", egitmen: "Göksel Aymaz",
        konular: ["Toplumsal bir üretim olarak insan: Marx", "20. ve 21. Yüzyıl düşüncesinden fragmanlar"],
      },
      { baslik: "Toplumsal Cinsiyet ve Dil", metin: "", egitmen: "Nehir Durna" },
      { baslik: "Tragedyalar: Kahraman-Kurban Ruhsallığı", metin: "", egitmen: "Semih Çelenk",
        konular: ["Kral Oidipus", "Medea ve Antigone", "Hamlet"],
      },
      { baslik: "Lacan Düşüncesi", metin: "", egitmen: "Zehra Eryörük",
        konular: ["Lacan düşüncesinin gelişimi"],
      },

      { baslik: "Öğreticilerle Buluşma ve Atölyeler (28-29-30 Mayıs 2027)" },
      { baslik: "28 Mayıs 2027 Cuma", metin: "", tur: "Yüz yüze",
        konular: [
          "10.00-12.30: İnsanın Arkeolojisi Atölyesi / İsmail Gezgin",
          "13.30-16.00: Sosyal Teoride İnsan ve Toplum Atölyesi / Göksel Aymaz",
          "16.30-19.00: Lacan Düşüncesi / Zehra Eryörük",
          { aciklama: "Öznenin bölünmüşlüğü ve arzunun diyalektiği" },
          { aciklama: "Kapitalizmin huzursuzluğu ve semptomları - Marx teorisine Lacan'cı bakış" },
        ],
      },
      { baslik: "29 Mayıs 2027 Cumartesi", metin: "", tur: "Yüz yüze",
        konular: [
          "10.00-12.30: Tragedyalar: Kahraman-Kurban Ruhsallığı / Semih Çelenk",
          "13.30-16.00: Psikomitoloji Atölyesi / M. Bilgin Saydam",
          "16.30-19.00: Sınıf Deneyimlerinin Ruhsal Dinamikleri Atölyesi / Hakan Koçak",
        ],
      },
      { baslik: "30 Mayıs 2027 Pazar", metin: "", tur: "Yüz yüze",
        konular: [
          "11.00-12.30: Toplumsal Cinsiyet ve Dil / Nehir Durna",
          "12.30-14.00: Toplumsal Cinsiyet ve Uygarlığın Huzursuzluğu / Cemal Dindar",
          "15.00-18.00: Toplumsal Cinsiyet Atölyesi / Nehir Durna - Cemal Dindar",
        ],
      },
    ],
    sure: "Eylül 2026 – Mayıs 2027",
    kimler: "Tüm disiplinlerden katılımcılara açıktır.",
    modulIcerikBaslik: "Program İçeriği",
    icerikBaslik: "",
  },
  "1-yil": {
    modul: "1. Yıl",
    title: <>Psikodiyalektik<br />Teori ve Pratik</>,
    description: "",
    amac: "",
    icerik: [
      {
        baslik: "Psikodiyalektik Düşünceye Giriş Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "18-19-20 Eylül", tur: "Yüz yüze",
        konular: [
          "Ruhsallık Kavramı Üzerine",
          "Diyalektik Düşünmenin Temelleri",
          "Canlılık - Ruhsallık - Toplumsallık",
          "Tarihsel ve Güncel Çerçeve",
          { grup: "FREUD", maddeler: ["Rüya Çalışmasının Diyalektiği", "Kitle Ruhsallığı", "Totem ve Tabu", "Uygarlık ve Ruhsallık"] },
          { grup: "WINNICOTT", maddeler: ["Geçiş Diyalektiği", "İç ve Dış Dünya Diyalektiği: Kültürün Yeri"] },
          { grup: "KLEIN", maddeler: ["Klein Teorisi", "Başlangıçlara Dair: Bebek ve İlkellik", "Paranoid-Şizoid ve Depresif Konum: Kaos ve Kozmos", "Psikososyolojik Grup Teorileri: Foulkes ve Diğerleri", "Frankfurt Okulu"] },
          { grup: "GRUP ANALİZ TARİHÇESİ", maddeler: ["Öncüler", "Fransız Okulu", "İngiliz Okulu"] },
          { grup: "PSİKODİYALEKTİK ÇALIŞMANIN TEMEL UĞRAKLARI", maddeler: ["Öngörüşme", "Psikodiyalektik Bireysel Çalışma", "Psikodiyalektik Küçük Grup Çalışması", "Psikodiyalektik Büyük Grup Çalışması"] },
        ],
      },
      { baslik: "Psikoterapinin Temel İlkeleri Kursu", metin: "", egitmen: "Yunus Emre Aydın", tarih: "16-17-18 Ekim", tur: "Yüz yüze",
        konular: [
          { grup: "16 Ekim\n15:00 - 19:00", maddeler: ["İlk Görüşme", "Çerçeve ve Etik İlkeler"] },
          { grup: "17 Ekim\n11:00 - 19:00", maddeler: ["Terapötik İşbirliği", "Psikanalitik Dinleme", "Olgu Çalışması"] },
          { grup: "18 Ekim\n11:00 - 19:00", maddeler: ["İçgörü ve Değişim", "Aktarım", "Karşı Aktarım", "Direnç ve Olumsuz Terapötik Tepki", "Derinlemesine Çalışma", "Olgu Sunumu"] },
        ],
      },
      { baslik: "Psikodiyalektik Çalışma Başlangıç Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "8-9-10 Ocak", tur: "Yüz yüze",
        konular: [
          "Psikodiyalektik Çalışma ve Gelişim",
          "Psikodiyalektik Çalışma: Teori ve Pratik",
          "Psikodiyalektik Çalışmada Zarf ve Mazruf",
          "'İnsan Olmak'",
          "'Kendini Bilmek'",
          "Ruhsal Çalışmanın Metaforu Olarak 'Büyümek'",
          "Bireyden Gruba… Zaman ve Mekan Duyumları",
          "İç Dünya-Dış Dünya Diyalektiği",
          "Psikodiyalektik Terapinin Uygulama Aşamaları",
          "Bireysel Çalışma Tekniği",
          "Küçük Grup Oluşumu: Cinselliğin Düzenlenmesi",
          "Büyük Grup Oluşumu: Saldırganlığın Düzenlenmesi",
          "Toplumsal Bağ: Cinsellik ve Saldırganlık Diyalektiği",
          "Psikodiyalektik Eğitimin Nitelikleri: Acı Dirlik - Şenlikli Bilgi",
          "Psikodiyalektik Süreçte Deneyimden Öğrenmek",
        ],
      },
      { baslik: "Psikodiyalektik Çalışmanın İlkeleri Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "9-10-11 Nisan", tur: "Yüz yüze",
        konular: [
          { grup: "Bireysel çalışmada ilkeler", maddeler: [
            "Ruhsal Çalışma: Çalışmanın Mobiusu",
            "Geçiş Alanları",
            "Aktarım ve Karşı-Aktarımın / İşgal ve Karşı-İşgalin Niteliği ve Dinamikleri",
          ]},
          { grup: "Küçük gruplarda ilkeler", maddeler: [
            "Ruhsal Çalışmanın Üçgenleşme Olanağı: Çalışmacı-Grup Üyeleri-Grup",
            "Küçük Gruplarda Zarf ve Mazruf",
            "Küçük Gruplarda Geçiş Alanları",
          ]},
          { grup: "Büyük gruplarda ilkeler", maddeler: [
            "Ruhsal Çalışmanın Çoklu Evreni: Dört-Boyutluluk",
            "Büyük Gruplarda Zarf ve Mazruf",
            "Geçiş Alanları",
            "Sonlu-Sonsuz Diyalektiği",
          ]},
          { grup: "Psikodiyalektik çalışmada süreç", maddeler: [
            "Özgürleşmek-Kendini Bilmek Metaforu Olarak Büyümek",
            "Bireyselden Gruba… Zaman ve Mekan Duyumları",
            "İç Dünya-Dış Dünya Diyalektiği",
            "Sfenks'in Bilmecesi",
          ]},
        ],
      },
      { baslik: "Temel Psikopatoloji Kursu", metin: "", egitmen: "Cem Atbaşoğlu - Timuçin Oral", tarih: "6-7 Şubat", tur: "Yüz yüze",
        konular: [
          "Hekim Kimliği, Psikiyatrinin İş Tanımı, Genel Tıpta Psikiyatrik Semptomlar",
          "Psikozlar: Belirtiler ve Ayırıcı Tanı",
          "Duygudurum ve Bozuklukları",
          "Anksiyete Bozuklukları ve OKB Spektrumu",
          "Nörogelişimsel Bozukluklar",
          "Genel Tıbbi Duruma Bağlı Psikiyatrik Tablolar",
        ],
      },
    ],
    sure: "Eylül 2026 – Mayıs 2027",
    kimler: "Psikodiyalektik formasyon hazırlık programını tamamlamış katılımcılar başvurabilir.",
    alinti: "\"Düşünmek bir eylemdir; ama düşünmeyi öğrenmek bir ömür sürer.\"",
    dersler: [
      {
        baslik: "Psikodiyalektik",
        egitmen: "Cemal Dindar",
        tarih: "22 Eylül 2026 - 25 Mayıs 2027 tarihleri arasında Salı günleri saat 20.30-22.00 arasında yapılacaktır. 'Anadolu Ruhsallığı' ile dönüşümlü gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: [
          "Ruhsallık ve İnsanın Tarihi",
          "'Rüyaların Yorumu' ve 'Totem ve Tabu'",
          "Bilinç / Bilinçsiz-Olan Diyalektiği",
          "Bastırma ve Bastırılanın Geri Dönüşü, Semptom, Dil",
          "Ben ve O",
          "Ben Ülküsü ve Üstben",
          "Oidipus Bütünlüğü: Bireyin ve Türün Eşiği",
          "Tekinsizlik, Temel Acizlik, Tümgüçlülük, Yasa",
          "Kitle Ruhsallığı, Bölme, Özdeşleşme, Yansıtma",
          "Yansıtmalı Özdeşleşme",
          "Birey ve Grup Ruhsallığı",
        ],
      },
      {
        baslik: "Anadolu Ruhsallığı",
        egitmen: "Cemal Dindar",
        tarih: "22 Eylül 2026 - 25 Mayıs 2027 tarihleri arasında Salı günleri saat 20.30-22.00 arasında yapılacaktır. 'Psikodiyalektik Düşüncenin Kaynakları' ile dönüşümlü gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: [
          { grup: "Kuramsal temeller", maddeler: ["Avcı ve derleyiciler", "Çoban ve çiftçi", "Mezopotamya ve bozkır göçebe birikimi", "Medine ve çöl: İbni Haldun'un Mukaddime'si"] },
          { grup: "Temel karşıtlıklar ve birliği", maddeler: ["Anacıllık ve ataerkillik", "Kan bağı ve yer bağı", "Göçebe ve yerleşik", "Acı (ve) dirlik", "Şaman ve rahip kişilikleri"] },
          { grup: "Kuramsal sonuçlar", maddeler: ["Emek ve oluş: evcilleştirme süreçleri", "Göbeklitepe - Çatalhöyük - Troya: insan ruhsallığının sabitlik ve süreklilikleri", "Birincil süreçler ve üçgenleşme"] },
        ],
      },
      {
        baslik: "Yavaş Okuma Çalışması",
        egitmen: "Cemal Dindar",
        tarih: "24 Eylül 2026 - 13 Mayıs 2027 tarihleri arasında Perşembe günleri 10.30-12.00 saatlerinde 'Diyalektik Metin Çalışmaları I' ile dönüşümlü gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: [
          "Tekinsizlik (1919), S. Freud",
          "Geçiş Nesneleri ve Geçiş Olguları (1951), W.D. Winnicott",
          "Kültürel Deneyimin Yeri (1967) W.D. Winnicott",
        ],
      },
      {
        baslik: "Diyalektik Metin Çalışmaları",
        egitmen: "Cemal Dindar",
        tarih: "21 Eylül 2026 - 10 Mayıs 2027 arasında iki haftada bir Pazartesi günleri 10.30-12.00 saatlerinde gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: [
          "Tinin Fenomenolojisi'nin Önsözü / W.F. Hegel",
        ],
      },
    ],
    icerikBaslik: "Kurslar",
    modulIcerikBaslik: "Program İçeriği",
  },
  "2-yil": {
    modul: "2. Yıl",
    title: "Psikodiyalektik Çalışma",
    description: "",
    amac: "",
    icerik: [
      { baslik: "Temel Psikopatoloji Kursu", metin: "", egitmen: "Cem Atbaşoğlu - Timuçin Oral", tarih: "6-7 Şubat", tur: "Hibrit",
        konular: [
          "Hekim Kimliği, Psikiyatrinin İş Tanımı, Genel Tıpta Psikiyatrik Semptomlar",
          "Psikozlar: Belirtiler ve Ayırıcı Tanı",
          "Duygudurum ve Bozuklukları",
          "Anksiyete Bozuklukları ve OKB Spektrumu",
          "Nörogelişimsel Bozukluklar",
          "Genel Tıbbi Duruma Bağlı Psikiyatrik Tablolar",
        ],
      },
      { baslik: <>Merkezin Dışındaki Sesler: Psikanalizde Dilsel<br />Hegemonya ve Görmezden Gelinen Öncüler Kursu</>, metin: "", egitmen: "Ahmet Kilisli", tarih: "14 - 15 Kasım", tur: "Hibrit",
        konular: [
          "Sándor Ferenczi",
          "José Bleger, Heinrich Racker, Enrique Pichon-Rivière",
          "Ignacio Matte Blanco, Armando Bianco Ferrari",
          "Arminda Aberastury",
          "Silvia Bleichmar",
          "Luciana Nissim Momigliano",
          "Marie Langer",
          "Madeleine Baranger",
          "Sabina Spielrein",
        ],
      },
      { baslik: "Bağlanma - Travma - Utanç Kursu", metin: "", egitmen: "İshak Sayğılı", tarih: "20 - 21 Şubat", tur: "Hibrit",
        konular: [
          "John Bowlby ve Bağlanma Kuramı'nı Yeniden Psikanalizin İçinden Düşünmek",
          "Sadizm ve Mazoşizmin Ruhsal Güzergahları Üzerine (Psikanalitik Güdü Kuramının Tanıtımı)",
          "Travma ve Psikanaliz (Freud'un Düşünüşünde Travmanın Seyri, Winnicott ve S. Erlich'in Kavramları Üzerine)",
          "Travmanın Negatifi (Botella'ların Kavramları ve Torok ve Abraham'ın Kavramları Üzerine)",
          "Travmanın Dili (Dana Amir ve Travmatik Dil)",
          "Utancın Ruhsal Güzergahları (Amati Sas'ın Utanç ve Travma Kuramı Üzerine)",
        ],
      },
      { baslik: "Psikodiyalektik Formasyon İleri Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "2-3-4 Temmuz 2027", tur: "Yüz yüze" },
    ],
    dersler: [
      {
        baslik: "Yavaş Okuma Çalışması: Klein Metinleri",
        egitmen: "Cemal Dindar",
        tarih: "21 Eylül 2026 - 10 Mayıs 2027 arasında iki haftada bir Pazartesi günleri saat 10.30-12.00 arasında hibrit yapılacaktır. 'Diyalektik Metin Çalışmaları II' ile dönüşümlü gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: ["Melanie Klein Okumaları"],
      },
      {
        baslik: "Diyalektik Metin Çalışmaları II",
        egitmen: "Cemal Dindar",
        tarih: "21 Eylül 2026 - 10 Mayıs 2027 arasında iki haftada bir Pazartesi günleri 10.30-12.00 arasında hibrit yapılacaktır. 'Klein Metinleri' ile dönüşümlü gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: ["Tinin Fenomenolojisi'nin Önsözü / W.F. Hegel"],
      },
      {
        baslik: "Psikodiyalektik Çalışma Temrinleri",
        egitmen: "",
        tarih: "11:00 - 18:00",
        tur: "Yüz yüze",
        konular: [
          { grup: "TARİHLER", maddeler: [
            "4 Ekim 2026",
            "1 Kasım 2026",
            "13 Aralık 2026",
            "4 Nisan 2027",
            "2 Mayıs 2027",
          ]},
        ],
      },
    ],
    sure: "Eylül 2026 – Mayıs 2027",
    kimler: "",
    alinti: "\"Bilmek başlangıçtır; uygulamak ise dönüşümün kendisidir.\"",
    icerikBaslik: "Kurslar",
  },
  "3-yil": {
    modul: "3. Yıl",
    title: "Psikodiyalektik Araştırmalar",
    description: "",
    amac: "",
    icerik: [
      { baslik: "Psikodiyalektik Formasyon İleri Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "3-4-5 Temmuz", tur: "Yüz yüze" },
      { baslik: "Temel Psikopatoloji Kursu", metin: "", egitmen: "Cem Atbaşoğlu - Timuçin Oral", tarih: "6-7 Şubat", tur: "Hibrit",
        konular: [
          "Hekim Kimliği, Psikiyatrinin İş Tanımı, Genel Tıpta Psikiyatrik Semptomlar",
          "Psikozlar: Belirtiler ve Ayırıcı Tanı",
          "Duygudurum ve Bozuklukları",
          "Anksiyete Bozuklukları ve OKB Spektrumu",
          "Nörogelişimsel Bozukluklar",
          "Genel Tıbbi Duruma Bağlı Psikiyatrik Tablolar",
        ],
      },
      { baslik: <>Merkezin Dışındaki Sesler: Psikanalizde Dilsel<br />Hegemonya ve Görmezden Gelinen Öncüler Kursu</>, metin: "", egitmen: "Ahmet Kilisli", tarih: "14 - 15 Kasım", tur: "Hibrit",
        konular: [
          "Sándor Ferenczi",
          "José Bleger, Heinrich Racker, Enrique Pichon-Rivière",
          "Ignacio Matte Blanco, Armando Bianco Ferrari",
          "Arminda Aberastury",
          "Silvia Bleichmar",
          "Luciana Nissim Momigliano",
          "Marie Langer",
          "Madeleine Baranger",
          "Sabina Spielrein",
        ],
      },
      { baslik: "Bağlanma - Travma - Utanç Kursu", metin: "", egitmen: "İshak Sayğılı", tarih: "20 - 21 Şubat", tur: "Hibrit",
        konular: [
          "John Bowlby ve Bağlanma Kuramı'nı Yeniden Psikanalizin İçinden Düşünmek",
          "Sadizm ve Mazoşizmin Ruhsal Güzergahları Üzerine (Psikanalitik Güdü Kuramının Tanıtımı)",
          "Travma ve Psikanaliz (Freud'un Düşünüşünde Travmanın Seyri, Winnicott ve S. Erlich'in Kavramları Üzerine)",
          "Travmanın Negatifi (Botella'ların Kavramları ve Torok ve Abraham'ın Kavramları Üzerine)",
          "Travmanın Dili (Dana Amir ve Travmatik Dil)",
          "Utancın Ruhsal Güzergahları (Amati Sas'ın Utanç ve Travma Kuramı Üzerine)",
        ],
      },
      { baslik: "Dersler" },
      { baslik: <>Shakespeare ve Psikodiyalektik:<br />Zaman, Mekan, Diyalektik Dönüşüm</>, metin: "Ekim 2026 - Mayıs 2027 arasında iki haftada bir Perşembe günleri saat 13.00-14.50 arasında hibrit yapılacaktır.", egitmen: "Emine Ayhan", tur: "Hibrit" },
      { baslik: <>Türkçenin Ruh Hali:<br />Edebiyat Aynasında Ruhsallık</>, metin: "Ekim 2026 - Ocak 2027 arasında iki haftada bir Perşembe günleri saat 13.00-14.50 arasında hibrit yapılacaktır.", egitmen: "Fatih Artvinli", tur: "Hibrit" },
      { baslik: "Tamamlayıcı Çalışmalar", not: "(Akademi Psikodiyalektik formasyon programı için tamamlayıcı çalışmalara katılım zorunlu değildir.)" },
      { baslik: "Psikodiyalektik Okur-Yazarlığı", metin: "7 Eylül 2026 - 28 Haziran 2027 tarihleri arasında Pazartesi günleri 12.30-14.30 saatlerinde 'Psikodiyalektik Kavram Çalışmaları' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kavram Çalışmaları", metin: "7 Eylül 2026 - 28 Haziran 2027 tarihleri arasında Pazartesi günleri 12.30-14.30 saatlerinde 'Psikodiyalektik Okur-Yazarlığı' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kültür Çalışmaları", metin: "Ekim 2026 - Mayıs 2027 tarihleri arasında (Ocak ayı hariç) ayda bir çalışma biçiminde olacak.", tur: "Hibrit" },
    ],
    sure: "Eylül 2026 – Mayıs 2027",
    kimler: "",
    alinti: "\"İleri gitmek; daha fazla bilmek değil, daha derinden anlamaktır.\"",
  },
  "4-modul": {
    modul: "4. Yıl",
    title: "Tamamlayıcı Çalışmalar",
    description: "Formasyonun ötesine geçmek isteyenler için düşünceyi derinleştiren bir eşlik sunar.",
    amac: <>
      <p>Kavram çalışmaları, dil ve edebiyat üzerinden ruhsallık çok katmanlı bir biçimde yeniden düşünülür. Bu yıl, psikodiyalektik formasyonu tamamlamış katılımcılara sürekli bir düşünsel zemin sunar.</p>
      <p className="italic">(Akademi Psikodiyalektik formasyon programı için tamamlayıcı çalışmalara katılım zorunlu değildir.)</p>
    </>,
    icerik: [
      { baslik: "Psikodiyalektik Okur-Yazarlığı", metin: "8 Eylül 2026 - 29 Haziran 2027 tarihleri arasında Salı günleri 10.30-12.30 saatlerinde 'Psikodiyalektik Kavram Çalışmaları' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kavram Çalışmaları", metin: "8 Eylül 2026 - 29 Haziran 2027 tarihleri arasında Salı günleri 10.30-12.30 saatlerinde 'Psikodiyalektik Okur-Yazarlığı' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: <>Türkçenin Ruh Hali:<br />Edebiyat Aynasında Ruhsallık</>, metin: "", egitmen: "Fatih Artvinli", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kültür İncelemeleri Kursu", metin: "Ekim 2026 - Mayıs 2027 tarihleri arasında ayda iki çalışma biçiminde olacak. Çalışmanın süresi 110 dakika…", tur: "Hibrit",
        konular: ["Shakespeare", "Dostoyevski"],
      },
    ],
    sure: "Eylül 2026 – Mayıs 2027",
    kimler: "Formasyon sürecini tamamlamış ve psikodiyalektik çalışmayı yaşam boyu bir pratik olarak benimsemek isteyen bireyler için tasarlanmıştır.",
    alinti: "\"Tamamlamak bir son değil; yeni bir başlangıcın zeminidir.\"",
    icerikBaslik: "Çalışmalar",
  },
};

const KursDetay = () => {
  const { slug } = useParams<{ slug: string }>();
  const kurs = kurslar[slug ?? ""];

  if (!kurs) {
    return (
      <section className="py-24">
        <div className="container-tight">
          <p className="text-muted-foreground">Kurs bulunamadı.</p>
          <Link to="/formasyon" className="mt-4 inline-flex items-center gap-2 text-navy-deep font-medium hover:text-amber transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kurslara dön
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={kurs.modul}
        title={kurs.title}
        description={kurs.description}
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div>
                <span className="text-[16px] font-bold uppercase tracking-[0.2em] text-navy-500 whitespace-pre-line">Süre</span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{kurs.sure}</p>
              </div>
              {kurs.kimler && (
              <div>
                <span className="text-[16px] font-bold uppercase tracking-[0.2em] text-navy-500 whitespace-pre-line">Kimler İçin</span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{kurs.kimler}</p>
              </div>
              )}
              <Link
                to="/formasyon"
                className="inline-flex items-center gap-2 text-sm text-navy-deep font-medium hover:text-amber transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Tüm kurslar
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
              {kurs.amac}
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-display text-[24px] text-navy-deep">{kurs.modulIcerikBaslik || "Program İçeriği"}</h2>
                {kurs.icerikBaslik !== "" && (
                  <h3 className="font-display text-[21px] text-navy-deep">{kurs.icerikBaslik || "Kurslar"}</h3>
                )}
              </div>
              <Accordion type="multiple">
                {kurs.icerik.map((item, i) => {
                  const hasContent = item.metin || item.egitmen || item.tarih || item.tur || item.konular;
                  if (!hasContent) {
                    return (
                      <div key={i} className="pt-8 pb-1">
                        <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-navy-500 mb-2">{item.baslik}</p>
                        <div className="h-px bg-border" />
                        {item.not && <p className="mt-3 text-sm italic text-muted-foreground">{item.not}</p>}
                      </div>
                    );
                  }
                  return (
                  <AccordionItem key={i} value={`item-${i}`} className="border-l-2 border-amber pl-6 border-b-0">
                    <AccordionTrigger className="font-display font-semibold text-[21px] text-navy-deep hover:no-underline items-start text-left [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[2.5] [&>svg]:mt-1">
                      {item.baslik}
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px] text-muted-foreground">
                      {(item.egitmen || item.tarih || item.tur) ? (
                        <div className="flex flex-col gap-0.5 text-xs font-sans mb-3">
                          {item.egitmen && <span>Öğretici: {item.egitmen}</span>}
                          {item.tarih && <span>Tarih: {item.tarih}</span>}
                          {item.tur && <span>Katılım: {item.tur}</span>}
                          {item.metin && <span className="mt-1">{item.metin}</span>}
                        </div>
                      ) : (
                        item.metin && <p className="mb-3">{item.metin}</p>
                      )}
                      {item.konular && (
                        <ul className="mt-6 space-y-2">
                          {item.konular.map((konu, j) =>
                            typeof konu === "string" ? (
                              <li key={j} className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber flex-shrink-0" />
                                {konu}
                              </li>
                            ) : "aciklama" in konu ? (
                              <li key={j} className="pl-1 italic text-[15px]">{konu.aciklama}</li>
                            ) : (
                              <li key={j} className="!mt-10 space-y-2">
                                <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-navy-500">{konu.grup.split('\n')[0]}</p>{konu.grup.includes('\n') && <p className="-mt-1 text-[16px] text-muted-foreground">{konu.grup.split('\n')[1]}</p>}
                                <ul className="space-y-2 pl-4">
                                  {konu.maddeler.map((madde, k) => (
                                    <li key={k} className="flex items-center gap-3">
                                      <span className="h-1.5 w-1.5 rounded-full bg-amber flex-shrink-0" />
                                      {madde}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {kurs.dersler && (
              <div className="space-y-4">
                <h2 className="font-display text-[21px] text-navy-deep">Dersler</h2>
                <Accordion type="multiple">
                  {kurs.dersler.map((ders, i) => (
                    <AccordionItem key={i} value={`ders-${i}`} className="border-l-2 border-amber pl-6 border-b-0">
                      <AccordionTrigger className="font-display font-semibold text-[21px] text-navy-deep hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[2.5]">
                        {ders.baslik}
                      </AccordionTrigger>
                      <AccordionContent className="text-[16px] text-muted-foreground">
                        <div className="flex flex-col gap-0.5 text-xs font-sans mb-3">
                          {ders.egitmen && <span>Öğretici: {ders.egitmen}</span>}
                          {ders.tur && <span>Katılım: {ders.tur}</span>}
                          {ders.tarih && <span>{ders.tarih}</span>}
                        </div>
                        <ul className="mt-4 space-y-2">
                          {ders.konular.map((konu, j) =>
                            typeof konu === "string" ? (
                              <li key={j} className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber flex-shrink-0" />
                                {konu}
                              </li>
                            ) : (
                              <li key={j} className="!mt-10 space-y-2">
                                <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-navy-500">{konu.grup.split('\n')[0]}</p>
                                {konu.grup.split('\n').slice(1).map((line, l) => (
                                  <p key={l} className="-mt-1 text-[16px] text-muted-foreground">{line}</p>
                                ))}
                                <ul className="space-y-2 pl-4 !mt-4">
                                  {konu.maddeler.map((madde, k) => (
                                    <li key={k} className="flex items-center gap-3">
                                      <span className="h-1.5 w-1.5 rounded-full bg-amber flex-shrink-0" />
                                      {madde}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {kurs.katilimKosullari && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl text-navy-deep">Formasyon Katılım Koşulları</h2>
                <div className="text-[16px] leading-relaxed text-muted-foreground">
                  {kurs.katilimKosullari}
                </div>
              </div>
            )}

            {kurs.not && (
              <div className="rounded-lg border border-navy-300/40 bg-navy-deep/5 px-6 py-5 flex gap-4 items-start">
                <Info className="h-5 w-5 text-navy-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-muted-foreground">{kurs.not}</p>
              </div>
            )}

            {kurs.not2 && (
              <div className="rounded-lg border border-navy-300/40 bg-navy-deep/5 px-6 py-5 flex gap-4 items-start">
                <Info className="h-5 w-5 text-navy-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-muted-foreground">{kurs.not2}</p>
              </div>
            )}

          </div>
        </div>
      </section>

</>
  );
};

export default KursDetay;
