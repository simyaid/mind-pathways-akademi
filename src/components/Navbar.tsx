import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import akademiLogo from "@/assets/AkademiLogo.png";

const navItems = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/formasyon", label: "Formasyon Süreci" },
  { to: "/kadro", label: "Kadromuz" },
  { to: "/iletisim", label: "İletişim" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

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
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
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
            ))}
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
            {navItems.map((item) => (
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
            ))}
            <div className="flex gap-2 pt-3 mt-2 border-t border-border">
              <Button variant="amber" size="sm" className="flex-1">Üye Girişi</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
