import React, { useState, useMemo } from "react";
import { MapPin, Instagram, MessageCircle, ArrowRight } from "lucide-react";

/* ---------- Palette ----------
Obsidian  #16140F  background
Sable     #221F19  card surface
Ivory     #F1E9D8  light text / bg
Brass     #B8905A  primary accent
Tortoise  #5C3A24  secondary accent
Deep Teal #1F4A44  rare accent
--------------------------------- */

const COLORS = {
  obsidian: "#16140F",
  sable: "#221F19",
  sable2: "#2B271F",
  ivory: "#F1E9D8",
  ivoryDim: "#C9BFA9",
  brass: "#B8905A",
  brassLight: "#D4AF7A",
  tortoise: "#5C3A24",
  teal: "#1F4A44",
};

// Set this to your real WhatsApp number, country code first, no + or spaces (e.g. "94771234567")
const WHATSAPP_NUMBER = "94781518183";

const FONTS = (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600;9..144,700;9..144,900&family=Manrope:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
    .f-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
    .f-body { font-family: 'Manrope', sans-serif; }
    .f-mono { font-family: 'Space Mono', monospace; }
  `}</style>
);

/* ---------- Glasses SVG ---------- */
function Glasses({ style, frame = COLORS.brass, lens = "#3a2a1a", size = 120 }) {
  const stroke = frame;
  const sw = size * 0.045;
  const common = { fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  const lensGrad = `lensGrad-${style}-${frame.replace("#", "")}`;

  const shapes = {
    aviator: (
      <>
        <path d="M32 46 Q60 22 88 46" {...common} />
        <path d="M60 46 h4" {...common} />
        <path
          d="M8 48 Q10 42 20 42 Q40 40 46 48 Q50 66 34 76 Q16 78 8 62 Q4 54 8 48 Z"
          fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw}
        />
        <path
          d="M112 48 Q110 42 100 42 Q80 40 74 48 Q70 66 86 76 Q104 78 112 62 Q116 54 112 48 Z"
          fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw}
        />
        <path d="M8 54 L-4 48" {...common} />
        <path d="M112 54 L124 48" {...common} />
      </>
    ),
    round: (
      <>
        <path d="M46 44 h28" {...common} />
        <circle cx="26" cy="52" r="24" fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <circle cx="94" cy="52" r="24" fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <path d="M2 46 L-8 40" {...common} />
        <path d="M118 46 L128 40" {...common} />
      </>
    ),
    wayfarer: (
      <>
        <path d="M50 44 h20" {...common} />
        <path d="M8 44 h34 q6 0 5 8 l-4 24 q-1 8 -9 8 h-18 q-8 0 -10 -8 l-3 -24 q-1 -8 5 -8 Z"
          fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <path d="M112 44 h-34 q-6 0 -5 8 l4 24 q1 8 9 8 h18 q8 0 10 -8 l3 -24 q1 -8 -5 -8 Z"
          fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <path d="M8 48 L-4 44" {...common} />
        <path d="M112 48 L124 44" {...common} />
      </>
    ),
    catEye: (
      <>
        <path d="M48 42 h24" {...common} />
        <path d="M8 50 Q6 38 22 36 Q42 34 50 44 Q52 60 40 70 Q22 76 12 66 Q6 60 8 50 Z"
          fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <path d="M112 50 Q114 38 98 36 Q78 34 70 44 Q68 60 80 70 Q98 76 108 66 Q114 60 112 50 Z"
          fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <path d="M8 54 L-4 50" {...common} />
        <path d="M112 54 L124 50" {...common} />
      </>
    ),
    square: (
      <>
        <path d="M48 42 h24" {...common} />
        <rect x="8" y="36" width="42" height="34" rx="6" fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <rect x="70" y="36" width="42" height="34" rx="6" fill={`url(#${lensGrad})`} stroke={stroke} strokeWidth={sw} />
        <path d="M8 46 L-4 40" {...common} />
        <path d="M112 46 L124 40" {...common} />
      </>
    ),
  };

  return (
    <svg viewBox="-12 15 148 70" width={size} height={size * 0.55} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={lensGrad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={lens} stopOpacity="0.95" />
          <stop offset="55%" stopColor={lens} stopOpacity="0.75" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      {shapes[style]}
    </svg>
  );
}

/* ---------- Product data ---------- */
const PRODUCTS = [
  { id: 1, name: "The Odyssey", style: "aviator", frame: COLORS.brass, lens: "#8a4b18", price: 4500, category: "Aviator", desc: "Brass frame, amber gradient lens." },
  { id: 2, name: "The Envoy", style: "wayfarer", frame: COLORS.tortoise, lens: "#332a22", price: 3800, category: "Wayfarer", desc: "Tortoise acetate, smoked lens." },
  { id: 3, name: "The Meridian", style: "round", frame: COLORS.brassLight, lens: "#2d4a3a", price: 4200, category: "Round", desc: "Gold-tone wire, forest green lens." },
  { id: 4, name: "The Vantage", style: "catEye", frame: "#1b1b1b", lens: "#3a3a48", price: 4800, category: "Cat-Eye", desc: "Matte black, graphite gradient." },
  { id: 5, name: "The Solstice", style: "square", frame: COLORS.tortoise, lens: "#7a4a1c", price: 3900, category: "Square", desc: "Tortoise frame, warm amber lens." },
  { id: 6, name: "The Drift", style: "aviator", frame: "#9a9a9a", lens: "#2b5f7a", price: 5200, category: "Aviator", desc: "Silver frame, blue mirror lens." },
  { id: 7, name: "The Harbour", style: "round", frame: "#1b1b1b", lens: "#3a2a1a", price: 3600, category: "Round", desc: "Matte black, coffee tint." },
  { id: 8, name: "The Regency", style: "catEye", frame: COLORS.brass, lens: "#5a2f2f", price: 5000, category: "Cat-Eye", desc: "Brass frame, wine gradient lens." },
];

const CATEGORIES = ["All", "Aviator", "Wayfarer", "Round", "Cat-Eye", "Square"];

function whatsappLink(product) {
  const text = product
    ? `Hi! I'd like to order ${product.name} (${product.category}, LKR ${product.price.toLocaleString()}) from The Shade Spot.`
    : `Hi! I'd like to know more about The Shade Spot's sunglasses.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ---------- Main component ---------- */
export default function ShadeSpotStore() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category]
  );

  return (
    <div className="f-body" style={{ background: COLORS.obsidian, color: COLORS.ivory, minHeight: "100vh" }}>
      {FONTS}

      {/* NAV */}
      <nav
        className="sticky top-0 z-30 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(22,20,15,0.9)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${COLORS.sable2}` }}
      >
        <div className="f-display" style={{ fontWeight: 600, fontSize: "1.3rem", letterSpacing: "0.02em" }}>
          THE SHADE SPOT
        </div>
        <div className="hidden md:flex items-center gap-8 f-body" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", color: COLORS.ivoryDim }}>
          <a href="#shop" style={{ color: COLORS.ivoryDim, textDecoration: "none" }}>SHOP</a>
          <a href="#wholesale" style={{ color: COLORS.ivoryDim, textDecoration: "none" }}>WHOLESALE</a>
          <a href="#contact" style={{ color: COLORS.ivoryDim, textDecoration: "none" }}>CONTACT</a>
        </div>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-full"
            style={{ border: `1px solid ${COLORS.brass}`, color: COLORS.ivory, background: "transparent", cursor: "pointer" }}
          >
            <MessageCircle size={16} color={COLORS.brass} />
            <span className="f-mono" style={{ fontSize: "0.7rem" }}>WHATSAPP</span>
          </button>
        </a>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div>
          <div className="f-mono" style={{ color: COLORS.brass, fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "1.2rem" }}>
            PETTAH, COLOMBO — SINCE THE FIRST GOOD SUMMER
          </div>
          <h1 className="f-display" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.05, marginBottom: "1.4rem" }}>
            Shade,<br /><span style={{ color: COLORS.brass, fontStyle: "italic", fontWeight: 500 }}>considered.</span>
          </h1>
          <p style={{ color: COLORS.ivoryDim, fontSize: "1.05rem", lineHeight: 1.6, maxWidth: 440, marginBottom: "2rem" }}>
            Hand-picked frames for Colombo's light — wholesale by the crate, retail by the pair. Browse below, then order straight through WhatsApp.
          </p>
          <a href="#shop" style={{ textDecoration: "none" }}>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full f-body"
              style={{ background: COLORS.brass, color: COLORS.obsidian, fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer" }}
            >
              Browse the collection <ArrowRight size={16} />
            </button>
          </a>
        </div>
        <div className="flex justify-center">
          <div
            className="p-10 rounded-3xl flex items-center justify-center"
            style={{ background: `radial-gradient(circle at 30% 20%, ${COLORS.sable2}, ${COLORS.sable})`, border: `1px solid ${COLORS.sable2}`, width: "100%", maxWidth: 420, aspectRatio: "1.1" }}
          >
            <Glasses style="aviator" frame={COLORS.brass} lens="#8a4b18" size={280} />
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="px-6 md:px-16 py-10" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2 className="f-display" style={{ fontSize: "2rem", fontWeight: 600 }}>The Collection</h2>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className="f-mono px-4 py-1.5 rounded-full"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  border: `1px solid ${category === c ? COLORS.brass : COLORS.sable2}`,
                  background: category === c ? COLORS.brass : "transparent",
                  color: category === c ? COLORS.obsidian : COLORS.ivoryDim,
                  cursor: "pointer",
                }}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* WHOLESALE */}
      <section id="wholesale" className="px-6 md:px-16 py-16 my-10" style={{ background: COLORS.sable, borderTop: `1px solid ${COLORS.sable2}`, borderBottom: `1px solid ${COLORS.sable2}` }}>
        <div className="grid md:grid-cols-2 gap-8 items-center" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div>
            <div className="f-mono" style={{ color: COLORS.teal, fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "0.8rem" }}>FOR SHOPS & RESELLERS</div>
            <h3 className="f-display" style={{ fontSize: "1.9rem", fontWeight: 600, marginBottom: "1rem" }}>Wholesale by the crate.</h3>
            <p style={{ color: COLORS.ivoryDim, lineHeight: 1.6, maxWidth: 480 }}>
              Stocking a shop in Colombo or beyond? We supply frames in bulk with tiered pricing for stores, stalls, and boutiques.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full"
                style={{ background: "transparent", border: `1px solid ${COLORS.teal}`, color: COLORS.ivory, fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}
              >
                <MessageCircle size={16} color={COLORS.teal} /> Enquire on WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="px-6 md:px-16 py-14" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="f-display" style={{ fontWeight: 600, fontSize: "1.2rem", marginBottom: "0.8rem" }}>THE SHADE SPOT</div>
            <p style={{ color: COLORS.ivoryDim, fontSize: "0.9rem", lineHeight: 1.6 }}>Wholesale and retail sunglasses, hand-picked in Pettah. Browse here, order on WhatsApp.</p>
          </div>
          <div>
            <div className="f-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: COLORS.brass, marginBottom: "0.8rem" }}>VISIT</div>
            <div className="flex items-start gap-2" style={{ color: COLORS.ivoryDim, fontSize: "0.9rem" }}>
              <MapPin size={16} color={COLORS.brass} style={{ marginTop: 2, flexShrink: 0 }} />
              <span>Pettah, Colombo, Sri Lanka</span>
            </div>
          </div>
          <div>
            <div className="f-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: COLORS.brass, marginBottom: "0.8rem" }}>FOLLOW</div>
            <div className="flex items-center gap-2" style={{ color: COLORS.ivoryDim, fontSize: "0.9rem" }}>
              <Instagram size={16} color={COLORS.brass} />
              <span>@theshadespot</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${COLORS.sable2}`, marginTop: "2.5rem", paddingTop: "1.2rem", color: COLORS.ivoryDim, fontSize: "0.75rem" }}>
          © 2026 The Shade Spot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="rounded-2xl p-6 flex flex-col items-center relative overflow-hidden"
      style={{ background: COLORS.sable, border: `1px solid ${COLORS.sable2}`, transition: "transform 0.25s ease", transform: hover ? "translateY(-4px)" : "none" }}
    >
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `linear-gradient(115deg, transparent 40%, rgba(184,144,90,0.15) 50%, transparent 60%)`,
          transform: hover ? "translateX(30%)" : "translateX(-120%)",
          transition: "transform 0.6s ease",
        }}
      />
      <div className="flex items-center justify-center" style={{ height: 90, marginBottom: "1.2rem" }}>
        <Glasses style={product.style} frame={product.frame} lens={product.lens} size={150} />
      </div>
      <div className="f-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: COLORS.brass, marginBottom: "0.4rem" }}>
        {product.category.toUpperCase()}
      </div>
      <div className="f-display" style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.3rem", textAlign: "center" }}>{product.name}</div>
      <p style={{ color: COLORS.ivoryDim, fontSize: "0.8rem", textAlign: "center", marginBottom: "1rem" }}>{product.desc}</p>
      <div className="flex items-center justify-between w-full">
        <span className="f-mono" style={{ fontWeight: 700 }}>LKR {product.price.toLocaleString()}</span>
        <a href={whatsappLink(product)} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <button
            className="flex items-center gap-1.5 px-4 py-2 rounded-full f-body"
            style={{ background: "transparent", border: `1px solid ${COLORS.brass}`, color: COLORS.brass, fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
          >
            <MessageCircle size={13} /> ORDER
          </button>
        </a>
      </div>
    </div>
  );
}
