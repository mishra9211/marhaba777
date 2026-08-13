export type PanelCategory = "semi" | "b2b" | "b2c";

export type Panel = { url: string; label: string };

export const panels: Record<PanelCategory, Panel[]> = {
  semi: [
    { url: "https://99exchpro.online", label: "MY99" },
    { url: "https://betbhai9.one", label: "BETBHAI9" },
    { url: "https://cricbet9x.com", label: "cricbet9x" },
    { url: "https://gold365x.vip", label: "GOLD365" },
    { url: "https://reddy365x.com", label: "Reddy888" },
    { url: "https://lotus365ae.com", label: "Lotus247win" },
    { url: "https://winbuz9.com", label: "Winbuzz" },
    { url: "https://goexch99.vip", label: "Goexch99" },
    { url: "https://radheexch9.vip", label: "radhe" },
    { url: "https://d247x.vip", label: "D247" },
    { url: "https://11xplayers.com", label: "11xplayers" },
  ],
  b2b: [
    { url: "https://mamaexch888.com", label: "mamaexch" },
    { url: "https://realsports99.com", label: "realsports" },
    { url: "https://bestbet7.live", label: "Bestbet7" },
    { url: "https://chambet7.com", label: "chambet7" },
    { url: "https://mamaexch7.live", label: "mamaexch7" },
    { url: "https://allpanelexch7.live", label: "allpanelexch" },
    { url: "https://chamexch7.com", label: "chamexch" },
    { url: "https://radheexch9.club", label: "radhexch" },
  ],
  b2c: [
    { url: "https://playwinexchange.com", label: "mamaexch" },
    { url: "https://magicwin9.com", label: "d247" },
    { url: "https://cricbett99.tech", label: "cricbet" },
    { url: "https://imwin7.com", label: "reddy888" },
    { url: "https://7mamaexch7.live", label: "mamaexch7" },
    { url: "https://stakewin.live", label: "Stake" },
    { url: "https://reddyanaa247.com", label: "Reddyanna" },
    { url: "https://fair555.live", label: "Betbhai" },
    { url: "https://winbuzzvip88.com", label: "Winbuzz" },
    { url: "https://99balajiexch.com", label: "my99" },
    { url: "https://shiva365.co", label: "Shiva" },
  ],
};

export const categoryInfo: Record<PanelCategory, { title: string; description: string }> = {
  semi: {
    title: "SEMI — One Admin, Multiple User Interface",
    description:
      "One admin account managing multiple user interfaces with full control, live reporting and easy user creation.",
  },
  b2b: {
    title: "B2B — Master & Super Master Panels",
    description:
      "Master and super master panels. Clients can use our domain or bring their own domain.",
  },
  b2c: {
    title: "B2C — Whitelabel & Panel",
    description:
      "Whitelabel B2C sites. The listed links are demo only; clients receive the product on their own domain.",
  },
};

export const currencies = [
  "INR — Indian Rupee",
  "USD — US Dollar",
  "AED — UAE Dirham",
  "BDT — Bangladeshi Taka",
  "NPR — Nepali Rupee",
  "PKR — Pakistani Rupee",
  "LKR — Sri Lankan Rupee",
  "GBP — Pound Sterling",
  "EUR — Euro",
  "AUD — Australian Dollar",
  "CAD — Canadian Dollar",
  "USDT — Crypto",
];

export const offers = [
  {
    title: "Free Cricket Schedule Banner",
    details: [
      "Premium quality design",
      "Latest cricket schedule",
      "Included with every website package",
    ],
  },
  {
    title: "B2C Commission System",
    details: [
      "Direct company commission on B2C transactions",
      "Dealer can pass the commission to users or keep it as earnings",
      "B2C rate increases by 1% with this feature",
    ],
  },
];

export const contact = {
  brand: "Marhaba",
  whatsapp: "https://wa.me/919999999999",
  support: "24x7 WhatsApp support",
  note: "18+ only. Please play responsibly.",
};
