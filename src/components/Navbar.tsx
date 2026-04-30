import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/formasyon", label: "Formasyon Süreci" },
  { to: "/kadro", label: "Kadro" },
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
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-navy-deep text-amber font-display font-bold">Ψ</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[0.95rem] font-semibold text-navy-deep">Akademi</span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-navy-500">Psikodiyalektik</span>
          </span>
        </Link>

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
          <Button variant="ghost" size="sm" className="text-navy-deep">Üye Girişi</Button>
          <Button variant="amber" size="sm">Kayıt Ol</Button>
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
              <Button variant="navyOutline" size="sm" className="flex-1">Üye Girişi</Button>
              <Button variant="amber" size="sm" className="flex-1">Kayıt Ol</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
