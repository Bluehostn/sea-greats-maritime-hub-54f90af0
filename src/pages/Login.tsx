import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const { i18n } = useTranslation();
  return (
    <main className="container py-12">
      <SEO title="Login | Admin Panel" lang={i18n.language} />
      <div className="max-w-md mx-auto p-6 rounded-xl border bg-card/60">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <div className="space-y-3">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button variant="hero" className="w-full">Login</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">Note: Connect Supabase to enable secure auth, roles, and dashboard.</p>
      </div>
    </main>
  );
}
