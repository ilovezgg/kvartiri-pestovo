import { TRUST } from "@/lib/data";
import Reveal from "./Reveal";
import { BoltIcon, CalendarIcon, GiftIcon, ShieldIcon } from "./Icons";

const ICONS = [ShieldIcon, BoltIcon, GiftIcon, CalendarIcon];

export default function Trust() {
  return (
    <div className="trust">
      <div className="wrap">
        <ul>
          {TRUST.map((t, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={t.b} as="li" delay={i * 70}>
                <span className="t-ic">
                  <Icon />
                </span>
                <span>
                  <b>{t.b}</b>
                  <span className="rest">{t.rest.replace(/^\s*—\s*/, "")}</span>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
