import { INCLUDED, RULES } from "@/lib/data";
import Reveal from "./Reveal";
import { CheckIcon, ClockIcon, MoonIcon, PhoneIcon, ShieldIcon, UserIcon } from "./Icons";

const RULE_ICONS = [ClockIcon, UserIcon, ShieldIcon, PhoneIcon, MoonIcon];

export default function Lists() {
  return (
    <div className="wrap">
      <section>
        <div className="two-col">
          <Reveal>
            <div className="adv">
              <h2>Что включено</h2>
              <ul>
                {INCLUDED.map((it) => (
                  <li key={it.b}>
                    <span className="li-ic">
                      <CheckIcon />
                    </span>
                    <span>
                      <b>{it.b}</b>
                      {it.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="rules">
              <h2>Правила проживания</h2>
              <ul>
                {RULES.map(([b, rest], i) => {
                  const Icon = RULE_ICONS[i % RULE_ICONS.length];
                  return (
                    <li key={b}>
                      <span className="li-ic">
                        <Icon />
                      </span>
                      <span>
                        <b>{b}</b>
                        {rest}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
