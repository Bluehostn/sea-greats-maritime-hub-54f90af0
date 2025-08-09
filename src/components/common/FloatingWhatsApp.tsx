import { MessageCircle } from "lucide-react";
import MarineAssistant from "@/components/assistant/MarineAssistant";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function FloatingWhatsApp() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="fixed bottom-5 end-5 bg-ocean-gradient text-primary-foreground rounded-full px-4 py-3 shadow-glow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Assistant"
        >
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="size-5" />
            Assistant
          </span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xl p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Sea Greats Assistant</SheetTitle>
        </SheetHeader>
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
          <MarineAssistant />
        </div>
      </SheetContent>
    </Sheet>
  );
}
