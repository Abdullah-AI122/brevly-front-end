import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import CTASection from "../components/cta";
import { SlidersHorizontal } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   SVG ICONS  (raw inline SVGs matching the curtio template)
───────────────────────────────────────────────────────────── */
const ZapSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);
const BarSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" />
  </svg>
);
const QrSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" />
    <path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" />
    <path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" />
  </svg>
);
const LinkSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const TagSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  </svg>
);
const LockSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const ClockSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const GlobeSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);
const ShareSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);
const UserSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const SliderSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" />
    <line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" />
    <line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
    <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
  </svg>
);
const TargetSvg = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   FEATURE DATA  (matches the HTML template order)
───────────────────────────────────────────────────────────── */
const BLOCKS = [
  {
    flip: false, emphasis: false, highlight: false,
    tone: "indigo",
    browserUrl: "curtio.io",
    Icon: ZapSvg,
    caption: "Long URL → short link in under 1s",
    title: "Paste and you are done",
    body: "Drop in any long URL and get a clean short link in under a second. You do not need an account to make your first one. Sign up only when you want to track it.",
    control: "The slug, the destination, and whether the link is tracked.",
    visualType: "default",
  },
  {
    flip: true, emphasis: true, highlight: true,
    tone: "indigo",
    browserUrl: "curtio.io/dashboard",
    Icon: BarSvg,
    caption: null,
    title: "Clicks you can actually believe",
    body: "curtio counts each real visitor once. A preview bot and a scanner touching your link will not turn one person into four. You see total clicks, clicks over time, and the channels sending them — all in real time.",
    control: "Nothing to set up. Accurate counting is on by default.",
    visualType: "analytics",
  },
  {
    flip: false, emphasis: false, highlight: false,
    tone: "orange",
    browserUrl: "curtio.io",
    Icon: QrSvg,
    caption: "QR code · PNG / SVG download",
    title: "Every link ready for the real world",
    body: "Each short link comes with a downloadable QR code in PNG or SVG. It stays sharp on a billboard and still scans on a business card. It is generated for you, with no extra step.",
    control: "Download format and size.",
    visualType: "default",
  },
  {
    flip: true, emphasis: false, highlight: false,
    tone: "indigo",
    browserUrl: "curtio.io",
    Icon: LinkSvg,
    caption: "curtio.io/x7k2p → curtio.io/spring-sale",
    title: "Your name, not a random string",
    body: "Turn curtio.io/x7k2p into curtio.io/spring-sale. Branded links look more trustworthy and earn more clicks. They also tell people what they are about to open before they tap.",
    control: "The back-half of every link.",
    visualType: "default",
  },
  {
    flip: false, emphasis: false, highlight: false,
    tone: "orange",
    browserUrl: "curtio.io",
    Icon: TagSvg,
    caption: "source · medium · campaign fields",
    title: "Campaign tracking built in",
    body: "Add source, medium, and campaign tags as you create a link, and curtio appends them for you. Your analytics tool sees clean, consistent UTMs every single time.",
    control: "Source, medium, campaign, term, and content.",
    visualType: "default",
  },
  {
    flip: true, emphasis: false, highlight: false,
    tone: "indigo",
    browserUrl: "curtio.io",
    Icon: LockSvg,
    caption: "password gate before redirect",
    title: "Some links are not for everyone",
    body: "Put a password on a link and only the people you give it to get through. Everyone else hits a wall.",
    control: "The password, which you can change anytime.",
    visualType: "default",
  },
  {
    flip: false, emphasis: false, highlight: false,
    tone: "orange",
    browserUrl: "curtio.io",
    Icon: ClockSvg,
    caption: "expiry date picker",
    title: "Links that know when to stop",
    body: "Set an expiry date and the link turns itself off when the deadline passes. It is built for limited promos, event signups, and anything with a shelf life.",
    control: "The expiry date and what happens after.",
    visualType: "default",
  },
  {
    flip: true, emphasis: false, highlight: false,
    tone: "indigo",
    browserUrl: "curtio.io/dashboard",
    Icon: GlobeSvg,
    caption: "clicks by country & device",
    title: "Know where your clicks come from",
    body: "See clicks by country, shown with flags, and by device type. Spot where your audience really is and what they are using, so you know where to put your effort next.",
    control: "Nothing. It is there the moment your link gets clicks.",
    visualType: "default",
  },
  {
    flip: false, emphasis: false, highlight: false,
    tone: "orange",
    browserUrl: "curtio.io/dashboard",
    Icon: ShareSvg,
    caption: "direct · social · search · sites",
    title: "Know what is driving the traffic",
    body: "See which platforms send you clicks, whether that is direct, social, search, or a specific site. Find the channel that is actually working and lean into it.",
    control: "Nothing to set up. Referrers are tracked for you.",
    visualType: "default",
  },
  {
    flip: true, emphasis: false, highlight: false,
    tone: "indigo",
    browserUrl: "curtio.io",
    Icon: UserSvg,
    caption: "5 free links a day, no sign-up",
    title: "No account? Still works",
    body: "Shorten up to 5 links a day with no sign-up at all. When you want tracking and analytics, a free account takes about 30 seconds.",
    control: "Whether to stay a guest or go free.",
    visualType: "default",
  },
];

/* ─────────────────────────────────────────────────────────────
   INLINE BROWSER-MOCKUP CARD
───────────────────────────────────────────────────────────── */
function VisualCard({ block }) {
  const { Icon, tone, browserUrl, caption, emphasis, highlight, visualType } = block;

  const stageStyle = emphasis
    ? { background: "repeating-linear-gradient(45deg,rgba(79,70,229,.05) 0 12px,transparent 12px 24px),linear-gradient(135deg,#EEF2FF,#fff)" }
    : { background: "repeating-linear-gradient(45deg,rgba(148,163,184,.06) 0 12px,transparent 12px 24px),linear-gradient(135deg,#F1F5F9,#fff)" };

  const ghostColor = tone === "orange" ? "rgba(249,115,22,.08)" : "rgba(79,70,229,.07)";

  return (
    <div
      className={`relative rounded-[24px] border bg-white overflow-hidden transition-all duration-250
        hover:-translate-y-[3px]
        ${emphasis
          ? "border-indigo-500 shadow-[0_24px_60px_-18px_rgba(79,70,229,0.4)] hover:shadow-[0_32px_70px_-18px_rgba(79,70,229,0.45)]"
          : "border-slate-200 shadow-[0_4px_14px_-2px_rgba(15,23,42,0.10)] hover:shadow-[0_16px_38px_-10px_rgba(15,23,42,0.20)]"
        }`}
    >
      {/* "The whole point" badge */}
      {highlight && (
        <div className="absolute top-6 right-5 z-20 inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1.5 text-[0.72rem] font-semibold text-white shadow-[0_6px_16px_-4px_rgba(79,70,229,0.5)] whitespace-nowrap">
          <TargetSvg className="w-[13px] h-[13px] flex-none" />
          The whole point
        </div>
      )}

      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-white px-4 py-3">
        <i className="w-2.5 h-2.5 rounded-full bg-red-400 block not-italic" />
        <i className="w-2.5 h-2.5 rounded-full bg-yellow-400 block not-italic" />
        <i className="w-2.5 h-2.5 rounded-full bg-green-400 block not-italic" />
        {browserUrl && (
          <span className="ml-2 font-mono text-[0.72rem] text-slate-400">{browserUrl}</span>
        )}
      </div>

      {/* Stage */}
      <div
        className="relative flex min-h-[300px] items-center justify-center p-7 text-center"
        style={stageStyle}
      >
        {/* Ghost watermark */}
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ color: ghostColor }}
        >
          <span className="w-[200px] h-[200px] [&>svg]:w-full [&>svg]:h-full">
            <Icon />
          </span>
        </span>

        {/* Analytics proof */}
        {visualType === "analytics" ? (
          <div className="relative z-10 flex flex-col gap-3 w-full max-w-[300px]">
            {[
              { label: "Bots & previews",   val: "4 clicks", us: false },
              { label: "Counted by others", val: "4",        us: false },
              { label: "Counted by curtio", val: "1",        us: true  },
            ].map(({ label, val, us }) => (
              <div
                key={label}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 shadow-sm
                  ${us ? "border-indigo-200 bg-indigo-50" : "border-slate-200 bg-white"}`}
              >
                <span className="flex items-center gap-2.5 text-sm font-medium">
                  <span className={`w-2 h-2 rounded-full inline-block ${us ? "bg-indigo-600" : "bg-slate-300"}`} />
                  <span className={us ? "text-slate-800" : "text-slate-500"}>{label}</span>
                </span>
                <span className={`font-bold font-mono text-sm ${us ? "text-indigo-700" : "text-slate-400 line-through"}`}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Default: caption only */
          caption && (
            <span className="relative z-10 font-mono text-[0.78rem] tracking-wider text-slate-500 bg-white/70 border border-dashed border-slate-300 rounded-[10px] px-3.5 py-2">
              {caption}
            </span>
          )
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
export default function Features() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[152px] pb-[76px] text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-[-160px] -translate-x-1/2 w-[760px] h-[520px] rounded-full opacity-[.16]"
          style={{ background: "linear-gradient(120deg,#1E1B4B,#312E81 45%,#4F46E5)", filter: "blur(120px)" }}
        />

        <div className="relative z-10 max-w-[1152px] mx-auto px-6">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-[7px] text-[0.8rem] font-semibold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 block" />
            Features
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold tracking-[-0.035em] text-slate-900 max-w-[20ch] mx-auto leading-[1.12] mb-5">
            A short link is simple. Knowing what it did should be too.
          </h1>

          {/* Sub */}
          <p className="text-[1.225rem] text-slate-500 max-w-[60ch] mx-auto leading-relaxed">
            curtio gives every link the tools to be shared, controlled, and measured the right way. No bloat. No upsell maze. Here is the full list in plain terms.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-[14px] bg-indigo-600 px-[30px] py-4 text-[1.05rem] font-semibold text-white shadow hover:bg-indigo-700 hover:-translate-y-px transition-all"
            >
              Get started free
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-[14px] border border-slate-200 bg-white px-[30px] py-4 text-[1.05rem] font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE BLOCKS ───────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1152px] mx-auto px-6">
          <div className="flex flex-col gap-[100px]">
            {BLOCKS.map((block, i) => (
              <article
                key={i}
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  block.flip
                    ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1"
                    : ""
                }`}
              >
                {/* Visual */}
                <VisualCard block={block} />

                {/* Text */}
                <div>
                  {/* Icon box */}
                  <div
                    className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-6
                      [&>svg]:w-[26px] [&>svg]:h-[26px]
                      ${block.tone === "orange" ? "bg-orange-50 text-orange-500" : "bg-indigo-50 text-indigo-600"}`}
                  >
                    <block.Icon />
                  </div>

                  {/* Heading */}
                  <h2 className="text-[clamp(1.6rem,2.6vw,2.05rem)] font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-4">
                    {block.title}
                  </h2>

                  {/* Body */}
                  <p className="text-[1.075rem] text-slate-500 leading-[1.65]">
                    {block.body}
                  </p>

                  {/* You control */}
                  <p className="mt-6 flex items-start gap-2.5 text-[0.92rem] text-slate-500 leading-relaxed">
                    <span className="mt-0.5 flex-none text-slate-400 w-[17px] h-[17px] [&>svg]:w-full [&>svg]:h-full">
                      <SliderSvg />
                    </span>
                    <span>
                      <b className="text-slate-800 font-semibold">You control:</b>{" "}
                      {block.control}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        heading="Every standard feature, free to start"
        description="You get one fully tracked link with complete analytics on the free tier. When you need more links and the premium tools, Plus is ready for you."
        buttonText="Get started free"
        buttonLink="/register"
      />

      <Footer />
    </>
  );
}