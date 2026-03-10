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
      menuLabel: "Доступ",
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

/* ─── DOM refs ─── */
const quickActionsEl  = document.querySelector("#quickActions");
const screenContentEl = document.querySelector("#screenContent");
const progressTextEl  = document.querySelector("#progressText");
const progressFillEl  = document.querySelector("#progressFill");
const prevButtonEl    = document.querySelector("#prevButton");
const nextButtonEl    = document.querySelector("#nextButton");
const faqContentEl    = document.querySelector("#faqContent");
const accessContentEl = document.querySelector("#accessContent");

let currentScreenId = "home";

/* ─── Helpers ─── */
function getScreen(id) { return appConfig.screens[id]; }
function getIndex(id)  { return appConfig.order.indexOf(id); }
function getNextId(id) { return appConfig.order[getIndex(id) + 1] || null; }
function getPrevId(id) { return appConfig.order[getIndex(id) - 1] || null; }

/* ─── Builders ─── */
function createActionMarkup(action) {
  if (action.type === "screen") {
    return `<button class="btn ${action.primary ? "btn--primary" : "btn--ghost"} btn--sm" type="button" data-screen-target="${action.target}">${action.label}</button>`;
  }
  const href = appConfig.links[action.linkKey] || "#";
  const disabled = href === "#";
  return `<a class="btn ${action.primary ? "btn--primary" : "btn--ghost"} btn--sm ${disabled ? "is-disabled" : ""}" href="${href}" data-link="${action.linkKey}" ${disabled ? 'aria-disabled="true"' : ""}>${action.label}</a>`;
}

function buildList(items = []) {
  if (!items.length) return "";
  return `<ul class="screen-list">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

function buildMedia(media = []) {
  if (!media.length) return "";
  return `<div class="screen-media-grid">${media.map(m => `
    <article class="screen-media">
      <span class="screen-media__label">${m.label}</span>
      <h4>${m.title}</h4>
      <p>${m.description}</p>
    </article>`).join("")}</div>`;
}

function buildFaq(faq = []) {
  if (!faq.length) return "";
  return `<div class="faq-mini">${faq.map(f => `
    <article class="faq-mini__item">
      <h4>${f.question}</h4>
      <p>${f.answer}</p>
    </article>`).join("")}</div>`;
}

function buildNote(note) {
  if (!note) return "";
  return `<div class="screen-note ${note.accent ? "screen-note--accent" : ""}">
    <strong>${note.title}</strong>
    <p>${note.text}</p>
  </div>`;
}

function buildMetrics(metrics = []) {
  if (!metrics.length) return "";
  return `<div class="screen-metrics">${metrics.map(m => `
    <div class="screen-metric">
      <strong>${m.value}</strong><span>${m.label}</span>
    </div>`).join("")}</div>`;
}

function buildActions(actions = []) {
  if (!actions.length) return "";
  return `<div class="screen-inline-actions">${actions.map(createActionMarkup).join("")}</div>`;
}

/* ─── Quick actions (pills) ─── */
function renderQuickActions() {
  quickActionsEl.innerHTML = appConfig.mainButtons
    .map(id => {
      const s = getScreen(id);
      return `<button type="button" data-key="${id}">${s.menuLabel}</button>`;
    }).join("");
}

function setActiveQuickButton(id) {
  quickActionsEl.querySelectorAll("button").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.key === id);
  });
}

/* ─── Progress ─── */
function updateProgress(id) {
  const idx   = getIndex(id);
  const total = appConfig.order.length;
  progressTextEl.textContent = `Екран ${idx + 1} з ${total}`;
  progressFillEl.style.width = `${((idx + 1) / total) * 100}%`;
}

/* ─── Footer nav buttons ─── */
function updateFooterButtons(id) {
  const prevId = getPrevId(id);
  const nextId = getNextId(id);

  prevButtonEl.disabled = !prevId;
  prevButtonEl.dataset.target = prevId || "";

  if (!nextId) {
    nextButtonEl.disabled = true;
    nextButtonEl.textContent = "Готово";
    return;
  }
  const nextScreen = getScreen(nextId);
  nextButtonEl.disabled = false;
  nextButtonEl.dataset.target = nextId;
  nextButtonEl.textContent = id === "payment"
    ? "Після оплати"
    : `Далі: ${nextScreen.menuLabel || nextScreen.step}`;
}

/* ─── Render bot screen ─── */
function renderScreen(id) {
  const screen = getScreen(id);
  if (!screen) return;

  currentScreenId = id;
  setActiveQuickButton(appConfig.mainButtons.includes(id) ? id : "");
  updateProgress(id);
  updateFooterButtons(id);

  const paragraphs = (screen.paragraphs || []).map(t => `<p>${t}</p>`).join("");

  screenContentEl.innerHTML = `
    <span class="screen-tag">${screen.step}</span>
    <h3 class="screen-title">${screen.title}</h3>
    <div class="screen-body">
      ${paragraphs}
      ${buildMetrics(screen.metrics)}
      ${buildList(screen.bullets)}
      ${buildMedia(screen.media)}
      ${buildFaq(screen.faq)}
      ${buildNote(screen.note)}
      ${buildActions(screen.actions)}
    </div>`;

  bindConfiguredLinks(screenContentEl);

  // Scroll content to top on screen change
  const panel = document.querySelector("#panel-bot .panel-content");
  if (panel) panel.scrollTo({ top: 0, behavior: "smooth" });
}

/* ─── Render FAQ tab ─── */
function renderFaqTab() {
  const s = appConfig.screens.faq;
  faqContentEl.innerHTML = `
    <span class="screen-tag">${s.step}</span>
    <h3 class="screen-title">${s.title}</h3>
    <div class="screen-body">
      ${(s.paragraphs || []).map(t => `<p>${t}</p>`).join("")}
      ${buildFaq(s.faq)}
    </div>`;
  bindConfiguredLinks(faqContentEl);
}

/* ─── Render Access tab ─── */
function renderAccessTab() {
  const s = appConfig.screens.payment;
  accessContentEl.innerHTML = `
    <span class="screen-tag">${s.step}</span>
    <h3 class="screen-title">${s.title}</h3>
    <div class="screen-body">
      ${(s.paragraphs || []).map(t => `<p>${t}</p>`).join("")}
      ${buildList(s.bullets)}
      ${buildNote(s.note)}
    </div>`;
  bindConfiguredLinks(accessContentEl);
}

/* ─── Links resolver ─── */
function bindConfiguredLinks(scope = document) {
  scope.querySelectorAll("[data-link]").forEach(el => {
    const href = appConfig.links[el.getAttribute("data-link")];
    if (href) {
      el.setAttribute("href", href);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noreferrer noopener");
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
    } else {
      el.setAttribute("href", "#");
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.removeAttribute("target");
    }
  });
}

/* ─── Tab switching ─── */
function switchTab(tabId) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("is-active"));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("is-active"));
  document.querySelector(`#panel-${tabId}`)?.classList.add("is-active");
  document.querySelector(`.nav-item[data-tab="${tabId}"]`)?.classList.add("is-active");
}

/* ─── Event listeners ─── */
document.querySelector(".bottom-nav")?.addEventListener("click", e => {
  const btn = e.target.closest(".nav-item[data-tab]");
  if (btn) switchTab(btn.dataset.tab);
});

quickActionsEl?.addEventListener("click", e => {
  const btn = e.target.closest("button[data-key]");
  if (btn) renderScreen(btn.dataset.key);
});

screenContentEl?.addEventListener("click", e => {
  const btn = e.target.closest("[data-screen-target]");
  if (btn) renderScreen(btn.dataset.screenTarget);
});

faqContentEl?.addEventListener("click", e => {
  const btn = e.target.closest("[data-screen-target]");
  if (btn) { switchTab("bot"); renderScreen(btn.dataset.screenTarget); }
});

prevButtonEl?.addEventListener("click", () => {
  if (prevButtonEl.dataset.target) renderScreen(prevButtonEl.dataset.target);
});

nextButtonEl?.addEventListener("click", () => {
  if (nextButtonEl.dataset.target) renderScreen(nextButtonEl.dataset.target);
});

document.addEventListener("click", e => {
  if (e.target.closest("[aria-disabled='true']")) e.preventDefault();
});

/* ─── Init ─── */
bindConfiguredLinks();
renderQuickActions();
renderScreen(currentScreenId);
renderFaqTab();
renderAccessTab();
