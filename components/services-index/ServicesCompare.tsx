import { Check, Plus, Sparkle } from "../Icons";
import { COMPARE_ROWS, COMPARE_SERVICES, FEATURED_SERVICES, type CompareState } from "./servicesIndexData";

function Cell({ state }: { state: CompareState }) {
  if (state === "yes") {
    return (
      <span className="cmp-cell cmp-cell--yes">
        <Check aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (state === "addon") {
    return (
      <span className="cmp-cell cmp-cell--addon">
        <Plus aria-hidden="true" />
        <span className="sr-only">Available add-on</span>
      </span>
    );
  }
  return (
    <span className="cmp-cell cmp-cell--no" aria-hidden="true">
      &mdash;
      <span className="sr-only">Not included</span>
    </span>
  );
}

const COMPARE_SLUGS = ["recurring-cleaning", "deep-cleaning", "move-in-move-out"];

export default function ServicesCompare() {
  return (
    <section className="section svc-compare-section" id="compare">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            Compare Our Cleaning Services
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">
            Every row below comes straight from the checklist we clean to. Commercial and
            post-construction work to their own checklists &mdash; see those pages for detail.
          </p>
        </div>

        <div className="cmp-legend reveal">
          <span><Check aria-hidden="true" className="cmp-legend-ic cmp-legend-ic--yes" /> Included</span>
          <span><Plus aria-hidden="true" className="cmp-legend-ic cmp-legend-ic--addon" /> Available add-on</span>
          <span><span className="cmp-legend-dash" aria-hidden="true">&mdash;</span> Not included</span>
        </div>

        {/* Desktop table */}
        <div className="cmp-table-wrap reveal">
          <table className="cmp-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                {COMPARE_SERVICES.map((name) => (
                  <th scope="col" key={name}>{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((state, i) => (
                    <td key={COMPARE_SERVICES[i]}><Cell state={state} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile accordion */}
        <div className="cmp-accordions reveal">
          {COMPARE_SERVICES.map((name, si) => {
            const service = FEATURED_SERVICES.find((s) => s.slug === COMPARE_SLUGS[si]);
            return (
              <details className="cmp-accordion" key={name}>
                <summary>
                  <span>{name}</span>
                  <Plus aria-hidden="true" className="cmp-accordion-ic" />
                </summary>
                <ul>
                  {COMPARE_ROWS.map((row) => (
                    <li key={row.label}>
                      <span>{row.label}</span>
                      <Cell state={row.values[si]} />
                    </li>
                  ))}
                </ul>
                {service && (
                  <a href={`/services/${service.slug}/`} className="included-more">
                    View {service.title} details
                  </a>
                )}
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
