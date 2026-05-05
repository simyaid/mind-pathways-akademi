import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import akademiLogo from "@/assets/AkademiLogo.png";

const navItems = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/psikodiyalektik-calisma", label: "Psikodiyalektik Çalışma" },
  {
    to: "/formasyon",
    label: "Psikodiyalektik Formasyon",
    submenu: [
      { to: "/formasyon", label: "Kurslar" },
      { to: "/kurslar/hazirlik", label: "Formasyon Hazırlık" },
      { to: "/kurslar/formasyon-hazirlik", label: "1. Yıl — Psikodiyalektik Teori ve Pratik" },
      { to: "/kurslar/1-modul", label: "2. Yıl — Psikodiyalektik Çalışma" },
      { to: "/kurslar/2-modul", label: "3. Yıl — Psikodiyalektik Formasyon İleri Kursu" },
      { to: "/kurslar/3-modul", label: "4. Yıl — Tamamlayıcı Çalışmalar" },
      { to: "/formasyon", label: "Dersler" },
    ],
  },
  { to: "/kadro", label: "Öğreticiler" },
  { to: "/etkinlikler", label: "Etkinlikler" },
  { to: "/iletisim", label: "İletişim" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileFormasyonOpen, setMobileFormasyonOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileFormasyonOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img src={akademiLogo} alt="Akademi Psikodiyalektik" className="h-12 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.to} className="relative group">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "relative flex items-center gap-0.5 px-3 py-2 text-xs font-medium transition-colors",
                        isActive ? "text-navy-deep" : "text-muted-foreground hover:text-navy-deep"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <ChevronDown className="h-3 w-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180" />
                        {isActive && (
                          <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-amber" />
                        )}
                      </>
                    )}
                  </NavLink>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full pt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-2 overflow-hidden">
                      {item.submenu.map((sub, i) =>
                        "group" in sub ? (
                          <p key={i} className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-500">
                            {sub.group}
                          </p>
                        ) : (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            className={({ isActive }) =>
                              cn(
                                "block px-4 py-2 text-xs transition-colors",
                                isActive
                                  ? "text-navy-deep font-medium bg-surface"
                                  : "text-muted-foreground hover:text-navy-deep hover:bg-surface"
                              )
                            }
                          >
                            {sub.label}
                          </NavLink>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative px-3 py-2 text-xs font-medium transition-colors",
                      isActive ? "text-navy-deep" : "text-muted-foreground hover:text-navy-deep"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-amber" />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href="https://akademipsikodiyalektik.vedubox.net/" target="_blank" rel="noopener noreferrer">
              <Button variant="amber" size="sm" className="py-2.5 px-5 h-auto">Üye Girişi</Button>
            </a>
          </div>
        </div>

        <button
          className="lg:hidden p-2 text-navy-deep"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-tight py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.to}>
                  <button
                    onClick={() => setMobileFormasyonOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-3 text-sm text-muted-foreground"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileFormasyonOpen && "rotate-180")} />
                  </button>
                  {mobileFormasyonOpen && (
                    <div className="ml-3 border-l border-border pl-3 flex flex-col gap-1 mb-1">
                      {item.submenu.map((sub, i) =>
                        "group" in sub ? (
                          <p key={i} className="px-2 pt-2 pb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-500">
                            {sub.group}
                          </p>
                        ) : (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            className={({ isActive }) =>
                              cn(
                                "px-2 py-2 text-sm rounded-md",
                                isActive ? "text-navy-deep font-medium" : "text-muted-foreground"
                              )
                            }
                          >
                            {sub.label}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-3 text-sm rounded-md",
                      isActive ? "bg-surface-muted text-navy-deep font-medium" : "text-muted-foreground"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="flex gap-2 pt-3 mt-2 border-t border-border">
              <Button variant="amber" size="sm" className="flex-1">Üye Girişi</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
