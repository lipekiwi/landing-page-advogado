type WhatsAppLinkParams = {
  phoneE164Digits: string; // Ex.: 5581986431654 (somente dígitos)
  message?: string;
};

export function getWhatsAppLink({ phoneE164Digits, message }: WhatsAppLinkParams) {
  const digits = String(phoneE164Digits ?? "").replace(/\D/g, "");
  const text = String(message ?? "").trim();
  if (!digits) return "https://wa.me/";
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

