import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-16 border-t">
      <div className="container py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">{t("brand")}</h3>
          <p className="text-sm text-muted-foreground">
            Sea Greats – Ship Supply & Marine Services. 24/7 operations across Egyptian ports.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>Email: info@seagreats.com</li>
            <li>Operations: operation@seagreats.com</li>
            <li>Phone/WhatsApp: +20 100 332 8902</li>
            <li>Chairman: MR. Ahmed Saleh</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/developer" className="story-link text-primary">
            {t("footer.developer")} — Bluehostn
          </Link>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {t("brand")}. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
