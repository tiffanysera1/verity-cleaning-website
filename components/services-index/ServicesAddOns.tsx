import {
  SprayBottle,
  Bucket,
  WindowIcon,
  Shirt,
  Bed,
  Paw,
  Building,
  Home,
  Sparkles,
  Sparkle,
} from "../Icons";
import { ADD_ONS } from "./servicesIndexData";

const ADD_ON_ICONS: Record<string, typeof SprayBottle> = {
  oven: SprayBottle,
  fridge: Bucket,
  windows: WindowIcon,
  laundry: Shirt,
  linens: Bed,
  pet: Paw,
  garage: Building,
  cabinets: Home,
  dusting: Sparkles,
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
          <p className="lead">Customize any cleaning with these popular extras.</p>
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
