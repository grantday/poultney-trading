export const contact = {
  phoneDisplay: "+263 77 000 0000",
  phoneTel: "+263770000000",
  email: "sales@poultneytrading.co.zw",
  address: "Harare, Zimbabwe",
  addressDetail:
    "Visit by appointment — call or message ahead so we can have your order ready.",
  whatsappNumber: "263770000000",
  whatsappMessage: "Hello, I'd like to chat with Poultney Trading.",
  hours: [
    { days: "Monday – Friday", time: "8:00 – 17:00" },
    { days: "Saturday", time: "8:00 – 13:00" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export function whatsappUrl(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
