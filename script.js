const data = [
  {
    category: "Басты",
    icon: "🏠",
    cards: [
      ["Мен", "Мен", "🧒", "subject"],
      ["Қалаймын", "Қалаймын", "❤️", "verb"],
      ["Су", "Су", "🥤", "object"],
      ["Тамақ", "Тамақ", "🍎", "object"],
      ["Көмек", "Көмек", "🆘", "action"],
      ["Иә", "Иә", "👍", "answer"],
      ["Жоқ", "Жоқ", "👎", "answer"]
    ]
  },

  {
    category: "Жемістер",
    icon: "🍎",
    cards: [
      ["Алма", "Алма", "🍎", "object"],
      ["Банан", "Банан", "🍌", "object"],
      ["Апельсин", "Апельсин", "🍊", "object"],
      ["Жүзім", "Жүзім", "🍇", "object"],
      ["Құлпынай", "Құлпынай", "🍓", "object"],
      ["Алмұрт", "Алмұрт", "🍐", "object"],
      ["Қарбыз", "Қарбыз", "🍉", "object"]
    ]
  },

  {
    category: "Тамақ",
    icon: "🍽️",
    cards: [
      ["Нан", "Нан", "🍞", "object"],
      ["Тамақ", "Тамақ", "🍲", "object"],
      ["Сорпа", "Сорпа", "🍜", "object"],
      ["Күріш", "Күріш", "🍚", "object"],
      ["Ет", "Ет", "🥩", "object"],
      ["Жұмыртқа", "Жұмыртқа", "🥚", "object"],
      ["Балмұздақ", "Балмұздақ", "🍦", "object"]
    ]
  },

  {
    category: "Ішу",
    icon: "🥤",
    cards: [
      ["Су", "Су", "🥤", "object"],
      ["Сүт", "Сүт", "🥛", "object"],
      ["Шай", "Шай", "🍵", "object"],
      ["Шырын", "Шырын", "🧃", "object"]
    ]
  },

  {
    category: "Әрекеттер",
    icon: "🎮",
    cards: [
      ["Ішу", "Ішу", "🥤", "verb_base"],
      ["Жеу", "Жеу", "🍽️", "verb_base"],
      ["Ойнау", "Ойнау", "🎮", "verb_base"],
      ["Бару", "Бару", "🚗", "verb_base"],
      ["Келу", "Келу", "🚶", "verb_base"],
      ["Ұйықтау", "Ұйықтау", "😴", "verb_base"],
      ["Отыру", "Отыру", "🪑", "verb_base"],
      ["Тұру", "Тұру", "🧍", "verb_base"]
    ]
  },

  {
    category: "Ойын",
    icon: "🎮",
    cards: [
      ["Ойын", "Ойын", "🎮", "object"],
      ["Доп", "Доп", "⚽", "object"],
      ["Мультфильм", "Мультфильм", "📺", "object"],
      ["Телефон", "Телефон", "📱", "object"],
      ["Музыка", "Музыка", "🎵", "object"]
    ]
  },

  {
    category: "Сезім",
    icon: "😊",
    cards: [
      ["Қуаныштымын", "Қуаныштымын", "😊", "feeling"],
      ["Бақыттымын", "Бақыттымын", "😄", "feeling"],
      ["Қайғылымын", "Қайғылымын", "😢", "feeling"],
      ["Ашулымын", "Ашулымын", "😠", "feeling"],
      ["Қорқып тұрмын", "Қорқып тұрмын", "😨", "feeling"],
      ["Шаршадым", "Шаршадым", "😴", "feeling"],
      ["Ауырып тұрмын", "Ауырып тұрмын", "🤒", "feeling"]
    ]
  },

  {
    category: "Дене",
    icon: "🧍",
    cards: [
      ["Бас", "Бас", "🙂", "body"],
      ["Көз", "Көз", "👁️", "body"],
      ["Құлақ", "Құлақ", "👂", "body"],
      ["Мұрын", "Мұрын", "👃", "body"],
      ["Ауыз", "Ауыз", "👄", "body"],
      ["Қол", "Қол", "✋", "body"],
      ["Аяқ", "Аяқ", "🦶", "body"]
    ]
  },

  {
    category: "Орындар",
    icon: "📍",
    cards: [
      ["Үй", "Үй", "🏠", "place"],
      ["Мектеп", "Мектеп", "🏫", "place"],
      ["Дүкен", "Дүкен", "🏪", "place"],
      ["Аурухана", "Аурухана", "🏥", "place"],
      ["Саябақ", "Саябақ", "🌳", "place"],
      ["Дәретхана", "Дәретхана", "🚻", "place"]
    ]
  },

  {
    category: "Адамдар",
    icon: "👨‍👩‍👧",
    cards: [
      ["Ана", "Ана", "👩", "person"],
      ["Әке", "Әке", "👨", "person"],
      ["Әже", "Әже", "👵", "person"],
      ["Ата", "Ата", "👴", "person"],
      ["Мұғалім", "Мұғалім", "👩‍🏫", "person"],
      ["Дос", "Дос", "🧑‍🤝‍🧑", "person"]
    ]
  },

  {
    category: "Қажет",
    icon: "❤️",
    cards: [
      ["Көмек керек", "Көмек керек", "🆘", "need"],
      ["Демалғым келеді", "Демалғым келеді", "😌", "need"],
      ["Ұйықтағым келеді", "Ұйықтағым келеді", "😴", "need"],
      ["Дәретхана керек", "Дәретхана керек", "🚻", "need"],
      ["Тағы керек", "Тағы керек", "➕", "need"],
      ["Болды", "Болды", "✅", "need"]
    ]
  },

  {
    category: "Әдеп",
    icon: "🙏",
    cards: [
      ["Рақмет", "Рақмет", "🙏", "polite"],
      ["Өтінемін", "Өтінемін", "😊", "polite"],
      ["Кешіріңіз", "Кешіріңіз", "🙇", "polite"],
      ["Сәлем", "Сәлем", "👋", "polite"],
      ["Сау бол", "Сау бол", "👋", "polite"]
    ]
  }
];

let selectedCards = [];
let currentCategoryIndex = 0;

const categoriesContainer = document.getElementById("categories-container");
const cardsContainer = document.getElementById("cards-container");
const sentenceBox = document.getElementById("sentence-box");
const speakBtn = document.getElementById("speak-btn");
const clearBtn = document.getElementById("clear-btn");


/* =====================================
   КАРТОЧКАНЫ ДҰРЫС ФОРМАТҚА КЕЛТІРУ
===================================== */

function normalizeCard(card) {
  if (Array.isArray(card)) {
    return {
      id: card[0]
        .toLowerCase()
        .replace(/[^a-zа-яё0-9]+/gi, "_"),
      title: card[1],
      icon: card[2],
      type: card[3]
    };
  }

  return card;
}


/* =====================================
   ҚАЗАҚША ДАУЫСПЕН АЙТУ
===================================== */

function speakKazakh(text) {
  if (!text) return;

  window.speechSynthesis.cancel();

  const voices = window.speechSynthesis.getVoices();

  // Қазақша дауыс іздеу
  let voice = voices.find(v =>
    v.lang && v.lang.toLowerCase().startsWith("kk")
  );

  // Қазақша дауыс болмаса, басқа қолжетімді дауыс
  if (!voice) {
    voice = voices.find(v =>
      v.lang && v.lang.toLowerCase().startsWith("ru")
    );
  }

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = voice ? voice.lang : "kk-KZ";
  utterance.voice = voice || null;

  utterance.rate = 0.8;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}


/* =====================================
   ДАУЫСТАРДЫ ЖҮКТЕУ
===================================== */

window.speechSynthesis.onvoiceschanged = function () {
  window.speechSynthesis.getVoices();
};


/* =====================================
   КАТЕГОРИЯЛАР
===================================== */

function renderCategories() {
  categoriesContainer.innerHTML = "";

  data.forEach((cat, index) => {
    const btn = document.createElement("button");

    btn.className =
      "cat-btn " +
      (index === currentCategoryIndex ? "active" : "");

    btn.innerText = `${cat.icon} ${cat.category}`;

    btn.onclick = () => {
      currentCategoryIndex = index;

      renderCategories();
      renderCards();
    };

    categoriesContainer.appendChild(btn);
  });
}


/* =====================================
   КАРТОЧКАЛАР
===================================== */

function renderCards() {
  cardsContainer.innerHTML = "";

  const currentCategory = data[currentCategoryIndex];

  currentCategory.cards.forEach(rawCard => {

    const card = normalizeCard(rawCard);

    const cardEl = document.createElement("div");

    cardEl.className = "card";

    cardEl.innerHTML = `
      <div class="card-icon">${card.icon}</div>
      <div class="card-title">${card.title}</div>
    `;

    cardEl.onclick = () => {

      addCardToSentence(card);

      // Карточканы басқанда бірден айту
      speakKazakh(card.title);
    };

    cardsContainer.appendChild(cardEl);
  });
}


/* =====================================
   СӨЙЛЕМГЕ ҚОСУ
===================================== */

function addCardToSentence(card) {
  selectedCards.push(card);

  updateSentenceUI();
}


/* =====================================
   СӨЙЛЕМДІ КӨРСЕТУ
===================================== */

function updateSentenceUI() {
  sentenceBox.innerHTML = "";

  if (selectedCards.length === 0) {
    sentenceBox.innerHTML =
      '<span class="placeholder">Карточкаларды таңдаңыз...</span>';

    return;
  }

  selectedCards.forEach(card => {

    const item = document.createElement("div");

    item.className = "sentence-item";

    item.innerHTML = `
      <span>${card.icon}</span>
      <span>${card.title}</span>
    `;

    sentenceBox.appendChild(item);
  });
}


/* =====================================
   ҚАЗАҚША СӨЙЛЕМ ҚҰРАУ
===================================== */

function buildKazakhSentence(cards) {

  const ids = cards.map(c => c.id);

  const has = id => ids.includes(id);

  if (has("мен") && has("су") && has("ішу")) {
    return "Мен су ішкім келеді";
  }

  if (has("мен") && has("алма") && has("жеу")) {
    return "Мен алма жегім келеді";
  }

  if (has("мен") && has("тамақ") && has("жеу")) {
    return "Мен тамақ жегім келеді";
  }

  if (has("мен") && has("су")) {
    return "Мен су қалаймын";
  }

  if (has("мен") && has("көмек")) {
    return "Маған көмек керек";
  }

  return cards.map(c => c.title).join(" ");
}


/* =====================================
   АЙТУ БАТЫРМАСЫ
===================================== */

if (speakBtn) {

  speakBtn.onclick = () => {

    if (selectedCards.length === 0) {
      return;
    }

    const textToSpeak =
      buildKazakhSentence(selectedCards);

    speakKazakh(textToSpeak);
  };
}


/* =====================================
   ТАЗАЛАУ БАТЫРМАСЫ
===================================== */

if (clearBtn) {

  clearBtn.onclick = () => {

    selectedCards = [];

    updateSentenceUI();
  };
}


/* =====================================
   БАСТАПҚЫ ЖҮКТЕУ
===================================== */

renderCategories();
renderCards();
updateSentenceUI();
