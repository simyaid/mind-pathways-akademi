import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHQOaWbix6Onu5UCTQPLBwe49Uj-tKfFS31oTgpbLGAB9_DWlAsTDuRNHFzy-PUhy6/exec";

const emptyForm = {
  ad: "",
  soyad: "",
  tcKimlik: "",
  email: "",
  telefon: "",
  ilIlce: "",
  meslek: "",
  ogrenimDurumu: "",
  kvkk: false,
};

const Basvuru = () => {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });
    } catch (_) {}
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Önbaşvuru"
        title={<>2026-2027 Dönemi<br />Formasyona Hazırlık Programı</>}
        description="Önbaşvuru formunuz bize ulaştıktan sonra sizinle iletişime geçilecektir."
      />

      <section className="py-20 lg:py-28">
        <div className="container-tight max-w-2xl">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <p className="font-display text-2xl text-navy-deep">Başvurunuz alındı.</p>
              <p className="text-muted-foreground">
                Önbaşvuru formunuz bize ulaştı. En kısa sürede sizinle iletişime geçilecektir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <dl className="grid grid-cols-2 gap-8 max-w-xs border-b border-border pb-8">
                <div>
                  <dt className="text-3xl font-display font-semibold text-navy-deep">200+</dt>
                  <dd className="text-xs uppercase tracking-wider text-navy-500 mt-1">Saat</dd>
                </div>
                <div>
                  <dt className="text-3xl font-display font-semibold text-navy-deep">12+</dt>
                  <dd className="text-xs uppercase tracking-wider text-navy-500 mt-1">Öğretici</dd>
                </div>
              </dl>

              <div className="space-y-3 text-[1.05rem] leading-relaxed text-muted-foreground">
                <p>
                  Psikodiyalektik Formasyona Hazırlık Programı psikodiyalektik düşüncenin kaynakları olan bilgi türlerine dair bütüncül bir yaklaşım edinmeye yöneliktir. Diyalektik düşünce ve ruhsallık bilgisinin yaşadığımız coğrafyanın dinamikleriyle buluşturulmasını amaçlar.
                </p>
                <p>Psikodiyalektik Formasyona Hazırlık Programı tüm disiplinlerden katılımcılara açıktır.</p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500">Program Ücreti</p>
                  <p className="font-display text-2xl font-semibold text-navy-deep">50.000 TL <span className="text-base font-normal text-muted-foreground">+ KDV</span></p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500">İletişim</p>
                  <p className="text-sm text-muted-foreground">akademipsikodiyalektik@gmail.com</p>
                  <p className="text-sm text-muted-foreground">+90 (544) 809 79 09</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ad">Adınız</Label>
                  <Input id="ad" required value={form.ad} onChange={(e) => set("ad", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soyad">Soyadınız</Label>
                  <Input id="soyad" required value={form.soyad} onChange={(e) => set("soyad", e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tcKimlik">T.C. Kimlik Numaranız</Label>
                <Input
                  id="tcKimlik" required maxLength={11} inputMode="numeric"
                  value={form.tcKimlik}
                  onChange={(e) => set("tcKimlik", e.target.value.replace(/\D/g, ""))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail Adresiniz</Label>
                <Input
                  id="email" type="email" required
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefon">Cep Telefonu</Label>
                <Input
                  id="telefon" required inputMode="numeric"
                  value={form.telefon}
                  onChange={(e) => set("telefon", e.target.value.replace(/\D/g, ""))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ilIlce">İkamet Ettiğiniz İl/İlçe</Label>
                <Input id="ilIlce" required value={form.ilIlce} onChange={(e) => set("ilIlce", e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="meslek">Mesleğiniz</Label>
                <Input id="meslek" required value={form.meslek} onChange={(e) => set("meslek", e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ogrenimDurumu">Öğrenim Durumunuz</Label>
                <Select required onValueChange={(v) => set("ogrenimDurumu", v)}>
                  <SelectTrigger id="ogrenimDurumu">
                    <SelectValue placeholder="Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ilkokul">İlkokul</SelectItem>
                    <SelectItem value="ortaokul">Ortaokul</SelectItem>
                    <SelectItem value="lise">Lise</SelectItem>
                    <SelectItem value="lisans">Lisans</SelectItem>
                    <SelectItem value="yuksek-lisans">Yüksek Lisans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5 text-sm text-muted-foreground leading-relaxed">
                Bu başvuru formu ile verdiğiniz bilgilerin 6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında dernek tarafından korunacağını, üçüncü kişi ve kurumlarla kesinlikle paylaşılmayacağını ve verilerinizin saklanacağını kabul etmiş bulunmaktasınız.
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="kvkk"
                  checked={form.kvkk}
                  onCheckedChange={(v) => set("kvkk", !!v)}
                  required
                />
                <Label htmlFor="kvkk" className="cursor-pointer">Onaylıyorum</Label>
              </div>

              <Button
                type="submit"
                variant="amber"
                size="lg"
                className="w-full"
                disabled={
                  !form.kvkk ||
                  !form.ogrenimDurumu ||
                  !form.ad.trim() ||
                  !form.soyad.trim() ||
                  !form.tcKimlik.trim() ||
                  !form.email.trim() ||
                  !form.telefon.trim() ||
                  !form.ilIlce.trim() ||
                  !form.meslek.trim()
                }
              >
                Gönder
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Basvuru;
