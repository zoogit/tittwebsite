import ScreenshotCarousel from "./ScreenshotCarousel";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="heroArt" aria-label="Game key art">
          <img src="/titlewr333e.jpg" alt="Thunder in the Territories wrestling key art with two wrestlers facing off in a packed arena" />
        </div>
        <a className="heroLogo" href="#top" aria-label="Thunder in the Territories home">
          <img src="/tiitt-logo.png" alt="Thunder in the Territories" />
        </a>
        <div className="heroTop">
          <a className="steamLogoPlaceholder" href="#buy" aria-label="Steam store placeholder">
            <img src="/steamlogo1.png" alt="Steam" />
          </a>
          <nav className="heroNav heroNavDesktop" aria-label="Main navigation">
            <a href="#details">Details</a>
            <a href="#buy">Wishlist</a>
            <a href="#beta">Beta</a>
          </nav>
          <details className="heroMenu">
            <summary>Menu</summary>
            <nav className="heroNav" aria-label="Mobile navigation">
              <a href="#details">Details</a>
              <a href="#buy">Wishlist</a>
              <a href="#beta">Beta</a>
            </nav>
          </details>
        </div>
        <div className="heroActions" aria-label="Primary actions">
          <a className="heroButton secondary" href="#screens">
            Watch demo
          </a>
          <a className="heroButton primary" href="#buy">
            Buy now
          </a>
        </div>
      </section>

      <section className="introBand" id="details">
        <div className="introContent">
          <p>
            It's 1983, and pro wrestling is still a war between regional
            territories.
          </p>
          <p>
            Take control of one of nine promotions and battle rivals across a
            shared map over a 28 week season. Book your card, choose your
            winners, build long running feuds, and play matches using openings,
            gimmicks, stipulations, finishes, and angles.
          </p>
          <p>
            The goal is not just to win matches. It is to build heat. Smart card
            combinations create bonuses, strong storylines grow hotter over
            time, and successful shows strengthen your territory while putting
            pressure on nearby promotions. Let a feud drag on too long, though,
            and it can go stale.
          </p>
        </div>
      </section>

      <section className="awardsBand" id="screens">
        <div className="galleryHeader">
          <h2>Screenshots</h2>
        </div>
        <ScreenshotCarousel />
        <p className="galleryTagline">
          <span>Addicting map and card action.</span>
          <span>Book your Territory. Draw heat!</span>
        </p>
      </section>

      <section className="wishlistBand" id="buy">
        <div className="wishlistContent">
          <div className="wishlistCopy">
            <p>Coming soon to Steam</p>
            <h2>Wishlist Today!</h2>
            <a className="wishlistButton steamWishlistButton" href="#buy" aria-label="Wishlist on Steam">
              <img src="/steamlogo1.png" alt="Steam" />
            </a>
          </div>
          <div className="wishlistImage">
            <img src="/1_angle.jpg" alt="Winner celebrates in the ring after a territory match" />
          </div>
        </div>
      </section>

      <section
        className="angleBand"
        id="beta"
        aria-label="Winner celebrates in the ring after a territory match"
      >
        <div className="betaBox">
          <h2>Beta Test Now!</h2>
          <p>
            Beta testers always welcomed!
          </p>
          <a className="betaButton itchButton" href="https://zooitch.itch.io/thunderterritories" aria-label="Play on itch.io">
            <img src="/itchio.svg" alt="itch.io" />
          </a>
        </div>
      </section>

      <footer className="copyrightBand">
        <p>Copyright (c) ZooDesign Games</p>
      </footer>
    </main>
  );
}
