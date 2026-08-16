"use client";

import { MessageCircle, Phone } from "lucide-react";
import { TEL_HREF, WHATSAPP_BOOK } from "@/lib/clinic";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5">
        <a
          href={TEL_HREF}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-3 py-3.5 text-sm font-semibold text-white active:scale-[0.98]"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </a>
        <a
          href={WHATSAPP_BOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3.5 text-sm font-semibold text-white active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Book WhatsApp
        </a>
      </div>
    </div>
  );
}
