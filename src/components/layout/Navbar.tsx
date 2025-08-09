import { Link, NavLink } from "react-router-dom";
import LanguageToggle from "@/components/common/LanguageToggle";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 glass border-b">
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/lovable-uploads/07bf04ef-0709-4138-9556-8ff6233d5609.png" alt="Sea Greats logo" className="h-8 w-8 rounded-md" />
          <span className="font-bold tracking-wide">{t("brand")}</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `story-link ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild variant="hero" className="hidden md:inline-flex">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
