import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      brand: "Sea Greats",
      nav: {
        home: "Home",
        services: "Marine Services & Supplies",
        about: "About",
        contact: "Contact",
        gallery: "Media Gallery",
        blog: "Articles",
        admin: "Admin",
        developer: "Developer"
      },
      hero: {
        title: "Ship Chandling & Marine Services in Egypt",
        subtitle: "Reliable provisions, technical stores, and 24/7 operations for vessels at all Egyptian ports.",
        ctaPrimary: "Explore Services",
        ctaSecondary: "Get a Quote"
      },
      footer: {
        rights: "All rights reserved.",
        developer: "Developer Page"
      },
      contact: {
        title: "Contact Us",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message: "Your message",
        send: "Send"
      }
    }
  },
  ar: {
    translation: {
      brand: "سي جريتس",
      nav: {
        home: "الرئيسية",
        services: "الخدمات البحرية والتوريدات",
        about: "من نحن",
        contact: "اتصل بنا",
        gallery: "المعرض",
        blog: "المقالات",
        admin: "لوحة التحكم",
        developer: "المطور"
      },
      hero: {
        title: "تموين السفن والخدمات البحرية في مصر",
        subtitle: "توريدات موثوقة ومعدات فنية وتشغيل على مدار الساعة في جميع الموانئ المصرية.",
        ctaPrimary: "استعرض الخدمات",
        ctaSecondary: "اطلب عرض سعر"
      },
      footer: {
        rights: "جميع الحقوق محفوظة.",
        developer: "صفحة المطور"
      },
      contact: {
        title: "تواصل معنا",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        message: "رسالتك",
        send: "إرسال"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    interpolation: { escapeValue: false },
    detection: { order: ["querystring", "localStorage", "navigator"], caches: ["localStorage"] }
  });

export default i18n;
