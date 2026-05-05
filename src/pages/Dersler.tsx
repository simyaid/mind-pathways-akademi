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

type Ders = {
  title: string;
  instructor: string;
  content: Node[];
};

const dersler: Ders[] = [
  {
    title: "Anadolu Ruhsallığı",
    instructor: "Cemal Dindar",
    content: [
      { kind: "text", value: "Nasıl ki bilinçsiz-olan mekanikleşmiş veya katılaşmış bir yapı değil ve canlılığın her anında yeniden kendini kuruyorsa bir coğrafyadaki toplum ruhsallığını da ne geçmişteki bir ana, ne de güncel olana sabitleyebiliriz. Anadolu ruhsallığı, coğrafyaya özgü ya da evrensel olup olmadığı daha fazla incelemeye muhtaç dinamikler içermektedir." },
      { kind: "text", value: "Psikodiyalektik derslerinde 'uygarlığın doğuş' anını hem toplum hem de birey ruhsallığında önemli bir durak olarak inceleyeceğiz. Anadolu ruhsallığı derslerinde ise Mezopotamya Uygarlığı ile bozkır-göçebe birikiminin gerilimlerini çalışacağız." },
      { kind: "text", value: "Sargon, Sumer'i işgal edip tarihteki ilk imparatorluğu, Akad İmparatorluğu'nu kurmazdan önce, onun hikayesi de nehre bırakılmış bir çocuğun hikayesi olarak başlamıştı. Belki de tarihteki ilk Oidipus Sargon'du. Çölden gelen bir Sami idi ve Sumer'in 'şehir devletleri'ni yıkıp uygarlığı merkezi bir güce dönüştürdü." },
      { kind: "text", value: "Bozkır-göçebe birikim ile tarımcıl uygarlığın sentezi olarak Anadolu ruhsallığı ve İbni Haldun'un Mukaddime'sinde anlattığı 'medeniyet hikayesi'ni yerleşik ve göçebe, anacıllık ve ataerki, şaman ve rahip diyalektikleriyle çözümleyeceğiz." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Tarih Sumer'de Başlar, Samuel N. Kramer, (Çev. Muazzez İlmiye Çığ), Türk Tarih Kurumu Basımevi",
        "Uygarlığın Doğuşu, Henri Frankfort, (Çev. Alâeddin Şenel), V Yayınları",
        "Tarihte Neler Oldu, Gordon Childe, (Çev. Mete Tunçay - Alâeddin Şenel), Alan Yayıncılık",
        "Mukaddime 1-2, İbni Haldun, (Çev. Turan Dursun), Onur Yayınları",
        "Bilinmeyen İç Asya, Lajos Ligeti, (Çev. Sadrettin Karatay), Türk Dil Kurumu Yayınları",
        "Hadım Edilme Kompleksi, André Green, (Çev. Levent Kayaalp), Metis Yayınevi",
        "Deri-Ben, Didier Anzieu, (Çev. Nesrin Tura Demiryontan), Metis Yayınevi",
        "Kan Davası, Artun Ünsal, (Çev. Niyazi Öktem - Emre Öktem), Yapı Kredi Yayınları",
      ]},
    ],
  },
  {
    title: "Psikodiyalektik Dersleri",
    instructor: "Cemal Dindar",
    content: [
      { kind: "text", value: "Psikodiyalektik dersleri en temelde şunu açığa çıkarmayı hedeflemektedir: insan ruhsallığında bastırılmış olanın sadece bireyin öyküsünde erken deneyimlerin yaşantı içeriklerine dair olmadığını, ruhsallığımızı yaşama biçimlerimizde de belirleyici bastırılmış öğeler olduğunu açığa çıkarmak. İnsan türünün insanlaşma serüveninin tek bir bireyde 'tecelli edişi' olarak ruhsallık bilgisi, bireysel olan ile toplumsal olanın da düğümünü içerir." },
      { kind: "text", value: "Bu derslerde, öncelikle mevcut ruh sağlığı paradigmalarını değerlendireceğiz. Sonrasında özellikle Freud'un metapsikolojisindeki diyalektiğe, karşıtlıklara ve bunların birliğine odaklanacağız ve toplum-kültür üzerine psikanalizdeki temel fikirleri değerlendireceğiz." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Uygarlık, Din ve Toplum, Sigmund Freud, (Çev. Selçuk Budak), Öteki Yayınevi",
        "Ben ve O, Sigmund Freud, (Çev. Oya Kasap), Telos Yayınevi",
        "Bilinçsiz-Olan, Sigmund Freud, (Çev. Çağlar Tanyeri), Telos Yayınevi",
        "Bastırma ve Bastırılanın Geri Dönüşü, Sigmund Freud, (Çev. Oya Kasap), Telos Yayınevi",
        "Hegel'in Kayıp Mantığı, Mustafa Cemal, Belge Yayınevi",
        "Ben İdeali, J. Chasseguet-Smirgel, (Çev. Nesrin Tura), Metis Yayınevi",
        "Oyun ve Gerçeklik, D.W. Winnicott, (Çev. Tuncay Birkan), Metis Yayınevi",
        "Sürüden Devlete - Toplumsal Bağ Üzerine Psikanalitik Deneme, Eugéne Enriquez, (Çev. Nilgün Tutal), Ayrıntı Yayınevi",
        "Kardeşler - Cinsellik ve Şiddet, Juliet Mitchell, (Çev. Pınar Padar - Billur C. Yılmazyiğit), İstanbul Bilgi Üniversitesi Yayınları",
      ]},
    ],
  },
  {
    title: "Bebek Ruh Sağlığı",
    instructor: "Beril Bayrak",
    content: [
      { kind: "text", value: "Bebek Ruh Sağlığı dersleri, ruh sağlığı profesyonelleri ve farklı alanlardan gelen uzmanlar için, yaşamın ilk yıllarındaki ruhsal gelişim, bütüncül sağlık ve iyi olma haline dair bir alt yapı sunmayı amaçlamaktadır." },
      { kind: "text", value: "Bebeğin duyulmadığı ve görülmediği dönemlerden günümüze uzanan bu alan, aslında son elli yılın bir keşif hikayesidir. Bu disiplin, ikili bir ruhsallığı çok nesilli ve kültüre duyarlı bir biçimde anlamaya yönelik bir çaba olarak karşımıza çıkar." },
      { kind: "text", value: "Ebeveyn-bebek ilişkisine modern bebek ruh sağlığı perspektifinden baktığımızda, birlikte gelişen bilinç hallerini ve karşılıklı düzenleme süreçlerinin engebeli yollarını görebiliriz. Bebek ruh sağlığı yaklaşımı yaşamın ilk yıllarına dair bütüncül ve ekolojik bir bakış açısı sunabilir." },
      { kind: "text", value: "Bebeği akılda tutmak, onun iç dünyasına ve çevresindeki hayata keskin bir merak ve derin bir saygıyla yaklaşmak, bebek ruh sağlığının özünü oluşturur." },
    ],
  },
  {
    title: "Dilbilim, İletişim ve Ruhsallık",
    instructor: "Nehir Durna",
    content: [
      { kind: "text", value: "Dil, dünyayı tasvir ettiğimiz pratik bir araç olmanın ötesinde insanın dünyayı ve kendini kurduğu, inşa ettiği anlam dolu bir dünya yaratma koşuludur. Dil söz konusu ise insan deneyimine dair her şeyden söz etmek mümkündür. Bu ders kapsamında dilin ve anlamın ne olduğu, nasıl inşa edildiği ve bu çerçevede öznenin konumlanışı dil-iletişim ve ruhsallık çerçevesinde düşünülmeye, tartışılmaya çalışılacaktır." },
    ],
  },
  {
    title: "Halk Ezgileri ve Ruhsallık",
    instructor: "Nevzat Karakış",
    content: [
      { kind: "text", value: "Türküler, masallar gibi, efsaneler gibi, birinin adıyla havalanmış olsa bile insanın ortak-hafızasının mekanlarıdır." },
      { kind: "text", value: "Onları duymak sadece bir sözcük kümesini ve bildirisini duymak değildir, sesin insanın kendini oluşturmasındaki temel etkisiyle yeniden buluşmaktır." },
      { kind: "text", value: "Türküleri ruhsallık bilgisiyle düşünmek de onların bu yaratıcı etkisine karşı bir şükran bildirisi…" },
    ],
  },
  {
    title: "İnsanı Psikomitolojik Okumak",
    instructor: "Bilgin Saydam",
    content: [
      { kind: "text", value: "Psikomitoloji, mitolojiyle psikolojinin, hep aynı materyali, farklı yorumlamalarla ele aldığı savından yola çıkar: bireysel ve kolektif metaforik öykülerin psikodinamik kuram ve yöntemlerle okunması bilimidir. Mitlerde dış dünyanın nesnelerine yansıtılan insan zihninin gelişim öyküsünü içsel dünyaya doğru takip etmek, modern psikolojiyle buluşmaktır." },
      { kind: "text", value: "İnsan kendisini (ve dünyasını) öykülendirerek şekillendirir (homo narrans). James Hillman'ın ifadesiyle, 'mitoloji antik zamanların psikolojisi, psikoloji ise modern zamanların mitolojisidir'." },
      { kind: "text", value: "Mitoloji, özünde psikomitoloji'dir. Mitlerin anlamına ancak psikososyokültürel çözümlemeyle ulaşılabilir; bu çözümlemelerde kullanılabilecek en gelişmiş kuram olan psikanaliz de nihayetinde bir mitoloji uyarlamasıdır." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Deli Dumrul'un Bilinci - Türk-İslam Ruhu Üzerine Bir Kültür Psikolojisi Denemesi, M. Bilgin Saydam, Metis Yayınları",
        "Psikomitoloji: İnsanı Öykülerinde Aramak 1, Ed. M. Bilgin Saydam - Hakan Kızıltan, İthaki Yayınları",
        "Psikomitoloji: İnsanı Öykülerinde Aramak 2, Ed. M. Bilgin Saydam - Hakan Kızıltan, İthaki Yayınları",
        "Ara'f'dalık-lar - İnsanın Hâlleri ve Eylemleri, M. Bilgin Saydam, İstanbul Bilgi Üniversitesi Yayınları",
        "Totem ve Tabu, Sigmund Freud, (K. Şipal, Çev.), Say Yayınları",
        "Anılar, Düşler, Düşünceler, Carl G. Jung, (İ. Kantemir, Çev.) Can Yayınları",
        "Şiddet ve Kutsal, René Girard, (N. Alpay, Çev.) Kanat Kitap",
        "Oidipus - Psikomitoloji: Psikanalitik ve Klinik Yorumlar, Hazırlayan M. Bilgin Saydam, YKY",
      ]},
    ],
  },
  {
    title: "İnsanın Arkeolojisi",
    instructor: "İsmail Gezgin",
    content: [
      { kind: "text", value: "Arkeolojiyi, varlığını ve kimliğini araştırma nesnesi haline getiren insanın, kendini diğer canlılardan ayıran kültürel eğiliminin, hafızanın, davranış repertuvarının ve fiziksel yolculuğunun tespit çabası olarak tanımlayabilirim. Bu çaba tarihsel bir varlık yaptığı insanı, geçmişle gelecek arasında diyalektik bir ilişkiyle sıkıştırarak canlı kılan pek çok farklı görme olanağı sunar." },
      { kind: "text", value: "Doğayla imgesel bütünlüğünün nasıl ve ne zaman koptuğundan dilin simgesel dünyasına geçişine kadar insanın zihinsel süreçlerinin kimi maddi izlerinin takibi arkeoloji disiplini sayesinde mümkün olur. İlk alet yapımından cenaze merasimlerine, sanattan uygarlığın ve siyasal iktidarın ortaya çıkışına kadar pek çok konuyu ele alacağım." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "İsmail Gezgin, Homo Narrans. İnsan niçin anlatır? Mit, masal ve hikayenin arkeolojisi. Redingot",
        "İsmail Gezgin, Sanatın Mitolojisi. Redingot",
        "İsmail Gezgin, Gılgamış. Redingot",
        "İsmail Gezgin, Uygarlaşan İştah. Redingot",
        "Ian Hodder, Uygarlığın Doğuşunda Din. Alfa Kitap",
        "Ian Hodder, Geçmişi Okumak, Phoenix Yayınları",
        "Ian Hodder, Çatalhöyük. YKY",
        "C. Schmidt, Göbeklitepe. Arkeoloji ve Sanat Yayınları",
        "C. Levi-Strauss, Mit ve Anlam, İthaki",
      ]},
    ],
  },
  {
    title: "Lacan Düşüncesi: Gelişim Koşulları",
    instructor: "Zehra Eryörük",
    content: [
      { kind: "text", value: "Jacques Lacan sadece psikanalizi ters yüz etmemiştir, psikanalistlerin yanı sıra çağının birçok entelektüelini etkilemiştir. Psikanalize girişi Freud'un buluşunu sorgulamakla başlamıştır. Bu okumayı antik ve çağdaş felsefe ve modern bilimler ışığında gerçekleştirmiştir." },
      { kind: "text", value: "Lacan ilk damgasını 1953'te 'Sözün ve dilin işlevi ve alanı' metniyle vurmuştur. Amacı Freud'un bilinçdışı keşfini tekrar psikanalizin merkezine koymak olmuştur. Lacan için gösteren sadece sözel değildir; özneyi ilgilendiren her şey gösteren niteliği taşır." },
      { kind: "text", value: "Lacan'ın öğretimi working progress şeklindedir. 70'li yıllarda toplumu ve sosyal bağları oluşturan söylemleri ele aldığında özneyi ve kolektifleri yönlendiren şeyin jouissance olduğunu fark eder. Buradan itibaren yapısal bilinçdışından gerçek bilinçdışına adım atarak Lacancı psikanalizin politiğini ve alanını netleştirir." },
      { kind: "text", value: "Lacan'ın öğretimi üzerine yapacağımız dersler psikanalizi kavramlarını ve pratiğini günümüz dünyasında ve koşullarında sorgulayarak tıpkı Lacan'ın yaptığı gibi working progress şeklinde olacaktır." },
    ],
  },
  {
    title: "Narsisizm, Oidipus ve Ötesi",
    instructor: "Hakan Kızıltan",
    content: [
      { kind: "text", value: "Sapkın (Narkisos) ve Nevrotik (Oidipus), tanrısal ve cennetsi mükemmel varoluşu temsil eden mutlak narsisizmi arzulamak bakımından özdeştir. Sapkın olanı nevrotik olandan ayırt eden, mutlak narsisizm fantezisine ulaşılmış olduğunu sanrılamasıdır; nevrotik ise mutlak narsisizmi içten içe arzulasa da kendisine yasaklanmış çatışmalı bir ideal olarak yaşantılar." },
      { kind: "text", value: "Peki, narsisistik tamlık hayaliyle güdülenmeyen ya da ona kayıtsız kalan bir benlik hali mümkün mü? Ruhsal dünyada, narsisistik sorunsalı Narkisos ve Oidipus'un ötesinde deneyimlemeye açık başka bir psiko-mit mevcut mudur acaba?" },
      { kind: "text", value: "Bu seminer dizisinde ruhsallığın olgunlaşma, büyüme, iyileşme ve bilgeleşme sürecinde katetmesi muhtemel öznellik biçimleri, bireysel, toplumsal ve tarihsel diyalektikte ele alınıp tartışmaya açılacaktır." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Sigmund Freud, On Narcissism: An Introduction, Standard Edition, Cilt 14, London: Hogarth Press Ltd, 1964",
        "Oidipus - Psikomitoloji: Psikanalitik ve Klinik Yorumlar, Hazırlayan M. Bilgin Saydam, YKY",
        "Chasseguet-Smirgel, J. (1984). Creativity and Perversion. New York: W.W.Norton",
        "Cooper M. A. (1986). Narcissism. Essential Papers On Narcissism içinde, Ed.: Morrison A.P.",
      ]},
    ],
  },
  {
    title: "Nöropsikanaliz",
    instructor: "Hakan Atalay",
    content: [
      { kind: "text", value: "Tıp eğitimi kültürün diğer alanları gibi ruh-beden ikiliğinden kaçamamıştır. Nöropsikanaliz ruh-beden ya da daha doğrusu zihin-beyin-beden ilişkisini ayrı ayrı inceleyen nesnel (sinirbilim) ve öznel (psikanaliz) bakış açıları arasında köprü kurmayı amaçlayan bir girişimdir." },
      { kind: "text", value: "Bu seminer dizisinde beyne ve psikanalize dair bilgilerimizin genelde davranışları, özelde psikoterapiyi nasıl açıklamaya çalıştığını göstermek için psikanalizin ve sinirbilimin bizim için önemli olan kısımlarını gözden geçirecek ve sonra ayrıntılı olarak nöropsikanaliz üzerinde duracağız." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Atalay, H. (2023). Nöropsikanaliz. Okuyan Us Yayınları",
        "Solms, M. & Turnbull, O. H. (2013) Beyin ve İç Dünya (Çev: Hakan Atalay). Metis Yayınları",
        "Solms, M. (2021). The Hidden Spring. W. W. Norton & Company",
        "Kandel, E. R. (1999). Biology and the Future of Psychoanalysis. American Journal of Psychiatry, 156: 505-524",
        "Damasio, A. D. (2020) Zihindeki Benlik. ODTÜ Yayıncılık",
        "Panksepp, J. (2017) Afektif Nörobilim. Alfa Yayıncılık",
        "Carhart-Harris, R. L., Friston, K. J. (2010). The default-mode, ego-functions and free-energy. Brain, 133(4): 1265-1283",
        "Friston, K. J. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neurosciences, 11: 127-138",
        "Tura, S. M. Günümüzde Psikoterapi, Metis Yayınları, 2000",
      ]},
    ],
  },
  {
    title: "Psikiyatrik Semiyoloji",
    instructor: "Salman Ünlügedik",
    content: [
      { kind: "text", value: "Psikiyatrik tanı esas itibariyle iyi bir formülasyonu; iyi bir formülasyon da çok boyutlu, teknik ve kuramsal bir değerlendirmeyi içeren derinlikli bir öyküyü gerektiriyor. Derdi, ıstırabı doğru teşhis etmenin başlangıcı ve olmazsa olmazı, muhatabımızı duyabilmek için can kulağıyla dinlemekten geçiyor." },
      { kind: "text", value: "Göstergelerin, yani belirtilerin sahibi insandır ve anlamı da öyküsünde bulunacaktır. Her türden kuramsal anlayışın, çerçevenin özü, ilaçla da olsa tüm tedavilerin başlangıç noktası da bu olmalıdır." },
    ],
  },
  {
    title: "Ruhsallık ve Tarihsellik",
    instructor: "Fatih Artvinli",
    content: [],
  },
  {
    title: "Ruh Sağlığı Tarihi",
    instructor: "Fatih Artvinli",
    content: [
      { kind: "text", value: "Bu derste, 'ruhsal hastalık' fikrinin tarihsel oluşumuna ve değişen anlam dünyalarına odaklanıyoruz. Ruhsallığın ne olduğuna ve nasıl bozulduğuna dair insanlık tarihinin farklı dönemlerinde üretilen açıklamaları, yalnızca tıbbî değil, aynı zamanda kültürel, siyasal ve düşünsel bağlamlarıyla ele alıyoruz." },
      { kind: "text", value: "İlk modülde Antikçağ'dan modern bilime uzanan çizgide ruhsal bozuklukların doğa felsefesi, din, tıp ve ahlakla nasıl iç içe geçtiğini tartışıyoruz. Son derste ise Türkiye'de ruh sağlığı alanının kurumsallaşma sürecine yakından bakıyoruz." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Andrew Scull, Uygarlık ve Delilik - Akıl Hastalığının Kültürel Tarihi, Çev: Nurettin Elhüseyni, Yapı Kredi Yayınları, 2016",
        "Michel Foucault, Deliliğin Tarihi, Çev: M. Ali Kılıçbay, İmge, 2017",
        "Michael W. Dols, Mecnun: Ortaçağ İslam Toplumunda Deli, Çev: Didem Gamze Erdinç, Alfa Yayınları, 2023",
        "Fatih Artvinli, Delilik, Siyaset ve Toplum: Toptaşı Bimarhanesi, Telemak, 2022",
        "Haydar Akın, Delilik, Melankoli, Cinlenme, Alfa Yayınları, 2024",
        "Ali Babaoğlu, Psikiyatri Tarihi, Okuyan Us Yayın, 2021",
      ]},
    ],
  },
  {
    title: "Türkçenin Ruh Hali: Edebiyat Aynasında Ruhsallık",
    instructor: "Fatih Artvinli",
    content: [
      { kind: "text", value: "Zengin bir edebî dil olarak Türkçede farklı yüzyıllarda insan ruhsallığına dair çok şey söylendi ve yazıldı. Edebiyat, bir yandan ruhsallık bilgisinin izlerini taşıyan bir anlatı alanı olarak karşımıza çıkar; ancak ruhsallığı çoğu zaman dışarıdan temsil eder." },
      { kind: "text", value: "Bu derste, cinnet, delilik, melankoli, histeri gibi hallerin edebiyatta nasıl temsil edildiğini tartışıyoruz. Edebiyatçıların deliliği nasıl anlattıklarına (temsil), bu deneyimi yaşayanların içeriden seslerine (tecrübe) ve ruh sağlığı alanında çalışanların tanıklıklarına odaklanıyoruz." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Yenişehirli Avni, Delilerin Aynası Mir'at-ı Cünun (Derleyen: Abdülkadir Erkal), Büyüyenay, 2014",
        "Edebiyatın İzinde / Delilik ve Edebiyat (Yayına hazırlayanlar: Banu Öztürk vd.), Bağlam Yayınları, 2017",
        "Mehmet Narlı, Edebiyat ve Delilik: Türk Roman ve Öyküsünde Deliler ve Delilik, İz Yayıncılık, 2019",
        "Fuzuli, Leyla ve Mecnun (Hazırlayan: Muhammet Nur Doğan), Yapı Kredi Yayınları, 2006",
        "Zeki Bulduk, Müstesna Deliler Albümü, Hayy Kitap, 2014",
        "Fatih Altınöz, Birine Bir Şey Yapmaktan Korkuyorum, Çınar Yayınları, 2018",
        "Cemal Dindar, Nal: Bir Akıl Hastanesinin Hatıra Defteri, Telos, 2013",
        "Latif Alpkan, Bakırköy Akıl Hastanesi'nden Anılar, Okuyan Us Yayın, 2018",
        "Süleyman Velioğlu, Kâzım Dağyolu, Bir Şizofren Hastanın Sanat Ürünleri, Can Yayınları, 2022",
      ]},
    ],
  },
  {
    title: "Sınıf Deneyimlerinin Ruhsal Dinamikleri",
    instructor: "Hakan Koçak",
    content: [
      { kind: "text", value: "Toplumsal yaşam içinde bireyler farklı eşitsizlik biçimleri içinde yaşarlar. Farklı eşitsizlik biçimleri içinde sınıfsal eşitsizlikler en kapsayıcı olandır. Günümüz kapitalist toplumları sınıfsal eşitsizliklerin derinleştiği birer çalışanlar toplumu niteliği kazanmaktadır." },
      { kind: "text", value: "Bu seminer dizisinde sınıfsal eşitsizlik ilişkilerinin tezahürlerine emekçilerin sınıfsal deneyimleri üzerinden bakılacaktır. Çalışma deneyimi, yarattığı çalışma acısından ortaya çıkardığı çalışmanın neşesine uzanan bir bağlamda değerlendirilecektir. Biriken eşitsizlik deneyimleri her zaman direnişlere kaynaklık etmez." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "Karakter Aşınması - Yeni Kapitalizmde İşin Kişilik Üzerine Etkileri, Richard Sennett, Ayrıntı Yayınları",
        "Sınıfın Gizli Yaraları, Richard Sennett - Jonathan Cobb, Heretik Yayın",
        "Boşuna mı Okuduk - Türkiye'de Beyaz Yakalı İşsizliği, Tanıl Bora vd., İletişim Yayınları",
        "İşletme Hastalığına Tutulmuş Toplum, Vincent de Gaulejac, Ayrıntı Yayınları",
        "Toplumsal Sınıfların Psikolojisi, Maurice Halbwachs, Pinhan Yayıncılık",
        "Yoksulluk Halleri, Necmi Erdoğan vd., İletişim Yayınları",
        "Üretim Siyaseti - Kapitalizm ve Sosyalizmde Fabrika Rejimleri, Michael Burawoy, Notabene Yayınları",
        "Ekmek ve Haysiyet Mücadelesi, Alpkan Birelma, İletişim Yayınları",
        "Dünyanın Sefaleti, Pierre Bourdieu, Heretik Yayın",
      ]},
    ],
  },
  {
    title: "Sosyal Teoride İnsan ve Toplum",
    instructor: "Göksel Aymaz",
    content: [
      { kind: "text", value: "Bu dersler, birey ruhsallığını bir sosyal faktör olarak kabul ederek, bir insanın ruhsallığının o insanın toplum içindeki yazgısıyla bağlantısını anlama çabasıdır. Böyle bir çabanın ruhsallığın daha güçlü bir şekilde duyumsanmasını sağlayacağı düşüncesindeyiz." },
      { kind: "text", value: "Bu düşünceden hareketle, dersler, sosyal bilimlerin tarihsel gelişim sürecinde ruhsallığı ve bilinci kendine konu edinip araştırma nesnesi yapmış teorik uğrakları tanımaya ve kavramaya yöneliktir." },
      { kind: "header", value: "Kaynakça" },
      { kind: "items", values: [
        "George Thomson, İnsanın Özü (Çev. Celal Üster), Payel Yayınları",
        "Gordon Childe, Toplumsal Evrim (Çev. Cemal Balcı), Alan Yayıncılık",
        "Tom Bottomore ve Robert Nisbet, Sosyolojik Çözümlemenin Tarihi (Çev. M. Tunçay / A. Uğur), V Yayınları",
        "C. Wright Mills, Toplumbilimsel Düşün (Çev. Ünsal Oskay), Kültür Bakanlığı Yayınları",
      ]},
    ],
  },
  {
    title: "Tragedyalar ve Kahraman Kurban Ruhsallığı",
    instructor: "Semih Çelenk",
    content: [
      { kind: "text", value: "Tragedyalar 2500 yıl önce 'koral dithyrambos ilahisi'nden evrilerek oluşmuş bir form. Aynı zamanda günümüz dramatik sanatının çekirdeği, nüvesi de diyebiliriz. Bugün modern zamanlarda yazılan binlerce oyun zamana dayanamayıp oynanmaz hale gelirken 2500 yıl önce tragedya formunda yazılmış bu yapıtlar bugün için de yeniden ve yeniden okuma imkânı veriyor bize." },
      { kind: "text", value: "Tragedyalarda ortaya çıkan tanrısal gücü de taşıyan erdemli kahramanlar aynı zamanda ilahi bir düzenin kurbanı da oluyorlar. Erdemli kahramanlar ilahi yeryüzü düzenine karşı çıkarken ortalama insanın sınırlarının çok ötesine geçerler ve kahramanlığı da kurbanlığı da hak ederler." },
      { kind: "text", value: "Kral Oidipus, Medea ve Antigone gibi klasik tragedyalarla Hamlet üzerinden tragedyaların yapısı, kurban-kahraman diyalektiği ve tragedyaların toplumu ıslah işlevi üzerinde duracağız." },
    ],
  },
  {
    title: "Yoksulluk ve Ruhsallık",
    instructor: "Hacer Foggo",
    content: [
      { kind: "items", values: [
        "Çocuk yoksulluğu ve sosyal dışlanma",
        "Çocuk ihmali ve yoksulluk",
        "Bir insan hakları ihlali olarak yetersiz beslenme",
        "Utanç ve yoksulluk",
        "Yoksulluğun reddi ve bu konudaki önyargılar",
        "Sosyal izolasyon ve yalnızlık yoksulluğu",
        "Yoksulluğun gizli ve eksik boyutları",
      ]},
    ],
  },
  {
    title: "Shakespeare ve Psikodiyalektik: Zaman, Mekan, Diyalektik Dönüşüm",
    instructor: "Emine Ayhan",
    content: [
      { kind: "text", value: "1200'ü aşkın karakteriyle Shakespeare tiyatrosu, insanları ve toplulukları genellikle bilincine varmaya direnç gösterdikleri ama sahnelemekten de kaçınamadıkları kimlikler, roller, arzular, tutkular içinde ilişkiye sokan bir dizi yeniden-sahneleme olarak ele alınabilir." },
      { kind: "text", value: "Bu tiyatro, iktidar oyuncularının total gerçeklik diye dayattığı gün ışığı semiyosferinden kovulup karanlığa terkedilmiş hayaletlerin, bilinçdışının gölgelerinin yeniden ifade kazanmak üzere çağrıldığı, Hamlet'teki ifadeyle 'ayrı/ücra bir zemin'dir. Dönüşüm bu ara-bölgede gerçekleşir." },
      { kind: "text", value: "Bu seminer dizisinde bilinçsiz-olan psişik fenomenlerle (sanrılar, uyurgezerlik, kâbuslar, cinnet, delilik); bireyin varlığını tasallut altına alan derin tutkularla (aşk, ihtiras, korku, suçluluk); metafizik unsurlarla (hayaletler, cadılar, büyü, kehanet) dolup taşan Shakespeare tiyatrosundan örnekleri yakından okuyacağız." },
      { kind: "text", value: "Tutkulu bir Shakespeare okuru olarak Sigmund Freud'un karakter ve motifleri analiz ettiği bu tiyatroya ruhsallık söylemiyle teatral ve edebi söylem tarzları arasındaki kavramsal mesafe ve arayüzlere dikkat göstererek yaklaşmaya çalışacağız." },
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

const Dersler = () => (
  <>
    <PageHeader
      eyebrow="Psikodiyalektik Formasyon"
      title="Dersler"
      description=""
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight max-w-3xl">
        <Accordion type="multiple" className="space-y-2">
          {dersler.map((d, i) => (
            <AccordionItem
              key={i}
              value={String(i)}
              className="border border-border rounded-lg px-6 bg-card shadow-soft"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <div className="text-left">
                  <p className="font-medium text-navy-deep leading-snug">{d.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-3 pt-2 border-t border-border">
                  <p className="text-xs font-medium text-navy-500">Öğretici: {d.instructor}</p>
                  {d.content.map((node, j) => renderNode(node, j))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default Dersler;
