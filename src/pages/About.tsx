import { PageHeader } from "@/components/PageHeader";

const About = () => (
  <>
    <PageHeader
      eyebrow="Hakkımızda"
      title={<>Bir disiplinin değil, <em className="italic font-normal">bir tutumun</em> akademisi.</>}
      description="Akademi Psikodiyalektik, psikoloji ve felsefenin kesişiminde, etik bir formasyon anlayışıyla kurulmuştur. Cevap üretmekten çok soru üretmeyi önemser."
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-[0.2em] text-navy-500">Misyon</span>
            <h2 className="font-display text-2xl lg:text-3xl text-navy-deep mt-4 leading-tight">
              Düşünmeyi yöntem, etiği zemin haline getirmek.
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
            Misyonumuz; psikoloji eğitimini, felsefi sorgulamadan ve etik sorumluluktan koparmadan,
            uygulanabilir ve düşünülebilir bir bütün olarak inşa etmektir. Akademi olarak, bir mesleki
            sertifika kurumu değil; bir <span className="text-navy-deep font-medium">düşünme okulu</span>
            olduğumuza inanırız.
          </p>
          <p>
            Programlarımız, çağdaş klinik yaklaşımları kıta felsefesi geleneğiyle, vaka çalışmalarını
            diyalektik yöntemle birleştirir. Katılımcılarımız sürecin sonunda yalnızca bilgi değil; bir
            tavır, bir tutum ve bir dil edinirler.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-surface border-y border-border">
      <div className="container-tight grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] text-navy-500">Hikâyemiz</span>
          <h2 className="font-display text-2xl lg:text-3xl text-navy-deep mt-4 leading-tight">
            Akademik bir boşluğu doldurmak üzere kuruldu.
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          <p>
            Akademi Psikodiyalektik; klinik psikoloji, felsefe ve eğitim bilimleri alanlarından bir araya
            gelen akademisyenler tarafından, alanında derinlikli ama uygulamadan kopmamış bir formasyon
            programı sunmak amacıyla kuruldu.
          </p>
          <p>
            İlk dönem programlarımızdan bu yana 800'ü aşkın katılımcıya ulaştık. Bugün; eğitmen kadromuz,
            danışma kurulumuz ve mezunlarımızla birlikte, alanın saygın bir entelektüel zemini olmayı
            sürdürüyoruz.
          </p>
          <blockquote className="border-l-2 border-amber pl-6 py-2 mt-10 font-display italic text-xl text-navy-deep leading-snug">
            "Bir formasyon süreci, kişiyi sadece donatmaz; onu yeniden biçimlendirir."
          </blockquote>
        </div>
      </div>
    </section>
  </>
);

export default About;
