import { Phone, Sms, Sparkles, FacebookIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap fg">
        <div className="fb">
          <a className="brand" href="/" aria-label="Verity Cleaning — home" style={{ color: "#fff", marginBottom: "16px", display: "flex" }}>
            <Sparkles className="brand-mascot" style={{ height: "30px", color: "var(--teal-bright)" }} />
            <span className="brand-wordmark">
              <b style={{ color: "#fff", fontSize: "1.25rem" }}>Verity Cleaning</b>
              <small style={{ color: "var(--teal-bright)" }}>Pure Spaces &bull; Pure Peace of Mind</small>
            </span>
          </a>
          <p>
            Premium, trustworthy cleaning services for your home and office in Shelby County, Alabama. Veteran-owned, fully licensed, and committed to absolute integrity in every clean.
          </p>
          <div className="fsocials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Facebook">
              <FacebookIcon style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Instagram">
              <InstagramIcon style={{ width: "16px", height: "16px" }} />
            </a>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Residential Cleaning</a></li>
            <li><a href="#services">Deep Cleaning Services</a></li>
            <li><a href="#services">Move-In / Move-Out</a></li>
            <li><a href="#services">Commercial &amp; Office</a></li>
            <li><a href="#services">Post-Construction</a></li>
            <li><a href="#services">Eco-Friendly Cleaning</a></li>
          </ul>
        </div>

        <div>
          <h4>Service Area</h4>
          <ul>
            <li>Pelham &amp; Helena</li>
            <li>Alabaster &amp; Hoover</li>
            <li>Columbiana &amp; Chelsea</li>
            <li>Calera</li>
            <li>+ surrounding communities</li>
          </ul>
        </div>

        <div className="fc">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="tel:+12058880199"><Phone />(205) 888-0199</a>
            </li>
            <li>
              <a href="sms:2058880199"><Sms />Text us anytime</a>
            </li>
            <li style={{ color: "#94a3b8", marginTop: "8px" }}>
              Verity Cleaning, LLC &bull; Based in Pelham, AL
            </li>
            <li style={{ color: "#94a3b8" }}>
              Licensed, Bonded, &amp; Insured
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap fbar">
        <span>&copy; {year} Verity Cleaning, LLC. All rights reserved.</span>
        <span>Honesty in Every Clean &bull; Shelby County, AL</span>
      </div>
    </footer>
  );
}
