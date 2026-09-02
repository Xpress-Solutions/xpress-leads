export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function whatsappUrl(phone: string, text?: string) {
  const base = `https://wa.me/${phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function instagramUrl(handle: string) {
  return `https://www.instagram.com/${handle}/`;
}

export function telUrl(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`;
}
