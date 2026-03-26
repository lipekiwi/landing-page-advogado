"use client";

import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type WhatsAppFloatingButtonProps = {
  phoneE164Digits: string;
  message: string;
};

export function WhatsAppFloatingButton({
  phoneE164Digits,
  message,
}: WhatsAppFloatingButtonProps) {
  const href = getWhatsAppLink({ phoneE164Digits, message });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
        className={cn(
          buttonVariants({ variant: "default" }),
          "h-14 w-14 rounded-full bg-emerald-700 p-0 text-white shadow-lg hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
        )}
      >
        <span className="sr-only">Falar no WhatsApp</span>
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 3C9.4 3 4 8.1 4 14.4c0 2.5.9 4.8 2.4 6.7L5 29l8.4-1.3c1.8.9 3.9 1.4 6.1 1.4 6.6 0 12-5.1 12-11.4S22.6 3 16 3z"
            fill="rgba(255,255,255,0.18)"
          />
          <path
            d="M16 4.7c-5.7 0-10.3 4.3-10.3 9.7 0 2.3.8 4.4 2.2 6.1l-1 5.8 6.1-1c1.6.9 3.4 1.4 5.3 1.4 5.7 0 10.3-4.3 10.3-9.7S21.7 4.7 16 4.7z"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.92"
          />
          <path
            d="M20.7 18.9c-.2.5-1.3 1.1-1.9 1.2-.5.1-1.2.1-1.9-.1-.4-.1-.9-.3-1.5-.6-2.7-1.3-4.5-4.2-4.6-4.3-.1-.1-1.1-1.4-1.1-2.7 0-1.3.7-1.9 1-2.2.2-.2.5-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.9 2 .1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.3.4-.5.6-.2.2-.4.4-.2.7.1.3.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.3.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.1.1.6-.1 1.1z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </div>
  );
}

