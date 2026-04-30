import { PageHeader } from "@/components/PageHeader";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const team = [
  {
    slug: "elif-aksoy",
    name: "Doç. Dr. Elif Aksoy",
    role: "Klinik Psikoloji",
    initials: "EA",
    bio: "Klinik psikoloji alanında 15 yılı aşkın deneyime sahip; psikanaliz ve fenomenolojik yaklaşımlar üzerine çalışmalar yürütmektedir.",
    long: "Doç. Dr. Elif Aksoy, lisans eğitimini Boğaziçi Üniversitesi Psikoloji Bölümü'nde tamamlamış; doktorasını klinik psikoloji üzerine yapmıştır. Akademi'de 'Klinik Görüşme ve Vaka Formülasyonu' modülünü yürütmektedir. Çalışmaları, psikanalitik düşünceyle fenomenolojik felsefenin kesişiminde yer almaktadır.",
    focus: ["Psikanaliz", "Fenomenoloji", "Klinik görüşme"],
  },
  {
    slug: "kerem-tunc",
    name: "Prof. Dr. Kerem Tunç",
    role: "Felsefe & Etik",
    initials: "KT",
    bio: "Kıta felsefesi ve etik üzerine yayınlarıyla tanınır; akademinin teorik çekirdeğini biçimlendiren isimlerdendir.",
    long: "Prof. Dr. Kerem Tunç, kıta felsefesi geleneği içinde Hegel, Heidegger ve Levinas üzerine kapsamlı çalışmalar yürütmektedir. Akademi'de 'Felsefi Antropoloji' ve 'Etik Sorumluluk' modüllerini yönetir.",
    focus: ["Hegel", "Levinas", "Etik"],
  },
  {
    slug: "selin-demir",
    name: "Dr. Selin Demir",
    role: "Gelişim Psikolojisi",
    initials: "SD",
    bio: "Çocuk ve ergen ruh sağlığı alanında uzman; bağlanma kuramı üzerine araştırmalar yapmaktadır.",
    long: "Dr. Selin Demir, gelişim psikolojisi ve bağlanma kuramı alanlarında uzmanlaşmıştır. Akademi'de 'Yaşam Boyu Gelişim' modülünü yürütür ve süpervizyon oturumlarında yer alır.",
    focus: ["Bağlanma", "Gelişim", "Süpervizyon"],
  },
  {
    slug: "mert-okur",
    name: "Dr. Mert Okur",
    role: "Bilişsel Bilimler",
    initials: "MO",
    bio: "Bilişsel psikoloji ve zihin felsefesi arasında çalışmalar yürütür.",
    long: "Dr. Mert Okur, bilişsel psikoloji ve zihin felsefesi alanlarında çalışmaktadır. 'Bilinç ve Bilişsel Süreçler' modülünün koordinatörüdür.",
    focus: ["Bilinç", "Zihin felsefesi", "Bilişsel kuramlar"],
  },
  {
    slug: "deniz-yagmur",
    name: "Yrd. Doç. Dr. Deniz Yağmur",
    role: "Sosyal Psikoloji",
    initials: "DY",
    bio: "Toplumsal kimlik ve eleştirel teori üzerine çalışır.",
    long: "Yrd. Doç. Dr. Deniz Yağmur, sosyal psikoloji ve eleştirel kuram kesişiminde araştırmalar yapmaktadır. 'Toplumsal Bağlam ve Birey' modülünü yürütür.",
    focus: ["Eleştirel kuram", "Kimlik", "Söylem analizi"],
  },
  {
    slug: "arda-soysal",
    name: "Dr. Arda Soysal",
    role: "Eğitim Bilimleri",
    initials: "AS",
    bio: "Yetişkin eğitimi ve diyalektik öğrenme yöntemleri üzerine uzmanlaşmıştır.",
    long: "Dr. Arda Soysal, akademinin pedagojik tasarımını yapan isimdir. Diyalektik öğrenme metodolojisi üzerine çalışır.",
    focus: ["Pedagoji", "Diyalektik yöntem", "Yetişkin eğitimi"],
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
          <Link to="/kadro" className="text-navy-deep underline mt-4 inline-block">Kadroya dön</Link>
        </div>
      );
    }

    return (
      <>
        <section className="pt-12 lg:pt-20 pb-12 bg-surface border-b border-border">
          <div className="container-tight">
            <Link to="/kadro" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy-deep mb-10">
              <ArrowLeft className="h-4 w-4" /> Kadroya dön
            </Link>
            <div className="grid gap-10 lg:grid-cols-[auto_1fr] items-end">
              <div className="h-40 w-40 lg:h-48 lg:w-48 rounded-md bg-navy-deep grid place-items-center text-amber font-display text-5xl font-semibold shadow-card">
                {member.initials}
              </div>
              <div>
                <span className="eyebrow mb-4">{member.role}</span>
                <h1 className="font-display text-4xl lg:text-5xl text-navy-deep mt-3 font-medium leading-tight">{member.name}</h1>
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
                Akademi'deki çalışmalarına ek olarak, ulusal ve uluslararası dergilerde yayımlanmış makaleleri,
                editörlük yaptığı kitap çalışmaları ve davetli olarak katıldığı seminerleri bulunmaktadır.
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
        eyebrow="Kadro"
        title={<>Bir program değil, <em className="italic font-normal">bir kadro</em> kurar bu okulu.</>}
        description="Akademi'nin eğitmen kadrosu; klinik psikoloji, felsefe, eğitim bilimleri ve sosyal bilimler alanlarından deneyimli akademisyenlerden oluşur."
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
                to={`/kadro/${m.slug}`}
                className="group block bg-card border border-border rounded-lg p-7 hover:border-navy-deep/40 hover:shadow-card transition-all h-full"
              >
                <div className="flex items-start justify-between">
                  <div className="h-16 w-16 rounded-md bg-navy-deep grid place-items-center text-amber font-display text-xl font-semibold">
                    {m.initials}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-amber transition-colors" />
                </div>
                <span className="block mt-6 text-xs uppercase tracking-[0.18em] text-navy-500">{m.role}</span>
                <h3 className="font-display text-xl font-semibold text-navy-deep mt-2">{m.name}</h3>
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
