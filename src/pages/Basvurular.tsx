import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqEYTBleB5qk2lFdnkE0zv-bZ2XkoX2kziTOXBJBsBfEW2se7D_XGbNDenZP_pgm5h/exec";

type Kayit = {
  tarih: string;
  ad: string;
  soyad: string;
  tcKimlik: string;
  email: string;
  telefon: string;
  ilIlce: string;
  meslek: string;
  ogrenimDurumu: string;
};

const ogrenimLabel: Record<string, string> = {
  ilkokul: "İlkokul",
  ortaokul: "Ortaokul",
  lise: "Lise",
  lisans: "Lisans",
  "yuksek-lisans": "Yüksek Lisans",
};

function fetchJSONP(url: string): Promise<Kayit[]> {
  return new Promise((resolve, reject) => {
    const cbName = "jsonp_cb_" + Date.now();
    const script = document.createElement("script");
    (window as any)[cbName] = (data: Kayit[]) => {
      delete (window as any)[cbName];
      document.body.removeChild(script);
      resolve(data);
    };
    script.onerror = () => {
      delete (window as any)[cbName];
      document.body.removeChild(script);
      reject(new Error("JSONP failed"));
    };
    script.src = url + "?callback=" + cbName;
    document.body.appendChild(script);
  });
}

const Basvurular = () => {
  const [list, setList] = useState<Kayit[]>([]);
  const [selected, setSelected] = useState<Kayit | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchJSONP(SCRIPT_URL)
      .then((data) => setList(data.reverse()))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (selected) {
    return (
      <section className="py-20">
        <div className="container-tight max-w-2xl">
          <button
            onClick={() => setSelected(null)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy-deep mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Listeye dön
          </button>

          <h1 className="font-display text-3xl text-navy-deep font-medium mb-2">
            {selected.ad} {selected.soyad}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">{selected.tarih}</p>

          <dl className="divide-y divide-border">
            {[
              ["T.C. Kimlik No", selected.tcKimlik],
              ["E-mail", selected.email],
              ["Cep Telefonu", selected.telefon],
              ["İl / İlçe", selected.ilIlce],
              ["Meslek", selected.meslek],
              ["Öğrenim Durumu", ogrenimLabel[selected.ogrenimDurumu] ?? selected.ogrenimDurumu],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-6 py-4">
                <dt className="w-44 shrink-0 text-sm font-medium text-navy-500">{label}</dt>
                <dd className="text-sm text-navy-deep">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container-tight max-w-2xl">
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500 mb-2">Yönetim</p>
          <h1 className="font-display text-4xl text-navy-deep font-medium">Ön Başvurular</h1>
        </div>

        {loading && <p className="text-muted-foreground">Yükleniyor…</p>}
        {error && <p className="text-muted-foreground">Veriler yüklenemedi.</p>}

        {!loading && !error && list.length === 0 && (
          <p className="text-muted-foreground">Henüz başvuru bulunmuyor.</p>
        )}

        {!loading && !error && list.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-6">{list.length} başvuru</p>
            <div className="divide-y divide-border">
              {list.map((b, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(b)}
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-surface -mx-4 px-4 rounded-md transition-colors group"
                >
                  <span className="font-medium text-navy-deep group-hover:text-amber transition-colors">
                    {b.ad} {b.soyad}
                  </span>
                  <span className="text-sm text-muted-foreground">{b.telefon}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Basvurular;
