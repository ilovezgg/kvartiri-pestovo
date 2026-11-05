import { OWNER, PHONE, PHONE_HREF, HOURS, HOURS_NOTE, REQUIREMENTS } from "@/lib/data";

const LINKS = [
  ["Квартиры", "#flats"],
  ["Фото", "#gallery"],
  ["Как проходит бронь", "#steps"],
  ["Хозяйка", "#about"],
  ["Вопросы", "#faq"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="mark" aria-hidden="true">
                {OWNER.name.charAt(0)}
              </span>
              <div>
                <b>{OWNER.name}</b>
                <span>Посуточно в {OWNER.cityIn} · без посредников</span>
              </div>
            </div>
            <p className="footer-req">{REQUIREMENTS}</p>
          </div>
          <div className="footer-col">
            <h3>Разделы</h3>
            <ul>
              {LINKS.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Связаться</h3>
            <a className="footer-tel" href={PHONE_HREF}>
              {PHONE}
            </a>
            <p className="footer-hours">
              {HOURS}
              <br />
              {HOURS_NOTE}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {OWNER.name}</span>
          <span>Прямое бронирование, без комиссии</span>
        </div>
      </div>
    </footer>
  );
}
