import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const KB: { q: string; a: string }[] = [
  { q: "provisions", a: "We supply fresh and frozen provisions: fruits, vegetables, meat, dairy, bakery, dry and bonded stores, with temperature-controlled logistics and quality checks per ISSA standards." },
  { q: "deck", a: "Deck stores include mooring lines, ropes, wires, shackles, anchors, paints, safety gear, PPE and IMO-compliant signage." },
  { q: "engine", a: "Engine stores: filters, lubricants, gaskets, valves, pumps, M/E and A/E spare parts, tools and measuring instruments." },
  { q: "galley", a: "Galley and cabin: cookware, tableware, cleaning chemicals, hygiene and hotel consumables." },
  { q: "bridge", a: "Bridge and navigation: stationery, printer toners, flags, signalling gear and nav consumables." },
  { q: "ports", a: "We cover all Egyptian ports including Alexandria, Damietta, Port Said, Suez, Sokhna, and Safaga with 24/7 operations." },
  { q: "payments", a: "We accept bank transfer, LC, and on-account billing for approved clients. Cash-to-master can be arranged per compliance." },
  { q: "quote", a: "Email operation@seagreats.com with vessel, ETA, port, agent, and item list (with ISSA codes if available) to receive a fast quotation." }
];

function replyFor(input: string) {
  const text = input.toLowerCase();
  const hit = KB.find(k => text.includes(k.q));
  if (hit) return hit.a;
  return "Thanks for reaching out! Please include vessel name/IMO, ETA, port, and your item list. I can guide you on provisions, deck/engine stores, chemicals, bonded, and more.";
}

export default function MarineAssistant() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Hello! I\'m your Sea Greats assistant. Ask me about ship supplies, ports, quotes, or logistics.' }
  ]);
  const [input, setInput] = useState("");

  const onSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, content: input };
    const botMsg = { role: 'assistant' as const, content: replyFor(input) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <section className="container my-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-lg border p-4 bg-card/50">
          <div className="h-72 overflow-y-auto space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`p-3 rounded-md ${m.role === 'user' ? 'bg-secondary' : 'bg-ocean-gradient text-primary-foreground'}`}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSend()}
            />
            <Button variant="hero" onClick={onSend}>Send</Button>
          </div>
        </div>
        <aside className="rounded-lg border p-4 bg-card/50">
          <h4 className="font-semibold mb-2">Quick Tips</h4>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>Include ISSA codes where possible for faster matching.</li>
            <li>Cold chain items travel in insulated boxes with data loggers.</li>
            <li>We comply with port security, customs and food hygiene regulations.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
