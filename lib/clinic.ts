export const CLINIC = {
  name: "Baskaran Clinic",
  tagline: "The clinic Melur loves",
  addressLine: "280, Alagar Kovil Road",
  city: "Melur, Madurai, Tamil Nadu",
  pincode: "625106",
  fullAddress: "280, Alagar Kovil Road, Melur, Madurai, Tamil Nadu – 625106",
  phoneDisplay: "+91 80988 59590",
  phoneLocal: "080988 59590",
  phoneTel: "+918098859590",
  whatsappNumber: "918098859590",
  mapsQuery: "280 Alagar Kovil Road Melur Madurai 625106",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=280+Alagar+Kovil+Road,+Melur,+Madurai,+Tamil+Nadu+625106&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=280+Alagar+Kovil+Road,+Melur,+Madurai,+Tamil+Nadu+625106",
} as const;

export const TIMINGS = {
  morning: "09:30 AM – 01:30 PM",
  evening: "05:30 PM – 09:00 PM",
  sunday: "Morning Session / By Prior Appointment",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappUrl(
  "Hello Baskaran Clinic, I want to book an appointment"
);

export const WHATSAPP_BOOK = whatsappUrl(
  "Hello Baskaran Clinic, I want to book an appointment"
);

export const TEL_HREF = `tel:${CLINIC.phoneTel}`;
