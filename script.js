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
      title: "Важливо:",
      paragraphs: [
        "Це не \"кнопка бабло\".",
        "У крипті немає гарантій.",
        "Але тут акцент на збереженні депозиту і гру в довгу.",
        "Модель налаштована так, щоб уникати ліквідацій або зводити їх до мінімуму (майже неможливо).",
      ],
      bullets: [
        "➡️ Основний ризик — час (очікування)",
        "Якщо ринок іде проти — просто чекаємо.",
      ],
      note: {
        title: "Щоб зменшити навіть цей ризик:",
        text: "Є резервний бот, який підключається при сильних просадках і допомагає пережити ринок + не простоює дохід.<br><br>+Завжди працюємо над покращенням стратегії. Це і є наша робота в каналі.",
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

/* ─── Config ─── */
const ADMIN_ID        = '6400309586';
const STATS_KEY       = 'pisystem_admin_2026';
const API_BASE        = '/api';
const SHOT_KEYS = {
  results: 'pi_shots_results',
  reviews: 'pi_shots_reviews',
  process: 'pi_shots_process',
};
let adminActiveType = 'results';

/* ─── DOM refs ─── */
const quickActionsEl  = document.querySelector("#quickActions");
const screenContentEl = document.querySelector("#screenContent");
const progressTextEl  = document.querySelector("#progressText");
const progressFillEl  = document.querySelector("#progressFill");
const prevButtonEl    = document.querySelector("#prevButton");
const nextButtonEl    = document.querySelector("#nextButton");
const faqContentEl    = document.querySelector("#faqContent");
const accessContentEl = document.querySelector("#accessContent");
const adminNavBtn     = document.querySelector("#adminNavBtn");

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

function buildMedia(media = [], screenId = '') {
  // Photo banners ONLY on results screen — animated slideshow per category
  if (screenId === 'results') {
    const LABELS = { results: '📊 Результати', reviews: '💬 Відгуки', process: '📈 Процес' };
    const banners = Object.keys(SHOT_KEYS).map(type => {
      const shots = getShotsByType(type);
      if (!shots.length) return null;
      const label = LABELS[type];
      const slidesHtml = shots.map((s, i) => `
        <div class="banner-slide${i === 0 ? ' is-active' : ''}" data-index="${i}">
          <img src="${s.src}" alt="${label}" loading="lazy" />
        </div>`).join('');
      const dotsHtml = shots.length > 1
        ? `<div class="banner-dots">${shots.map((_, i) => `<span class="banner-dot${i === 0 ? ' is-active' : ''}"></span>`).join('')}</div>`
        : '';
      return `<div class="screenshot-banner" data-category="${type}" data-slide-count="${shots.length}">
        <div class="banner-slides">${slidesHtml}</div>
        <div class="screenshot-banner__footer">
          <span class="screenshot-banner__label">${label}</span>
          ${dotsHtml}
        </div>
      </div>`;
    }).filter(Boolean);
    if (banners.length) {
      return `<div class="screenshot-banners">${banners.join('')}</div>`;
    }
  }
  if (!media.length) return "";
  return `<div class="screen-media-grid">${media.map(m => `
    <article class="screen-media">
      <span class="screen-media__label">${m.label}</span>
      <h4>${m.title}</h4>
      <p>${m.description}</p>
    </article>`).join("")}</div>`;
}

/* ─── Banner slideshow ─── */
const _slideshowTimers = [];

function clearSlideshowTimers() {
  _slideshowTimers.forEach(id => clearInterval(id));
  _slideshowTimers.length = 0;
}

function initBannerSlideshows() {
  clearSlideshowTimers();
  document.querySelectorAll('.screenshot-banner[data-slide-count]').forEach(banner => {
    const count = parseInt(banner.dataset.slideCount, 10);
    if (count < 2) return;
    let current = 0;
    const timer = setInterval(() => {
      const slides = banner.querySelectorAll('.banner-slide');
      const dots   = banner.querySelectorAll('.banner-dot');
      slides[current]?.classList.remove('is-active');
      dots[current]?.classList.remove('is-active');
      current = (current + 1) % count;
      slides[current]?.classList.add('is-active');
      dots[current]?.classList.add('is-active');
    }, 3500);
    _slideshowTimers.push(timer);
  });
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
    <h3 class="screen-title">${screen.title}</h3>
    <div class="screen-body">
      ${paragraphs}
      ${buildMetrics(screen.metrics)}
      ${buildList(screen.bullets)}
      ${buildMedia(screen.media, id)}
      ${buildFaq(screen.faq)}
      ${buildNote(screen.note)}
      ${buildActions(screen.actions)}
    </div>`;

  bindConfiguredLinks(screenContentEl);
  trackView(id);

  if (id === 'results') initBannerSlideshows();

  // Scroll content to top on screen change
  const panel = document.querySelector("#panel-bot .panel-content");
  if (panel) panel.scrollTo({ top: 0, behavior: "smooth" });
}

/* ─── Render FAQ tab ─── */
function renderFaqTab() {
  const s = appConfig.screens.faq;
  faqContentEl.innerHTML = `
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
  updateTgAvatar();
}

function updateTgAvatar() {
  const img = document.querySelector('#tgAvatarImg');
  if (!img) return;
  const tgUrl = appConfig.links.telegram || '';
  const match = tgUrl.match(/t\.me\/([A-Za-z0-9_]+)/);
  if (match) {
    const username = match[1];
    img.src = `https://unavatar.io/telegram/${username}`;
    img.style.display = 'block';
    const fallback = img.nextElementSibling;
    if (fallback) fallback.style.display = 'none';
  } else {
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback) fallback.style.display = 'inline';
  }
}

/* ─── Tab switching ─── */
function switchTab(tabId) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("is-active"));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("is-active"));
  document.querySelector(`#panel-${tabId}`)?.classList.add("is-active");
  document.querySelector(`.nav-item[data-tab="${tabId}"]`)?.classList.add("is-active");
  if (tabId === 'admin') { loadConfig(); loadTonConfig(); loadCryptoConfig(); renderAdminsList(); loadScreenshots().then(renderAdminScreenshots); loadChannelMembers(); }
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

/* ─── Screen name map ─── */
const screenNames = {
  'home': 'Привіт (Старт)', 'what': 'Що це', 'how': 'Як це працює',
  'inside': 'Що входить', 'results': 'Результати', 'risks': 'Ризики',
  'faq': 'FAQ', 'payment': 'Доступ/Оплата', 'after-payment': 'Після оплати',
};

/* ─── Tracking ─── */
function trackView(screen) {
  fetch(`${API_BASE}/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ screen, event: 'view' }),
  }).catch(() => {});
}

/* ─── Admin list helpers ─── */
async function renderAdminsList() {
  const listEl = document.querySelector('#adminsList');
  if (!listEl) return;
  listEl.innerHTML = '<p class="admin-list-empty">Завантаження…</p>';
  try {
    const res  = await fetch(`${API_BASE}/admins?key=${STATS_KEY}`);
    const data = await res.json();
    const owner   = data.owner || '';
    const entries = data.admins || [];
    const all = [
      { entry: owner, isOwner: true },
      ...entries.map(e => ({ entry: e, isOwner: false })),
    ];
    listEl.innerHTML = all.map(item => `
      <div class="admin-id-row">
        <span class="admin-id-crown">${item.isOwner ? '👑' : '👤'}</span>
        <span class="admin-id-val">${item.entry}</span>
        ${item.isOwner
          ? '<span class="admin-id-tag admin-id-tag--owner">власник</span>'
          : `<button class="admin-id-remove" data-entry="${item.entry}" type="button" aria-label="Видалити">✕</button>`}
      </div>`).join('');

    listEl.querySelectorAll('.admin-id-remove').forEach(btn => {
      btn.addEventListener('click', async () => {
        await fetch(`${API_BASE}/admins/remove?key=${STATS_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ entry: btn.dataset.entry }),
        });
        renderAdminsList();
      });
    });
  } catch {
    listEl.innerHTML = '<p class="admin-list-empty">Помилка завантаження</p>';
  }
}

function normalizeAdminEntry(raw) {
  const s = raw.trim();
  if (/^\d+$/.test(s)) return s;                          // numeric ID
  if (/^@?[a-zA-Z0-9_]{3,}$/.test(s)) return '@' + s.replace(/^@/, '').toLowerCase();
  return null;
}

document.querySelector('#addAdminBtn')?.addEventListener('click', async () => {
  const input = document.querySelector('#cfgNewAdmin');
  const entry = normalizeAdminEntry(input?.value || '');
  if (!entry) return;
  await fetch(`${API_BASE}/admins?key=${STATS_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entry }),
  });
  if (input) input.value = '';
  renderAdminsList();
});

document.querySelector('#cfgNewAdmin')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.querySelector('#addAdminBtn')?.click();
});

/* ─── Telegram WebApp viewport fix ─── */
(function () {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;

  function applyHeight() {
    const h = tg.viewportStableHeight || tg.viewportHeight;
    if (h && h > 100) {
      document.documentElement.style.setProperty('--tg-viewport-stable-height', h + 'px');
    }
  }

  applyHeight();
  tg.onEvent('viewportChanged', applyHeight);
})();

/* ─── Admin: check access (Telegram WebApp only) ─── */
async function checkAdminAccess() {
  try {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (!tgUser) return;
    const params = new URLSearchParams({ id: String(tgUser.id) });
    if (tgUser.username) params.set('username', tgUser.username.toLowerCase());
    const res  = await fetch(`${API_BASE}/check-admin?${params}`);
    const data = await res.json();
    if (data.admin) unlockAdmin();
  } catch (e) {}
}

function unlockAdmin() {
  if (adminNavBtn) adminNavBtn.style.display = '';
}

/* ─── Payment sheet ─── */
const paySheet  = document.querySelector('#paySheet');
const cardSheet = document.querySelector('#cardSheet');

function openPaySheet() {
  const card = localStorage.getItem('pi_card') || '';
  const hint = document.querySelector('#payCardHint');
  if (hint) hint.textContent = card ? maskCard(card) : 'Реквізити картки';
  paySheet?.removeAttribute('aria-hidden');
}

function closePaySheet() { paySheet?.setAttribute('aria-hidden', 'true'); }

function openCardSheet() {
  closePaySheet();
  const card = localStorage.getItem('pi_card') || '';
  const display = document.querySelector('#cardNumDisplay');
  if (display) display.textContent = card || '—';
  cardSheet?.removeAttribute('aria-hidden');
}

function closeCardSheet() { cardSheet?.setAttribute('aria-hidden', 'true'); }

function maskCard(card) {
  const clean = card.replace(/\s/g, '');
  if (clean.length <= 8) return card;
  return clean.slice(0, 4) + ' •••• •••• ' + clean.slice(-4);
}

// Intercept all payment link clicks → show sheet
document.addEventListener('click', e => {
  const payLink = e.target.closest('[data-link="payment"]');
  if (payLink) { e.preventDefault(); openPaySheet(); }
});

document.querySelector('#paySheetBd')?.addEventListener('click', closePaySheet);
document.querySelector('#paySheetCancel')?.addEventListener('click', closePaySheet);

document.querySelector('#payOptCrypto')?.addEventListener('click', () => {
  closePaySheet();
  setTimeout(openCryptoSheet, 50);
});

/* ─── Crypto submenu sheet ─── */
function openCryptoSheet() {
  document.querySelector('#cryptoSheet')?.removeAttribute('aria-hidden');
}
function closeCryptoSheet() {
  document.querySelector('#cryptoSheet')?.setAttribute('aria-hidden', 'true');
}
let cryptoManualNetwork = '';
let _cryptoWallets = { trc: '', bep: '' };

function openCryptoManual(title, network, walletAddr) {
  document.querySelector('#cryptoManualTitle').textContent = title;
  document.querySelector('#cryptoManualNetwork').textContent = network;
  cryptoManualNetwork = network;
  // Wallet address
  const walletEl = document.querySelector('#cryptoManualWallet');
  const copyBtn  = document.querySelector('#cryptoManualCopyWallet');
  const addr = walletAddr || '—';
  if (walletEl) walletEl.textContent = addr;
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(addr).then(() => {
        copyBtn.textContent = '✓';
        setTimeout(() => { copyBtn.textContent = 'Копіювати'; }, 1800);
      });
    };
  }
  document.querySelector('#cryptoManualSheet')?.removeAttribute('aria-hidden');
}
function closeCryptoManual() {
  document.querySelector('#cryptoManualSheet')?.setAttribute('aria-hidden', 'true');
}

document.querySelector('#cryptoSheetBd')?.addEventListener('click', closeCryptoSheet);
document.querySelector('#cryptoSheetCancel')?.addEventListener('click', () => { closeCryptoSheet(); setTimeout(openPaySheet, 50); });

document.querySelector('#cryptoOptTon')?.addEventListener('click', () => { closeCryptoSheet(); setTimeout(openTonSheet, 50); });
document.querySelector('#cryptoOptTrc')?.addEventListener('click', () => { closeCryptoSheet(); setTimeout(() => openCryptoManual('USDT · TRC-20', 'Мережа: TRON (TRC-20)', _cryptoWallets.trc || '—'), 50); });
document.querySelector('#cryptoOptBep')?.addEventListener('click', () => { closeCryptoSheet(); setTimeout(() => openCryptoManual('USDT · BEP-20', 'Мережа: BNB Smart Chain (BEP-20)', _cryptoWallets.bep || '—'), 50); });

document.querySelector('#cryptoManualReceiptBtn')?.addEventListener('click', () => {
  closeCryptoManual();
  setTimeout(() => openReceiptSheet(cryptoManualNetwork), 50);
});

document.querySelector('#cryptoManualSheetBd')?.addEventListener('click', closeCryptoManual);
document.querySelector('#cryptoManualCancel')?.addEventListener('click', () => { closeCryptoManual(); setTimeout(openCryptoSheet, 50); });

document.querySelector('#payOptCard')?.addEventListener('click', () => {
  const card = localStorage.getItem('pi_card');
  if (!card) {
    const hint = document.querySelector('#payCardHint');
    if (hint) {
      const orig = hint.textContent;
      hint.textContent = '⚠️ Реквізити ще не налаштовані';
      setTimeout(() => { hint.textContent = orig; }, 2500);
    }
    return;
  }
  openCardSheet();
});

document.querySelector('#payOptTg')?.addEventListener('click', () => {
  const link = appConfig.links.telegram;
  if (link) window.open(link, '_blank', 'noreferrer,noopener');
  closePaySheet();
});

document.querySelector('#cardSheetBd')?.addEventListener('click', closeCardSheet);
document.querySelector('#cardSheetCancel')?.addEventListener('click', () => {
  closeCardSheet();
  setTimeout(openPaySheet, 50);
});

document.querySelector('#copyCardBtn')?.addEventListener('click', () => {
  const card = localStorage.getItem('pi_card') || '';
  if (!card) return;
  navigator.clipboard.writeText(card).then(() => {
    const btn = document.querySelector('#copyCardBtn');
    if (!btn) return;
    btn.textContent = '✓ Скопійовано';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Копіювати'; btn.classList.remove('copied'); }, 2500);
  }).catch(() => {});
});

/* ─── Admin: config form ─── */
async function loadConfig() {
  try {
    const res  = await fetch(`${API_BASE}/config/links?key=${STATS_KEY}`);
    const data = await res.json();
    if (data.telegram) document.querySelector('#cfgTelegram').value = data.telegram;
    if (data.payment)  document.querySelector('#cfgPayment').value  = data.payment;
    if (data.bybit)    document.querySelector('#cfgBybit').value    = data.bybit;
    const cfgCard = document.querySelector('#cfgCard');
    if (cfgCard && data.card) cfgCard.value = data.card;
    // Channel
    const cfgCh = document.querySelector('#cfgChannelUsername');
    if (cfgCh && data.channel) cfgCh.value = data.channel;
    const cfgChId = document.querySelector('#cfgChannelId');
    if (cfgChId && data.channel_id) cfgChId.value = data.channel_id;
    updateChannelStatus(data.channel || '', data.channel_id || '');
    applyConfig(data);
  } catch (e) {}
}

function updateChannelStatus(link, channelId) {
  const dot   = document.querySelector('.subs-status-dot');
  const label = document.querySelector('#subsChannelLabel');
  if (!dot || !label) return;
  if (link && channelId) {
    dot.className     = 'subs-status-dot subs-status-dot--on';
    label.textContent = 'Підключено';
    label.style.color = 'var(--accent)';
  } else if (link) {
    dot.className     = 'subs-status-dot subs-status-dot--warn';
    label.textContent = 'Потрібен ID каналу';
    label.style.color = 'var(--warm)';
  } else {
    dot.className     = 'subs-status-dot subs-status-dot--off';
    label.textContent = 'Не підключено';
    label.style.color = '';
  }
}

function applyConfig(links) {
  if (links.telegram) appConfig.links.telegram = links.telegram;
  if (links.payment)  appConfig.links.payment  = links.payment;
  if (links.bybit)    appConfig.links.bybit    = links.bybit;
  if (links.card)     localStorage.setItem('pi_card', links.card);
  bindConfiguredLinks();
  renderFaqTab();
  renderAccessTab();
}

document.querySelector('#saveConfig')?.addEventListener('click', async () => {
  const links = {
    telegram: document.querySelector('#cfgTelegram').value.trim(),
    payment:  document.querySelector('#cfgPayment').value.trim(),
    bybit:    document.querySelector('#cfgBybit').value.trim(),
    card:     document.querySelector('#cfgCard')?.value.trim() || '',
    channel:  document.querySelector('#cfgChannelUsername')?.value.trim() || '',
  };
  const msg = document.querySelector('#configMsg');
  try {
    await fetch(`${API_BASE}/config/links?key=${STATS_KEY}`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(links),
    });
    applyConfig(links);
    if (msg) { msg.textContent = '✓ Збережено'; setTimeout(() => { msg.textContent = ''; }, 2000); }
  } catch (e) {
    if (msg) { msg.textContent = '✗ Помилка збереження'; setTimeout(() => { msg.textContent = ''; }, 3000); }
  }
});

document.querySelector('#saveChannelBtn')?.addEventListener('click', async () => {
  const link  = document.querySelector('#cfgChannelUsername')?.value.trim() || '';
  const msg   = document.querySelector('#channelMsg');
  try {
    // Load current config first so we don't overwrite other fields
    let current = {};
    try {
      const r = await fetch(`${API_BASE}/config/links?key=${STATS_KEY}`);
      current = await r.json();
    } catch (_) {}
    const channelId = document.querySelector('#cfgChannelId')?.value.trim() || '';
    await fetch(`${API_BASE}/config/links?key=${STATS_KEY}`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ ...current, channel: link, channel_id: channelId }),
    });
    updateChannelStatus(link, channelId);
    if (msg) { msg.textContent = '✓ Збережено'; setTimeout(() => { msg.textContent = ''; }, 2000); }
  } catch (e) {
    if (msg) { msg.textContent = '✗ Помилка збереження'; setTimeout(() => { msg.textContent = ''; }, 3000); }
  }
});

/* ─── Screenshots — server storage ─── */
let shotsData = { results: [], reviews: [], process: [] };

async function loadScreenshots() {
  try {
    const res  = await fetch(`${API_BASE}/screenshots`);
    const data = await res.json();
    if (data && typeof data === 'object') shotsData = data;
  } catch {}
}

function getShotsByType(type) {
  return shotsData[type] || [];
}

function resizeImageToDataURL(file, maxWidth = 900, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      let w = img.naturalWidth, h = img.naturalHeight;
      if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(); };
    img.src = url;
  });
}

/* ─── Admin: render screenshots list for active type ─── */
function renderAdminScreenshots() {
  const container = document.querySelector('#adminScreenshots');
  if (!container) return;
  const list   = getShotsByType(adminActiveType);
  const labels = { results: 'Результати', reviews: 'Відгуки', process: 'Процес' };
  if (!list.length) {
    container.innerHTML = `<p class="admin-list-empty">У «${labels[adminActiveType]}» ще немає фото 👆</p>`;
    return;
  }
  container.innerHTML = `<div class="admin-screenshots-grid">${list.map(s => `
    <div class="admin-screenshot-item">
      <img src="${s.src}" alt="${s.label}" loading="lazy" />
      <div class="admin-screenshot-item__footer">
        <span>${s.label}</span>
        <button class="admin-screenshot-remove" data-id="${s.id}" type="button" aria-label="Видалити">✕</button>
      </div>
    </div>`).join('')}</div>`;

  container.querySelectorAll('.admin-screenshot-remove').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id  = Number(btn.dataset.id);
      const msgEl = document.querySelector('#screenshotMsg');
      try {
        await fetch(`${API_BASE}/screenshots/${id}?key=${STATS_KEY}`, { method: 'DELETE' });
        await loadScreenshots();
        renderAdminScreenshots();
        if (currentScreenId === 'results') renderScreen('results');
      } catch {
        if (msgEl) { msgEl.textContent = '❌ Помилка видалення'; setTimeout(() => { msgEl.textContent = ''; }, 2000); }
      }
    });
  });
}

/* ─── Access status banner + polling ─── */
const ACCESS_PENDING_KEY = 'pi_access_pending';
let accessPollInterval   = null;

function getTgUid() {
  return String(window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '');
}

function showAccessBanner(confirmed = false, link = '') {
  const banner  = document.querySelector('#accessBanner');
  const waiting = document.querySelector('#accessBannerWaiting');
  const ok      = document.querySelector('#accessBannerOk');
  const linkEl  = document.querySelector('#accessBannerLink');
  if (!banner) return;
  banner.style.display = '';
  if (confirmed) {
    if (waiting) waiting.style.display = 'none';
    if (ok)      ok.style.display      = 'flex';
    if (linkEl && link) linkEl.href    = link;
    localStorage.setItem(ACCESS_PENDING_KEY, 'confirmed');
    stopAccessPoll();
  } else {
    if (waiting) waiting.style.display = 'flex';
    if (ok)      ok.style.display      = 'none';
    localStorage.setItem(ACCESS_PENDING_KEY, 'waiting');
    startAccessPoll();
  }
}

function startAccessPoll() {
  if (accessPollInterval) return;
  accessPollInterval = setInterval(checkAccessStatus, 5000);
}

function stopAccessPoll() {
  if (accessPollInterval) { clearInterval(accessPollInterval); accessPollInterval = null; }
}

async function checkAccessStatus() {
  const uid = getTgUid();
  if (!uid) return;
  try {
    const res  = await fetch(`${API_BASE}/payment/status?uid=${uid}`);
    const data = await res.json();
    if (data.paid) showAccessBanner(true, data.access_link || '');
  } catch (_) {}
}

// On load: restore banner state
(function initAccessBanner() {
  const state = localStorage.getItem(ACCESS_PENDING_KEY);
  if (state === 'waiting') {
    showAccessBanner(false);
    checkAccessStatus(); // immediate check
  } else if (state === 'confirmed') {
    // re-fetch link and show confirmed
    checkAccessStatus();
  }
})();

/* ─── Receipt sheet ─── */
let receiptImageBase64 = null;
let receiptNetworkCtx  = '';   // e.g. 'Мережа: TRON (TRC-20)'

function openReceiptSheet(networkCtx) {
  receiptNetworkCtx = typeof networkCtx === 'string' ? networkCtx : '';
  closeCardSheet();
  closeCryptoManual();
  // Reset form
  const txt  = document.querySelector('#receiptText');
  const img  = document.querySelector('#receiptPhotoImg');
  const ph   = document.querySelector('#receiptPhotoPlaceholder');
  const msg  = document.querySelector('#receiptMsg');
  const head = document.querySelector('#receiptSheet .pay-sheet__h');
  if (txt)  txt.value = '';
  if (img)  { img.src = ''; img.style.display = 'none'; }
  if (ph)   ph.style.display = '';
  if (msg)  msg.textContent = '';
  if (head) head.textContent = networkCtx ? `Квитанція · ${networkCtx.replace('Мережа: ', '')}` : 'Надіслати квитанцію';
  receiptImageBase64 = null;
  document.querySelector('#receiptSheet')?.removeAttribute('aria-hidden');
}

function closeReceiptSheet() {
  document.querySelector('#receiptSheet')?.setAttribute('aria-hidden', 'true');
}

document.querySelector('#cardReceiptBtn')?.addEventListener('click', () => openReceiptSheet(''));
document.querySelector('#receiptSheetBd')?.addEventListener('click', closeReceiptSheet);
document.querySelector('#receiptSheetCancel')?.addEventListener('click', () => {
  closeReceiptSheet();
  setTimeout(openCardSheet, 50);
});

// Photo zone click → open file picker
document.querySelector('#receiptPhotoZone')?.addEventListener('click', () => {
  document.querySelector('#receiptFileInput')?.click();
});

document.querySelector('#receiptFileInput')?.addEventListener('change', e => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    receiptImageBase64 = ev.target.result; // data:image/...;base64,...
    const img = document.querySelector('#receiptPhotoImg');
    const ph  = document.querySelector('#receiptPhotoPlaceholder');
    if (img) { img.src = receiptImageBase64; img.style.display = 'block'; }
    if (ph)  ph.style.display = 'none';
  };
  reader.readAsDataURL(file);
  e.target.value = '';
});

document.querySelector('#receiptSendBtn')?.addEventListener('click', async () => {
  const btn  = document.querySelector('#receiptSendBtn');
  const msg  = document.querySelector('#receiptMsg');
  const text = document.querySelector('#receiptText')?.value.trim() || '';

  if (!receiptImageBase64) {
    if (msg) { msg.textContent = '⚠️ Прикріпи скріншот оплати'; msg.style.color = 'var(--warm)'; }
    return;
  }

  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const uid    = tgUser?.id ? String(tgUser.id) : '';
  const name   = [tgUser?.first_name, tgUser?.last_name].filter(Boolean).join(' ') || 'Невідомий';
  const uname  = tgUser?.username || '';

  if (btn) { btn.textContent = 'Відправляємо…'; btn.classList.add('is-disabled'); }
  if (msg) { msg.textContent = ''; msg.style.color = ''; }

  try {
    const res  = await fetch(`${API_BASE}/receipt`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ uid, name, username: uname, text, image: receiptImageBase64, network: receiptNetworkCtx }),
    });
    const data = await res.json();
    if (data.ok) {
      if (msg) { msg.textContent = '✓ Квитанцію відправлено!'; msg.style.color = 'var(--accent)'; }
      if (btn) btn.textContent = '✓ Відправлено';
      showAccessBanner(false);
      setTimeout(closeReceiptSheet, 1800);
    } else {
      throw new Error(data.error || 'error');
    }
  } catch (e) {
    if (msg) { msg.textContent = '✗ Помилка. Спробуй ще раз.'; msg.style.color = '#f87171'; }
    if (btn) { btn.textContent = '✈️ Відправити квитанцію'; btn.classList.remove('is-disabled'); }
  }
});

/* ─── Channel members ─── */
async function loadChannelMembers(q = '') {
  const listEl = document.querySelector('#subsList');
  if (!listEl) return;
  listEl.innerHTML = '<p class="admin-list-empty">Завантаження…</p>';
  try {
    const url = `${API_BASE}/channel/members?key=${STATS_KEY}${q ? '&q=' + encodeURIComponent(q) : ''}`;
    const res  = await fetch(url);
    const data = await res.json();
    renderSubsList(data.members || []);
  } catch (e) {
    if (listEl) listEl.innerHTML = '<p class="admin-list-empty">Помилка завантаження</p>';
  }
}

function renderSubsList(members) {
  const listEl = document.querySelector('#subsList');
  if (!listEl) return;
  if (!members.length) {
    listEl.innerHTML = '<p class="admin-list-empty">Підписників ще немає — натисни ↻ для синхронізації</p>';
    return;
  }
  const activeStatuses = ['member', 'administrator', 'creator', 'restricted'];
  listEl.innerHTML = members.map(m => {
    const isActive = activeStatuses.includes(m.status);
    const name     = m.first_name ? `${m.first_name}${m.username ? ' @' + m.username : ''}` : (m.username ? '@' + m.username : m.tg_user_id);
    return `
      <div class="subs-list-item">
        <span class="subs-list-item__id">${name}<br><small style="opacity:.5;font-size:.75rem">${m.tg_user_id}</small></span>
        <span class="subs-list-item__tag ${isActive ? 'subs-list-item__tag--active' : 'subs-list-item__tag--expired'}">
          ${isActive ? 'в каналі' : m.status === 'left' ? 'вийшов' : 'кікнутий'}
        </span>
      </div>`;
  }).join('');
}

document.querySelector('#subsSyncBtn')?.addEventListener('click', async () => {
  const btn   = document.querySelector('#subsSyncBtn');
  const listEl = document.querySelector('#subsList');
  if (btn) { btn.style.opacity = '.4'; btn.style.pointerEvents = 'none'; btn.textContent = '⏳'; }
  if (listEl) listEl.innerHTML = '<p class="admin-list-empty">Синхронізація…</p>';
  try {
    const res  = await fetch(`${API_BASE}/channel/sync?key=${STATS_KEY}`, { method: 'POST' });
    const data = await res.json();
    if (data.error) {
      if (listEl) listEl.innerHTML = `<p class="admin-list-empty" style="color:var(--warm)">⚠️ ${data.error}</p>`;
      return;
    }
    renderSubsList(data.members || []);
    const msg = document.querySelector('#channelMsg');
    if (msg) { msg.textContent = `✓ Перевірено ${data.checked} користувачів`; setTimeout(() => { msg.textContent = ''; }, 3000); }
  } catch (e) {
    if (listEl) listEl.innerHTML = '<p class="admin-list-empty" style="color:var(--warm)">Помилка з\'єднання</p>';
  } finally {
    if (btn) { btn.style.opacity = ''; btn.style.pointerEvents = ''; btn.textContent = '↻'; }
  }
});

document.querySelector('#subsSearch')?.addEventListener('input', e => {
  loadChannelMembers(e.target.value.trim());
});

/* ─── Admin: sub-tab switching ─── */
document.querySelectorAll('.admin-tab[data-admin-tab]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.toggle('is-active', t === tab));
    document.querySelectorAll('.admin-subpanel').forEach(p => {
      p.classList.toggle('is-active', p.id === `admin-subpanel-${tab.dataset.adminTab}`);
    });
  });
});

/* ─── Admin: shot-type tab switching ─── */
document.querySelector('#shotTypeTabs')?.addEventListener('click', e => {
  const tab = e.target.closest('.shot-type-tab[data-shot-type]');
  if (!tab) return;
  adminActiveType = tab.dataset.shotType;
  document.querySelectorAll('.shot-type-tab').forEach(t => t.classList.toggle('is-active', t === tab));
  renderAdminScreenshots();
});

document.querySelector('#screenshotAddBtn')?.addEventListener('click', () => {
  document.querySelector('#screenshotFileInput')?.click();
});

document.querySelector('#screenshotFileInput')?.addEventListener('change', async e => {
  const file = e.target.files?.[0];
  if (!file) return;
  const msgEl = document.querySelector('#screenshotMsg');
  if (msgEl) msgEl.textContent = '⏳ Завантажуємо…';
  try {
    const src     = await resizeImageToDataURL(file);
    const label   = document.querySelector('#screenshotLabel')?.value.trim();
    const idx     = getShotsByType(adminActiveType).length + 1;
    await fetch(`${API_BASE}/screenshots?key=${STATS_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: adminActiveType, src, label: label || `Скрін ${idx}` }),
    });
    const labelEl = document.querySelector('#screenshotLabel');
    if (labelEl) labelEl.value = '';
    e.target.value = '';
    await loadScreenshots();
    renderAdminScreenshots();
    if (currentScreenId === 'results') renderScreen('results');
    if (msgEl) { msgEl.textContent = '✓ Збережено на сервері'; setTimeout(() => { msgEl.textContent = ''; }, 2500); }
  } catch {
    if (msgEl) { msgEl.textContent = '❌ Помилка. Спробуй ще'; setTimeout(() => { msgEl.textContent = ''; }, 2500); }
  }
});

/* ─── TON Payment ─── */
const tonSheetEl = document.querySelector('#tonSheet');
let _tonOrder        = null;   // { order_id, wallet_address, amount_usdt, memo, expires_at, userId }
let _tonTimerIv      = null;

function openTonSheet() {
  _resetTonUI();
  tonSheetEl?.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  _loadTonOrder();
}

function closeTonSheet() {
  tonSheetEl?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  clearInterval(_tonTimerIv);
}

function _resetTonUI() {
  const succ   = document.querySelector('#tonSuccess');
  const verBtn = document.querySelector('#tonVerifyBtn');
  const cards  = tonSheetEl?.querySelectorAll('.ton-card, .ton-instr, .ton-plan-row, .ton-progress');
  if (succ)   succ.style.display = 'none';
  if (verBtn) { verBtn.style.display = ''; verBtn.disabled = false; verBtn.textContent = '✓ Я надіслав оплату'; }
  cards?.forEach(el => { el.style.display = ''; });
  _setTonStatus('', '');
}

async function _loadTonOrder() {
  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const userId = tgUser?.id ? String(tgUser.id) : null;
  if (!userId) { _setTonStatus('Відкрий через Telegram', 'error'); return; }

  // Check for pending order
  try {
    const res  = await fetch(`${API_BASE}/payment/pending?tg_user_id=${userId}`);
    const data = await res.json();
    if (data.order) { _showTonOrder(data.order, userId); return; }
  } catch {}

  // Create new order
  _setTonStatus('⏳ Створюємо замовлення…', '');
  try {
    const res  = await fetch(`${API_BASE}/payment/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tg_user_id: userId }),
    });
    const data = await res.json();
    if (data.error === 'payment_not_configured') {
      _setTonStatus('❌ Оплата ще не налаштована адміном', 'error'); return;
    }
    if (data.error) { _setTonStatus('❌ ' + data.error, 'error'); return; }
    _showTonOrder(data, userId);
  } catch { _setTonStatus('❌ Помилка з\'єднання', 'error'); }
}

function _showTonOrder(order, userId) {
  _tonOrder = { ...order, userId };
  const amtEl    = document.querySelector('#tonAmount');
  const walletEl = document.querySelector('#tonWallet');
  const memoEl   = document.querySelector('#tonMemo');
  if (amtEl)    amtEl.textContent    = `${order.amount_usdt} USDT`;
  if (walletEl) walletEl.textContent = order.wallet_address || '—';
  if (memoEl)   memoEl.textContent   = order.memo || '—';
  _setTonStatus('', '');
  _startTonTimer(order.expires_at);
}

function _startTonTimer(expiresAt) {
  clearInterval(_tonTimerIv);
  const timerEl    = document.querySelector('#tonTimer');
  const progressEl = document.querySelector('#tonProgressFill');
  const totalMs    = 30 * 60 * 1000;
  const expTime    = new Date(expiresAt).getTime();

  const update = () => {
    const diff = expTime - Date.now();
    if (diff <= 0) {
      if (timerEl)    timerEl.textContent = '00:00';
      if (progressEl) progressEl.style.width = '0%';
      clearInterval(_tonTimerIv);
      _setTonStatus('⏰ Час вийшов. Закрий і відкрий заново.', 'error');
      const verBtn = document.querySelector('#tonVerifyBtn');
      if (verBtn) { verBtn.disabled = true; verBtn.textContent = 'Час вийшов'; }
      return;
    }
    const m = Math.floor(diff / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (timerEl)    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (progressEl) progressEl.style.width = `${Math.min(100, (diff / totalMs) * 100)}%`;
  };
  update();
  _tonTimerIv = setInterval(update, 1000);
}

function _setTonStatus(msg, type) {
  const el = document.querySelector('#tonStatusMsg');
  if (!el) return;
  el.textContent = msg;
  el.className   = 'ton-status-msg' + (type ? ` is-${type}` : '');
}

async function _verifyTonPayment() {
  if (!_tonOrder) return;
  const verBtn = document.querySelector('#tonVerifyBtn');
  if (verBtn) { verBtn.disabled = true; verBtn.textContent = '⏳ Перевіряємо…'; }
  _setTonStatus('', '');

  try {
    const res  = await fetch(`${API_BASE}/payment/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order_id: _tonOrder.order_id, tg_user_id: _tonOrder.userId }),
    });
    const data = await res.json();

    if (data.status === 'paid' || data.status === 'already_paid') {
      _showTonSuccess();
    } else if (data.status === 'not_found') {
      _setTonStatus('Транзакцію не знайдено. Зачекай хвилину і спробуй ще раз.', 'error');
      if (verBtn) { verBtn.disabled = false; verBtn.textContent = '↻ Перевірити знову'; }
    } else if (data.status === 'expired' || res.status === 410) {
      _setTonStatus('⏰ Час вийшов. Закрий і відкрий заново.', 'error');
      if (verBtn) { verBtn.disabled = true; verBtn.textContent = 'Час вийшов'; }
    } else {
      _setTonStatus('Помилка перевірки. Спробуй ще.', 'error');
      if (verBtn) { verBtn.disabled = false; verBtn.textContent = '✓ Я надіслав оплату'; }
    }
  } catch {
    _setTonStatus('Помилка з\'єднання.', 'error');
    if (verBtn) { verBtn.disabled = false; verBtn.textContent = '✓ Я надіслав оплату'; }
  }
}

function _showTonSuccess() {
  clearInterval(_tonTimerIv);
  const succ   = document.querySelector('#tonSuccess');
  const verBtn = document.querySelector('#tonVerifyBtn');
  const cards  = tonSheetEl?.querySelectorAll('.ton-card, .ton-instr, .ton-plan-row, .ton-progress, .ton-status-msg');
  if (verBtn) verBtn.style.display = 'none';
  cards?.forEach(el => { el.style.display = 'none'; });
  if (succ) succ.style.display = '';
}

// Copy buttons for TON sheet
(function setupTonCopies() {
  const map = {
    tonCopyAmount: () => document.querySelector('#tonAmount')?.textContent?.replace(' USDT','').trim(),
    tonCopyWallet: () => document.querySelector('#tonWallet')?.textContent?.trim(),
    tonCopyMemo:   () => document.querySelector('#tonMemo')?.textContent?.trim(),
  };
  Object.entries(map).forEach(([id, getter]) => {
    document.querySelector(`#${id}`)?.addEventListener('click', async () => {
      const val = getter();
      if (!val || val === '—') return;
      try {
        await navigator.clipboard.writeText(val);
        const btn = document.querySelector(`#${id}`);
        if (btn) {
          btn.textContent = '✓';
          btn.classList.add('copied');
          setTimeout(() => { btn.textContent = '⧉'; btn.classList.remove('copied'); }, 2000);
        }
      } catch {}
    });
  });
})();

document.querySelector('#tonSheetBd')?.addEventListener('click', closeTonSheet);
document.querySelector('#tonSheetClose')?.addEventListener('click', closeTonSheet);
document.querySelector('#tonVerifyBtn')?.addEventListener('click', _verifyTonPayment);
document.querySelector('#tonSuccessClose')?.addEventListener('click', closeTonSheet);

/* ─── Admin: Crypto (TRC/BEP) config ─── */
async function loadCryptoConfig() {
  try {
    const res  = await fetch(`${API_BASE}/config/crypto?key=${STATS_KEY}`);
    const data = await res.json();
    if (data.trc_wallet) {
      _cryptoWallets.trc = data.trc_wallet;
      const el = document.querySelector('#cfgTrcWallet');
      if (el) el.value = data.trc_wallet;
    }
    if (data.bep_wallet) {
      _cryptoWallets.bep = data.bep_wallet;
      const el = document.querySelector('#cfgBepWallet');
      if (el) el.value = data.bep_wallet;
    }
  } catch {}
}

document.querySelector('#saveCryptoConfig')?.addEventListener('click', async () => {
  const trc_wallet = document.querySelector('#cfgTrcWallet')?.value.trim() || '';
  const bep_wallet = document.querySelector('#cfgBepWallet')?.value.trim() || '';
  const msgEl = document.querySelector('#cryptoConfigMsg');
  try {
    await fetch(`${API_BASE}/config/crypto?key=${STATS_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trc_wallet, bep_wallet }),
    });
    _cryptoWallets.trc = trc_wallet;
    _cryptoWallets.bep = bep_wallet;
    if (msgEl) { msgEl.textContent = '✓ Збережено'; setTimeout(() => { msgEl.textContent = ''; }, 2000); }
  } catch {
    if (msgEl) { msgEl.textContent = '❌ Помилка'; setTimeout(() => { msgEl.textContent = ''; }, 2000); }
  }
});

/* ─── Admin: TON config ─── */
async function loadTonConfig() {
  try {
    const res  = await fetch(`${API_BASE}/config/ton?key=${STATS_KEY}`);
    const data = await res.json();
    const w    = document.querySelector('#cfgTonWallet');
    const hint = document.querySelector('#tonWalletHint');
    const p    = document.querySelector('#cfgTonPrice');
    const a    = document.querySelector('#cfgTonAccessLink');

    if (w) {
      if (data.wallet) {
        // Wallet is set — show masked + lock the field
        w.value    = data.wallet;
        w.readOnly = true;
        w.classList.add('config-input--locked');
        if (hint) hint.style.display = '';
      } else {
        w.readOnly = false;
        w.classList.remove('config-input--locked');
        if (hint) hint.style.display = 'none';
      }
    }
    if (p && data.price)       p.value = data.price;
    if (a && data.access_link) a.value = data.access_link;
  } catch {}
}

document.querySelector('#saveTonConfig')?.addEventListener('click', async () => {
  const wallet      = document.querySelector('#cfgTonWallet')?.value.trim() || '';
  const price       = document.querySelector('#cfgTonPrice')?.value.trim()  || '100';
  const access_link = document.querySelector('#cfgTonAccessLink')?.value.trim() || '';
  const msgEl = document.querySelector('#tonConfigMsg');
  try {
    await fetch(`${API_BASE}/config/ton?key=${STATS_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet, price, access_link }),
    });
    if (msgEl) { msgEl.textContent = '✓ Збережено'; setTimeout(() => { msgEl.textContent = ''; }, 2000); }
  } catch {
    if (msgEl) { msgEl.textContent = '❌ Помилка'; setTimeout(() => { msgEl.textContent = ''; }, 2000); }
  }
});

/* ─── Lightbox ─── */
const lightboxEl = document.querySelector('#lightbox');
let _lbPhotos  = [];   // array of {src, label}
let _lbIndex   = 0;
let _lbCaption = '';

function _lbShow() {
  const photo   = _lbPhotos[_lbIndex];
  const img     = document.querySelector('#lightboxImg');
  const cap     = document.querySelector('#lightboxCaption');
  const counter = document.querySelector('#lightboxCounter');
  const prev    = document.querySelector('#lightboxPrev');
  const next    = document.querySelector('#lightboxNext');
  if (img)     img.src = photo?.src || '';
  if (cap)     cap.textContent = '';
  if (counter) counter.textContent = _lbPhotos.length > 1 ? `${_lbIndex + 1} / ${_lbPhotos.length}` : '';
  if (prev)    prev.disabled = _lbIndex <= 0;
  if (next)    next.disabled = _lbIndex >= _lbPhotos.length - 1;
}

function openLightbox(photos, startIndex, caption) {
  _lbPhotos  = photos;
  _lbIndex   = startIndex;
  _lbCaption = caption || '';
  _lbShow();
  lightboxEl?.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxEl?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  const img = document.querySelector('#lightboxImg');
  if (img) setTimeout(() => { img.src = ''; }, 250);
}

function lightboxNavigate(delta) {
  const newIdx = _lbIndex + delta;
  if (newIdx < 0 || newIdx >= _lbPhotos.length) return;
  const img = document.querySelector('#lightboxImg');
  if (img) {
    img.classList.add('is-fading');
    setTimeout(() => {
      _lbIndex = newIdx;
      _lbShow();
      img.classList.remove('is-fading');
    }, 180);
  } else {
    _lbIndex = newIdx;
    _lbShow();
  }
}

document.querySelector('#lightboxBd')?.addEventListener('click', closeLightbox);
document.querySelector('#lightboxClose')?.addEventListener('click', closeLightbox);
document.querySelector('#lightboxPrev')?.addEventListener('click', () => lightboxNavigate(-1));
document.querySelector('#lightboxNext')?.addEventListener('click', () => lightboxNavigate(1));

// Click on banner → open lightbox for that category
document.addEventListener('click', e => {
  const banner = e.target.closest('.screenshot-banner[data-category]');
  if (!banner) return;
  const type    = banner.dataset.category;
  const LABELS  = { results: '📊 Результати', reviews: '💬 Відгуки', process: '📈 Процес' };
  const shots   = getShotsByType(type);
  if (!shots.length) return;
  // start from the currently visible slide
  const slides = banner.querySelectorAll('.banner-slide');
  let startIdx = 0;
  slides.forEach((s, i) => { if (s.classList.contains('is-active')) startIdx = i; });
  openLightbox(shots, startIdx, LABELS[type] || '');
});

document.addEventListener('keydown', e => {
  if (lightboxEl?.getAttribute('aria-hidden') === 'true') return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lightboxNavigate(-1);
  if (e.key === 'ArrowRight')  lightboxNavigate(1);
});

// Touch swipe in lightbox
let _lbTouchX = 0;
lightboxEl?.addEventListener('touchstart', e => {
  _lbTouchX = e.touches[0].clientX;
}, { passive: true });
lightboxEl?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - _lbTouchX;
  if (Math.abs(dx) > 50) lightboxNavigate(dx < 0 ? 1 : -1);
});

/* ─── Init ─── */
// Load links from server on startup
fetch(`${API_BASE}/config/links?key=${STATS_KEY}`)
  .then(r => r.json())
  .then(data => { if (data && !data.error) applyConfig(data); })
  .catch(() => {});

bindConfiguredLinks();
renderQuickActions();
renderScreen(currentScreenId);
renderFaqTab();
renderAccessTab();
trackView('home');
checkAdminAccess();

// Load screenshots from server, then re-render results if needed
loadScreenshots().then(() => {
  if (currentScreenId === 'results') renderScreen('results');
  // renderScreen already calls initBannerSlideshows for 'results'
});

