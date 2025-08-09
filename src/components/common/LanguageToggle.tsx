import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    const isAr = current === "ar";
    document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
    document.documentElement.lang = current;
  }, [current]);

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant={current === "en" ? "hero" : "outline"}
        onClick={() => i18n.changeLanguage("en")}
        aria-pressed={current === "en"}
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={current === "ar" ? "hero" : "outline"}
        onClick={() => i18n.changeLanguage("ar")}
        aria-pressed={current === "ar"}
      >
        AR
      </Button>
    </div>
  );
}
