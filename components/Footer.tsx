import { Phone, Sms, FacebookIcon, InstagramIcon, Yelp, Nextdoor } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap fg">
        <div className="fb">
          <a className="brand" href="/" aria-label="Verity Cleaning — home">
            <span className="brand-wordmark">
              <b>Verity Cleaning</b>
              <small>More Time Back</small>
            </span>
          </a>
          <p>
            Licensed, bonded, and insured home and office cleaning for Shelby County, Alabama.
          </p>
          <div className="fsocials">
            <a href="https://facebook.com/veritycleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Facebook">
              <FacebookIcon style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://instagram.com/veritycleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Instagram">
              <InstagramIcon style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://nextdoor.com/pages/verity-cleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Nextdoor">
              <Nextdoor style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://yelp.com/biz/verity-cleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Yelp">
              <Yelp style={{ width: "16px", height: "16px" }} />
            </a>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Residential Cleaning</a></li>
            <li><a href="#services">Deep Cleaning</a></li>
            <li><a href="#services">Move-In / Move-Out</a></li>
            <li><a href="#services">Commercial &amp; Office</a></li>
            <li><a href="#services">Post-Construction</a></li>
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
            <li style={{ color: "var(--muted)", marginTop: "8px" }}>
              Verity Cleaning, LLC &bull; Based in Pelham, AL
            </li>
            <li style={{ color: "var(--muted)" }}>
              Licensed, bonded, &amp; insured
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap fbar">
        <span>&copy; {year} Verity Cleaning, LLC. All rights reserved.</span>
        <span>Shelby County, AL</span>
      </div>
    </footer>
  );
}
