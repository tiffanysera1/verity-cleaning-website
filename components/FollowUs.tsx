import { FacebookIcon, InstagramIcon, Yelp, Nextdoor } from "./Icons";

const PLATFORMS = [
  { name: "Facebook", href: "https://facebook.com/veritycleaning", Icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com/veritycleaning", Icon: InstagramIcon },
  { name: "Nextdoor", href: "https://nextdoor.com/pages/verity-cleaning", Icon: Nextdoor },
  { name: "Yelp", href: "https://yelp.com/biz/verity-cleaning", Icon: Yelp },
];

export default function FollowUs() {
  return (
    <section className="section followus tone-sky" id="follow">
      <div className="wrap center reveal">
        <span className="eyebrow">Follow Along</span>
        <h2 style={{ marginTop: "12px" }}>We&rsquo;re just getting started</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          Verity Cleaning is new to Shelby County, and we&rsquo;d love for you to be one of
          our first customers. Find us and follow along as we grow.
        </p>
        <div className="follow-links">
          {PLATFORMS.map(({ name, href, Icon }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="follow-chip">
              <Icon />
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
