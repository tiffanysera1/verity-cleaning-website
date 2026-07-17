import { SprayBottle, Shield, CheckCircle, Sparkle, Heart, MessageCircle } from "../Icons";
import { INCLUDED_ALWAYS } from "./servicesIndexData";

const INCLUDED_ICONS: Record<string, typeof SprayBottle> = {
  supplies: SprayBottle,
  insured: Shield,
  guarantee: CheckCircle,
  detail: Sparkle,
  respect: Heart,
  communication: MessageCircle,
};

export default function EveryCleaningIncludes() {
  return (
    <section className="section svc-included-section">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            What&rsquo;s Included In Every Cleaning
            <Sparkle aria-hidden="true" />
          </h2>
        </div>

        <div className="always-grid">
          {INCLUDED_ALWAYS.map(({ icon, title }) => {
            const Icon = INCLUDED_ICONS[icon];
            return (
              <div className="always-tile reveal" key={title}>
                <span className="always-tile-ic" aria-hidden="true"><Icon /></span>
                <b>{title}</b>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
