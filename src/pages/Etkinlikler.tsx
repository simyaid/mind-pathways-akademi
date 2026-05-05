import { PageHeader } from "@/components/PageHeader";

const Etkinlikler = () => (
  <>
    <PageHeader
      eyebrow="Etkinlikler"
      title={<>Yaklaşan<br /><span className="underline decoration-amber decoration-2 underline-offset-4 font-bold">etkinlikler.</span></>}
      description="Akademi Psikodiyalektik'in düzenlediği seminer, atölye ve etkinlikleri takip edin."
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight max-w-3xl">
        <p className="text-muted-foreground text-[1.05rem] leading-relaxed">
          Henüz etkinlik bulunmamaktadır. Yakında güncellenecektir.
        </p>
      </div>
    </section>
  </>
);

export default Etkinlikler;
