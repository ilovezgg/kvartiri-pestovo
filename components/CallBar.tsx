import { PHONE, PHONE_HREF } from "@/lib/data";
import { PhoneIcon } from "./Icons";

export default function CallBar() {
  return (
    <nav className="callbar" aria-label="Быстрый звонок">
      <a className="btn" href={PHONE_HREF}>
        <PhoneIcon />
        Позвонить <span className="num">{PHONE}</span>
      </a>
    </nav>
  );
}
