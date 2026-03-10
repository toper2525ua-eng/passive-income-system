const appConfig = {
  links: {
    telegram: "https://t.me/KarabinJeka",
    bybit: "https://partner.bybit.com/b/104944",
    platform: "",
    payment: "https://t.me/KarabinJeka",
  },
  order: [
    "home",
    "what",
    "how",
    "inside",
    "results",
    "risks",
    "faq",
    "payment",
    "after-payment",
  ],
  mainButtons: ["what", "how", "inside", "results", "risks", "faq", "payment"],
  screens: {
    home: {
      menuLabel: "Старт",
      step: "Екран 1",
      title: "Привіт 👋",
      paragraphs: [
        "Тут я зібрав систему пасивного доходу, яку використовую сам.",
        "Це не один торговий бот і не \"чарівна кнопка\". Це структура інструментів, яка допомагає працювати на ринку більш спокійно і системно.",
        "Всередині системи:",
      ],
      bullets: [
        "основний торговий бот",
        "резервний бот",
        "інструкції по запуску",
        "оновлення та нові інструменти",
        "ідеї для диверсифікації",
        "закритий канал з поясненнями",
      ],
      note: {
        title: "Головна ідея",
        text: "Не сидіти в ринку руками 24/7, а будувати систему, яка працює довгостроково. Нижче можеш подивитися всі деталі.",
      },
      actions: [
        { type: "screen", target: "what", label: "Що це", primary: true },
        { type: "screen", target: "payment", label: "Отримати доступ" },
      ],
    },
    what: {
      menuLabel: "Що це",
      step: "Екран 2",
      title: "Це система пасивного доходу, яку я збирав на своєму досвіді.",
      paragraphs: [
        "Я сам пройшов через різні інструменти: ручну торгівлю, різні боти, стратегії, експерименти.",
        "З часом я зрозумів одну просту річ.",
        "Найгірше — це коли людина постійно сидить у графіках, нервує і намагається вгадувати ринок.",
        "Тому я почав переходити до автоматизованих інструментів, де процес більш системний.",
        "Саме з цього і з'явилася ця система.",
      ],
      bullets: [
        "основний торговий бот",
        "резервний бот",
        "додаткові інструменти",
        "оновлення стратегій",
        "пояснення як усе запускати",
      ],
      note: {
        title: "Суть",
        text: "Це не просто бот, а структура, яку можна поступово розвивати.",
      },
      actions: [
        { type: "screen", target: "how", label: "Як це працює", primary: true },
        { type: "screen", target: "payment", label: "Отримати доступ" },
      ],
    },
    how: {
      menuLabel: "Як це працює",
      step: "Екран 3",
      title: "Все працює досить просто.",
      paragraphs: [
        "Після отримання доступу ти проходиш короткий і зрозумілий шлях.",
      ],
      bullets: [
        "заходиш у закритий канал",
        "отримуєш інструкцію по запуску",
        "підключаєш інструмент",
        "запускаєш бота",
        "контролюєш процес",
      ],
      note: {
        title: "Що важливо",
        text: "Бот відкриває угоди автоматично за заданою логікою. Тобі не потрібно сидіти біля графіків, ловити кожен рух ринку і постійно відкривати угоди вручну. Головна задача — правильно налаштувати систему і контролювати ризики.",
      },
      actions: [
        { type: "link", linkKey: "bybit", label: "Знижка Bybit -10$", primary: true },
        { type: "screen", target: "inside", label: "Що входить" },
      ],
    },
    inside: {
      menuLabel: "Що входить",
      step: "Екран 4",
      title: "Після входу в систему ти отримуєш:",
      bullets: [
        "доступ до закритого Telegram-каналу",
        "основний торговий бот",
        "резервний бот",
        "інструкції по запуску",
        "налаштування",
        "пояснення по роботі",
        "оновлення по системі",
        "нові інструменти",
        "ідеї для диверсифікації",
      ],
      note: {
        title: "Головне",
        text: "Це не формат \"ось тобі бот і розбирайся сам\". Ти отримуєш цілу систему і пояснення, як з нею працювати.",
        accent: true,
      },
      actions: [
        { type: "screen", target: "results", label: "Результати", primary: true },
        { type: "screen", target: "payment", label: "Отримати доступ" },
      ],
    },
    results: {
      menuLabel: "Результати",
      step: "Екран 5",
      title: "Тут я показую реальні результати по системі.",
      paragraphs: [
        "Важливо розуміти одну річ.",
        "Ринок — це не пряма лінія вверх.",
        "Буває прибуток, бувають просадки, бувають різні фази ринку. І це нормально.",
        "Тому я показую не \"картинку красивих плюсів\", а реальний процес роботи системи.",
        "Нижче можна подивитися приклади результатів 👇",
      ],
      media: [
        {
          label: "Скрін 1",
          title: "Результат системи",
          description: "Сюди вставляється ваш реальний скрін з результатом або статистикою.",
        },
        {
          label: "Скрін 2",
          title: "Результат учасника",
          description: "Сюди можна додати скрін або короткий відгук від людини, яка вже користується системою.",
        },
        {
          label: "Скрін 3",
          title: "Процес роботи",
          description: "Сюди вставляється ще один приклад, який показує не тільки плюси, а й реальний процес.",
        },
      ],
      actions: [
        { type: "screen", target: "risks", label: "Ризики", primary: true },
        { type: "screen", target: "payment", label: "Отримати доступ" },
      ],
    },
    risks: {
      menuLabel: "Ризики",
      step: "Екран 6",
      title: "Дуже важливий момент.",
      paragraphs: [
        "Це не кнопка бабло.",
        "У крипторинку немає гарантій.",
        "Я не продаю \"легкі гроші\". Я даю інструмент і систему, яку використовую сам.",
      ],
      bullets: [
        "ринок може падати",
        "бувають просадки",
        "результат залежить від депозиту і ринку",
      ],
      note: {
        title: "Кому це підходить",
        text: "Якщо ти шукаєш формат: \"вкинув сьогодні — завтра став мільйонером\", то це точно не сюди. Але якщо тобі ближче спокійний системний підхід, тоді ця система може бути корисною.",
      },
      actions: [
        { type: "screen", target: "faq", label: "FAQ", primary: true },
        { type: "screen", target: "payment", label: "Отримати доступ" },
      ],
    },
    faq: {
      menuLabel: "FAQ",
      step: "Екран 7",
      title: "Часті питання",
      paragraphs: [
        "Тут зібрані короткі відповіді на питання, які найчастіше виникають перед оплатою.",
      ],
      faq: [
        {
          question: "Який потрібен депозит?",
          answer: "Все залежить від інструменту. Мінімальні варіанти розбираються після входу.",
        },
        {
          question: "Чи підійде новачку?",
          answer: "Так. Усі інструкції пояснюються максимально просто.",
        },
        {
          question: "Чи потрібно торгувати вручну?",
          answer: "Ні. Основна ідея — автоматична торгівля.",
        },
        {
          question: "Чи є гарантія прибутку?",
          answer: "Ні. У ринку гарантій не існує.",
        },
        {
          question: "Скільки часу потрібно?",
          answer: "Основний час займає запуск. Далі процес набагато спокійніший.",
        },
        {
          question: "Що я отримую після оплати?",
          answer: "Доступ до системи, інструкцій і закритого каналу.",
        },
      ],
      actions: [
        { type: "screen", target: "payment", label: "Отримати доступ", primary: true },
        { type: "link", linkKey: "telegram", label: "Поставити питання" },
      ],
    },
    payment: {
      menuLabel: "Отримати доступ",
      step: "Екран 8",
      title: "Доступ до системи — 100$ одноразово.",
      paragraphs: [
        "Після оплати ти отримуєш:",
      ],
      bullets: [
        "доступ до закритого каналу",
        "основний інструмент",
        "резервний інструмент",
        "інструкції",
        "оновлення",
        "нові ідеї по диверсифікації",
      ],
      note: {
        title: "Фінальний крок",
        text: "Якщо тобі підходить такий формат — натискай кнопку нижче.",
        accent: true,
      },
      actions: [
        { type: "link", linkKey: "payment", label: "Отримати доступ", primary: true },
        { type: "screen", target: "after-payment", label: "Що після оплати" },
      ],
    },
    "after-payment": {
      menuLabel: "Після оплати",
      step: "Екран 9",
      title: "Що відбувається після оплати",
      paragraphs: [
        "Тут має бути сторінка, яка підтверджує оплату і не залишає людину без наступного кроку.",
        "Далі можна або автоматично видати доступ, або надіслати повідомлення адміну.",
      ],
      bullets: [
        "підтвердження оплати",
        "видача доступу в канал",
        "інструкція по запуску",
        "автоповідомлення або зв'язок у Telegram",
      ],
      note: {
        title: "Що важливо далі",
        text: "Справжня робота починається після запуску: вставити свої скріни, протестувати на 5–10 людях, подивитися де відвалюються і допиляти слабкі місця.",
      },
      actions: [
        { type: "link", linkKey: "telegram", label: "Написати в Telegram", primary: true },
        { type: "screen", target: "home", label: "Повернутися на старт" },
      ],
    },
  },
};

const quickActions = document.querySelector("#quickActions");
const screenContent = document.querySelector("#screenContent");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

let currentScreenId = "home";

function getScreen(id) {
  return appConfig.screens[id];
}

function getIndex(id) {
  return appConfig.order.indexOf(id);
}

function getNextId(id) {
  const currentIndex = getIndex(id);
  return appConfig.order[currentIndex + 1] || null;
}

function getPrevId(id) {
  const currentIndex = getIndex(id);
  return appConfig.order[currentIndex - 1] || null;
}

function createActionMarkup(action) {
  if (action.type === "screen") {
    return `<button class="button ${action.primary ? "button--primary" : "button--ghost"} button--small" type="button" data-screen-target="${action.target}">${action.label}</button>`;
  }

  const href = appConfig.links[action.linkKey] || "#";
  const disabled = href === "#";

  return `<a class="button ${action.primary ? "button--primary" : "button--ghost"} button--small ${disabled ? "is-disabled" : ""}" href="${href}" data-link="${action.linkKey}" ${disabled ? 'aria-disabled="true"' : ""}>${action.label}</a>`;
}

function buildMetrics(metrics = []) {
  if (!metrics.length) {
    return "";
  }

  return `
    <div class="screen-metrics">
      ${metrics
        .map(
          (metric) => `
            <div class="screen-metric">
              <strong>${metric.value}</strong>
              <span>${metric.label}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function buildList(items = []) {
  if (!items.length) {
    return "";
  }

  return `<ul class="screen-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function buildMedia(media = []) {
  if (!media.length) {
    return "";
  }

  return `
    <div class="screen-media-grid">
      ${media
        .map(
          (item) => `
            <article class="screen-media">
              <span class="screen-media__label">${item.label}</span>
              <h4>${item.title}</h4>
              <p>${item.description}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function buildFaq(faq = []) {
  if (!faq.length) {
    return "";
  }

  return `
    <div class="faq-mini">
      ${faq
        .map(
          (item) => `
            <article class="faq-mini__item">
              <h4>${item.question}</h4>
              <p>${item.answer}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function buildNote(note) {
  if (!note) {
    return "";
  }

  return `
    <div class="screen-note ${note.accent ? "screen-note--accent" : ""}">
      <strong>${note.title}</strong>
      <p>${note.text}</p>
    </div>
  `;
}

function buildActions(actions = []) {
  if (!actions.length) {
    return "";
  }

  return `
    <div class="screen-inline-actions">
      ${actions.map(createActionMarkup).join("")}
    </div>
  `;
}

function renderQuickActions() {
  quickActions.innerHTML = appConfig.mainButtons
    .map((id) => {
      const screen = getScreen(id);
      return `<button type="button" data-key="${id}">${screen.menuLabel}</button>`;
    })
    .join("");
}

function setActiveQuickButton(id) {
  quickActions.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.key === id);
  });
}

function updateProgress(id) {
  const currentIndex = getIndex(id);
  const total = appConfig.order.length;
  progressText.textContent = `Екран ${currentIndex + 1} з ${total}`;
  progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`;
}

function updateFooterButtons(id) {
  const prevId = getPrevId(id);
  const nextId = getNextId(id);

  prevButton.disabled = !prevId;
  prevButton.dataset.target = prevId || "";

  if (!nextId) {
    nextButton.disabled = true;
    nextButton.dataset.target = "";
    nextButton.textContent = "Готово";
    return;
  }

  const nextScreen = getScreen(nextId);
  nextButton.disabled = false;
  nextButton.dataset.target = nextId;
  nextButton.textContent = id === "payment" ? "Після оплати" : `Далі: ${nextScreen.menuLabel || nextScreen.step}`;
}

function renderScreen(id) {
  const screen = getScreen(id);

  if (!screen) {
    return;
  }

  currentScreenId = id;
  setActiveQuickButton(appConfig.mainButtons.includes(id) ? id : "");
  updateProgress(id);
  updateFooterButtons(id);

  const currentIndex = getIndex(id) + 1;
  const paragraphs = screen.paragraphs.map((text) => `<p>${text}</p>`).join("");

  screenContent.innerHTML = `
    <div class="screen-head">
      <div>
        <span class="screen-tag">${screen.step}</span>
        <h3 class="screen-title">${screen.title}</h3>
      </div>
      <div class="screen-order">${String(currentIndex).padStart(2, "0")}</div>
    </div>

    <div class="screen-body">
      ${paragraphs}
      ${buildMetrics(screen.metrics)}
      ${buildList(screen.bullets)}
      ${buildMedia(screen.media)}
      ${buildFaq(screen.faq)}
      ${buildNote(screen.note)}
      ${buildActions(screen.actions)}
    </div>
  `;

  bindConfiguredLinks(screenContent);
}

function bindConfiguredLinks(scope = document) {
  scope.querySelectorAll("[data-link]").forEach((element) => {
    const linkKey = element.getAttribute("data-link");
    const href = appConfig.links[linkKey];

    if (href) {
      element.setAttribute("href", href);
      element.setAttribute("target", "_blank");
      element.setAttribute("rel", "noreferrer noopener");
      element.classList.remove("is-disabled");
      element.removeAttribute("aria-disabled");
    } else {
      element.setAttribute("href", "#");
      element.classList.add("is-disabled");
      element.setAttribute("aria-disabled", "true");
      element.removeAttribute("target");
      element.removeAttribute("rel");
    }
  });
}

function setupObservers() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

quickActions?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-key]");

  if (!button) {
    return;
  }

  renderScreen(button.dataset.key);
});

screenContent?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-screen-target]");

  if (!button) {
    return;
  }

  renderScreen(button.dataset.screenTarget);
});

prevButton?.addEventListener("click", () => {
  const target = prevButton.dataset.target;

  if (target) {
    renderScreen(target);
  }
});

nextButton?.addEventListener("click", () => {
  const target = nextButton.dataset.target;

  if (target) {
    renderScreen(target);
  }
});

document.addEventListener("click", (event) => {
  const disabledLink = event.target.closest("[aria-disabled='true']");

  if (disabledLink) {
    event.preventDefault();
  }
});

bindConfiguredLinks();
renderQuickActions();
renderScreen(currentScreenId);
setupObservers();
