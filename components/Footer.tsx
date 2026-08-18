import Image from "next/image";
import { Phone, Sms, Mail, FacebookIcon, InstagramIcon, Yelp, Nextdoor } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap fg">
        <div className="fb">
          <a className="brand" href="/" aria-label="Verity Cleaning — home">
            <Image src="/logo.png" alt="Verity Cleaning" width={696} height={293} className="brand-mark" />
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
            <li><a href="#services">Recurring Cleaning</a></li>
            <li><a href="#services">Deep Cleaning</a></li>
            <li><a href="#services">Move-In / Move-Out</a></li>
            <li><a href="#services">Commercial &amp; Office</a></li>
            <li><a href="#services">Post-Construction</a></li>
          </ul>
        </div>

        <div id="footer-area" style={{ scrollMarginTop: "96px" }}>
          <h4>Service Area</h4>
          <ul>
            <li>Pelham &amp; Helena</li>
            <li>Alabaster &amp; Hoover</li>
            <li>Columbiana &amp; Chelsea</li>
            <li>Calera</li>
            <li>+ surrounding communities</li>
          </ul>
        </div>

        <div className="fc" id="footer-contact" style={{ scrollMarginTop: "96px" }}>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="tel:+12059460304"><Phone />(205) 946-0304</a>
            </li>
            <li>
              <a href="sms:2059460304"><Sms />Text us anytime</a>
            </li>
            <li>
              <a href="mailto:hello@veritycleaning.co"><Mail />hello@veritycleaning.co</a>
            </li>
            <li style={{ color: "var(--muted)", marginTop: "8px" }}>
              Open every day, 8 AM&ndash;6 PM
            </li>
            <li style={{ color: "var(--muted)" }}>
              Request a quote any time by call, text, or online
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
