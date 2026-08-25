import {
  SprayBottle,
  Bucket,
  WindowIcon,
  Shirt,
  Paw,
  Home,
  Sparkle,
} from "../Icons";
import { ADD_ONS } from "./servicesIndexData";

const ADD_ON_ICONS: Record<string, typeof SprayBottle> = {
  oven: SprayBottle,
  fridge: Bucket,
  windows: WindowIcon,
  blinds: WindowIcon,
  dishwasher: Bucket,
  laundry: Shirt,
  dishes: Home,
  pet: Paw,
};

export default function ServicesAddOns() {
  return (
    <section className="section svc-addons-section" id="addons">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            Add-On Services
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">
            Add any of these to a booking. Where a service already covers the work, it is
            part of that clean and never charged as an extra.
          </p>
        </div>

        <div className="addon-grid">
          {ADD_ONS.map(({ key, icon, title, description }) => {
            const Icon = ADD_ON_ICONS[icon];
            return (
              <div className="addon-tile reveal" key={key}>
                <span className="addon-tile-ic" aria-hidden="true"><Icon /></span>
                <b>{title}</b>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
