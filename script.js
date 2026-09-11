// ==========================================
// DAMU TALK — AAC COMMUNICATION APP
// Қазақша карточкалар арқылы сөйлем құрастыру
// ==========================================


// ==========================================
// 1. КАРТОЧКАЛАР МЕН КАТЕГОРИЯЛАР
// ==========================================

const data = [

  // ------------------------------
  // БАСТЫ
  // ------------------------------
  {
    category: "Басты",
    icon: "🏠",

    cards: [
      ["men", "Мен", "🧒", "subject"],
      ["sen", "Сен", "👤", "subject"],
      ["anam", "Анам", "👩", "person"],
      ["akem", "Әкем", "👨", "person"],

      ["kalaymyn", "Қалаймын", "❤️", "verb"],
      ["kalamaimyn", "Қаламаймын", "❌", "verb"],

      ["su", "Су", "🥤", "object"],
      ["tamaq", "Тамақ", "🍽️", "object"],

      ["komek", "Көмек", "🆘", "action"],
      ["ia", "Иә", "✅", "answer"],
      ["joq", "Жоқ", "❌", "answer"],
      ["tagy", "Тағы", "➕", "word"],
      ["boldy", "Болды", "👌", "word"],
      ["toqtа", "Тоқта", "🛑", "action"],
      ["raqmet", "Рақмет", "🙏", "polite"]
    ]
  },


  // ------------------------------
  // ЖЕМІСТЕР
  // ------------------------------
  {
    category: "Жемістер",
    icon: "🍎",

    cards: [
      ["alma", "Алма", "🍎", "object"],
      ["banan", "Банан", "🍌", "object"],
      ["alurt", "Алмұрт", "🍐", "object"],
      ["zhuzim", "Жүзім", "🍇", "object"],
      ["apelsin", "Апельсин", "🍊", "object"],
      ["mandarin", "Мандарин", "🍊", "object"],
      ["qauyn", "Қауын", "🍈", "object"],
      ["qarbyz", "Қарбыз", "🍉", "object"],
      ["qulpnai", "Құлпынай", "🍓", "object"],
      ["shie", "Шие", "🍒", "object"]
    ]
  },


  // ------------------------------
  // ТАМАҚ
  // ------------------------------
  {
    category: "Тамақ",
    icon: "🍽️",

    cards: [
      ["nan", "Нан", "🍞", "object"],
      ["tamaq", "Тамақ", "🍽️", "object"],
      ["sorpa", "Сорпа", "🍲", "object"],
      ["botqa", "Ботқа", "🥣", "object"],
      ["et", "Ет", "🥩", "object"],
      ["qurt", "Құрт", "🧀", "object"],
      ["irімshik", "Ірімшік", "🧀", "object"],
      ["zhumyrtqa", "Жұмыртқа", "🥚", "object"],
      ["kartop", "Картоп", "🥔", "object"],
      ["makaron", "Макарон", "🍝", "object"],
      ["balmuzdaq", "Балмұздақ", "🍦", "object"],
      ["shokolad", "Шоколад", "🍫", "object"]
    ]
  },


  // ------------------------------
  // ІШУ
  // ------------------------------
  {
    category: "Ішу",
    icon: "🥤",

    cards: [
      ["su", "Су", "🥤", "object"],
      ["sut", "Сүт", "🥛", "object"],
      ["shai", "Шай", "🍵", "object"],
      ["shyrin", "Шырын", "🧃", "object"],
      ["kakao", "Какао", "☕", "object"],
      ["ishuu", "Ішу", "🥤", "verb"]
    ]
  },


  // ------------------------------
  // ӘРЕКЕТТЕР
  // ------------------------------
  {
    category: "Әрекеттер",
    icon: "🎮",

    cards: [
      ["ishuu", "Ішу", "🥤", "verb"],
      ["zheu", "Жеу", "🍽️", "verb"],
      ["oynau", "Ойнау", "🎮", "verb"],
      ["baru", "Бару", "🚗", "verb"],
      ["kelu", "Келу", "🚶", "verb"],
      ["otu", "Отыру", "🪑", "verb"],
      ["zatu", "Жату", "🛏️", "verb"],
      ["turу", "Тұру", "🧍", "verb"],
      ["zhugu", "Жүгіру", "🏃", "verb"],
      ["zhuru", "Жүру", "🚶", "verb"],
      ["alu", "Алу", "🤲", "verb"],
      ["beru", "Беру", "🤝", "verb"],
      ["ashu", "Ашу", "🔓", "verb"],
      ["zhabu", "Жабу", "🔒", "verb"],
      ["kutu", "Күту", "⏳", "verb"],
      ["uyqtau", "Ұйықтау", "😴", "verb"]
    ]
  },


  // ------------------------------
  // ОЙЫН
  // ------------------------------
  {
    category: "Ойын",
    icon: "🎮",

    cards: [
      ["oynau", "Ойнау", "🎮", "verb"],
      ["dop", "Доп", "⚽", "object"],
      ["mashina", "Машина", "🚗", "object"],
      ["lego", "Лего", "🧱", "object"],
      ["qurstyru", "Құрастыру", "🧩", "verb"],
      ["surеt", "Сурет", "🎨", "object"],
      ["muzika", "Музыка", "🎵", "object"],
      ["multfilm", "Мультфильм", "📺", "object"]
    ]
  },


  // ------------------------------
  // СЕЗІМ
  // ------------------------------
  {
    category: "Сезім",
    icon: "😊",

    cards: [
      ["zhaksy", "Жақсы", "😊", "feeling"],
      ["zhaman", "Жаман", "😞", "feeling"],
      ["qorqamyn", "Қорқамын", "😨", "feeling"],
      ["quanamyn", "Қуанамын", "😄", "feeling"],
      ["ashulymyn", "Ашулымын", "😠", "feeling"],
      ["zhylap_turmin", "Жылап тұрмын", "😭", "feeling"],
      ["sharshadym", "Шаршадым", "😴", "feeling"],
      ["auyrady", "Ауырады", "🤕", "feeling"],
      ["rahat", "Рахат", "😌", "feeling"]
    ]
  },


  // ------------------------------
  // ДЕНЕ
  // ------------------------------
  {
    category: "Дене",
    icon: "🧍",

    cards: [
      ["bas", "Бас", "🧠", "body"],
      ["koz", "Көз", "👁️", "body"],
      ["qulaq", "Құлақ", "👂", "body"],
      ["muryn", "Мұрын", "👃", "body"],
      ["auyz", "Ауыз", "👄", "body"],
      ["qol", "Қол", "✋", "body"],
      ["ayaq", "Аяқ", "🦶", "body"],
      ["ish", "Іш", "🫃", "body"],
      ["tіс", "Тіс", "🦷", "body"]
    ]
  },


  // ------------------------------
  // ОРЫНДАР
  // ------------------------------
  {
    category: "Орындар",
    icon: "📍",

    cards: [
      ["ui", "Үй", "🏠", "place"],
      ["mektep", "Мектеп", "🏫", "place"],
      ["balabaqsha", "Балабақша", "🏫", "place"],
      ["duken", "Дүкен", "🏪", "place"],
      ["auruhana", "Аурухана", "🏥", "place"],
      ["park", "Парк", "🌳", "place"],
      ["dala", "Дала", "🌳", "place"],
      ["daret", "Дәретхана", "🚻", "place"]
    ]
  },


  // ------------------------------
  // АДАМДАР
  // ------------------------------
  {
    category: "Адамдар",
    icon: "👨‍👩‍👧",

    cards: [
      ["anam", "Анам", "👩", "person"],
      ["akem", "Әкем", "👨", "person"],
      ["apa", "Апа", "👵", "person"],
      ["ata", "Ата", "👴", "person"],
      ["agа", "Аға", "👦", "person"],
      ["apa_sіңli", "Әпке", "👧", "person"],
      ["dos", "Дос", "🧑", "person"],
      ["mugalim", "Мұғалім", "👩‍🏫", "person"]
    ]
  },


  // ------------------------------
  // САПА / СИПАТ
  // ------------------------------
  {
    category: "Сипаттар",
    icon: "⭐",

    cards: [
      ["ulken", "Үлкен", "⬆️", "word"],
      ["kishkentai", "Кішкентай", "⬇️", "word"],
      ["zhaksy", "Жақсы", "😊", "word"],
      ["zhaman", "Жаман", "😞", "word"],
      ["qyzyl", "Қызыл", "🔴", "word"],
      ["kok", "Көк", "🔵", "word"],
      ["zhasyl", "Жасыл", "🟢", "word"],
      ["aq", "Ақ", "⚪", "word"],
      ["qara", "Қара", "⚫", "word"],
      ["tatti", "Тәтті", "🍬", "word"],
      ["asty", "Ащы", "🌶️", "word"],
      ["ystyq", "Ыстық", "🔥", "word"],
      ["suıq", "Суық", "❄️", "word"]
    ]
  },


  // ------------------------------
  // ҚАЖЕТТІЛІК
  // ------------------------------
  {
    category: "Қажет",
    icon: "🆘",

    cards: [
      ["komek", "Көмек", "🆘", "action"],
      ["su", "Су керек", "🥤", "need"],
      ["tamaq", "Тамақ керек", "🍽️", "need"],
      ["daret", "Дәретхана керек", "🚻", "need"],
      ["uyqym_keladi", "Ұйқым келеді", "😴", "need"],
      ["demalym_keladi", "Демалғым келеді", "🛋️", "need"],
      ["sharshadym", "Шаршадым", "😴", "feeling"],
      ["auyrady", "Ауырады", "🤕", "feeling"]
    ]
  },


  // ------------------------------
  // ӘДЕП
  // ------------------------------
  {
    category: "Әдеп",
    icon: "🙏",

    cards: [
      ["raqmet", "Рақмет", "🙏", "polite"],
      ["otinish", "Өтінемін", "🥺", "polite"],
      ["keshiresiz", "Кешіріңіз", "🙏", "polite"],
      ["salam", "Сәлем", "👋", "polite"],
      ["sau_bol", "Сау бол", "👋", "polite"],
      ["ia", "Иә", "✅", "answer"],
      ["joq", "Жоқ", "❌", "answer"]
    ]
  }

];


// ==========================================
// 2. НЕГІЗГІ АЙНЫМАЛЫЛАР
// ==========================================

let selectedCards = [];
let currentCategoryIndex = 0;


// ==========================================
// 3. HTML ЭЛЕМЕНТТЕРІ
// ==========================================

const categoriesContainer =
  document.getElementById("categories-container");

const cardsContainer =
  document.getElementById("cards-container");

const sentenceBox =
  document.getElementById("sentence-box");

const speakBtn =
  document.getElementById("speak-btn");

const clearBtn =
  document.getElementById("clear-btn");


// ==========================================
// 4. ДАУЫСТАП ОҚУ
// ==========================================

function speakText(text) {

  if (!text) return;

  // Алдыңғы дауысты тоқтату
  window.speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "kk-KZ";
  utterance.rate = 0.85;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}


// ==========================================
// 5. КАРТОЧКАНЫ ҚАЛЫПТАНДЫРУ
// ==========================================

function normalizeCard(card) {

  // Массив түріндегі карточка
  if (Array.isArray(card)) {

    return {
      id: card[0],
      title: card[1],
      icon: card[2],
      type: card[3]
    };
  }

  // Объект түріндегі карточка
  return card;
}


// ==========================================
// 6. КАТЕГОРИЯЛАРДЫ ШЫҒАРУ
// ==========================================

function renderCategories() {

  if (!categoriesContainer) return;

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

      renderCategories();
      renderCards();

    });

    categoriesContainer.appendChild(button);
  });
}


// ==========================================
// 7. КАРТОЧКАЛАРДЫ ШЫҒАРУ
// ==========================================

function renderCards() {

  if (!cardsContainer) return;

  cardsContainer.innerHTML = "";

  const category =
    data[currentCategoryIndex];

  if (!category || !category.cards) {

    cardsContainer.innerHTML =
      "<p>Карточкалар жоқ.</p>";

    return;
  }

  category.cards.forEach((rawCard) => {

    const card =
      normalizeCard(rawCard);

    const cardElement =
      document.createElement("div");

    cardElement.className = "card";

    cardElement.innerHTML = `
      <div class="card-icon">
        ${card.icon || "🔹"}
      </div>

      <div class="card-title">
        ${card.title || ""}
      </div>
    `;


    // ======================================
    // КАРТОЧКАНЫ БАСҚАН КЕЗДЕ
    // ======================================

    cardElement.addEventListener("click", () => {

      // Сөйлемге қосу
      selectedCards.push(card);

      // Экранды жаңарту
      updateSentenceUI();

      // КАРТОЧКАНЫ ДАУЫСТАП ОҚУ
      speakText(card.title);

    });


    cardsContainer.appendChild(cardElement);

  });
}


// ==========================================
// 8. СӨЙЛЕМГЕ КАРТОЧКА ҚОСУ
// ==========================================

function addCardToSentence(card) {

  selectedCards.push(card);

  updateSentenceUI();

}


// ==========================================
// 9. СӨЙЛЕМ UI
// ==========================================

function updateSentenceUI() {

  if (!sentenceBox) return;

  sentenceBox.innerHTML = "";

  if (selectedCards.length === 0) {

    sentenceBox.innerHTML =
      '<span class="placeholder">Карточкаларды таңдаңыз...</span>';

    return;
  }


  selectedCards.forEach((card) => {

    const item =
      document.createElement("div");

    item.className =
      "sentence-item";

    item.innerHTML = `
      <span>${card.icon || "🔹"}</span>
      <span>${card.title}</span>
    `;

    sentenceBox.appendChild(item);

  });

}


// ==========================================
// 10. ҚАЗАҚША СӨЙЛЕМ ҚҰРАСТЫРУ
// ==========================================

function buildKazakhSentence(cards) {

  const ids =
    cards.map(card => card.id);


  // Мен + Су + Ішу
  if (
    ids.includes("men") &&
    ids.includes("su") &&
    ids.includes("ishuu")
  ) {

    return "Мен су ішкім келеді";

  }


  // Мен + Алма + Жеу
  if (
    ids.includes("men") &&
    ids.includes("alma") &&
    ids.includes("zheu")
  ) {

    return "Мен алма жегім келеді";

  }


  // Мен + Тамақ
  if (
    ids.includes("men") &&
    ids.includes("tamaq")
  ) {

    return "Мен тамақ жегім келеді";

  }


  // Мен + Су
  if (
    ids.includes("men") &&
    ids.includes("su")
  ) {

    return "Мен су қалаймын";

  }


  // Мен + Ойнау
  if (
    ids.includes("men") &&
    ids.includes("oynau")
  ) {

    return "Мен ойнағым келеді";

  }


  // Мен + Бару
  if (
    ids.includes("men") &&
    ids.includes("baru")
  ) {

    return "Мен барғым келеді";

  }


  // Мен + Көмек
  if (
    ids.includes("men") &&
    ids.includes("komek")
  ) {

    return "Маған көмек керек";

  }


  // Қарапайым жағдайда
  return cards
    .map(card => card.title)
    .join(" ");

}


// ==========================================
// 11. "АЙТУ" БАТЫРМАСЫ
// ==========================================

if (speakBtn) {

  speakBtn.addEventListener("click", () => {

    if (selectedCards.length === 0) {
      return;
    }

    const sentence =
      buildKazakhSentence(selectedCards);

    speakText(sentence);

  });

}


// ==========================================
// 12. "ӨШІРУ" БАТЫРМАСЫ
// ==========================================

if (clearBtn) {

  clearBtn.addEventListener("click", () => {

    selectedCards = [];

    updateSentenceUI();

    window.speechSynthesis.cancel();

  });

}


// ==========================================
// 13. БАСТАПҚЫ ІСКЕ ҚОСУ
// ==========================================

renderCategories();

renderCards();

updateSentenceUI();
