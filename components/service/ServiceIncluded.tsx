"use client";

import { useState } from "react";
import {
  Home,
  SprayBottle,
  Sparkles,
  HomeSparkle,
  CheckCircle,
  Building,
  FileText,
  Bucket,
  XCircle,
  Star,
  Sparkle,
  ArrowRight,
  Check,
} from "../Icons";
import type { IncludedTab, IncludedTabIconKey, AddOn } from "./serviceDetailData";

const TAB_ICONS: Record<IncludedTabIconKey, typeof Home> = {
  home: Home,
  spray: SprayBottle,
  sparkles: Sparkles,
  "home-sparkle": HomeSparkle,
  check: CheckCircle,
  building: Building,
  file: FileText,
  bucket: Bucket,
};

function chunk<T>(items: T[]): [T[], T[]] {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
}

export default function ServiceIncluded({
  tabs,
  notIncluded,
  addOns,
}: {
  tabs: IncludedTab[];
  notIncluded: { left: string[]; right: string[] };
  addOns: AddOn[];
}) {
  const [active, setActive] = useState(0);
  const activeTab = tabs[active];
  const [colA, colB] = chunk(activeTab.items);

  return (
    <>
      <div className="included-card reveal">
        <h2 className="included-title">
          <Home aria-hidden="true" />
          What&rsquo;s Included
        </h2>

        <div className="included-tabs" role="tablist">
          {tabs.map(({ key, label, icon }, i) => {
            const TabIcon = TAB_ICONS[icon];
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={i === active ? "included-tab is-active" : "included-tab"}
                onClick={() => setActive(i)}
              >
                <TabIcon aria-hidden="true" />
                {label}
              </button>
            );
          })}
        </div>

        <div className="included-body">
          <div className="included-cols">
            <ul>{colA.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>
            <ul>{colB.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>
          </div>
          <div className="included-callout">
            <Sparkle aria-hidden="true" />
            <b>Everything we do is detail-focused</b>
            <p>We go beyond the surface so your home actually feels clean.</p>
          </div>
        </div>

        <a href="/services/#compare" className="included-more">See full checklist for all areas <ArrowRight /></a>
      </div>

      <div className="included-row">
        <div className="not-included-card reveal">
          <h3><XCircle aria-hidden="true" />What&rsquo;s Not Included</h3>
          <div className="not-included-cols">
            <ul>{notIncluded.left.map((item) => <li key={item}>{item}</li>)}</ul>
            <ul>{notIncluded.right.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <a href="/services/#compare" className="included-more">View all exclusions <ArrowRight /></a>
        </div>

        <div className="addons-card reveal">
          <h3><Star aria-hidden="true" />Recommended Add-Ons</h3>
          <ul className="addons-list">
            {addOns.map((addOn) => (
              <li key={addOn.title}>
                <div>
                  <b>{addOn.title}</b>
                  <span>{addOn.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="addons-note">Pricing for any add-ons is included in your personalized quote.</p>
          <a href="/services/#addons" className="included-more">View all add-ons <ArrowRight /></a>
        </div>
      </div>
    </>
  );
}
