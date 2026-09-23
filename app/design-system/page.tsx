import type { Metadata } from "next";
import "./design-system.css";

export const metadata: Metadata = {
  title: "Design System | TITT: Thunder in the Territories",
  description:
    "Colors, type, components, and imagery behind the art direction of Thunder in the Territories.",
};

const palette = [
  { name: "Ink", hex: "#21190f", token: "--ink", role: "Body text on light paper", light: false },
  { name: "Night", hex: "#050816", token: "hard outlines", role: "Borders, offset shadows, text strokes", light: false },
  { name: "Coal", hex: "#18181d", token: "--coal", role: "Hero and button borders", light: false },
  { name: "Tomato", hex: "#d8402d", token: "--tomato", role: "Primary call to action, heat", light: false },
  { name: "Sun", hex: "#ffbc3d", token: "--sun", role: "Headlines on dark, primary buttons", light: true },
  { name: "Cream", hex: "#fff3bd", token: "--cream", role: "Eyebrows, ticket highlights", light: true },
  { name: "Paper", hex: "#fff7df", token: "--paper", role: "Page background", light: true },
  { name: "Chalk", hex: "#fffdf0", token: "cards + text", role: "Cards and light text on dark", light: true },
  { name: "Teal", hex: "#087e83", token: "--teal", role: "Cool accent, illustration", light: false },
  { name: "Mint", hex: "#73bf73", token: "--mint", role: "Success, illustration", light: true },
  { name: "Plum", hex: "#47305f", token: "--plum", role: "Purchase band, night scenes", light: false },
  { name: "Arena", hex: "#1b1c1c", token: "dark bands", role: "Gallery and footer backgrounds", light: false },
];

const supporting = [
  { name: "Frame Silver", hex: "#cdd3d8", role: "Featured screenshot frame" },
  { name: "Frame Slate", hex: "#7f8588", role: "Inactive screenshot frame" },
  { name: "Screen Mint", hex: "#dff4ed", role: "Screenshots section wash" },
  { name: "Itch Red", hex: "#ff2449", role: "itch.io partner button" },
];

const pairs = [
  { bg: "#18181d", fg: "#ffbc3d", label: "Sun on Coal", note: "Headlines on dark" },
  { bg: "#d8402d", fg: "#fffdf0", label: "Chalk on Tomato", note: "Primary CTA" },
  { bg: "#fff7df", fg: "#21190f", label: "Ink on Paper", note: "Body copy" },
  { bg: "#ffbc3d", fg: "#18181d", label: "Coal on Sun", note: "Buy button" },
  { bg: "#47305f", fg: "#fffdf0", label: "Chalk on Plum", note: "Purchase band" },
  { bg: "#1b1c1c", fg: "#fff7df", label: "Paper on Arena", note: "Gallery" },
];

const principles = [
  {
    title: "Territory-era poster",
    body: "Loud, flat color and heavy black outlines borrowed from 1983 wrestling programs and screen-printed gig posters.",
  },
  {
    title: "Hard shadows, no blur",
    body: "Depth comes from solid offset shadows. Elements press down into them on hover, like a physical button.",
  },
  {
    title: "Heat is the story",
    body: "Tomato and sun yellow signal action and heat. Dark arenas let the two burn against a quiet background.",
  },
  {
    title: "Torn edges",
    body: "Sections are separated by ripped paper banners instead of straight rules, so the page feels handled.",
  },
];

const spacing = [4, 8, 12, 18, 24, 32, 48, 64, 96];

const imagery = [
  { src: "/titlewr333e.jpg", label: "Key art", note: "Full-bleed hero, cropped to 38% from top" },
  { src: "/1_angle.jpg", label: "Angle still", note: "Framed in silver with a hard shadow" },
  { src: "/action1.jpg", label: "Action shot", note: "Background for the beta call-out" },
  { src: "/tiitt-logo.png", label: "Logo lockup", note: "Centered over key art, 920px max" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="dsSection" id={id}>
      <header className="dsSectionHead">
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

export default function DesignSystem() {
  return (
    <main className="ds">
      <header className="dsHero">
        <a className="dsBack" href="/">
          &larr; Back to site
        </a>
        <img className="dsLogo" src="/tiitt-logo.png" alt="Thunder in the Territories" />
        <p className="dsHeroTag">Design System</p>
        <p className="dsHeroLead">
          The art direction of Thunder in the Territories: a loud, hand-printed
          1983 wrestling poster, translated into color, type, and components.
        </p>
        <nav className="dsNav" aria-label="Design system sections">
          <a href="#principles">Principles</a>
          <a href="#color">Color</a>
          <a href="#type">Type</a>
          <a href="#components">Components</a>
          <a href="#layout">Layout</a>
          <a href="#imagery">Imagery</a>
        </nav>
      </header>

      <Section id="principles" title="Art direction">
        <div className="dsGrid dsGrid4">
          {principles.map((p) => (
            <article className="dsCard" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="color" title="Color">
        <div className="dsGrid dsGrid4">
          {palette.map((c) => (
            <div className="dsSwatch" key={c.hex}>
              <div
                className="dsSwatchChip"
                style={{ background: c.hex, color: c.light ? "#18181d" : "#fffdf0" }}
              >
                <strong>{c.name}</strong>
                <span>{c.hex}</span>
              </div>
              <div className="dsSwatchMeta">
                <code>{c.token}</code>
                <p>{c.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="dsSub">Supporting tones</h3>
        <div className="dsGrid dsGrid4">
          {supporting.map((c) => (
            <div className="dsChipRow" key={c.hex}>
              <span className="dsDot" style={{ background: c.hex }} />
              <div>
                <strong>{c.name}</strong>
                <code>{c.hex}</code>
                <p>{c.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="dsSub">Approved pairings</h3>
        <div className="dsGrid dsGrid3">
          {pairs.map((p) => (
            <div className="dsPair" style={{ background: p.bg, color: p.fg }} key={p.label}>
              <span className="dsPairAa">Aa</span>
              <div>
                <strong>{p.label}</strong>
                <p>{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="type" title="Typography">
        <div className="dsGrid dsGrid2">
          <article className="dsCard dsTypeCard">
            <p className="dsTypeName">Bungee &middot; Display</p>
            <p className="dsTypeSpecimen dsDisplay">Wishlist Today!</p>
            <p className="dsMeta">
              Headlines, buttons, navigation, footer. Always uppercase, tight
              leading (0.9 to 1.0).
            </p>
          </article>
          <article className="dsCard dsTypeCard">
            <p className="dsTypeName">Lexend &middot; Body</p>
            <p className="dsTypeSpecimen dsBody">Book your card, build heat.</p>
            <p className="dsMeta">
              Paragraphs and captions. Weights 700 to 900 on dark backgrounds,
              1.45 to 1.55 line height.
            </p>
          </article>
        </div>

        <div className="dsScale">
          <div className="dsScaleRow">
            <span className="dsScaleLabel">Display XL<br />Bungee / clamp(2.4rem, 5.8vw, 6.2rem)</span>
            <span className="dsDisplay dsXL">Draw Heat</span>
          </div>
          <div className="dsScaleRow">
            <span className="dsScaleLabel">Display L<br />Bungee / clamp(1.75rem, 4vw, 4rem)</span>
            <span className="dsDisplay dsL">Nine promotions</span>
          </div>
          <div className="dsScaleRow">
            <span className="dsScaleLabel">Button<br />Bungee / clamp(1.1rem, 2vw, 1.55rem)</span>
            <span className="dsDisplay dsM">Buy now</span>
          </div>
          <div className="dsScaleRow">
            <span className="dsScaleLabel">Lead<br />Lexend 750 / clamp(1.15rem, 2.1vw, 1.75rem)</span>
            <span className="dsLead">Take control of one of nine promotions.</span>
          </div>
          <div className="dsScaleRow">
            <span className="dsScaleLabel">Body<br />Lexend 400 / 1rem</span>
            <span>Smart card combinations create bonuses and strong storylines grow hotter over time.</span>
          </div>
        </div>

        <h3 className="dsSub">Headline treatment on dark</h3>
        <div className="dsStage dsStageDark">
          <p className="dsTreat">Book your Territory. Draw heat!</p>
          <code>
            text-shadow: 0 3px 0 #050816, 0 6px 18px rgba(0,0,0,.72)
          </code>
        </div>
      </Section>

      <Section id="components" title="Components">
        <h3 className="dsSub">Buttons</h3>
        <div className="dsStage">
          <a className="dsBtn dsBtnPrimary" href="#components">Buy now</a>
          <a className="dsBtn dsBtnSecondary" href="#components">Watch demo</a>
          <a className="dsBtn dsBtnHeat" href="#components">Wishlist</a>
          <a className="dsBtn dsBtnSteam" href="#components">Steam</a>
          <a className="dsBtn dsBtnItch" href="#components">itch.io</a>
        </div>
        <p className="dsMeta">
          3 to 4px Night border, 8px radius, solid 5 to 6px offset shadow. On
          hover the shadow shrinks to 3px and the button moves 2 to 3px down
          and right.
        </p>

        <h3 className="dsSub">Nav link</h3>
        <div className="dsStage dsStageDark">
          <a className="dsNavLink" href="#components">Details</a>
          <a className="dsNavLink isHover" href="#components">Hover</a>
        </div>

        <h3 className="dsSub">Cards and call-outs</h3>
        <div className="dsGrid dsGrid3">
          <article className="dsReview">
            <strong>9/10</strong>
            <span>Review tile on Tomato</span>
          </article>
          <article className="dsMore">
            <div className="dsMiniArt" />
            <h3>Content card</h3>
            <p>Chalk fill, 3px Coal border, soft 6px offset shadow.</p>
          </article>
          <article className="dsBeta">
            <h3>Beta test now!</h3>
            <p>Tomato box with a 5px Night border and a 10px hard shadow.</p>
          </article>
        </div>

        <h3 className="dsSub">Screenshot frame</h3>
        <div className="dsStage dsStageDark dsFrames">
          <div className="dsFrame">
            <img src="/screenshots/12.JPG" alt="Game screenshot in the inactive frame" />
            <span>Inactive: Slate, 52% opacity</span>
          </div>
          <div className="dsFrame isFeatured">
            <img src="/screenshots/213.JPG" alt="Game screenshot in the featured frame" />
            <span>Featured: Silver, full opacity</span>
          </div>
        </div>
      </Section>

      <Section id="layout" title="Layout, shape and motion">
        <div className="dsGrid dsGrid3">
          <article className="dsCard">
            <h3>Spacing</h3>
            <div className="dsSpacing">
              {spacing.map((s) => (
                <div className="dsSpaceRow" key={s}>
                  <span>{s}px</span>
                  <i style={{ width: s * 2 }} />
                </div>
              ))}
            </div>
            <p className="dsMeta">Sections use clamp(56px, 8vw, 96px) vertical padding.</p>
          </article>
          <article className="dsCard">
            <h3>Outline and shadow</h3>
            <div className="dsShadowDemo">
              <div className="dsShadowBox s1">3px / 5px</div>
              <div className="dsShadowBox s2">4px / 6px</div>
              <div className="dsShadowBox s3">5px / 10px</div>
            </div>
            <p className="dsMeta">Radius is 8px throughout. Shadows never blur.</p>
          </article>
          <article className="dsCard">
            <h3>Motion</h3>
            <ul className="dsList">
              <li><strong>160ms</strong> ease for every hover</li>
              <li><strong>Press</strong>: translate(2px, 2px)</li>
              <li><strong>Lift</strong>: gallery frames rise 4px</li>
              <li><strong>Smooth</strong> anchor scrolling</li>
            </ul>
          </article>
        </div>

        <h3 className="dsSub">Torn paper dividers</h3>
        <div className="dsGrid dsGrid2">
          <div className="dsTear" style={{ backgroundImage: "url('/tear-banner.png')" }}>
            <span>Intro banner</span>
          </div>
          <div className="dsTear" style={{ backgroundImage: "url('/tear-banner22.png')" }}>
            <span>Wishlist banner</span>
          </div>
        </div>
        <p className="dsMeta">
          Banners overlap neighboring sections with negative margins so the
          torn edge sits on top of the content.
        </p>
      </Section>

      <Section id="imagery" title="Imagery">
        <div className="dsGrid dsGrid4">
          {imagery.map((img) => (
            <figure className="dsImage" key={img.src}>
              <div className="dsImageFrame">
                <img src={img.src} alt={img.label} />
              </div>
              <figcaption>
                <strong>{img.label}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <footer className="dsFooter">
        <p>Copyright (c) ZooDesign Games</p>
      </footer>
    </main>
  );
}
