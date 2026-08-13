import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ShieldCheck, Wallet, Headphones, Zap, Users, LineChart, Globe, Megaphone, Check, X, LifeBuoy } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { sr } from "date-fns/locale";

const WHATSAPP_URL = "https://wa.me/919999999999";

const providers = [
  { src: "/logos/aes_logo_3_2_cl_dark.svg", name: "AES" },
  { src: "/logos/aug_logo_3_2_cl_dark.svg", name: "AUG" },
  { src: "/logos/aux_logo_3_2_cl_dark.svg", name: "AUX" },
  { src: "/logos/bbg_logo_3_2_cl_dark.svg", name: "BBG" },
  { src: "/logos/bcs_logo_3_2_cl_dark.svg", name: "BCS" },
  { src: "/logos/bfg_logo_3_2_cl_dark.svg", name: "BFG" },
  { src: "/logos/bgm_logo_3_2_cl_dark.svg", name: "BGM" },
  { src: "/logos/blg_logo_3_2_cl_dark.svg", name: "BLG" },
  { src: "/logos/bls_logo_3_2_cl_dark.svg", name: "BLS" },
  { src: "/logos/bmg_logo_3_2_cl_dark.svg", name: "BMG" },
  { src: "/logos/bng_logo_3_2_cl_dark.svg", name: "BNG" },
  { src: "/logos/bpg_logo_3_2_cl_dark.svg", name: "BPG" },
  { src: "/logos/brg_logo_3_2_cl_dark.svg", name: "BRG" },
  { src: "/logos/btg_logo_3_2_cl_dark.svg", name: "BTG" },
  { src: "/logos/btr_logo_3_2_cl_dark.svg", name: "BTR" },
  { src: "/logos/btsl_logo_3_2_cl_dark.svg", name: "BTSL" },
  { src: "/logos/cqc_logo_3_2_cl_dark.svg", name: "CQC" },
  { src: "/logos/crc_logo_3_2_cl_dark.svg", name: "CRC" },
  { src: "/logos/dwg_logo_3_2_cl_dark.svg", name: "DWG" },
  { src: "/logos/end_logo_3_2_cl_dark.svg", name: "END" },
  { src: "/logos/evo_logo_3_2_cl_dark.svg", name: "EVO" },
  { src: "/logos/ezg_logo_3_2_cl_dark.svg", name: "EZG" },
  { src: "/logos/fgs_logo_3_2_cl_dark.svg", name: "FGS" },
  { src: "/logos/fnt_logo_3_2_cl_dark.svg", name: "FNT" },
  { src: "/logos/ftp_logo_3_2_cl_dark.svg", name: "FTP" },
  { src: "/logos/gmb_logo_3_2_cl_dark.svg", name: "GMB" },
  { src: "/logos/gmv_logo_3_2_cl_dark.svg", name: "GMV" },
  { src: "/logos/gmz_logo_3_2_cl_dark.svg", name: "GMZ" },
  { src: "/logos/hbg_logo_3_2_cl_dark.svg", name: "HBG" },
  { src: "/logos/hbn_logo_3_2_cl_dark.svg", name: "HBN" },
  { src: "/logos/hcw_logo_3_2_cl_dark.svg", name: "HCW" },
  { src: "/logos/hrg_logo_3_2_cl_dark.svg", name: "HRG" },
  { src: "/logos/imn_logo_3_2_cl_dark.svg", name: "IMN" },
  { src: "/logos/iog_logo_3_2_cl_dark.svg", name: "IOG" },
  { src: "/logos/jdb_logo_3_2_cl_dark.svg", name: "JDB" },
  { src: "/logos/jdr_logo_3_2_cl_dark.svg", name: "JDR" },
  { src: "/logos/jil_logo_3_2_cl_dark.svg", name: "JIL" },
  { src: "/logos/jly_logo_3_2_cl_dark.svg", name: "JLY" },
  { src: "/logos/kir_logo_3_2_cl_dark.svg", name: "KIR" },
  { src: "/logos/kng_logo_3_2_cl_dark.svg", name: "KNG" },
  { src: "/logos/lea_logo_3_2_cl_dark.svg", name: "LEA" },
  { src: "/logos/mbl_logo_3_2_cl_dark.svg", name: "MBL" },
  { src: "/logos/mnc_logo_3_2_cl_dark.svg", name: "MNC" },
  { src: "/logos/mnn_logo_3_2_cl_dark.svg", name: "MNN" },
  { src: "/logos/ngg_logo_3_2_cl_dark.svg", name: "NGG" },
  { src: "/logos/nlc_logo_3_2_cl_dark.svg", name: "NLC" },
  { src: "/logos/nrl_logo_3_2_cl_dark.svg", name: "NRL" },
  { src: "/logos/ntg_logo_3_2_cl_dark.svg", name: "NTG" },
  { src: "/logos/ntn_logo_3_2_cl_dark.svg", name: "NTN" },
  { src: "/logos/nvm_logo_3_2_cl_dark.svg", name: "NVM" },
  { src: "/logos/oak_logo_3_2_cl_dark.svg", name: "OAK" },
  { src: "/logos/onegame_logo_3_2_cl_dark.svg", name: "ONEGAME" },
  { src: "/logos/onl_logo_3_2_cl_dark.svg", name: "ONL" },
  { src: "/logos/pas_logo_3_2_cl_dark.svg", name: "PAS" },
  { src: "/logos/pgs_logo_3_2_cl_dark.svg", name: "PGS" },
  { src: "/logos/phx_logo_3_2_cl_dark.svg", name: "PHX" },
  { src: "/logos/plt_logo_3_2_cl_dark.svg", name: "PLT" },
  { src: "/logos/pltl_logo_3_2_cl_dark.svg", name: "PLTL" },
  { src: "/logos/ply_logo_3_2_cl_dark.svg", name: "PLY" },
  { src: "/logos/pnt_logo_3_2_cl_dark.svg", name: "PNT" },
  { src: "/logos/qbt_logo_3_2_cl_dark.svg", name: "QBT" },
  { src: "/logos/qps_logo_3_2_cl_dark.svg", name: "QPS" },
  { src: "/logos/raw_logo_3_2_cl_dark.svg", name: "RAW" },
  { src: "/logos/rbp_logo_3_2_cl_dark.svg", name: "RBP" },
  { src: "/logos/reg_logo_3_2_cl_dark.svg", name: "REG" },
  { src: "/logos/rfg_logo_3_2_cl_dark.svg", name: "RFG" },
  { src: "/logos/rlg_logo_3_2_cl_dark.svg", name: "RLG" },
  { src: "/logos/rpl_logo_3_2_cl_dark.svg", name: "RPL" },
  { src: "/logos/rts_logo_3_2_cl_dark.svg", name: "RTS" },
  { src: "/logos/sml_logo_3_2_cl_dark.svg", name: "SML" },
  { src: "/logos/sms_logo_3_2_cl_dark.svg", name: "SMS" },
  { src: "/logos/spb_logo_3_2_cl_dark.svg", name: "SPB" },
  { src: "/logos/spi_logo_3_2_cl_dark.svg", name: "SPI" },
  { src: "/logos/spn_logo_3_2_cl_dark.svg", name: "SPN" },
  { src: "/logos/tdk_logo_3_2_cl_dark.svg", name: "TDK" },
  { src: "/logos/tmh_logo_3_2_cl_dark.svg", name: "TMH" },
  { src: "/logos/tvb_logo_3_2_cl_dark.svg", name: "TVB" },
  { src: "/logos/wzd_logo_3_2_cl_dark.svg", name: "WZD" },
  { src: "/logos/ygg_logo_3_2_cl_dark.svg", name: "YGG" },
  { src: "/logos/ylt_logo_3_2_cl_dark.svg", name: "YLT" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.36 9.36 0 0 1-1.44-5A9.44 9.44 0 0 1 18.73 5.3a9.36 9.36 0 0 1 2.77 6.66 9.44 9.44 0 0 1-9.45 9.54M20.06 3.94A11.75 11.75 0 0 0 11.75.5C5.25.5 0 5.75 0 12.25c0 2.07.54 4.1 1.57 5.88L0 24l6.02-1.58a11.7 11.7 0 0 0 5.6 1.43h.01c6.5 0 11.75-5.25 11.75-11.75 0-3.14-1.22-6.09-3.32-8.16" />
    </svg>
  );
}

function PanelPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setOpen(true), 100000);
    return () => clearInterval(t);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 p-5 backdrop-blur-sm">
      <div className="animate-scale-in relative w-full max-w-sm rounded-3xl border border-primary/30 bg-card p-8 text-center shadow-[var(--shadow-glow)]">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <WhatsAppIcon className="h-7 w-7 text-primary" />
        </span>
        <h3 className="mt-5 text-2xl font-black tracking-tight">Get Your Panel</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          B2B ho ya B2C — 2 minute me apna panel activate karwaayein.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.03]"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp Now
        </a>
      </div>
    </div>
  );
}

const PROMO_VIDEO = "/videos/video_260811_213352 (2).mp4";

function FloatingVideo() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="animate-fade-up fixed bottom-24 left-4 z-[54] w-[190px] overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-[var(--shadow-glow)] sm:bottom-6 sm:w-[260px]">
      <button
        onClick={() => setOpen(false)}
        aria-label="Close video"
        className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-1 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
      >
        <X className="h-3.5 w-3.5" />
      </button>
      <video
        src={PROMO_VIDEO}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      />
      <p className="px-3 py-2 text-[11px] font-semibold tracking-[0.15em] text-primary">
        LIVE DEMO VIDEO
      </p>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp support"
      className="animate-float fixed bottom-6 right-6 z-[55] inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-110"
      style={{ backgroundImage: "var(--gradient-brand)" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlexGoa — B2B & B2C Panel Solutions" },
      {
        name: "description",
        content:
          "Premium B2B master panels and B2C player IDs with instant setup, 24x7 support and fast settlements.",
      },
      { property: "og:title", content: "AlexGoa — B2B & B2C Panel Solutions" },
      {
        property: "og:description",
        content:
          "Premium B2B master panels and B2C player IDs with instant setup, 24x7 support and fast settlements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const semi = [
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
];

const b2bList = [
  { url: "https://mamaexch888.com", label: "mamaexch" },
  { url: "https://realsports99.com", label: "realsports" },
  { url: "https://bestbet7.live", label: "Bestbet7" },
  { url: "https://chambet7.com", label: "chambet7" },
  { url: "https://mamaexch7.live", label: "mamaexch7" },
  { url: "https://allpanelexch7.live", label: "allpanelexch" },
  { url: "https://chamexch7.com", label: "chamexch" },
  { url: "https://radheexch9.club", label: "radhexch" },
];

const b2cList = [
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
];

const currencies = [
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


const features = [
  { icon: Zap, title: "Instant Setup", body: "Panel ya ID 2 minute me active — koi lambi process nahi." },
  { icon: Wallet, title: "Fast Settlement", body: "Deposit aur withdrawal dono par sabse tez processing." },
  { icon: ShieldCheck, title: "100% Secure", body: "Verified panels, encrypted access aur safe transactions." },
  { icon: Headphones, title: "24x7 Support", body: "WhatsApp par hamesha available dedicated support team." },
];


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-lg font-black tracking-[0.2em]">
            ALEX<span className="text-primary">GOA</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold tracking-[0.18em] text-muted-foreground md:flex">
            <a href="#semi" className="story-link transition-colors hover:text-primary">SEMI</a>
            <a href="#b2b" className="story-link transition-colors hover:text-primary">B2B</a>
            <a href="#b2c" className="story-link transition-colors hover:text-primary">B2C</a>
            <a href="#currency" className="story-link transition-colors hover:text-primary">CURRENCY</a>

            <a href="#why" className="story-link transition-colors hover:text-primary">WHY US</a>
            <a href="#contact" className="story-link transition-colors hover:text-primary">CONTACT</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-soft)" }}>
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={900}
            className="animate-float pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-36">
            <span className="animate-fade-up inline-block rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
              B2B &amp; B2C SOLUTIONS
            </span>
            <h1
              className="animate-fade-up mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              India ke sabse <span className="text-shimmer">trusted panels</span> ek hi jagah
            </h1>
            <p
              className="animate-fade-up mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Master panel chahiye ya sirf apni personal ID — dono ke liye verified sites,
              instant activation aur 24x7 support.
            </p>
            <dl
              className="animate-fade-up mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8"
              style={{ animationDelay: "320ms" }}
            >
              {[
                ["50+", "Live Panels"],
                ["25K+", "Active Users"],
                ["24x7", "Support"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-black text-primary md:text-3xl">{v}</dt>
                  <dd className="mt-1 text-xs tracking-wide text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Section
          id="semi"
          icon={Users}
          eyebrow="TYPE 1"
          title="SEMI — One Admin, Multiple User Interface"
          desc="Ek hi admin se multiple user interface manage karein — full control, live reporting aur easy user creation."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {semi.map((s, i) => (
              <LinkCard key={s.url} {...s} delay={i * 50} />
            ))}
          </div>
        </Section>

        <div className="bg-secondary/60">
          <Section
            id="b2b"
            icon={Globe}
            eyebrow="TYPE 2"
            title="B2B — Master &amp; Super Master Panels"
            desc="Isme aap hamara domain bhi use kar sakte hain ya apna khud ka domain le sakte hain."
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {b2bList.map((s, i) => (
                <LinkCard key={s.url} {...s} delay={i * 50} />
              ))}
            </div>
          </Section>
        </div>

        <Section
          id="b2c"
          icon={LineChart}
          eyebrow="TYPE 3"
          title="B2C — Whitelable &amp; Panel"
          desc="Ye B2C sites sirf demo ke liye hain — client ko ye apne khud ke domain par milega."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {b2cList.map((s, i) => (
              <LinkCard key={s.url} {...s} delay={i * 50} />
            ))}
          </div>
        </Section>

        <section id="currency" className="mx-auto max-w-6xl px-5 pb-20">
          <div className="animate-fade-up rounded-3xl border border-primary/30 bg-card p-8 shadow-[var(--shadow-card)]">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary">
              <Wallet className="h-4 w-4" /> CURRENCY
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              All Currency Are Available
            </h2>
            <p className="mt-3 text-muted-foreground">
              Har market ke liye apni pasand ki currency me panel setup — koi restriction nahi.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {currencies.map((c, i) => (
                <span
                  key={c}
                  className="animate-fade-up rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>


        <section id="offers" className="mx-auto max-w-6xl px-5 pb-4">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="card-lift animate-fade-up rounded-2xl border border-primary/30 bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
                <Megaphone className="h-4 w-4" /> ATTENTION — TEAM SUPPORT
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-tight">
                Free Cricket Schedule Banner
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Premium service ke part me hum sirf website nahi dete — ek high-quality Cricket
                Schedule Banner bilkul FREE bhi milta hai, taaki aapki audience hamesha updated rahe.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Premium quality design",
                  "Latest cricket schedule",
                  "Har website package ke saath included",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="card-lift animate-fade-up rounded-2xl border border-primary/30 bg-card p-7 shadow-[var(--shadow-card)]"
              style={{ animationDelay: "90ms" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
                <Wallet className="h-4 w-4" /> NEW FEATURE
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-tight">B2C Commission System</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Company ne ab B2C Commission System launch kiya hai — seedha company se commission
                kamaiye.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "B2C transactions par direct company commission",
                  "Chahein to ye commission apne users ko de sakte hain",
                  "Nahi dena chahein to dealer earning ke roop me rakh sakte hain",
                  "Is feature ke saath B2C rate 1% badh jaayega",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="animate-fade-up mt-6 rounded-2xl border border-border bg-secondary/60 p-5 text-center text-sm font-medium">
            🎁 Apni website professionally designed Cricket Schedule Banner ke saath — bina kisi
            extra cost ke — aur naye B2C Commission Feature se kamaana shuru karein.
          </p>
        </section>



        <section id="support" className="mx-auto max-w-6xl px-5 pt-20">
          <div className="animate-fade-up rounded-3xl border border-primary/30 bg-card p-8 shadow-[var(--shadow-card)]">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary">
              <LifeBuoy className="h-4 w-4" /> SUPPORT PROVIDER
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Our Support Providers</h2>
            <p className="mt-3 text-muted-foreground">
              Trusted technology aur service partners jo hamare panels ko 24x7 support dete hain.
            </p>
            <div className="marquee-mask group mt-8 overflow-hidden">
              <div className="marquee-track gap-3 group-hover:[animation-play-state:paused]">
                {[...providers, ...providers].map((p, i) => (
                  <div
                    key={`${p.name}-${i}`}
                    className="flex w-[160px] shrink-0 items-center justify-center rounded-2xl border border-border bg-secondary/40 px-5 py-6"
                  >
                    <img
                      src={p.src}
                      alt={`${p.name} support provider logo`}
                      width={108}
                      height={72}
                      className="h-12 w-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section id="why" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="animate-fade-up text-center text-3xl font-black tracking-tight md:text-4xl">
            Humein kyun choose karein?
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="card-lift animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-24">
          <div
            className="animate-fade-up rounded-3xl px-6 py-14 text-center shadow-[var(--shadow-glow)]"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <h2 className="text-3xl font-black tracking-tight text-primary-foreground md:text-4xl">
              Aaj hi apna panel ya ID activate karein
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/85">
              Team se baat karein — 2 minute me setup complete.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-[1.04]"
            >
              WhatsApp Us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AlexGoa. 18+ only. Please play responsibly.
        </div>
      </footer>

      <FloatingWhatsApp />
      <FloatingVideo />
      <PanelPopup />
    </div>
  );
}

function Section({
  id,
  icon: Icon,
  eyebrow,
  title,
  desc,
  children,
}: {
  id: string;
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <div className="animate-fade-up max-w-2xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary">
          <Icon className="h-4 w-4" /> {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-3 text-muted-foreground">{desc}</p>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}


function LinkCard({ url, label, delay }: { url: string; label: string; delay: number }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="card-lift animate-fade-up group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)] hover:border-primary/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="min-w-0">
        <span className="block truncate text-sm font-bold">{url.replace("https://", "")}</span>
        <span className="mt-0.5 block text-xs tracking-[0.15em] text-primary">{label}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
    </a>
  );
}
