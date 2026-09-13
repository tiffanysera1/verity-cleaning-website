import Image from "next/image";
import { Shield, Medal, Users, Sparkle } from "./Icons";

/* Tiffany's own words, set as real text rather than left inside the graphic
   she wrote them on. The image version is fine for Instagram; here the words
   are the point — they are the strongest trust content on the site and the
   clearest signal to a search engine or a language model that a named, real
   person stands behind the business. Baked into a PNG none of that is
   readable.

   Transcribed verbatim from her post. Do not paraphrase it: it is a personal
   statement, and if she rewrites it, replace this wholesale. */
const OWNER_WORDS = [
  "Hi! I'm Tiffany, the owner of Verity Cleaning.",
  "We're a locally owned cleaning company, and I started Verity because I know how quickly work, family, pets, and everyday life can take over your time.",
  "I also know how personal it is to let someone into your home. I care about who we send into yours because I'd only want people I trust in mine. That's why we put so much emphasis on having reliable, trustworthy cleaners and taking great care of the homes we're welcomed into.",
  "Verity is about more than a clean home. It's about giving you some of your time back and providing a service you can feel comfortable relying on so you can spend more time on what matters.",
];

/* "Drug-free" was on the graphic these badges came from, but Verity does not
   drug test, so it is not a claim we can stand behind. Replaced with
   "Licensed", which is true and already stated in the footer. If the graphic
   is ever reused elsewhere, it needs the same correction. */
const OWNER_BADGES = [
  { Icon: Shield, label: "Background checked" },
  { Icon: Medal, label: "Licensed" },
  { Icon: Users, label: "Professional" },
  { Icon: Sparkle, label: "The Verity standard" },
];

export default function MeetTheOwner({ heading = "Meet the owner" }: { heading?: string }) {
  return (
    <section className="section owner-section">
      <div className="wrap">
        <div className="owner-grid">
          <div className="owner-photo reveal">
            <Image
              src="/tiffany-owner-verity-cleaning.webp"
              alt="Tiffany, founder of Verity Cleaning, at home in Pelham, Alabama"
              width={653}
              height={880}
              sizes="(max-width: 860px) 100vw, 380px"
            />
          </div>

          <div className="owner-copy reveal">
            <p className="owner-eyebrow">{heading}</p>
            <h2 className="section-title">Tiffany</h2>
            <p className="owner-role">Founder, Verity Cleaning</p>
            {OWNER_WORDS.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <p className="owner-sign">Time well spent.</p>

            <ul className="owner-badges">
              {OWNER_BADGES.map(({ Icon, label }) => (
                <li key={label}>
                  <Icon aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
