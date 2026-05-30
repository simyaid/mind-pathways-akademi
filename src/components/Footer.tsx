import { Link } from "react-router-dom";
import akademiLogo from "@/assets/AkademiLogo.png";
import halkicinpsikoterapilogow from "@/assets/halkicinpsikoterapilogow.png";
import xLogo from "@/assets/x-logo.webp";
import instagramIcon from "@/assets/Instagram_icon.png";

export const Footer = () => (
  <footer className="mt-32 border-t border-border bg-surface">
    <div className="container-tight pt-5 pb-5">
      <div className="grid gap-12 md:grid-cols-4 items-center">
        <div className="md:col-span-2 max-w-sm">
          <div className="mb-4 flex items-center gap-6">
            <img src={akademiLogo} alt="Akademi Psikodiyalektik" className="h-20 w-auto object-contain" />
            <div className="w-0.5 h-16 bg-border" />
            <a href="https://www.halkicinpsikoterapi.org/" target="_blank" rel="noopener noreferrer">
              <img src={halkicinpsikoterapilogow} alt="Halk İçin Psikoterapi" className="h-48 w-auto object-contain" />
            </a>
          </div>
        </div>
        <div className="text-right md:col-start-4">
          <h4 className="font-display text-sm font-semibold text-navy-deep mb-4">İletişim</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>akademipsikodiyalektik@gmail.com</li>
            <li>+90 (544) 809 79 09</li>
            <li>Halaskargazi Caddesi Kutlu Apt. 182/6 Şişli/İstanbul</li>
          </ul>
          <div className="flex items-center justify-end gap-4 mt-5">
            <a href="https://www.instagram.com/akademipsikodiyalektik/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="h-6 w-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://x.com/psychodialectic" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src={xLogo} alt="X" className="h-9 w-9 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Akademi Psikodiyalektik. Tüm hakları saklıdır.</span>
        <span>Düşünmek bir eylemdir.</span>
      </div>
    </div>
  </footer>
);
