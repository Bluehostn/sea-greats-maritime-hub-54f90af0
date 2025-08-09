import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormEvent, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { i18n } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate("/", { replace: true });
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/", { replace: true });
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return toast({ title: "Login failed", description: error.message, variant: "destructive" });
    toast({ title: "Welcome back" });
  };

  const onSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectUrl }
    });
    setLoading(false);
    if (error) return toast({ title: "Signup failed", description: error.message, variant: "destructive" });
    toast({ title: "Check your email", description: "Confirm your signup to continue." });
  };

  return (
    <main className="container py-12">
      <SEO title="Login | Admin Panel" lang={i18n.language} />
      <div className="max-w-md mx-auto p-6 rounded-xl border bg-card/60">
        <h1 className="text-2xl font-bold mb-4">Account Access</h1>
        <Tabs defaultValue="login">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form className="space-y-3 mt-4" onSubmit={onLogin}>
              <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <Button variant="hero" className="w-full" disabled={loading} type="submit">{loading ? "Please wait..." : "Login"}</Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form className="space-y-3 mt-4" onSubmit={onSignUp}>
              <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <Button variant="premium" className="w-full" disabled={loading} type="submit">{loading ? "Please wait..." : "Create account"}</Button>
            </form>
          </TabsContent>
        </Tabs>
        <p className="text-xs text-muted-foreground mt-3">Secure authentication powered by Supabase.</p>
      </div>
    </main>
  );
}
