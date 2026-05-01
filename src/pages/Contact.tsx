import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mesajınız ulaştı. En kısa sürede geri döneceğiz.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <>
      <PageHeader
        eyebrow="İletişim"
        title="Bir soru, bir başvuru ya da bir diyalog için."
        description="Programlarımız, başvuru süreçleri ya da işbirliği önerileri hakkında doğrudan bizimle iletişime geçebilirsiniz."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-navy-500">İletişim</span>
              <ul className="mt-6 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-surface-muted text-navy-deep shrink-0">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">E-posta</p>
                    <p className="mt-1 text-navy-deep font-medium">bilgi@halkicinpsikoterapi.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-surface-muted text-navy-deep shrink-0">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</p>
                    <p className="mt-1 text-navy-deep font-medium">+90 (530) 638 09 23</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-surface-muted text-navy-deep shrink-0">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Adres</p>
                    <p className="mt-1 text-navy-deep font-medium">Halaskargazi Caddesi Kutlu Apt. 182/6 Şişli/İstanbul</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-amber pl-5 py-1">
              <p className="font-display italic text-navy-deep leading-snug">
                "Diyalog, iki monolog değildir. Karşılıklı bir hazır bulunuş hâlidir."
              </p>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-8 bg-card border border-border rounded-lg p-8 lg:p-10 shadow-soft space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" required placeholder="Adınız Soyadınız" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" required placeholder="ornek@eposta.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Konu</Label>
              <Input id="subject" required placeholder="Mesajınızın konusu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mesajınız</Label>
              <Textarea id="message" required rows={6} placeholder="Bize iletmek istediğiniz mesajı buraya yazabilirsiniz." />
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-muted-foreground max-w-sm">
                Mesajınız akademi sekreteryası tarafından okunur ve genellikle 1–2 iş günü içinde yanıtlanır.
              </p>
              <Button type="submit" variant="amber" size="lg" disabled={loading}>
                {loading ? "Gönderiliyor..." : <>Gönder <Send /></>}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
