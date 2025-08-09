export default function FloatingWhatsApp() {
  const phone = "+201003328902";
  const url = `https://wa.me/${phone}?text=Hello%20Sea%20Greats%2C%20I%20need%20assistance%20with%20ship%20supplies.`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 end-5 bg-ocean-gradient text-primary-foreground rounded-full px-4 py-3 shadow-glow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="WhatsApp"
    >
      WhatsApp
    </a>
  );
}
