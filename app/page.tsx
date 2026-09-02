const advantages = [
  "Плотная работа с режиссером и педагогами в маленькой группе.",
  "Педагоги - действующие актеры МХАТ им. Горького, театра Вахтангова и театра Ермоловой.",
  "Финал курса - роль в спектакле на сцене Театра современной драматургии.",
  "После курса есть продолжение: актерские среды, лаборатории, новые показы, новые роли.",
];

const path = [
  ["01", "Вход в роль", "Понимаем, как устроена сцена, партнерство и актерское действие."],
  ["02", "Репетиции", "Пробуем разные решения, работаем с текстом, телом, голосом и вниманием."],
  ["03", "Сборка спектакля", "Соединяем роли, сцены, мизансцены, свет, звук и общий ритм показа."],
  ["04", "Премьера", "Выходим на сцену перед зрителями в полноценной роли."],
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
    role: "артист МХАТ им. Горького, педагог",
    image: "/teachers/nikolai-korotaev/portrait.jpg",
  },
  {
    name: "Эльвира Цимбал",
    role: "актриса МХАТ им. Горького, Театра Вахтангова, Театра \"Виват\"",
    image: "/teachers/elvira-tsimbal/portrait.jpg",
  },
];

const formats = [
  ["Полугодовой курс", "Идем от актерских практик к репетициям и собираем спектакль, где у каждого есть полноценная роль."],
  ["Актерская среда", "Тематические мастер-классы. На каждом тренируем один конкретный навык: проявленность, выразительность, убедительность, работу с камерой, вживание в роль или самопробы. Проводим встречи с режиссерами и кастинг-директорами, чтобы студенты понимали, как устроены кастинги и работа в профессии."],
  ["Кинокурс", "На каждом занятии учимся работать перед камерой, держать внимание в кадре и снимаем актерские видеофрагменты."],
];

const performances = [
  ["Балаган", "по пьесе Чарльза Мори"],
  ["Мастер и Маргарита", "по мотивам романа М. Булгакова"],
  ["Человек из Подольска", "по пьесе Дмитрия Данилова"],
];

const performancePhotos = [
  ["169", "Сцена из спектакля Мастер и Маргарита"],
  ["239", "Ансамблевая сцена спектакля Мастер и Маргарита"],
  ["426", "Сцена у красного занавеса"],
  ["727", "Пластическая сцена с масками"],
  ["830", "Финальный поклон"],
  ["376", "Диалог на сцене"],
  ["475", "Драматическая сцена"],
  ["186", "Портрет роли"],
  ["708", "Пластическая сцена"],
];

export default function Home() {
  return (
    <main>
      <nav className="topNav" aria-label="Основная навигация">
        <a href="#top" className="brandMark">Правда Театр</a>
        <div>
        <a href="#why">Отличие</a>
        <a href="#formats">Форматы</a>
        <a href="#teachers">Педагоги</a>
        <a href="#performances">Спектакли</a>
        <a href="#request">Заявка</a>
      </div>
      </nav>

      <section className="hero" id="top">
        <div className="poster">
          <img src="/hero-theatre.png" alt="Афишный коллаж: репетиция и сцена" />
        </div>
        <div className="heroCopy">
          <div className="heroNotice">Ноябрьский набор / Москва</div>
          <h1><span>Взрослые и дети</span><span>играют всерьез</span></h1>
          <p className="lead">
            Камерная театральная студия для взрослых и детей: маленькая группа,
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

      <section className="rhythmStrip" aria-label="Темы курса">
        <span>сцена</span>
        <span>камера</span>
        <span>голос</span>
        <span>текст</span>
        <span>партнер</span>
        <span>премьера</span>
      </section>

      <section className="section intro" id="why">
        <div>
          <h2>От первого занятия - к роли на сцене перед зрителями.</h2>
        </div>
        <p>
          В больших театральных школах студент часто становится одним из многих. У нас маленькие
          группы, поэтому режиссер видит каждого: подбирает роль, замечает сильные стороны и
          помогает развить их с помощью точных правок. У нас каждый человек выходит на сцену как
          полноценный участник спектакля.
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
          <h2>Учимся действовать на сцене: слышать партнера, держать внимание зрителя, владеть голосом, телом и ролью.</h2>
        </div>
        <div className="programList">
          <p>В актерских практиках тренируем внимание, голос, тело и свободу существования на сцене.</p>
          <p>Разбираем роль через задачу, мотив, действие и отношение к партнеру.</p>
          <p>Репетируем сцены, собираем мизансцены и доводим материал до финального показа.</p>
        </div>
      </section>

      <section className="section path" aria-label="Путь студента">
        <div className="sectionTop">
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

      <section className="section wednesdays" id="wednesdays">
        <a className="wednesdayCard" href="#request">
          <div>
            <h2>Актерские среды</h2>
            <p>
              Тематические мастер-классы для тех, кто хочет регулярно тренировать актерские навыки,
              встречаться с режиссерами и кастинг-директорами и пробовать себя в сцене и кадре.
            </p>
          </div>
          <div className="scheduleDraft">
            <span>Календарь ближайших мастер-классов</span>
            <strong>Расписание в разработке</strong>
            <p>Здесь появятся даты, темы, педагоги и ссылка на запись.</p>
          </div>
        </a>
      </section>

      <section className="section teachers" id="teachers">
        <div className="sectionTop">
          <h2>Педагоги из театров, где сцена - их ежедневная работа.</h2>
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

      <section className="section performances" id="performances">
        <div className="sectionTop">
          <h2>Спектакли, которые уже ставил Правда Театр.</h2>
        </div>
        <div className="stagingGrid">
          {performances.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>«{title}»</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="sectionTop performanceIntro">
          <h2>Кадры со сцены: работа, свет, лица и финальный поклон.</h2>
        </div>
        <div className="performanceGrid">
          {performancePhotos.map(([id, alt], index) => (
            <article key={id}>
              <img src={`/performances/master-i-margarita/${id}.jpg`} alt={alt} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section price" id="price">
        <div className="sectionTop">
          <h2>Стоимость ноябрьского набора</h2>
        </div>
        <div className="priceGrid">
          <article>
            <h3>Взрослый курс</h3>
            <p>120 000 ₽</p>
            <span>за 6 месяцев обучения</span>
          </article>
          <article>
            <h3>Детский курс</h3>
            <p>110 000 ₽</p>
            <span>за 6 месяцев обучения</span>
          </article>
          <article>
            <h3>Ранняя предзапись</h3>
            <p>-20%</p>
            <span>есть оплата в рассрочку</span>
          </article>
        </div>
      </section>

      <section className="manifest">
        <p>После просмотра сайта человек должен понять:</p>
        <h2>здесь меня увидят, доведут до роли и выведут на сцену.</h2>
      </section>

      <section className="section request" id="request">
        <div>
          <h2>Напишите “хочу на сцену” - расскажем про курс и встречу-знакомство.</h2>
        </div>
        <div className="contactPanel">
          <a href="tel:+79161455566">+7 916 145-55-66</a>
          <a href="mailto:konovalov.yury.yu@gmail.com">konovalov.yury.yu@gmail.com</a>
          <a href="https://t.me/pravdateatr" target="_blank" rel="noreferrer">Telegram</a>
          <span>Калашный пер., дом 3</span>
        </div>
      </section>

      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", () => {
              const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;
              window.gsap.registerPlugin(window.ScrollTrigger);
              window.gsap.utils.toArray(".section, .manifest, .teacherGrid article, .performanceGrid article").forEach((element, index) => {
                window.gsap.from(element, {
                  autoAlpha: 0,
                  y: 28,
                  duration: 0.62,
                  delay: (index % 4) * 0.035,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    once: true
                  }
                });
              });
            });
          `,
        }}
      />
    </main>
  );
}
