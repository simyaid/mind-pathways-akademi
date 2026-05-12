import { PageHeader } from "@/components/PageHeader";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ahmetKilisliPhoto from "@/assets/Kadro/AhmetKilisli.png";
import bilginSaydamPhoto from "@/assets/Kadro/BilginSaydam.png";
import cemAtbasogluPhoto from "@/assets/Kadro/CemAtbaşoğlu.png";
import cemalDindarPhoto from "@/assets/Kadro/CemalDindar.png";
import fatihArtvinliPhoto from "@/assets/Kadro/FatihArtvinli.png";
import hacerFoggoPhoto from "@/assets/Kadro/HacerFoggo.png";
import hakanAtalayPhoto from "@/assets/Kadro/HakanAtalay.png";
import hakanKiziltanPhoto from "@/assets/Kadro/HakanKızıltan.png";
import hakanKocakPhoto from "@/assets/Kadro/HakanKocak.png";
import ismailGezginPhoto from "@/assets/Kadro/İsmailGezgin.png";
import nehirDurnaPhoto from "@/assets/Kadro/NehirDurna.png";
import nevzatKarakisPhoto from "@/assets/Kadro/NevzatKarakış.png";
import salmanUnlugedikPhoto from "@/assets/Kadro/SalmanUnlugedik.png";
import semihCelenkPhoto from "@/assets/Kadro/SemihCelenk.png";
import timucinOralPhoto from "@/assets/Kadro/TimuçinOral.png";
import yunusEmreAydinPhoto from "@/assets/Kadro/YunusEmreAydin.png";
import zehraEryorukPhoto from "@/assets/Kadro/ZehraEryoruk.png";

export const team = [
  {
    slug: "bilgin-saydam",
    name: "M. Bilgin Saydam",
    role: "Psikiyatri & Psikoterapi",
    initials: "BS",
    photo: bilginSaydamPhoto,
    bio: "Psikiyatr ve psikoterapist. Psikodinamik psikoterapiler, psikoterapi felsefesi ile kişilik örgütlenme ve bozuklukları üzerine çalışmaktadır. İstanbul Psikomitoloji Çalışma Grubu'nun kurucusudur.",
    long: "Psikiyatr ve psikoterapist. İstanbul Tıp Fakültesi 1980 mezunudur. Zürih Üniversitesi'nde nörofizyoloji alanındaki doktora çalışmasının ardından, Ruh Sağlığı ve Hastalıkları uzmanlık eğitimini İsviçre'de tamamladı. 1989'dan bu yana İstanbul Üniversitesi İstanbul Tıp Fakültesi Psikiyatri Anabilim Dalı öğretim üyesidir.",
    longExtra: "İlgi ve çalışma alanını 'psikomitoloji' şemsiyesi altında psikodinamik psikoterapiler, psikoterapi felsefesi ile kişilik örgütlenme ve bozuklukları oluşturmaktadır. İstanbul Psikomitoloji Çalışma Grubu'nun (www.psikomitoloji.com) kurucusudur.",
    focus: ["Psikodinamik Psikoterapi", "Psikomitoloji", "Kişilik Bozuklukları"],
  },
  {
    slug: "cemal-dindar",
    name: "Cemal Dindar",
    role: "Psikiyatri & Psikodiyalektik",
    initials: "CD",
    photo: cemalDindarPhoto,
    bio: "Psikiyatrist. Diyalektik düşünce ile psikanaliz arasındaki geçiş alanları, politik psikoloji eleştirisi ve psikiyatri eleştirisi üzerine çalışmalarıyla tanınır. Halk İçin Psikoterapi Derneği'nde psikoterapi hizmetlerinin bir insan hakkı olarak ulaşılabilir hale getirilmesi çabası içindedir.",
    long: "1994 yılında Cerrahpaşa Tıp Fakültesi İngilizce Bölümü'nde tıp eğitimini bitirdi ve Bakırköy Akıl Hastanesi'nde psikiyatri uzmanlığı eğitimine başladı. Tıp fakültesinde Değirmenlere Karşı dergisini, Bakırköy'de hastalar ve sağlık çalışanlarıyla birlikte hazırlanan Aura dergisini çıkartan grubun içinde yer aldı. 2000 yılında psikiyatri uzmanı oldu. İki yıl Şanlıurfa Devlet Hastanesi'nde çalıştı; bu dönem ruhsallık ve sosyokültürel etkenler arasındaki ilişkilere yoğunlaşan gözlemlerde bulundu. Bu gözlemlerini ilk kitabı olan Yuvasız Kuşlar Gibi / 'Deliliğin Resimli Sivil Tarihi'nde yayınladı.",
    longExtra: "İstanbul'a yerleştikten sonra 'Anadolu ruhsallığı' başlığı altında sosyokültürel etkenlerle ruhsallık ilişkisine dair yazılar yayınladı; politik psikoloji eleştirileri, psikiyatri eleştirisi, diyalektik düşünce ile psikanaliz arasındaki geçiş alanları üzerine çalışmalarını yoğunlaştırdı. Psikodiyalektik Araştırmalar Derneği emekçiliği ve Akıl Defteri dergisinin editörlüğünü yaptı. Halk İçin Psikoterapi Derneği'nde psikoterapi kuramlarının eşitlikçi ilkeyle dönüştürülmesi ve psikoterapi hizmetlerinin bir insan hakkı olarak ulaşılabilir hale getirilmesi çabası yönünde çalışmalarını sürdürmektedir. Dindar'ın yayınlanmış çok sayıda makale ve kitabı vardır.",
    focus: ["Psikodiyalektik", "Diyalektik Düşünce", "Psikiyatri Eleştirisi"],
  },
  {
    slug: "fatih-artvinli",
    name: "Fatih Artvinli",
    role: "Tıp & Psikiyatri Tarihi",
    initials: "FA",
    photo: fatihArtvinliPhoto,
    bio: "Tıp ve psikiyatri tarihçisi. Akıl hastaneleri ve deliliğin sosyal, politik ve kültürel tarihiyle meşgul. Delilik, Siyaset ve Toplum: Toptaşı Bimarhanesi kitabının yazarı.",
    long: "Tıp ve psikiyatri tarihçisi. Bakırköy Ruh ve Sinir Hastalıkları Hastanesi'nde çalıştı. Akıl hastaneleri ve deliliğin sosyal, politik ve kültürel tarihiyle meşgul.",
    longExtra: "Delilik, Siyaset ve Toplum: Toptaşı Bimarhanesi kitabının yazarı.",
    focus: ["Psikiyatri Tarihi", "Akıl Hastaneleri", "Kültürel Tarih"],
  },
  {
    slug: "gorsel-aymaz",
    name: "Göksel Aymaz",
    role: "Sosyal Antropoloji & İletişim",
    initials: "GA",
    bio: "Marmara Üniversitesi İletişim Fakültesi'nde öğretim üyesi. Sanat, politika ve kültür sosyolojisi ile toplumsal kuram üzerine yazılar yazmaktadır.",
    long: "Marmara Üniversitesi İletişim Fakültesi'nde öğretim üyesi. İstanbul Üniversitesi'nde Sosyal Antropoloji okudu (1993). Basın sektöründe bir süre editör ve yayın yönetmeni olarak çalıştı.",
    longExtra: "Çeşitli dergi ve gazetelerde sanat, politika ve kültür sosyolojisi ile toplumsal kuram üzerine yazılar yazdı.",
    focus: ["Sosyal Antropoloji", "Kültür Sosyolojisi", "Toplumsal Kuram"],
  },
  {
    slug: "hacer-foggo",
    name: "Hacer Foggo",
    role: "Gazetecilik & Sosyal Aktivizm",
    initials: "HF",
    photo: hacerFoggoPhoto,
    bio: "İnsan hakları ve kent yoksulluğu üzerine çalışan gazeteci ve sosyal girişimci. Çimenev Bilim ve Sanat Merkezi ile Derin Yoksulluk Ağı'nın kurucusu. Askıda Hayatlar - Yoksulluk Günlükleri kitabının yazarı.",
    long: "Hacer Foggo, ağırlıklı olarak insan hakları konularına odaklanan çeşitli gazete ve dergilerde 15 yıl boyunca muhabir olarak çalıştı. 2003 yılından bu yana kent yoksulluğu üzerine çalışmalar yapan Foggo, 2016 yılında İstanbul'da ekonomik nedenlerle okula devam etmeyen, okulu terk çocuklar ve annelerine yönelik Çimenev Bilim ve Sanat Merkezi'ni kurdu.",
    longExtra: "2020 yılında pandemi başlamasından 5 gün sonra Derin Yoksulluk Ağı'nı kurarak temel ihtiyaçlara ulaşamayan ailelere destek oldu. Halen ülke genelinde derin yoksullukla ilgili çalışmalarına devam ediyor. Askıda Hayatlar - Yoksulluk Günlükleri adında yayınlanmış kitabı var.",
    focus: ["Kent Yoksulluğu", "İnsan Hakları", "Sosyal Girişimcilik"],
  },
  {
    slug: "hakan-atalay",
    name: "Hakan Atalay",
    role: "Psikiyatri",
    initials: "HA",
    photo: hakanAtalayPhoto,
    bio: "1985'te Ankara Üniversitesi Tıp Fakültesi mezunu; psikiyatri ihtisasını Bakırköy'de tamamladı. 2005'ten bu yana Yeditepe Üniversitesi'nde öğretim üyesi olarak görev yapmaktadır.",
    long: "1985'te Ankara Üniversitesi Tıp Fakültesi'nden mezun olduktan sonra psikiyatri ihtisasını Bakırköy'de (Mazhar Osman Uzman Ruh ve Sinir Hastalıkları Eğitim ve Araştırma Hastanesi) tamamladı. Kısa bir ara dışında, 2005'ten bu yana Yeditepe Üniversitesi'nde öğretim üyesi olarak çalışıyor.",
    longExtra: "",
    focus: ["Psikiyatri", "Klinik Uygulama", "Eğitim"],
  },
  {
    slug: "hakan-kiziltan",
    name: "Hakan Kızıltan",
    role: "Klinik Psikoloji & Psikanaliz Tarihi",
    initials: "HK",
    photo: hakanKiziltanPhoto,
    bio: "Klinik psikolog, psikoterapist ve süpervizör. Türkiye psikanaliz tarihi, narsisizm ve dinamik psikoterapi üzerine çalışmaktadır. WABİ PSİKO-DİNAMİK AKADEMİ'nin kurucusudur.",
    long: "İstanbul Üniversitesi Psikoloji bölümünde lisans ve yüksek lisans eğitimini tamamladı. Yüksek lisans tezinde narsisizm üzerine çalışmış, dinamik psikoterapi alanında klinik eğitim görmüştür. Doktora eğitimini İstanbul Tıp Fakültesi Tıp Tarihi ve Etik Anabilim Dalı'nda tamamlamış; doktora tezinde Türkiye psikanaliz tarihini çalışmıştır. Bahçeşehir Üniversitesi ve Acıbadem Üniversitesi Klinik Psikoloji Yüksek Lisans programlarında öğretim görevlisi olarak çalışmıştır.",
    longExtra: "Türkiye Psikanaliz Tarihi (Minotor/İthaki, 2024) ve Türkiye Psikanaliz Tarihi'nde Bir Öncü: Ulviye Etaner (Bağlam Yayınları, 2024) kitaplarının yazarıdır. Hekimin Filozof Hali ve Psikomitoloji 1-2-3: İnsanı Öykülerinde Aramak başlıklı kitapların eş editörü, SURET Psikokültürel Analiz Dizisi Yayın Kurulu üyesidir. Halen kurucusu olduğu WABİ PSİKO-DİNAMİK AKADEMİ'de klinik psikolog psikoterapist, süpervizör ve eğitmen olarak çalışmaktadır.",
    focus: ["Psikanaliz Tarihi", "Dinamik Psikoterapi", "Narsisizm"],
  },
  {
    slug: "hakan-kocak",
    name: "M. Hakan Koçak",
    role: "Sosyoloji & Emek Tarihi",
    initials: "HK",
    photo: hakanKocakPhoto,
    bio: "Sosyolog. Emek tarihi, kent ve mekân, çalışma sosyolojisi ile Türkiye işçi hareketinin gelişme dinamikleri üzerine çalışmaktadır. Kocaeli Üniversitesi'nde öğretim üyesiyken 2016'da KHK ile görevinden ihraç edildi.",
    long: "M. Hakan Koçak 1970 doğumlu. Mimar Sinan Üniversitesi Sosyoloji Bölümü mezunu; aynı bölümde yüksek lisans yaptı. Marmara Üniversitesi Çalışma Ekonomisi ve Endüstri İlişkileri Bölümü'ndeki doktorasını 'Paşabahçe Semtinde İşçi Sınıfının Oluşumu, Cam İşçi Hareketinin Gelişimi ve Yönelimleri' başlıklı tez çalışmasıyla 2009 yılında tamamladı.",
    longExtra: "Petrol-İş, DİSK, Tez-Koop-İş gibi sendikalarda eğitim, örgütlenme ve yayın faaliyetlerinde görev aldı. Tarih Vakfı'nda sözlü tarih araştırma projelerinde çalıştı. Kocaeli Üniversitesi İİBF Çalışma Ekonomisi ve Endüstri İlişkileri Bölümü'nde öğretim üyesi olarak görev yapmaktayken 2016'da KHK ile görevinden ihraç edildi. Çalışmaları ağırlıkla emek tarihi, kent ve mekân, çalışma sosyolojisi ve Türkiye işçi hareketinin gelişme dinamikleri üzerine yoğunlaşmıştır.",
    focus: ["Emek Tarihi", "Çalışma Sosyolojisi", "Kent ve Mekân"],
  },
  {
    slug: "ismail-gezgin",
    name: "İsmail Gezgin",
    role: "Akademisyen & Yazar",
    initials: "İG",
    photo: ismailGezginPhoto,
    bio: "Akademisyen ve yazar. Mitoloji, arkeoloji ve kültür tarihi üzerine çok sayıda kitabın yazarıdır.",
    long: "Prof. Dr. İsmail Gezgin; akademisyen ve yazar. Yayımlanmış kitaplarından bazıları: Ötekilerin Arkeolojisi (Pinhan), Gılgamış (Pinhan), Homo Narrans (Pinhan), Sanatın Mitolojisi (Pinhan), Uygarlaşan İştah (Pinhan).",
    longExtra: "Gençlerle Baş Başa Mitoloji (Yordam), Gençlerle Baş Başa Arkeoloji (Yordam).",
    focus: ["Mitoloji", "Arkeoloji", "Kültür Tarihi"],
  },
  {
    slug: "nehir-durna",
    name: "Nehir Durna",
    role: "İletişim & Sosyoloji",
    initials: "ND",
    photo: nehirDurnaPhoto,
    bio: "Gündelik yaşam pratikleri, sözlü tarih, bellek ve mekân, ritüel ile medya sosyolojisi alanlarında araştırmacı. Başkent Üniversitesi'nde ders vermekte; Paris'te EHESS'e bağlı CETOBaC laboratuvarında doktora sonrası araştırmacı olarak çalışmaktadır.",
    long: "Gazi Üniversitesi İletişim Fakültesi Gazetecilik Bölümü'nden 2004 yılında mezun oldu. Ankara Üniversitesi İletişim Fakültesi'nde yüksek lisans derecesini aldı; ardından aynı üniversitenin Eğitim Bilimleri Fakültesi'nde ve Felsefe bölümünde yüksek lisans programlarını tamamladı. Gazi Üniversitesi İletişim Fakültesi'nde 'Avanos'ta Bellek ve Gündelik Hayatın İzinde Modernleşme ve Mekânın Dönüşümü' başlıklı teziyle doktora derecesini aldı.",
    longExtra: "Araştırma ilgi alanları arasında gündelik yaşam pratikleri, sözlü tarih, bellek ve mekân, ritüel, medya ve iletişim sosyolojisi yer almaktadır. Koç Üniversitesi VEKAM 2020 Araştırma Projesi Ödülü'nü 'Ankara Çankaya'da Dönüşen Kentin Yaşlılarının Deneyimi ve Belleği' başlıklı projesiyle kazandı. Şu anda Başkent Üniversitesi'nde dersler vermekte ve Paris'te EHESS'e bağlı CETOBaC araştırma laboratuvarında doktora sonrası araştırmacı olarak çalışmaktadır.",
    focus: ["Bellek & Mekân", "Sözlü Tarih", "İletişim Sosyolojisi"],
  },
  {
    slug: "nevzat-karakis",
    name: "Nevzat Karakış",
    role: "Şair & Yazar",
    initials: "NK",
    photo: nevzatKarakisPhoto,
    bio: "1960 yılında Adilcevaz'da doğdu. İstanbul'un avlusunda söz ve ses toplamaya devam ediyor, ezgili, ezgisiz…",
    long: "1960 yılında Adilcevaz'da doğmuşum. İçimde bir söz vardı, ezgisini arayan. Halen arıyorum. İlkokul ve ortaokulu Adilcevaz'da bitirdim. İzmir'de işçilik yaptım. Ankara'da akşam lisesini bitirdim. Değişik işlerde çalıştım.",
    longExtra: "İstanbul'un avlusunda söz ve ses toplamaya devam ediyorum, ezgili, ezgisiz…",
    focus: ["Şiir", "Söz & Ses", "Edebiyat"],
  },
  {
    slug: "salman-unlugedik",
    name: "Salman Ünlügedik",
    role: "Psikiyatri & Psikoterapi",
    initials: "SÜ",
    photo: salmanUnlugedikPhoto,
    bio: "Psikiyatrist. Psikodinamik Psikoterapi ile eşgüdümlü klinik uygulamasını serbest muayene hekimi olarak yürütmektedir.",
    long: "1972 Kahramanmaraş doğumlu. İlk, orta ve lise öğrenimini Kahramanmaraş'ta, tıp eğitimini 1995 yılında Cerrahpaşa Tıp Fakültesinde, uzmanlık eğitimini 2001 yılında Bakırköy Ruh ve Sinir Hastalıkları Hastanesi'nde tamamlamıştır.",
    longExtra: "Psikiyatri klinik uygulamasını Psikodinamik Psikoterapi ile eşgüdümlü şekilde serbest muayene hekimi olarak yürütmektedir.",
    focus: ["Psikiyatri", "Psikodinamik Psikoterapi", "Klinik Uygulama"],
  },
  {
    slug: "semih-celenk",
    name: "Semih Çelenk",
    role: "Tiyatro & Sahne Sanatları",
    initials: "SÇ",
    photo: semihCelenkPhoto,
    bio: "Dokuz Eylül Üniversitesi Güzel Sanatlar Fakültesi Sahne Sanatları Bölümü öğretim üyesi. Tiyatro yönetmeni, şair ve akademisyen. Balıklıova Köy Tiyatrosu'nun kurucusu.",
    long: "İzmir'de doğdu. 1989 yılında DEÜ GSF Sahne ve Görüntü Sanatları Bölümü'nden mezun oldu. 1991'de yüksek lisans, 1997'de doktora eğitimini tamamladı. Sahne Sanatları alanında 2001'de Doçent, 2007'de Profesör oldu. 1990 yılından bu yana DEÜ GSF Sahne Sanatları Bölümü'nde Öğretim Üyesi olarak çalışmaktadır. 2007–2010 yılları arasında DEÜ GSF Dekanlığını yürüttü. Bugüne kadar ödenekli ve bağımsız tiyatrolarda 40'ı aşkın oyun yönetti. 2005'te Nacar ile Serkisof adlı şiir dosyasıyla İsviçre Hastanesi Şiir Ödülü'nü kazandı. 2009'da Heccav Yahut Şair Eşref'in Esrarengiz Macerası adlı oyunuyla Ankara Sanat Kurumu En İyi Oyun Yazarı, 2010'da Asaf Çiyiltepe ve 2012'de Karabağlar Belediyesi Mizaha Katkı Onur Ödülü aldı. 2011'de sahnelediği Uğur Mumcu'nun 'Sakıncasız' adlı oyunuyla Uğur Mumcu Ödülü'ne ve 2019'da Uluslararası Mersin Tiyatro Festivali ile 2022'de 14. Ethos Uluslararası Ankara Tiyatro Festivali'nde 'Onur Ödülü'ne değer görüldü. 2022 yılında Metin And Akademisyen Ödülü'nü aldı.",
    longExtra: "2011 yılında Balıklıova köylüleriyle birlikte Balıklıova Köy Tiyatrosu'nu kurdu. 2017 yılından başlayarak İzmir Büyükşehir Belediyesi öncülüğünde 'Mahalle Tiyatroları' projesinin müellifi ve yürütücüsüdür. Oyunlarından bazıları: Bitmeyen Ezgiler Bulmalıyız, Kaşıntı, Yaprak Dökümü, Heccav Yahut Şair Eşref'in Esrarengiz Oyunu, Hamlet Renkli Türkçe, Gelin Tanış Olalım. Kitapları: Şiir — Redd-i İthal (1996), Nacar ile Serkisof (2006), Hurufat (2013), Rüzgâr Bilgisi (2019), Kaybolmuş Bir Çocuktum Bulundum (2021). Tiyatro — Sokaktaki Tiyatro (1992), Barbarlar Mutludur Çünkü Tiyatroları Yoktur (2001), Postmodern Zamanlarda Tiyatro (2007), Zenâbir (2014), Gelin Tanış Olalım (2019/2023).",
    focus: ["Tiyatro", "Sahne Sanatları", "Şiir"],
  },
  {
    slug: "yunus-emre-aydin",
    name: "Yunus Emre Aydın",
    role: "Psikiyatri & Psikoterapi",
    initials: "YA",
    photo: yunusEmreAydinPhoto,
    bio: "Oda Psikiyatri & Psikoterapi merkezinde psikiyatrist ve psikoterapist. Psikanaliz ve psikanalitik terapiler, bireysel süpervizyon ve klinik eğitim üzerine çalışmalarını sürdürmektedir.",
    long: "Oda Psikiyatri & Psikoterapi merkezinde psikiyatrist ve psikoterapist. Bir süre Akıl Defteri, Psikodiyalektik Araştırmalar Derneği (PDİAD) ve Eleştirel Buluşmalar gibi oluşum, yapılanma ve grupların içinde bulundu. İnsan hakları ve toplum ruhsallığı alanındaki çalışmalara dahil oldu.",
    longExtra: "Uzun yıllardır yönelimi, ilgi ve merakı psikanaliz ve psikanalitik terapilerle ilgili uğraşılar, okumalar ve toplantılara devam etmekte ve bu yönde çalışmalarını sürdürmektedir. Bireysel psikanalitik psikoterapi görüşmesinin yanı sıra bireysel süpervizyon, gruplarla süpervizyon ve özellikle klinik çalışmanın eğitim yoluyla aktarılması üzerine eğilmektedir.",
    focus: ["Psikanaliz", "Psikanalitik Psikoterapi", "Süpervizyon"],
  },
  {
    slug: "zehra-eryoruk",
    name: "Zehra Eryörük",
    role: "Psikanaliz & Akademi",
    initials: "ZE",
    photo: zehraEryorukPhoto,
    bio: "Psikanalist ve akademisyen. ISP Henri Lafontaine'de (Mons) psikanalitik psikopatoloji dersi vermekte; Forum du Champ Lacanien de Belgique üyesi ve başkanıdır.",
    long: "EFRA Brüksel'de 5 yıllık Freud'cu yönelimli aile ve çift danışmanı eğitimi almıştır. 2 yıllık klinik stajını savaş mağdurlarıyla çalışan bir Ruh Sağlığı Merkezi'nde gerçekleştirmiş; tezini savaş travmaları üzerine yapmıştır. Uzun yıllar Ruh Sağlığı Merkezleri'nde klinik çalışmalar yürüttükten sonra akademiye geçiş yaparak ISP Henri Lafontaine'de (Mons) öğretim üyesi olarak psikanalitik psikopatoloji dersi vermektedir.",
    longExtra: "Psikanaliz formasyonunu Ecole de Psychanalyse des Forums du Champ Lacanien (EPFCL)'e bağlı Paris Klinik Koleji'nde yapmıştır. 2006 yılında okul üyesi psikanalist olmuştur. Forum du Champ Lacanien de Belgique üyesi ve başkanı, Forumun Klinik birimi öğretim üyesidir. Lacancı Forum Türkiye Psikanaliz Derneği'nin kurucu üyesi ve epistemik ile bilimsel komisyon üyesidir. EPFCL okulunun uluslararası komisyonlarında çeşitli görevler üstlenmiş; metinleri EPFCL okul dergilerinde yayınlanmıştır.",
    focus: ["Lacancı Psikanaliz", "Savaş Travması", "Aile & Çift Danışmanlığı"],
  },
  {
    slug: "ahmet-kilisli",
    name: "Ahmet S. Kilisli",
    role: "Psikanaliz",
    initials: "AK",
    photo: ahmetKilisliPhoto,
    bio: "Ağırlıklı olarak Erken Dönem Nesne İlişkileri üzerine yoğunlaşmaktadır. Psikanalitik kuramsal çerçeveler ışığında ruhsal çatışmaların bedensel izdüşümlerini ele alan Psikosomatik ilgilendiği alanlardır.",
    long: "2000 yılında Samsun 19 Mayıs Üniversitesi Fen-Edebiyat Fakültesi Psikoloji Bölümü'nden mezun oldu. 2015 yılında Haliç Üniversitesi'nde yüksek lisansını tamamladı. 2016 yılında İstanbul Çocuk ve Ergen Psikanalitik Psikoterapi Formasyonu'na katıldı. IPA (Uluslararası Psikanaliz Birliği) üyesi bir psikanalist ile kendi psikanaliz sürecini tamamladı. Ağırlıklı olarak Erken Dönem Nesne İlişkileri üzerine yoğunlaşmaktadır. Psikanalitik kuramsal çerçeveler ışığında; ruhsal çatışmaların bedensel izdüşümlerini ele alan Psikosomatik ilgilendiği alanlardır.",
    longExtra: "Ahmet S. Kilisli, klinik pratiğinin yanı sıra sinema, edebiyat ve toplumsal olguların psikanalitik duyarlılıkla incelendiği disiplinlerarası çalışmalar yürütmektedir. Çalışmalarını ergen ve yetişkinlere yönelik psikanalitik yönelimli terapi çerçevesinde sürdürmektedir.",
    focus: ["Psikanaliz", "Nesne İlişkileri", "Psikosomatik"],
  },
  {
    slug: "beril-bayrak",
    name: "Beril Bayrak",
    role: "Bebek Ruh Sağlığı / Pediatri",
    initials: "BB",
    bio: "Yirmi yılı aşkın süredir genel pediatrist olarak Amerika ve Türkiye'de görev almıştır. Bebek ruh sağlığı ve ebeveyn-çocuk ilişkileri alanında uzmanlaşmış olup Massachusetts Bebek Ruh Sağlığı Derneği'nden Bebek Ruh Sağlığı Uzmanı ve Klinik Mentoru belgesi almıştır.",
    long: "Dr. Beril Bayrak 1995 yılında Cerrahpaşa Tıp Fakültesi'nden mezun olduktan sonra ABD'de NY Long Island College Hospital/Beth Israel programında pediatri ihtisası yapmış ve yirmi yılı aşkın bir süredir genel pediatrist olarak Amerika ve Türkiye'de görev almıştır. Uzun yıllar süren çocuklar ve ailelerle olan etkileşimleri sırasında, tıbbi modelin önleyici ruh sağlığı ve bütüncül sağlık konularına yeterince odaklanmadığını fark etti. 2010'da yenidoğan davranış gözlemi ve 2016'da Bebek Ruh Sağlığı sertifika eğitimi alarak, bebek ruh sağlığı ve ebeveyn-çocuk ilişkileri alanında uzmanlaşmıştır.",
    longExtra: "Dr. Bayrak, Massachusetts Bebek Ruh Sağlığı Derneği'nden Bebek Ruh Sağlığı Uzmanı ve Klinik Mentoru olarak yetkinlik belgesi almış, ayrıca Amerikan Pediatri Akademisi'nin bebek ruh sağlığı çalışma grubunun yürütücülerinden ve henüz yazımı devam eden Amerikan Pediatri Akademisi Bebek Ruh Sağlığı Bildirgesinin yazarlarından biridir. Türkiye, Amerika ve uluslararası platformlarda bu alanda sunumlar, atölyeler ve reflektif süpervizyonlar vermektedir. Başlangıç Derneği aracılığıyla çocuk koruma evlerinde ergen anne ve bebeklerle çalışmış olup, 2023 yılında kurulan Zeru Derneği'nin kurucularındandır. Dernek, ebeveyn-çocuk ilişkileri ve kadın hakları konularında 'sağlıklı bir toplumun tohumu' hedefini gütmekte, ayrıca Gaziantep ve UC Davis üniversiteleri ile ekolojik deprem sonrası toplumsal dayanıklılık üzerine projeler yürütmektedir. En önemli amaçlarından biri pediatri ve tıbbi modele önleyici ruh sağlığı ve ilişki odaklı bütüncül bir model olarak bebek ruh sağlığını entegre etmek, aynı zamanda da bebek ruh sağlığı alanına Pediatri perspektifini ilave etmektir.",
    focus: ["Bebek Ruh Sağlığı", "Pediatri", "Ebeveyn-Çocuk İlişkileri"],
  },
  {
    slug: "cem-atbasoglu",
    name: "Cem Atbaşoğlu",
    role: "Psikiyatri & Nöropsikiyatri",
    initials: "CA",
    photo: cemAtbasogluPhoto,
    bio: "Hacettepe Üniversitesi Tıp Fakültesi mezunu; psikiyatri uzmanlığını Ankara Üniversitesi'nde tamamladı. Nöropsikiyatri, yetişkinlerde nörogelişimsel bozukluklar ve majör psikozlar başlıca ilgi alanlarıdır. Halen İstanbul'da serbest hekim olarak klinik ve eğitim çalışmalarını sürdürmektedir.",
    long: "Cem Atbaşoğlu, Hacettepe Üniversitesi Tıp Fakültesi'nden mezun olmuş, psikiyatri uzmanlık eğitimini Ankara Üniversitesi Tıp Fakültesi Psikiyatri Ana Bilim Dalı'nda tamamlamıştır. İstanbul Deniz Hastanesi ve Bakırköy Ruh ve Sinir Hastalıkları Hastanesi'nden sonra 1996'da Ankara Üniversitesi Tıp Fakültesi Psikiyatri Anabilim Dalı'ndaki görevine başlamıştır. 1999 yılında University of Iowa Mental Health Clinical Research Center'da konuk araştırmacı olarak şizofreni ve hareket bozuklukları üzerinde çalışmıştır. 2009'da Ankara Üniversitesi Beyin Araştırmaları Araştırma ve Uygulama Merkezi'nin (AÜ-BAUM) kuruluşunda görev yapmış; Müdür (2009–2012) ve Yönetim Kurulu Üyesi (2012–2016) olarak çalışmıştır. Türkiye Psikiyatri Derneği'nde Merkez Yönetim Kurulu üyesi, Şizofreni ve Diğer Psikotik Bozukluklar Bilimsel Çalışma Birimi Koordinatörü ve Merkez Onur Kurulu Üyesi olarak görev yapmıştır. Nöropsikiyatri Arşivi'nin psikiyatri yayın yönetmenliğini yürütmüştür (2016–2021). 2016 yılında Ankara Üniversitesi'ndeki görevinden emekliye ayrılmıştır.",
    longExtra: "Başlıca ilgi alanları nöropsikiyatri, yetişkinlerde nörogelişimsel bozukluklar, genetik etiyoloji, majör psikozlar, psikiyatrik tanı-sınıflandırma sistemleri ve kendilik psikolojisidir. Bir özgün, bir çeviri kitabı mevcuttur: Yetişkinlerde Otizm Spektrumu (Cem Atbaşoğlu & Direnç Sakarya, Simurg Art Yayınları, 2023); Kendiliğin Çözümlenmesi – Heinz Kohut (Çevirmenler: Banu Büyükkal, Cüneyt İşcan, Cem Atbaşoğlu, Metis Yayınları, 1998). Üye olduğu dernekler arasında Türkiye Psikiyatri Derneği, Schizophrenia International Research Society, WPA Scientific Section on Schizophrenia ve International Association for Psychoanalytic Self Psychology yer almaktadır. Halen İstanbul'da serbest hekim olarak klinik ve eğitim çalışmalarını sürdürmektedir.",
    focus: ["Nöropsikiyatri", "Nörogelişimsel Bozukluklar", "Kendilik Psikolojisi"],
  },
  {
    slug: "emine-ayhan",
    name: "Emine Ayhan",
    role: "Psikodiyalektik Kültür Çalışmaları",
    initials: "EA",
    bio: "Psikodiyalektik kültür incelemeleri alanında çalışmalarını sürdürmektedir.",
    long: "Psikodiyalektik kültür incelemeleri alanında çalışmalarını sürdürmektedir.",
    longExtra: "",
    focus: ["Kültür İncelemeleri", "Psikodiyalektik"],
  },
  {
    slug: "ishak-saygili",
    name: "İshak Sayğılı",
    role: "Psikanaliz & Travma",
    initials: "İS",
    bio: "Bağlanma kuramı, travma ve psikanaliz üzerine çalışmaktadır.",
    long: "Bağlanma kuramı, travma ve psikanaliz üzerine çalışmaktadır.",
    longExtra: "",
    focus: ["Bağlanma Kuramı", "Travma", "Psikanaliz"],
  },
  {
    slug: "timucin-oral",
    name: "E. Timuçin Oral",
    role: "Psikiyatri & Duygudurum Bozuklukları",
    initials: "TO",
    photo: timucinOralPhoto,
    bio: "Psikiyatrist. Duygudurum bozukluklarının tanı ve tedavisi ile sanat ve psikopatoloji ilişkisi başlıca ilgi alanlarıdır. Bakırköy Ruh ve Sinir Hastalıkları Hastanesi'nde Raşit Tahsin Duygudurum Merkezi'ni kurmuştur.",
    long: "1984 yılında Uludağ Üniversitesi Tıp Fakültesi'ni bitirdikten sonra Şavşat ve Arhavi'de pratisyen hekim olarak çalıştı. 1986 yılında ihtisasa başladığı Bakırköy Ruh ve Sinir Hastalıkları Hastanesi'nde 1990'da Psikiyatri Uzmanı, 1995'te Doçent oldu; 2005–2008 yılları arasında klinik şefi olarak görev yaptı. 2003 yılında hastanenin Raşit Tahsin Duygudurum Merkezi'ni kurdu ve 2009'da emekli olup ayrılana dek yöneticiliğini sürdürdü. 2000–2002'de Yeditepe Üniversitesi Tıp ve Diş Hekimliği Fakültelerinde Psikiyatri dersleri verdi. 2009–2015 yılları arasında İstanbul Ticaret Üniversitesi Psikoloji Bölümü'nde çalıştı; aynı dönemde Boğaziçi Üniversitesi Klinik Psikoloji Doktora programında Psikofarmakoloji dersleri verdi. 2013 yılında profesörlüğe yükseltildi.",
    longExtra: "Ulusal ve uluslararası dergilerde çok sayıda makalesi, sekiz kitap bölümü, editörlüğünü yaptığı iki kitap ve eş yazarı olduğu Duygudurum Bozuklukları adlı kitabı bulunmaktadır. İstanbul Tabip Odası Onur Kurulu ile Türkiye Psikiyatri Derneği'nin merkez ve şube kurullarında üyelik, 2016–2018 yıllarında TPD genel başkanlığı yaptı. Tıbbi Hipnoz ve Bipolar Bozukluklar derneklerinin kurucu üyeleri arasındadır. Açık Radyo'da Engin Geçtan ile 'Dünya Hali' ve Şenol Ayla ile 'Sanat Uzun İlham Sonsuz' programlarını yaptı. 2024 yılı sonunda 40. mesleki yılını tamamlayarak aktif hekimliği bıraktı. Halen Apaçık Radyo'da 'Sanat Uzun İlham Sonsuz' ve 'Dikensiz Gül Bahçesi Vadetmedik' podcast'lerini sürdürmektedir.",
    focus: ["Duygudurum Bozuklukları", "Psikiyatri", "Sanat & Psikopatoloji"],
  },
];

const Team = () => {
  const { slug } = useParams();

  if (slug) {
    const member = team.find((m) => m.slug === slug);
    if (!member) {
      return (
        <div className="container-tight py-32 text-center">
          <p className="text-muted-foreground">Eğitmen bulunamadı.</p>
          <Link to="/ogreticiler" className="text-navy-deep underline mt-4 inline-block">Kadroya dön</Link>
        </div>
      );
    }

    return (
      <>
        <section className="pt-12 lg:pt-20 pb-12 bg-surface border-b border-border">
          <div className="container-tight">
            <Link to="/ogreticiler" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy-deep mb-10">
              <ArrowLeft className="h-4 w-4" /> Kadroya dön
            </Link>
            <div className="grid gap-10 lg:grid-cols-[auto_1fr] items-end">
              <div className="h-40 w-40 lg:h-48 lg:w-48 rounded-md overflow-hidden shadow-card">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-navy-deep grid place-items-center text-amber font-display text-5xl font-semibold">
                    {member.initials}
                  </div>
                )}
              </div>
              <div>
                <h1 className="font-display text-4xl lg:text-5xl text-navy-deep font-medium leading-tight">{member.name}</h1>
                <div className="flex flex-wrap gap-2 mt-6">
                  {member.focus.map((f) => (
                    <span key={f} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-navy-deep/15 text-navy-700">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-tight max-w-3xl">
            <p className="font-display text-xl lg:text-2xl text-navy-deep leading-relaxed">{member.bio}</p>
            <div className="mt-10 prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>{member.long}</p>
              <p className="mt-6">
                {member.longExtra ?? "Akademi'deki çalışmalarına ek olarak, ulusal ve uluslararası dergilerde yayımlanmış makaleleri, editörlük yaptığı kitap çalışmaları ve davetli olarak katıldığı seminerleri bulunmaktadır."}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Öğreticiler"
        title={<>Akademi Psikodiyalektik <br /> Öğreticileri</>}
        description=""
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Link
                to={`/ogreticiler/${m.slug}`}
                className="group block bg-card border border-border rounded-lg p-7 hover:border-navy-deep/40 hover:shadow-card transition-all h-full"
              >
                <div className="flex items-start justify-between">
                  <div className="h-16 w-16 rounded-md overflow-hidden">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full bg-navy-deep grid place-items-center text-amber font-display text-xl font-semibold">
                        {m.initials}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-amber transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-deep mt-6">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{m.bio}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
