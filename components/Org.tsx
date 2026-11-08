import { ORG, PHONE, PHONE_HREF } from "@/lib/data";
import Reveal from "./Reveal";
import { CheckIcon, DocIcon, PhoneIcon } from "./Icons";

export default function Org() {
  return (
    <div className="band">
      <div className="wrap">
        <section id="org" className="org">
          <div className="org-grid">
            <Reveal>
              <div className="org-copy">
                <h2>{ORG.title}</h2>
                <p className="org-lead">{ORG.lead}</p>
                <ul className="org-facts">
                  {ORG.facts.map((f) => (
                    <li key={f.b}>
                      <span className="li-ic">
                        <CheckIcon />
                      </span>
                      <span>
                        <b>{f.b}</b>
                        {f.rest}
                      </span>
                    </li>
                  ))}
                </ul>
                <a className="btn" href={PHONE_HREF}>
                  <PhoneIcon />
                  Позвонить <span className="num">{PHONE}</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <aside className="req-card" aria-label="Реквизиты">
                <div className="req-card-head">
                  <DocIcon />
                  <b>Реквизиты</b>
                </div>
                <dl className="req-list">
                  {ORG.details.map((d) => (
                    <div className="req-row" key={d.k}>
                      <dt>{d.k}</dt>
                      <dd>{d.v || "—"}</dd>
                    </div>
                  ))}
                </dl>
                <p className="req-note">
                  Полные реквизиты для договора вышлем по запросу — {PHONE}.
                </p>
              </aside>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
