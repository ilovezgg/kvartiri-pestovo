import { FAQ, PHONE_HREF } from "@/lib/data";
import Reveal from "./Reveal";
import { PhoneIcon } from "./Icons";

export default function Faq() {
  return (
    <div className="wrap">
      <section id="faq">
        <div className="faq-layout">
          <div className="faq-aside">
            <Reveal>
              <h2>Частые вопросы</h2>
            </Reveal>
            <Reveal delay={80}>
              <p>Не нашли свой вопрос? Позвоните — отвечу лично, без менеджеров и ботов.</p>
            </Reveal>
            <Reveal delay={140}>
              <a className="btn btn--small" href={PHONE_HREF}>
                <PhoneIcon />
                Позвонить
              </a>
            </Reveal>
          </div>
          <div className="faq">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details>
                  <summary>{f.q}</summary>
                  <p>{f.i}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
