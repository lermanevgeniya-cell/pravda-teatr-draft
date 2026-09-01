const advantages = [
  "Маленькие группы: каждого видно, слышно и можно довести до роли.",
  "Педагоги - действующие актеры московских театров, не ведущие мотивационных кружков.",
  "Финал курса - сценический результат: спектакль или актерский видеофрагмент.",
  "После курса есть продолжение: среды, лаборатории, показы, новые роли.",
];

const path = [
  ["01", "Проба", "Снимаем зажимы через действие, партнера и живую сцену."],
  ["02", "Репетиции", "Работаем с текстом, задачей, образом, телом, голосом и вниманием."],
  ["03", "Роль", "Режиссер собирает материал так, чтобы у каждого был полноценный результат."],
  ["04", "Премьера", "Выход на сцену, зрители, поклон и ощущение: я правда это сделал."],
];

const teachers = [
  {
    name: "Юрий Коновалов",
    role: "актер МХАТ им. Горького, режиссер, сценарист, педагог",
    image: "/teachers/yuri-konovalov/portrait.jpg",
  },
  {
    name: "Максим Бойцов",
    role: "актер МХАТ им. Горького, педагог",
    image: "/teachers/maxim-boytsov/portrait.jpg",
  },
  {
    name: "Семен Шевелин",
    role: "актер МХАТ им. Горького, педагог",
    image: "/teachers/semen-shevelin/portrait.jpg",
  },
  {
    name: "Диана Прокопив",
    role: "актриса театра им. Ермоловой, педагог по вокалу",
    image: "/teachers/diana-prokopiv/portrait.jpg",
  },
  {
    name: "Николай Коротаев",
    role: "педагог",
    image: null,
  },
  {
    name: "Эля Коротаева",
    role: "педагог",
    image: null,
  },
];

const formats = [
  ["Полугодовой курс", "6 месяцев актерской работы в маленькой группе. В финале - роль в спектакле или профессиональный актерский фрагмент."],
  ["Актерская среда", "Открытые мастер-классы для взрослых: тема вечера, упражнение, правка, живые люди и вход в студию без лишней торжественности."],
  ["Кинокурс", "Работа перед камерой, видеовизитка, актерский фрагмент и понимание, как существовать в кадре без зажима."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="poster">
          <img src="/hero-theatre.png" alt="Афишный коллаж: репетиция и сцена" />
          <div className="posterLabel">Ноябрьский набор</div>
        </div>
        <div className="heroCopy">
          <p className="eyebrow">Правда Театра / Москва</p>
          <h1>Взрослые играют всерьез</h1>
          <p className="lead">
            Камерная театральная студия для взрослых: маленькая группа,
            педагоги из сильных московских театров и роль на сцене в финале курса.
          </p>
          <div className="heroActions" aria-label="Основные действия">
            <a href="#request" className="button primary">Записаться на встречу</a>
            <a href="#why" className="button secondary">Понять отличие</a>
          </div>
        </div>
      </section>

      <section className="announcement" aria-label="Набор в ноябрьскую группу">
        <p>Открыт набор в ноябрьскую группу</p>
        <strong>6 месяцев / 2 раза в неделю / финальный показ на сцене</strong>
        <a href="#request">Оставить заявку</a>
      </section>

      <section className="section intro" id="why">
        <div>
          <p className="kicker">Не кружок. Не терапия. Не обещание “раскрыться”.</p>
          <h2>Мы продаем не расписание занятий, а путь от первой пробы до роли.</h2>
        </div>
        <p>
          В большой школе легко раствориться в потоке. В маленькой студии сложнее спрятаться,
          зато больше шансов быть замеченным, получить точную правку и выйти на сцену не фоном,
          а участником спектакля.
        </p>
      </section>

      <section className="section advantageGrid">
        {advantages.map((item, index) => (
          <article className="advantage" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </article>
        ))}
      </section>

      <section className="section split">
        <div className="headlineBlock">
          <p className="kicker">Что внутри</p>
          <h2>Сцена, камера, голос, текст, партнер и режиссерская сборка.</h2>
        </div>
        <div className="programList">
          <p>Актерские тренинги, этюды, ораторское мастерство, вокал, пластика.</p>
          <p>Разбор роли: сверхзадача, мотивация, отношение к партнеру, действие.</p>
          <p>Репетиции, мизансцены, свет, звук, ритм и финальный выпуск.</p>
        </div>
      </section>

      <section className="section path" aria-label="Путь студента">
        <div className="sectionTop">
          <p className="kicker">Как это устроено</p>
          <h2>Четыре шага до сцены</h2>
        </div>
        <div className="pathGrid">
          {path.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section formats" id="formats">
        <div className="sectionTop">
          <p className="kicker">Форматы</p>
          <h2>Можно войти аккуратно. Можно сразу идти в курс.</h2>
        </div>
        <div className="formatGrid">
          {formats.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section teachers">
        <div className="sectionTop">
          <p className="kicker">Команда</p>
          <h2>Педагоги, которые работают с живой сценой.</h2>
        </div>
        <div className="teacherGrid">
          {teachers.map((teacher, index) => (
            <article key={teacher.name} className={teacher.image ? "" : "teacherPlaceholder"}>
              <div className="teacherPhoto">
                {teacher.image ? (
                  <img src={teacher.image} alt={teacher.name} />
                ) : (
                  <span>{String(index + 1).padStart(2, "0")}</span>
                )}
              </div>
              <h3>{teacher.name}</h3>
              <p>{teacher.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifest">
        <p>После просмотра сайта человек должен понять:</p>
        <h2>здесь меня увидят, доведут до роли и выведут на сцену.</h2>
      </section>

      <section className="section request" id="request">
        <div>
          <p className="kicker">Ноябрьская группа</p>
          <h2>Напишите “хочу на сцену” - расскажем про курс и встречу-знакомство.</h2>
        </div>
        <div className="contactPanel">
          <a href="tel:+79161455566">+7 916 145-55-66</a>
          <a href="mailto:konovalov.yury.yu@gmail.com">konovalov.yury.yu@gmail.com</a>
          <a href="https://t.me/pravdateatr" target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </section>
    </main>
  );
}
