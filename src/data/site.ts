// Facts only from veon/client.json / client-digest.md. Nothing here points to the client's current website.
export const NOTE = "Розділ у розробці";

export const phones = {
  main: { tel: "+380995096069", label: "+380 99 509 60 69" },
  extra: [
    { tel: "+380985191956", label: "+380 98 519 19 56", note: "" },
    { tel: "+380632828355", label: "+380 63 282 83 55", note: "" },
    { tel: "+380952858523", label: "+380 95 285 85 23", note: "Кропивницький, також Viber" },
  ],
  complaints: { tel: "0800334624", label: "0 800 33 46 24" },
};

export const channels = {
  telegram: "https://t.me/kitaecua_bot",
  viber: "viber://chat?number=%2B380952858523",
};

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/kitaec.ua/" },
  { name: "Facebook", href: "https://www.facebook.com/kitaec.ua" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UC6VqFpXa-oy1uicK9Wma4xA" },
  { name: "TikTok", href: "https://www.tiktok.com/@kitaec.ua" },
];

export const brandsChina = ["Chery", "Geely", "Great Wall", "BYD", "MG", "Lifan", "Chana", "JAC", "JETOUR", "FAW", "ZAZ", "Daewoo", "Ravon"];
export const brandsEv = ["Tesla", "Nissan", "Honda", "Volkswagen", "BYD", "Zeekr", "Hyundai", "Kia", "Toyota"];

export const mapLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const stores = {
  kyiv: [
    { name: "Позняки", street: "просп. Миколи Бажана, 26" },
    { name: "Нивки", street: "вул. Нивська, 4г" },
    { name: "Воскресенка", street: "вул. Остафія Дашкевича, 15" },
  ],
  kropyvnytskyi: [
    { name: "Перший магазин мережі", street: "вул. Автолюбителів, 8а" },
    { name: "Клинцівський авторинок", street: "вул. Кропивницького, 189" },
  ],
};

export const kits = ["Фільтри", "Гальма", "Зчеплення", "Підвіска", "ГРМ"];
export const categories = ["Автотовари", "Інструменти", "Електротранспорт", "Товари для блекауту", "Дача і сад", "Туризм"];

export const nav = [
  { href: "#picker", label: "Підбір" },
  { href: "#kits", label: "Набори ТО" },
  { href: "#ev", label: "Електромобілі" },
  { href: "#delivery", label: "Доставка" },
  { href: "#stores", label: "Магазини" },
  { href: "#contacts", label: "Контакти" },
];
