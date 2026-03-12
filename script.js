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
  // Photo banners ONLY on results screen
  if (screenId === 'results') {
    const LABELS = { results: '📊 Результати', reviews: '💬 Відгуки', process: '📈 Процес' };
    const banners = Object.keys(SHOT_KEYS).map(type => {
      const shots = getShotsByType(type);
      if (!shots.length) return null;
      // one banner per category — shows first photo, label = category name
      const s = shots[0];
      return `<div class="screenshot-banner" data-lightbox-src="${s.src}" data-lightbox-caption="${LABELS[type]}">
        <img src="${s.src}" alt="${LABELS[type]}" loading="lazy" />
        <div class="screenshot-banner__footer">
          <span class="screenshot-banner__label">${LABELS[type]}</span>
          <span class="screenshot-banner__zoom">🔍</span>
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
}

/* ─── Tab switching ─── */
function switchTab(tabId) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("is-active"));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("is-active"));
  document.querySelector(`#panel-${tabId}`)?.classList.add("is-active");
  document.querySelector(`.nav-item[data-tab="${tabId}"]`)?.classList.add("is-active");
  if (tabId === 'admin') { loadStats(); loadConfig(); renderAdminsList(); renderAdminScreenshots(); }
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

/* ─── Admin: load stats ─── */
async function loadStats() {
  const statToday   = document.querySelector('#statToday');
  const statTotal   = document.querySelector('#statTotal');
  const screenStats = document.querySelector('#screenStats');

  if (statToday) statToday.textContent = '…';
  if (statTotal) statTotal.textContent = '…';

  try {
    const res  = await fetch(`${API_BASE}/stats?key=${STATS_KEY}`);
    const data = await res.json();

    if (statToday) statToday.textContent = data.today ?? '—';
    if (statTotal) statTotal.textContent = data.total ?? '—';

    if (screenStats && data.screens?.length) {
      const max = data.screens[0].count || 1;
      screenStats.innerHTML = data.screens.map(s => `
        <div class="screen-stat-row">
          <span class="screen-stat-name">${screenNames[s.screen] || s.screen}</span>
          <div class="screen-stat-bar-wrap">
            <div class="screen-stat-bar" style="width:${Math.round((s.count/max)*100)}%"></div>
          </div>
          <span class="screen-stat-count">${s.count}</span>
        </div>`).join('');
    } else if (screenStats) {
      screenStats.innerHTML = '<p style="color:var(--muted);font-size:.85rem">Даних ще немає</p>';
    }
  } catch (e) {
    if (statToday) statToday.textContent = '—';
    if (statTotal) statTotal.textContent = '—';
    if (screenStats) screenStats.innerHTML = '<p style="color:var(--muted);font-size:.85rem">API недоступне</p>';
  }
}

document.querySelector('#refreshStats')?.addEventListener('click', loadStats);

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
  const tgBtn = document.querySelector('#cardTgBtn');
  if (tgBtn) {
    const tg = appConfig.links.telegram;
    tgBtn.href = tg || '#';
    tgBtn.classList.toggle('is-disabled', !tg);
    if (tg) { tgBtn.removeAttribute('aria-disabled'); }
  }
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
  const hint = document.querySelector('#cryptoHint');
  if (!hint) return;
  const orig = hint.textContent;
  hint.textContent = '🔜 Скоро буде доступно';
  setTimeout(() => { hint.textContent = orig; }, 2500);
});

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
function loadConfig() {
  const saved = JSON.parse(localStorage.getItem('pi_links') || '{}');
  if (saved.telegram) document.querySelector('#cfgTelegram').value = saved.telegram;
  if (saved.payment)  document.querySelector('#cfgPayment').value  = saved.payment;
  if (saved.bybit)    document.querySelector('#cfgBybit').value    = saved.bybit;
  const cfgCard = document.querySelector('#cfgCard');
  if (cfgCard) cfgCard.value = localStorage.getItem('pi_card') || '';
}

function applyConfig(links) {
  if (links.telegram) appConfig.links.telegram = links.telegram;
  if (links.payment)  appConfig.links.payment  = links.payment;
  if (links.bybit)    appConfig.links.bybit    = links.bybit;
  bindConfiguredLinks();
  renderFaqTab();
  renderAccessTab();
}

document.querySelector('#saveConfig')?.addEventListener('click', () => {
  const links = {
    telegram: document.querySelector('#cfgTelegram').value.trim(),
    payment:  document.querySelector('#cfgPayment').value.trim(),
    bybit:    document.querySelector('#cfgBybit').value.trim(),
  };
  localStorage.setItem('pi_links', JSON.stringify(links));
  const card = document.querySelector('#cfgCard')?.value.trim() || '';
  if (card) localStorage.setItem('pi_card', card);
  else localStorage.removeItem('pi_card');
  applyConfig(links);
  const msg = document.querySelector('#configMsg');
  if (msg) { msg.textContent = '✓ Збережено'; setTimeout(() => { msg.textContent = ''; }, 2000); }
});

/* ─── Screenshots storage (3 types, combined display) ─── */
function getShotsByType(type) {
  try { return JSON.parse(localStorage.getItem(SHOT_KEYS[type]) || '[]'); }
  catch { return []; }
}
function saveShotsByType(type, list) {
  localStorage.setItem(SHOT_KEYS[type], JSON.stringify(list));
}
// Returns ALL photos merged (for carousel display on results screen)
function getScreenshots() {
  return [
    ...getShotsByType('results'),
    ...getShotsByType('reviews'),
    ...getShotsByType('process'),
    // also pick up any old single-key photos
    ...((() => { try { return JSON.parse(localStorage.getItem('pi_screenshots') || '[]'); } catch { return []; } })()),
  ];
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
  const list = getShotsByType(adminActiveType);
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
    btn.addEventListener('click', () => {
      const id      = Number(btn.dataset.id);
      const updated = getShotsByType(adminActiveType).filter(s => s.id !== id);
      saveShotsByType(adminActiveType, updated);
      renderAdminScreenshots();
      if (currentScreenId === 'results') renderScreen('results');
    });
  });
}

/* ─── Admin: tab switching ─── */
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
  if (msgEl) msgEl.textContent = '⏳ Обробляємо…';
  try {
    const src     = await resizeImageToDataURL(file);
    const label   = document.querySelector('#screenshotLabel')?.value.trim();
    const list    = getShotsByType(adminActiveType);
    const idx     = list.length + 1;
    list.push({ id: Date.now(), src, label: label || `Скрін ${idx}` });
    saveShotsByType(adminActiveType, list);
    const labelEl = document.querySelector('#screenshotLabel');
    if (labelEl) labelEl.value = '';
    e.target.value = '';
    renderAdminScreenshots();
    if (currentScreenId === 'results') renderScreen('results');
    if (msgEl) { msgEl.textContent = '✓ Додано'; setTimeout(() => { msgEl.textContent = ''; }, 2000); }
  } catch {
    if (msgEl) { msgEl.textContent = '❌ Помилка. Спробуй ще'; setTimeout(() => { msgEl.textContent = ''; }, 2500); }
  }
});

/* ─── Lightbox ─── */
const lightboxEl = document.querySelector('#lightbox');

function openLightbox(src, caption) {
  const img = document.querySelector('#lightboxImg');
  const cap = document.querySelector('#lightboxCaption');
  if (img) img.src = src;
  if (cap) cap.textContent = caption || '';
  lightboxEl?.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxEl?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  const img = document.querySelector('#lightboxImg');
  if (img) setTimeout(() => { img.src = ''; }, 250);
}

document.querySelector('#lightboxBd')?.addEventListener('click', closeLightbox);
document.querySelector('#lightboxClose')?.addEventListener('click', closeLightbox);

document.addEventListener('click', e => {
  const banner = e.target.closest('[data-lightbox-src]');
  if (banner) openLightbox(banner.dataset.lightboxSrc, banner.dataset.lightboxCaption);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ─── Init ─── */
const savedLinks = JSON.parse(localStorage.getItem('pi_links') || '{}');
if (Object.keys(savedLinks).length) applyConfig(savedLinks);

bindConfiguredLinks();
renderQuickActions();
renderScreen(currentScreenId);
renderFaqTab();
renderAccessTab();
trackView('home');
checkAdminAccess();

