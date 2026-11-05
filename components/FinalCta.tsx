import { PHONE, PHONE_HREF } from "@/lib/data";
import Reveal from "./Reveal";
import { PhoneIcon } from "./Icons";

export default function FinalCta() {
  return (
    <div className="wrap">
      <section id="contact">
        <Reveal>
          <div className="final">
            <div>
              <h2>Позвоните — уточним даты за минуту</h2>
              <p>Рабочее время — с 8:00 до 22:00. С 22:00 до 8:00 звонками не беспокоить.</p>
            </div>
            <a className="btn btn-light" href={PHONE_HREF}>
              <PhoneIcon />
              Позвонить <span className="num">{PHONE}</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
