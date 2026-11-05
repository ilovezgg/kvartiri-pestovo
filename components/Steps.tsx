import Reveal from "./Reveal";

const STEPS = [
  {
    h: "Звоните с 8:00 до 22:00",
    p: "Говорите даты и число гостей. Проверяю занятость и сразу отвечаю по цене и условиям.",
  },
  {
    h: "Договариваемся",
    p: "Фиксирую бронь на ваше имя. Детали можно обсудить сообщениями в MAX.",
  },
  {
    h: "Заезжаете",
    p: "Заезд с 14:00. При себе — паспорт или водительское удостоверение. Залог 2 000 ₽, отчётные документы — на месте.",
  },
];

export default function Steps() {
  return (
    <div className="band">
      <div className="wrap">
        <section id="steps">
          <div className="sec-head">
            <Reveal>
              <h2>Как проходит бронь</h2>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Всё по телефону: звоните с 8:00 до 22:00, ночью не беспокойте. Форм и
                предоплат онлайн нет.
              </p>
            </Reveal>
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.h} as="li" delay={i * 110}>
                <span className="step-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
