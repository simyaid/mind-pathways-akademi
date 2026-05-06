import { PageHeader } from "@/components/PageHeader";

const PsikodiyalektikDusunce = () => (
  <>
    <PageHeader
      eyebrow="Psikodiyalektik Düşünce"
      title={<>Ruhsallık, diyalektik<br /><span className="underline decoration-amber decoration-2 underline-offset-4 font-bold">ve insan hakikati.</span></>}
      description="Psikodiyalektik; insanın iç dünyasını, toplumsal varoluşunu ve tarihsel sürecini bir bütün olarak ele alan özgün bir düşünce geleneğidir."
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight max-w-3xl space-y-8 text-[1.05rem] leading-relaxed text-muted-foreground">
        <p>
          Psikodiyalektik düşünce; psikoloji, felsefe ve diyalektik geleneği bir araya getirerek insanın ruhsal ve toplumsal varoluşunu anlamlandırmaya çalışan özgün bir yaklaşımdır.
        </p>
        <p>
          Bu düşünce geleneği, bireyin iç çatışmalarını ve dönüşümlerini yalnızca bireysel bir süreç olarak değil, tarihin ve toplumun içinde şekillenen dinamik bir bütün olarak ele alır.
        </p>
        <p>
          Psikodiyalektik; insanlığın birikmiş bilgeliğiyle, çağdaş ruh sağlığı anlayışını ve felsefi sorgulamayı buluşturarak özgün bir kuram ve pratik alanı oluşturur.
        </p>
      </div>
    </section>
  </>
);

export default PsikodiyalektikDusunce;
