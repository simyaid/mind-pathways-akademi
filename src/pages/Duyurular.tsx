import { PageHeader } from "@/components/PageHeader";

const Duyurular = () => (
  <>
    <PageHeader
      eyebrow="Duyurular"
      title={<>Güncel<br /><span className="underline decoration-amber decoration-2 underline-offset-4 font-bold">duyurular.</span></>}
      description="Akademi Psikodiyalektik'ten en güncel haberler ve duyurular."
    />

    <section className="py-20 lg:py-28">
      <div className="container-tight max-w-3xl">
        <p className="text-muted-foreground text-[1.05rem] leading-relaxed">
          Henüz duyuru bulunmamaktadır. Yakında güncellenecektir.
        </p>
      </div>
    </section>
  </>
);

export default Duyurular;
