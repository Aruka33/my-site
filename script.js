
    ```javascript
/*
====================================================
 DAMU TALK
 Қазақша AAC Communication App
 20 бөлім / 140+ карточка
====================================================
*/

const data = [

  /* ================= 1. БАСТЫ ================= */

  {
    category: "Басты",
    icon: "🏠",
    cards: [
      ["мен", "Мен", "🧒", "subject"],
      ["сен", "Сен", "👦", "subject"],
      ["анам", "Анам", "👩", "person"],
      ["әкем", "Әкем", "👨", "person"],
      ["қалаймын", "Қалаймын", "❤️", "verb"],
      ["қаламаймын", "Қаламаймын", "❌", "verb"],
      ["су", "Су", "🥤", "object"],
      ["тамақ", "Тамақ", "🍽️", "object"],
      ["көмек", "Көмек", "🆘", "action"],
      ["иә", "Иә", "✅", "answer"],
      ["жоқ", "Жоқ", "❌", "answer"],
      ["тағы", "Тағы", "➕", "word"],
      ["болды", "Болды", "👍", "word"],
      ["тоқта", "Тоқта", "🛑", "action"],
      ["рақмет", "Рақмет", "🙏", "polite"]
    ]
  },

  /* ================= 2. ЖЕМІСТЕР ================= */

  {
    category: "Жемістер",
    icon: "🍎",
    cards: [
      ["алма", "Алма", "🍎", "object"],
      ["алмұрт", "Алмұрт", "🍐", "object"],
      ["банан", "Банан", "🍌", "object"],
      ["апельсин", "Апельсин", "🍊", "object"],
      ["мандарин", "Мандарин", "🍊", "object"],
      ["лимон", "Лимон", "🍋", "object"],
      ["жүзім", "Жүзім", "🍇", "object"],
      ["құлпынай", "Құлпынай", "🍓", "object"],
      ["шие", "Шие", "🍒", "object"],
      ["қарбыз", "Қарбыз", "🍉", "object"],
      ["қауын", "Қауын", "🍈", "object"],
      ["ананас", "Ананас", "🍍", "object"],
      ["шабдалы", "Шабдалы", "🍑", "object"],
      ["өрік", "Өрік", "🍑", "object"],
      ["киви", "Киви", "🥝", "object"]
    ]
  },

  /* ================= 3. КӨКӨНІСТЕР ================= */

  {
    category: "Көкөністер",
    icon: "🥕",
    cards: [
      ["сәбіз", "Сәбіз", "🥕", "object"],
      ["қияр", "Қияр", "🥒", "object"],
      ["қызанақ", "Қызанақ", "🍅", "object"],
      ["картоп", "Картоп", "🥔", "object"],
      ["пияз", "Пияз", "🧅", "object"],
      ["сарымсақ", "Сарымсақ", "🧄", "object"],
      ["бұрыш", "Бұрыш", "🌶️", "object"],
      ["жүгері", "Жүгері", "🌽", "object"],
      ["брокколи", "Брокколи", "🥦", "object"],
      ["орамжапырақ", "Орамжапырақ", "🥬", "object"],
      ["асқабақ", "Асқабақ", "🎃", "object"],
      ["қызылша", "Қызылша", "🫜", "object"],
      ["бұршақ", "Бұршақ", "🫘", "object"],
      ["саңырауқұлақ", "Саңырауқұлақ", "🍄", "object"]
    ]
  },

  /* ================= 4. ТАМАҚ ================= */

  {
    category: "Тамақ",
    icon: "🍽️",
    cards: [
      ["нан", "Нан", "🍞", "object"],
      ["тоқаш", "Тоқаш", "🥐", "object"],
      ["печенье", "Печенье", "🍪", "object"],
      ["торт", "Торт", "🎂", "object"],
      ["пицца", "Пицца", "🍕", "object"],
      ["сорпа", "Сорпа", "🍲", "object"],
      ["ботқа", "Ботқа", "🥣", "object"],
      ["кеспе", "Кеспе", "🍜", "object"],
      ["күріш", "Күріш", "🍚", "object"],
      ["ет", "Ет", "🥩", "object"],
      ["тауық", "Тауық еті", "🍗", "object"],
      ["жұмыртқа", "Жұмыртқа", "🥚", "object"],
      ["ірімшік", "Ірімшік", "🧀", "object"],
      ["балмұздақ", "Балмұздақ", "🍦", "object"],
      ["шоколад", "Шоколад", "🍫", "object"]
    ]
  },

  /* ================= 5. СУСЫНДАР ================= */

  {
    category: "Сусындар",
    icon: "🥤",
    cards: [
      ["су", "Су", "💧", "object"],
      ["сүт", "Сүт", "🥛", "object"],
      ["шай", "Шай", "🍵", "object"],
      ["шырын", "Шырын", "🧃", "object"],
      ["компот", "Компот", "🥤", "object"],
      ["айран", "Айран", "🥛", "object"],
      ["какао", "Какао", "☕", "object"],
      ["лимонад", "Лимонад", "🥤", "object"]
    ]
  },

  /* ================= 6. ЖАНУАРЛАР ================= */

  {
    category: "Жануарлар",
    icon: "🐶",
    cards: [
      ["ит", "Ит", "🐶", "animal"],
      ["мысық", "Мысық", "🐱", "animal"],
      ["сиыр", "Сиыр", "🐄", "animal"],
      ["жылқы", "Жылқы", "🐎", "animal"],
      ["қой", "Қой", "🐑", "animal"],
      ["ешкі", "Ешкі", "🐐", "animal"],
      ["түйе", "Түйе", "🐪", "animal"],
      ["шошқа", "Шошқа", "🐷", "animal"],
      ["қоян", "Қоян", "🐰", "animal"],
      ["аю", "Аю", "🐻", "animal"],
      ["арыстан", "Арыстан", "🦁", "animal"],
      ["жолбарыс", "Жолбарыс", "🐯", "animal"],
      ["піл", "Піл", "🐘", "animal"],
      ["маймыл", "Маймыл", "🐒", "animal"],
      ["керік", "Керік", "🦒", "animal"]
    ]
  },

  /* ================= 7. ҚҰСТАР ================= */

  {
    category: "Құстар",
    icon: "🐦",
    cards: [
      ["торғай", "Торғай", "🐦", "animal"],
      ["көгершін", "Көгершін", "🕊️", "animal"],
      ["бүркіт", "Бүркіт", "🦅", "animal"],
      ["үкі", "Үкі", "🦉", "animal"],
      ["тауық", "Тауық", "🐔", "animal"],
      ["әтеш", "Әтеш", "🐓", "animal"],
      ["үйрек", "Үйрек", "🦆", "animal"],
      ["аққу", "Аққу", "🦢", "animal"],
      ["қаз", "Қаз", "🪿", "animal"]
    ]
  },

  /* ================= 8. КИІМ ================= */

  {
    category: "Киім",
    icon: "👕",
    cards: [
      ["көйлек", "Көйлек", "👕", "object"],
      ["шалбар", "Шалбар", "👖", "object"],
      ["аяқкиім", "Аяқкиім", "👟", "object"],
      ["шұлық", "Шұлық", "🧦", "object"],
      ["бас киім", "Бас киім", "🧢", "object"],
      ["күрте", "Күрте", "🧥", "object"],
      ["қолғап", "Қолғап", "🧤", "object"],
      ["шарф", "Шарф", "🧣", "object"],
      ["пижама", "Пижама", "🥋", "object"],
      ["көйлек", "Әдемі көйлек", "👗", "object"]
    ]
  },

  /* ================= 9. ҮЙ ЗАТТАРЫ ================= */

  {
    category: "Үй заттары",
    icon: "🏠",
    cards: [
      ["үстел", "Үстел", "🪑", "object"],
      ["орындық", "Орындық", "🪑", "object"],
      ["төсек", "Төсек", "🛏️", "object"],
      ["жастық", "Жастық", "🛏️", "object"],
      ["көрпе", "Көрпе", "🛌", "object"],
      ["теледидар", "Теледидар", "📺", "object"],
      ["тоңазытқыш", "Тоңазытқыш", "🧊", "object"],
      ["телефон", "Телефон", "📱", "object"],
      ["кітап", "Кітап", "📖", "object"],
      ["доп", "Доп", "⚽", "object"],
      ["ойыншық", "Ойыншық", "🧸", "object"],
      ["қасық", "Қасық", "🥄", "object"],
      ["кесе", "Кесе", "☕", "object"]
    ]
  },

  /* ================= 10. КӨЛІК ================= */

  {
    category: "Көлік",
    icon: "🚗",
    cards: [
      ["көлік", "Көлік", "🚗", "object"],
      ["автобус", "Автобус", "🚌", "object"],
      ["такси", "Такси", "🚕", "object"],
      ["пойыз", "Пойыз", "🚆", "object"],
      ["ұшақ", "Ұшақ", "✈️", "object"],
      ["кеме", "Кеме", "🚢", "object"],
      ["велосипед", "Велосипед", "🚲", "object"],
      ["самокат", "Самокат", "🛴", "object"],
      ["мотоцикл", "Мотоцикл", "🏍️", "object"],
      ["жедел жәрдем", "Жедел жәрдем", "🚑", "object"]
    ]
  },

  /* ================= 11. ӘРЕКЕТТЕР ================= */

  {
    category: "Әрекеттер",
    icon: "🏃",
    cards: [
      ["ішу", "Ішу", "🥤", "verb_base"],
      ["жеу", "Жеу", "🍽️", "verb_base"],
      ["ойнау", "Ойнау", "🎮", "verb_base"],
      ["ұйықтау", "Ұйықтау", "😴", "verb_base"],
      ["отыру", "Отыру", "🪑", "verb_base"],
      ["тұру", "Тұру", "🧍", "verb_base"],
      ["жүру", "Жүру", "🚶", "verb_base"],
      ["жүгіру", "Жүгіру", "🏃", "verb_base"],
      ["секіру", "Секіру", "🤸", "verb_base"],
      ["оқу", "Оқу", "📖", "verb_base"],
      ["сурет салу", "Сурет салу", "🎨", "verb_base"],
      ["көру", "Көру", "👀", "verb_base"],
      ["тыңдау", "Тыңдау", "👂", "verb_base"],
      ["сөйлеу", "Сөйлеу", "🗣️", "verb_base"],
      ["күлу", "Күлу", "😂", "verb_base"]
    ]
  },

  /* ================= 12. СЕЗІМДЕР ================= */

  {
    category: "Сезімдер",
    icon: "😊",
    cards: [
      ["қуаныштымын", "Қуаныштымын", "😊", "feeling"],
      ["бақыттымын", "Бақыттымын", "🥰", "feeling"],
      ["қайғылымын", "Қайғылымын", "😢", "feeling"],
      ["қорқып тұрмын", "Қорқып тұрмын", "😨", "feeling"],
      ["ашулымын", "Ашулымын", "😠", "feeling"],
      ["шаршадым", "Шаршадым", "😴", "feeling"],
      ["қызық", "Қызық", "🤩", "feeling"],
      ["жалықтым", "Жалықтым", "🥱", "feeling"],
      ["ауырды", "Ауырды", "😣", "feeling"],
      ["жақсы", "Жақсы", "👍", "feeling"],
      ["жаман", "Жаман", "👎", "feeling"]
    ]
  },

  /* ================= 13. ОТБАСЫ ================= */

  {
    category: "Отбасы",
    icon: "👨‍👩‍👧",
    cards: [
      ["ана", "Ана", "👩", "person"],
      ["әке", "Әке", "👨", "person"],
      ["әже", "Әже", "👵", "person"],
      ["ата", "Ата", "👴", "person"],
      ["аға", "Аға", "👦", "person"],
      ["әпке", "Әпке", "👧", "person"],
      ["іні", "Іні", "👦", "person"],
      ["қарындас", "Қарындас", "👧", "person"],
      ["бала", "Бала", "🧒", "person"],
      ["дос", "Дос", "🧑‍🤝‍🧑", "person"]
    ]
  },

  /* ================= 14. МЕКТЕП ================= */

  {
    category: "Мектеп",
    icon: "🏫",
    cards: [
      ["мектеп", "Мектеп", "🏫", "place"],
      ["мұғалім", "Мұғалім", "👩‍🏫", "person"],
      ["оқушы", "Оқушы", "🧑‍🎓", "person"],
      ["дәптер", "Дәптер", "📓", "object"],
      ["қарындаш", "Қарындаш", "✏️", "object"],
      ["қалам", "Қалам", "🖊️", "object"],
      ["өшіргіш", "Өшіргіш", "🧽", "object"],
      ["сөмке", "Сөмке", "🎒", "object"],
      ["тақта", "Тақта", "🧑‍🏫", "object"],
      ["сабақ", "Сабақ", "📚", "object"]
    ]
  },

  /* ================= 15. ОЙЫН ================= */

  {
    category: "Ойын",
    icon: "🎮",
    cards: [
      ["доп", "Доп", "⚽", "object"],
      ["қуыршақ", "Қуыршақ", "🪆", "object"],
      ["машина", "Машина", "🚗", "object"],
      ["конструктор", "Конструктор", "🧱", "object"],
      ["пазл", "Пазл", "🧩", "object"],
      ["телефон ойыны", "Телефон ойыны", "📱", "object"],
      ["мультфильм", "Мультфильм", "📺", "object"],
      ["музыка", "Музыка", "🎵", "object"],
      ["би", "Би", "💃", "action"],
      ["ойын", "Ойын", "🎮", "object"]
    ]
  },

  /* ================= 16. ТАБИҒАТ ================= */

  {
    category: "Табиғат",
    icon: "🌳",
    cards: [
      ["күн", "Күн", "☀️", "nature"],
      ["ай", "Ай", "🌙", "nature"],
      ["жұлдыз", "Жұлдыз", "⭐", "nature"],
      ["бұлт", "Бұлт", "☁️", "nature"],
      ["жаңбыр", "Жаңбыр", "🌧️", "nature"],
      ["қар", "Қар", "❄️", "nature"],
      ["жел", "Жел", "💨", "nature"],
      ["ағаш", "Ағаш", "🌳", "nature"],
      ["гүл", "Гүл", "🌸", "nature"],
      ["шөп", "Шөп", "🌿", "nature"],
      ["тау", "Тау", "⛰️", "nature"],
      ["теңіз", "Теңіз", "🌊", "nature"],
      ["өзен", "Өзен", "🏞️", "nature"]
    ]
  },

  /* ================= 17. ОРЫНДАР ================= */

  {
    category: "Орындар",
    icon: "📍",
    cards: [
      ["үй", "Үй", "🏠", "place"],
      ["мектеп", "Мектеп", "🏫", "place"],
      ["дүкен", "Дүкен", "🏪", "place"],
      ["саябақ", "Саябақ", "🌳", "place"],
      ["аурухана", "Аурухана", "🏥", "place"],
      ["дәріхана", "Дәріхана", "💊", "place"],
      ["ойын алаңы", "Ойын алаңы", "🛝", "place"],
      ["асхана", "Асхана", "🍽️", "place"],
      ["дәретхана", "Дәретхана", "🚻", "place"],
      ["жағажай", "Жағажай", "🏖️", "place"]
    ]
  },

  /* ================= 18. УАҚЫТ ================= */

  {
    category: "Уақыт",
    icon: "⏰",
    cards: [
      ["қазір", "Қазір", "⏰", "time"],
      ["бүгін", "Бүгін", "📅", "time"],
      ["ертең", "Ертең", "➡️", "time"],
      ["кеше", "Кеше", "⬅️", "time"],
      ["таңертең", "Таңертең", "🌅", "time"],
      ["түсте", "Түсте", "☀️", "time"],
      ["кешке", "Кешке", "🌆", "time"],
      ["түнде", "Түнде", "🌙", "time"],
      ["кейін", "Кейін", "⏩", "time"],
      ["қазір емес", "Қазір емес", "⏸️", "time"]
    ]
  },

  /* ================= 19. ӘДЕПТІ СӨЗДЕР ================= */

  {
    category: "Әдепті сөздер",
    icon: "🙏",
    cards: [
      ["рақмет", "Рақмет", "🙏", "polite"],
      ["өтінемін", "Өтінемін", "😊", "polite"],
      ["кешіріңіз", "Кешіріңіз", "🙏", "polite"],
      ["сәлем", "Сәлем", "👋", "polite"],
      ["сау бол", "Сау бол", "👋", "polite"],
      ["қайырлы таң", "Қайырлы таң", "🌅", "polite"],
      ["қайырлы түн", "Қайырлы түн", "🌙", "polite"],
      ["иә", "Иә", "✅", "answer"],
      ["жоқ", "Жоқ", "❌", "answer"]
    ]
  },

  /* ================= 20. СҰРАҚТАР ================= */

  {
    category: "Сұрақтар",
    icon: "❓",
    cards: [
      ["не", "Не?", "❓", "question"],
      ["кім", "Кім?", "❓", "question"],
      ["қайда", "Қайда?", "📍", "question"],
      ["қашан", "Қашан?", "⏰", "question"],
      ["неге", "Неге?", "❓", "question"],
      ["қалай", "Қалай?", "🤔", "question"],
      ["бола ма", "Бола ма?", "❓", "question"],
      ["қайсы", "Қайсы?", "☝️", "question"]
    ]
  }

];


/* ==================================================
   БАҒДАРЛАМА
================================================== */

let selectedCards = [];
let currentCategoryIndex = 0;


/* DOM */

const categoriesContainer =
  document.getElementById("categories-container");

const cardsContainer =
  document.getElementById("cards-container");

const categoryTitle =
  document.getElementById("category-title");

const sentenceBox =
  document.getElementById("sentence-box");

const wordCount =
  document.getElementById("word-count");

const speakBtn =
  document.getElementById("speak-btn");

const clearBtn =
  document.getElementById("clear-btn");

const undoBtn =
  document.getElementById("undo-btn");

const searchInput =
  document.getElementById("search-input");


/* ==================================================
   DATA → OBJECT
================================================== */

function normalizeCard(card) {

  return {
    id: card[0],
    title: card[1],
    icon: card[2],
    type: card[3]
  };

}


/* ==================================================
   КАТЕГОРИЯЛАР
================================================== */

function renderCategories() {

  categoriesContainer.innerHTML = "";

  data.forEach((category, index) => {

    const button =
      document.createElement("button");

    button.className =
      "cat-btn " +
      (index === currentCategoryIndex
        ? "active"
        : "");

    button.textContent =
      `${category.icon} ${category.category}`;

    button.addEventListener("click", () => {

      currentCategoryIndex = index;

      searchInput.value = "";

      renderCategories();
      renderCards();

    });

    categoriesContainer.appendChild(button);

  });

}


/* ==================================================
   КАРТОЧКАЛАР
================================================== */

function renderCards() {

  cardsContainer.innerHTML = "";

  const currentCategory =
    data[currentCategoryIndex];

  categoryTitle.textContent =
    `${currentCategory.icon} ${currentCategory.category}`;

  currentCategory.cards.forEach(rawCard => {

    const card =
      normalizeCard(rawCard);

    createCardElement(card);

  });

}


/* ==================================================
   КАРТОЧКА ЖАСАУ
================================================== */

function createCardElement(card) {

  const cardEl =
    document.createElement("div");

  cardEl.className = "card";

  cardEl.innerHTML = `
    <div class="card-icon">${card.icon}</div>
    <div class="card-title">${card.title}</div>
  `;

  cardEl.addEventListener("click", () => {

    addCardToSentence(card);

  });

  cardsContainer.appendChild(cardEl);

}


/* ==================================================
   СӨЙЛЕМГЕ ҚОСУ
================================================== */

function addCardToSentence(card) {

  selectedCards.push(card);

  updateSentenceUI();

}


/* ==================================================
   СӨЙЛЕМ UI
================================================== */

function updateSentenceUI() {

  sentenceBox.innerHTML = "";

  wordCount.textContent =
    `${selectedCards.length} сөз`;

  if (selectedCards.length === 0) {

    sentenceBox.innerHTML = `
      <span class="placeholder">
        Карточкаларды таңдаңыз...
      </span>
    `;

    return;

  }


  selectedCards.forEach((card, index) => {

    const item =
      document.createElement("div");

    item.className = "sentence-item";

    item.innerHTML = `
      <span>${card.icon}</span>
      <span>${card.title}</span>
    `;

    /*
      Сөйлемдегі сөзді басса —
      сол сөзді өшіреді
    */

    item.title = "Өшіру үшін басыңыз";

    item.addEventListener("click", () => {

      selectedCards.splice(index, 1);

      updateSentenceUI();

    });

    sentenceBox.appendChild(item);

  });

}


/* ==================================================
   ҚАЗАҚША GRAMMAR ENGINE
================================================== */

function buildKazakhSentence(cards) {

  if (!cards.length) {
    return "";
  }

  const ids =
    cards.map(card => card.id);


  /* Мен + су + ішу */

  if (
    ids.includes("мен") &&
    ids.includes("су") &&
    ids.includes("ішу")
  ) {
    return "Мен су ішкім келеді.";
  }


  /* Мен + су */

  if (
    ids.includes("мен") &&
    ids.includes("су")
  ) {
    return "Мен су қалаймын.";
  }


  /* Мен + алма + жеу */

  if (
    ids.includes("мен") &&
    ids.includes("алма") &&
    ids.includes("жеу")
  ) {
    return "Мен алма жегім келеді.";
  }


  /* Мен + тамақ + жеу */

  if (
    ids.includes("мен") &&
    ids.includes("тамақ") &&
    ids.includes("жеу")
  ) {
    return "Мен тамақ жегім келеді.";
  }


  /* Мен + ұйықтау */

  if (
    ids.includes("мен") &&
    ids.includes("ұйықтау")
  ) {
    return "Мен ұйықтағым келеді.";
  }


  /* Мен + ойнау */

  if (
    ids.includes("мен") &&
    ids.includes("ойнау")
  ) {
    return "Мен ойнағым келеді.";
  }


  /* Мен + бару */

  if (
    ids.includes("мен") &&
    ids.includes("бару")
  ) {
    return "Мен барғым келеді.";
  }


  /* Мен + көмек */

  if (
    ids.includes("мен") &&
    ids.includes("көмек")
  ) {
    return "Маған көмек керек.";
  }


  /* Мен + ана */

  if (
    ids.includes("мен") &&
    ids.includes("ана")
  ) {
    return "Мен анамды қалаймын.";
  }


  /* Мен + әке */

  if (
    ids.includes("мен") &&
    ids.includes("әке")
  ) {
    return "Мен әкемді қалаймын.";
  }


  /* Қалаймын + объект */

  if (ids.includes("қалаймын")) {

    const object =
      cards.find(card =>
        card.type === "object"
      );

    if (object) {

      return `Мен ${object.title.toLowerCase()} қалаймын.`;

    }

  }


  /* Қаламаймын */

  if (ids.includes("қаламаймын")) {

    const object =
      cards.find(card =>
        card.type === "object"
      );

    if (object) {

      return `Мен ${object.title.toLowerCase()} қаламаймын.`;

    }

  }


  /*
    Жалпы жағдайда:
    карточкалар ретін сақтаймыз
  */

  let text =
    cards
      .map(card => card.title)
      .join(" ");

  return text + ".";

}


/* ==================================================
   ДАУЫСТАП АЙТУ
================================================== */

speakBtn.addEventListener("click", () => {

  if (selectedCards.length === 0) {
    return;
  }

  const text =
    buildKazakhSentence(selectedCards);


  /*
    Бұрынғы дыбысты тоқтату
  */

  window.speechSynthesis.cancel();


  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "kk-KZ";

  /*
    AAC үшін сәл баяу
  */

  utterance.rate = 0.85;

  utterance.pitch = 1;

  utterance.volume = 1;


  window.speechSynthesis.speak(utterance);

});


/* ==================================================
   UNDO
================================================== */

undoBtn.addEventListener("click", () => {

  if (selectedCards.length === 0) {
    return;
  }

  selectedCards.pop();

  updateSentenceUI();

});


/* ==================================================
   CLEAR
================================================== */

clearBtn.addEventListener("click", () => {

  selectedCards = [];

  window.speechSynthesis.cancel();

  updateSentenceUI();

});


/* ==================================================
   SEARCH
================================================== */

searchInput.addEventListener("input", () => {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  cardsContainer.innerHTML = "";

  if (!query) {

    renderCards();

    return;

  }


  let found = 0;


  /*
    Барлық бөлімнен іздейміз
  */

  data.forEach(category => {

    category.cards.forEach(rawCard => {

      const card =
        normalizeCard(rawCard);

      if (
        card.title
          .toLowerCase()
          .includes(query)
      ) {

        createCardElement(card);

        found++;

      }

    });

  });


  categoryTitle.textContent =
    `🔎 "${searchInput.value}" нәтижелері`;


  if (found === 0) {

    cardsContainer.innerHTML = `
      <div class="no-results">
        😕 Карточка табылмады
      </div>
    `;

  }

});


/* ==================================================
   KEYBOARD
================================================== */

document.addEventListener("keydown", event => {

  /*
    Space → айту
  */

  if (
    event.code === "Space" &&
    document.activeElement !== searchInput
  ) {

    event.preventDefault();

    speakBtn.click();

  }


  /*
    Escape → тазалау
  */

  if (event.key === "Escape") {

    clearBtn.click();

  }

});


/* ==================================================
   INIT
================================================== */

renderCategories();

renderCards();

updateSentenceUI();
```
