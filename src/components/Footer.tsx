import { Link } from "react-router-dom";
import akademiLogo from "@/assets/Akademi Logo .png";

export const Footer = () => (
  <footer className="mt-32 border-t border-border bg-surface">
    <div className="container-tight py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="mb-4">
            <img src={akademiLogo} alt="Akademi Psikodiyalektik" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Psikoloji ve felsefenin kesişiminde, deneyim üzerinden inşa edilen yapılandırılmış bir zihinsel gelişim akademisi.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-navy-deep mb-4">Akademi</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/hakkimizda" className="hover:text-navy-deep">Hakkımızda</Link></li>
            <li><Link to="/formasyon" className="hover:text-navy-deep">Formasyon</Link></li>
            <li><Link to="/kadro" className="hover:text-navy-deep">Kadro</Link></li>
            <li><Link to="/iletisim" className="hover:text-navy-deep">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-navy-deep mb-4">İletişim</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>info@psikodiyalektik.com</li>
            <li>+90 (212) 000 00 00</li>
            <li>İstanbul, Türkiye</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Akademi Psikodiyalektik. Tüm hakları saklıdır.</span>
        <span>Düşünmek bir eylemdir.</span>
      </div>
    </div>
  </footer>
);
