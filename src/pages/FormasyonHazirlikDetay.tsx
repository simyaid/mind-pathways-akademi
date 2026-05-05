import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowLeft, Info } from "lucide-react";
import { ReactNode } from "react";

type DersKonu = string | { grup: string; maddeler: string[] };

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
  icerik: { baslik: ReactNode; metin: string; egitmen?: string; tarih?: string; tur?: string; konular?: DersKonu[] }[];
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
  "formasyon-hazirlik": {
    modul: "1. Yıl",
    title: <>Psikodiyalektik<br />Teori ve Pratik</>,
    description: "Psikodiyalektik yaklaşımın teorik temellerini ve uygulama pratiklerini bir araya getirerek katılımcının ruhsallık, birey ve toplumsallık arasındaki ilişkileri derinlemesine kavramasını hedefler.",
    amac: "Bireysel çalışmadan grup süreçlerine uzanan bu bütünsel yapı, düşünceyi deneyimle buluşturarak gerçek bir dönüşüm alanı açar. Katılımcılar bu modülde psikodiyalektik düşüncenin temel kavramlarını öğrenir ve bunları pratik bağlamlarda uygulamaya başlar.",
    icerik: [
      {
        baslik: "Psikodiyalektik Düşünceye Giriş", metin: "", egitmen: "Cemal Dindar", tarih: "18-19-20 Eylül", tur: "Fiziksel Katılım",
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
      { baslik: "Psikoterapinin Temel İlkeleri", metin: "", egitmen: "Yunus Emre Aydın", tarih: "16-17-18 Ekim", tur: "Fiziksel Katılım",
        konular: [
          { grup: "16 Ekim\n15:00 - 19:00", maddeler: ["İlk Görüşme", "Çerçeve ve Etik İlkeler"] },
          { grup: "17 Ekim\n11:00 - 19:00", maddeler: ["Terapötik İşbirliği", "Psikanalitik Dinleme", "Olgu Çalışması"] },
          { grup: "18 Ekim\n11:00 - 19:00", maddeler: ["İçgörü ve Değişim", "Aktarım", "Karşı Aktarım", "Direnç ve Olumsuz Terapötik Tepki", "Derinlemesine Çalışma", "Olgu Sunumu"] },
        ],
      },
      { baslik: "Psikodiyalektik Çalışma Başlangıç Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "8-9-10 Ocak", tur: "Fiziksel Katılım",
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
      { baslik: "Psikodiyalektik Çalışmanın İlkeleri Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "9-10-11 Nisan", tur: "Fiziksel Katılım",
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
      { baslik: "Temel Psikopatoloji Kursu", metin: "", egitmen: "Cem Atbaşoğlu - Timuçin Oral", tarih: "6-7 Şubat", tur: "Fiziksel Katılım",
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
    sure: "1 Yıl",
    kimler: "Formasyon hazırlık aşamasını tamamlamış katılımcılar için tasarlanmıştır.",
    alinti: "\"Düşünmek bir eylemdir; ama düşünmeyi öğrenmek bir ömür sürer.\"",
    dersler: [
      {
        baslik: "Psikodiyalektik Düşünce",
        egitmen: "Cemal Dindar",
        tarih: "24 Eylül - 13 Mayıs tarihleri arasında Perşembe günleri 10:30 - 12:00 saatlerinde \"Yavaş Okuma Çalışması\" ile dönüşümlü gerçekleşecektir.",
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
        baslik: "Yavaş Okuma Çalışması",
        egitmen: "Cemal Dindar",
        tarih: "24 Eylül 2026 - 13 Mayıs 2027 tarihleri arasında Perşembe günleri 10.30-12.00 saatlerinde 'Psikodiyalektik Düşünceye Giriş Dersleri' ile dönüşümlü gerçekleştirilecektir.",
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
    icerikBaslik: "",
    modulIcerikBaslik: "Kurslar",
  },
  "1-modul": {
    modul: "2. Yıl",
    title: "Psikodiyalektik Çalışma",
    description: "Psikodiyalektik düşünce bu aşamada yalnızca öğrenilmez, doğrudan çalışma içinde uygulanır.",
    amac: "Kuramsal çerçeve; olgu analizleri, grup süreçleri ve bireysel deneyimle iç içe ilerleyerek katılımcının düşünme, anlama ve müdahale etme kapasitesini somut bir pratik içinde geliştirir. Bu süreçte bilgi, yalnızca kavranan değil, deneyimlenerek dönüştürülen bir yapıya dönüşür.",
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
      { baslik: <>Merkezin Dışındaki Sesler: Psikanalizde Dilsel<br />Hegemonya ve Görmezden Gelinen Öncüler</>, metin: "", egitmen: "Ahmet Kilisli", tarih: "20-21 Mart", tur: "Hibrit",
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
      { baslik: "Bağlanma - Travma - Utanç", metin: "", egitmen: "İshak Saygılı", tarih: "14-15 Kasım", tur: "Hibrit",
        konular: [
          "John Bowlby ve Bağlanma Kuramı'nı Yeniden Psikanalizin İçinden Düşünmek",
          "Sadizm ve Mazoşizmin Ruhsal Güzergahları Üzerine (Psikanalitik Güdü Kuramının Tanıtımı)",
          "Travma ve Psikanaliz (Freud'un Düşünüşünde Travmanın Seyri, Winnicott ve S. Erlich'in Kavramları Üzerine)",
          "Travmanın Negatifi (Botella'ların Kavramları ve Torok ve Abraham'ın Kavramları Üzerine)",
          "Travmanın Dili (Dana Amir ve Travmatik Dil)",
          "Utancın Ruhsal Güzergahları (Amati Sas'ın Utanç ve Travma Kuramı Üzerine)",
        ],
      },
      { baslik: "Psikodiyalektik Formasyon İleri Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "2-3-4 Temmuz 2027", tur: "Yüzyüze" },
      { baslik: "Psikodiyalektik Olgu Çalışması", metin: "21 Eylül 2026 - 28 Haziran 2027 tarihleri arasında her Pazartesi 16.00-17.30 arasında yapılacaktır.", tur: "Çevrimiçi" },
      { baslik: "Psikodiyalektik Kültür Çalışmaları", metin: "Ayda bir yapılacaktır." },
    ],
    dersler: [
      {
        baslik: "Klein Çalışması",
        egitmen: "Cemal Dindar",
        tarih: "21 Eylül 2026 - 10 Mayıs 2027 arasında iki haftada bir Pazartesi günleri saat 10.30-12.00 arasında hibrit yapılacaktır. 'Diyalektik Metin Çalışmaları' ile dönüşümlü gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: ["Melanie Klein Okumaları"],
      },
      {
        baslik: "Diyalektik Metin Çalışmaları",
        egitmen: "Cemal Dindar",
        tarih: "21 Eylül 2026 - 10 Mayıs 2027 arasında iki haftada bir Pazartesi günleri 10.30-12.00 arasında hibrit yapılacaktır. 'Klein Çalışması' ile dönüşümlü gerçekleştirilecektir.",
        tur: "Hibrit",
        konular: ["Tinin Fenomenolojisi'nin Önsözü / W.F. Hegel"],
      },
      {
        baslik: "Psikodiyalektik Çalışma Temrinleri",
        egitmen: "",
        tarih: "11:00 - 18:00",
        tur: "Yüzyüze",
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
    sure: "1 Yıl",
    kimler: "1. Modülü tamamlamış ve psikodiyalektik teoriye hâkim olan katılımcılar için tasarlanmıştır.",
    alinti: "\"Bilmek başlangıçtır; uygulamak ise dönüşümün kendisidir.\"",
    icerikBaslik: "Kurslar",
  },
  "2-modul": {
    modul: "3. Yıl",
    title: <>Psikodiyalektik<br />Formasyon İleri Kursu</>,
    description: "Psikodiyalektik formasyonun derinleştiği ve katılımcının kendi çalışma biçimini kurmaya başladığı ileri bir aşamayı temsil eder.",
    amac: "Kuram, klinik perspektif ve kültürel incelemeler bir araya gelerek düşünme ve uygulama arasında bütünlüklü bir yetkinlik oluşturur. Katılımcılar bu aşamada yalnızca uygulaycı değil, aynı zamanda psikodiyalektik kültürün taşıyıcısı olmaya başlar.",
    icerik: [
      { baslik: "Psikodiyalektik Formasyon İleri Kursu", metin: "", egitmen: "Cemal Dindar", tarih: "3-4-5 Temmuz", tur: "Yüzyüze" },
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
      { baslik: <>Merkezin Dışındaki Sesler: Psikanalizde Dilsel<br />Hegemonya ve Görmezden Gelinen Öncüler</>, metin: "", egitmen: "Ahmet Kilisli", tarih: "20-21 Mart", tur: "Hibrit",
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
      { baslik: "Bağlanma - Travma - Utanç", metin: "", egitmen: "İshak Saygılı", tarih: "14-15 Kasım", tur: "Hibrit",
        konular: [
          "John Bowlby ve Bağlanma Kuramı'nı Yeniden Psikanalizin İçinden Düşünmek",
          "Sadizm ve Mazoşizmin Ruhsal Güzergahları Üzerine (Psikanalitik Güdü Kuramının Tanıtımı)",
          "Travma ve Psikanaliz (Freud'un Düşünüşünde Travmanın Seyri, Winnicott ve S. Erlich'in Kavramları Üzerine)",
          "Travmanın Negatifi (Botella'ların Kavramları ve Torok ve Abraham'ın Kavramları Üzerine)",
          "Travmanın Dili (Dana Amir ve Travmatik Dil)",
          "Utancın Ruhsal Güzergahları (Amati Sas'ın Utanç ve Travma Kuramı Üzerine)",
        ],
      },
      { baslik: "Psikodiyalektik Kültür İncelemeleri", metin: "Ekim 2026 - Mayıs 2027 tarihleri arasında ayda iki çalışma biçiminde olacak. Çalışmanın süresi 110 dakika…", egitmen: "Emine Ayhan", tur: "Hibrit",
        konular: ["Shakespeare"],
      },
    ],
    sure: "1 Yıl",
    kimler: "2. Modülü tamamlamış ve psikodiyalektik çalışmada belirli bir olgunluk kazanmış katılımcılar için tasarlanmıştır.",
    alinti: "\"İleri gitmek; daha fazla bilmek değil, daha derinden anlamaktır.\"",
  },
  "3-modul": {
    modul: "4. Yıl",
    title: "Tamamlayıcı Çalışmalar",
    description: "Formasyonun ötesine geçmek isteyenler için düşünceyi derinleştiren bir eşlik sunar.",
    amac: <>
      <p>Kavram çalışmaları, dil ve edebiyat üzerinden ruhsallık çok katmanlı bir biçimde yeniden düşünülür. Bu modül, psikodiyalektik formasyonu tamamlamış katılımcılara sürekli bir düşünsel zemin sunar.</p>
      <p className="italic">(Akademi Psikodiyalektik formasyon programı için tamamlayıcı çalışmalara katılım zorunlu değildir.)</p>
    </>,
    icerik: [
      { baslik: "Psikodiyalektik Okur-Yazarlığı", metin: "8 Eylül 2026 - 29 Haziran 2027 tarihleri arasında Salı günleri 10.30-12.30 saatlerinde 'Psikodiyalektik Kavram Çalışmaları' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kavram Çalışmaları", metin: "8 Eylül 2026 - 29 Haziran 2027 tarihleri arasında Salı günleri 10.30-12.30 saatlerinde 'Psikodiyalektik Okur-Yazarlığı' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: <>Türkçenin Ruh Hali:<br />Edebiyat Aynasında Ruhsallık</>, metin: "", egitmen: "Fatih Artvinli", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kültür İncelemeleri", metin: "Ekim 2026 - Mayıs 2027 tarihleri arasında ayda iki çalışma biçiminde olacak. Çalışmanın süresi 110 dakika…", tur: "Hibrit",
        konular: ["Shakespeare", "Dostoyevski"],
      },
    ],
    sure: "Tamamlayıcı dönem",
    kimler: "Formasyon sürecini tamamlamış ve psikodiyalektik çalışmayı yaşam boyu bir pratik olarak benimsemek isteyen bireyler için tasarlanmıştır.",
    alinti: "\"Tamamlamak bir son değil; yeni bir başlangıcın zeminidir.\"",
    icerikBaslik: "Çalışmalar",
  },
  "4-modul": {
    modul: "4. Yıl",
    title: "Tamamlayıcı Çalışmalar",
    description: "Formasyonun ötesine geçmek isteyenler için düşünceyi derinleştiren bir eşlik sunar.",
    amac: <>
      <p>Kavram çalışmaları, dil ve edebiyat üzerinden ruhsallık çok katmanlı bir biçimde yeniden düşünülür. Bu modül, psikodiyalektik formasyonu tamamlamış katılımcılara sürekli bir düşünsel zemin sunar.</p>
      <p className="italic">(Akademi Psikodiyalektik formasyon programı için tamamlayıcı çalışmalara katılım zorunlu değildir.)</p>
    </>,
    icerik: [
      { baslik: "Psikodiyalektik Okur-Yazarlığı", metin: "8 Eylül 2026 - 29 Haziran 2027 tarihleri arasında Salı günleri 10.30-12.30 saatlerinde 'Psikodiyalektik Kavram Çalışmaları' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kavram Çalışmaları", metin: "8 Eylül 2026 - 29 Haziran 2027 tarihleri arasında Salı günleri 10.30-12.30 saatlerinde 'Psikodiyalektik Okur-Yazarlığı' ile dönüşümlü yapılacaktır.", egitmen: "Cemal Dindar", tur: "Hibrit" },
      { baslik: <>Türkçenin Ruh Hali:<br />Edebiyat Aynasında Ruhsallık</>, metin: "", egitmen: "Fatih Artvinli", tur: "Hibrit" },
      { baslik: "Psikodiyalektik Kültür İncelemeleri", metin: "Ekim 2026 - Mayıs 2027 tarihleri arasında ayda iki çalışma biçiminde olacak. Çalışmanın süresi 110 dakika…", tur: "Hibrit",
        konular: ["Shakespeare", "Dostoyevski"],
      },
    ],
    sure: "Tamamlayıcı dönem",
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
                <p className="mt-2 font-display text-lg text-navy-deep">{kurs.sure}</p>
              </div>
              <div>
                <span className="text-[16px] font-bold uppercase tracking-[0.2em] text-navy-500 whitespace-pre-line">Kimler İçin</span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{kurs.kimler}</p>
              </div>
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
                <h2 className="font-display text-[24px] text-navy-deep">{kurs.modulIcerikBaslik || "Modül İçeriği"}</h2>
                {kurs.icerikBaslik !== "" && (
                  <h3 className="font-display text-[21px] text-navy-deep">{kurs.icerikBaslik || "Kurslar"}</h3>
                )}
              </div>
              <Accordion type="multiple">
                {kurs.icerik.map((item, i) => {
                  const hasContent = item.metin || item.egitmen || item.tarih || item.tur || item.konular;
                  if (!hasContent) {
                    return (
                      <div key={i} className="border-l-2 border-amber pl-6 py-4">
                        <span className="font-display font-semibold text-[21px] text-navy-deep">{item.baslik}</span>
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
                          {item.egitmen && <span>Eğitmen: {item.egitmen}</span>}
                          {item.tarih && <span>Tarih: {item.tarih}</span>}
                          {item.tur && <span>Eğitim Formatı: {item.tur}</span>}
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
                          {ders.egitmen && <span>Eğitmen: {ders.egitmen}</span>}
                          {ders.tur && <span>Eğitim Formatı: {ders.tur}</span>}
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
