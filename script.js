const data = [
  {
    category: "Басты",
    icon: "🏠",
    cards: [
      { id: "men", title: "Мен", icon: "🧒", type: "subject" },
      { id: "sen", title: "Сен", icon: "👤", type: "subject" },
      { id: "ol", title: "Ол", icon: "🙂", type: "subject" },
      { id: "ana", title: "Ана", icon: "👩", type: "person" },
      { id: "ake", title: "Әке", icon: "👨", type: "person" },
      { id: "kalaymyn", title: "Қалаймын", icon: "❤️", type: "verb" },
      { id: "su", title: "Су", icon: "🥤", type: "object" },
      { id: "tamtak", title: "Тамақ", icon: "🍎", type: "object" },
      { id: "komek", title: "Көмек", icon: "🆘", type: "action" },
      { id: "ia", title: "Иә", icon: "✅", type: "answer" },
      { id: "zhok", title: "Жоқ", icon: "❌", type: "answer" }
    ]
  },

  {
    category: "Тамақ & Ішу",
    icon: "🍎",
    cards: [
      { id: "su", title: "Су", icon: "🥤", type: "object" },
      { id: "nan", title: "Нан", icon: "🍞", type: "object" },
      { id: "alma", title: "Алма", icon: "🍎", type: "object" },
      { id: "sut", title: "Сүт", icon: "🥛", type: "object" },
      { id: "shai", title: "Шай", icon: "🍵", type: "object" },
      { id: "sok", title: "Шырын", icon: "🧃", type: "object" },
      { id: "botka", title: "Ботқа", icon: "🥣", type: "object" },
      { id: "sorpa", title: "Сорпа", icon: "🍲", type: "object" },
      { id: "banan", title: "Банан", icon: "🍌", type: "object" },
      { id: "tatti", title: "Тәтті", icon: "🍰", type: "object" }
    ]
  },

  {
    category: "Әрекеттер",
    icon: "🎮",
    cards: [
      { id: "ishuu", title: "Ішу", icon: "🥤", type: "verb" },
      { id: "zheu", title: "Жеу", icon: "🍽️", type: "verb" },
      { id: "oynau", title: "Ойнау", icon: "🎮", type: "verb" },
      { id: "baru", title: "Бару", icon: "🚗", type: "verb" },
      { id: "kelu", title: "Келу", icon: "🚶", type: "verb" },
      { id: "zhatu", title: "Жату", icon: "🛏️", type: "verb" },
      { id: "otiru", title: "Отыру", icon: "🪑", type: "verb" },
      { id: "tur", title: "Тұру", icon: "🧍", type: "verb" },
      { id: "uyktu", title: "Ұйықтау", icon: "😴", type: "verb" },
      { id: "kutu", title: "Күту", icon: "⏳", type: "verb" }
    ]
  },

  {
    category: "Сезімдер",
    icon: "😊",
    cards: [
      { id: "bakyt", title: "Бақытты", icon: "😊", type: "feeling" },
      { id: "munai", title: "Мұңайдым", icon: "😢", type: "feeling" },
      { id: "ashu", title: "Ашулымын", icon: "😡", type: "feeling" },
      { id: "qorqamyn", title: "Қорқамын", icon: "😨", type: "feeling" },
      { id: "sharshadym", title: "Шаршадым", icon: "😴", type: "feeling" },
      { id: "auyrady", title: "Ауырып тұр", icon: "🤕", type: "feeling" },
      { id: "zhaksy", title: "Жақсымын", icon: "🙂", type: "feeling" },
      { id: "unady", title: "Ұнайды", icon: "❤️", type: "feeling" }
    ]
  },

  {
    category: "Ойын & Демалыс",
    icon: "🎨",
    cards: [
      { id: "dop", title: "Доп", icon: "⚽", type: "object" },
      { id: "mashina", title: "Машина", icon: "🚗", type: "object" },
      { id: "kitap", title: "Кітап", icon: "📚", type: "object" },
      { id: "multfilm", title: "Мультфильм", icon: "📺", type: "object" },
      { id: "muzika", title: "Музыка", icon: "🎵", type: "object" },
      { id: "sur", title: "Сурет салу", icon: "🎨", type: "action" },
      { id: "oiyn", title: "Ойын", icon: "🎮", type: "object" },
      { id: "seruen", title: "Серуендеу", icon: "🚶", type: "action" }
    ]
  },

  {
    category: "Адамдар",
    icon: "👨‍👩‍👧",
    cards: [
      { id: "ana", title: "Ана", icon: "👩", type: "person" },
      { id: "ake", title: "Әке", icon: "👨", type: "person" },
      { id: "apa", title: "Апа", icon: "👵", type: "person" },
      { id: "ata", title: "Ата", icon: "👴", type: "person" },
      { id: "aga", title: "Аға", icon: "👦", type: "person" },
      { id: "epke", title: "Әпке", icon: "👧", type: "person" },
      { id: "dos", title: "Досым", icon: "🧑‍🤝‍🧑", type: "person" },
      { id: "mugalim", title: "Мұғалім", icon: "👩‍🏫", type: "person" }
    ]
  },

  {
    category: "Жерлер",
    icon: "📍",
    cards: [
      { id: "ui", title: "Үй", icon: "🏠", type: "place" },
      { id: "mektep", title: "Мектеп", icon: "🏫", type: "place" },
      { id: "aul", title: "Аула", icon: "🌳", type: "place" },
      { id: "duken", title: "Дүкен", icon: "🏪", type: "place" },
      { id: "park", title: "Саябақ", icon: "🌲", type: "place" },
      { id: "auruhana", title: "Аурухана", icon: "🏥", type: "place" },
      { id: "daret", title: "Дәретхана", icon: "🚻", type: "place" }
    ]
  },

  {
    category: "Қажеттіліктер",
    icon: "🧸",
    cards: [
      { id: "toilet", title: "Дәретхана керек", icon: "🚻", type: "need" },
      { id: "uyku", title: "Ұйқым келіп тұр", icon: "😴", type: "need" },
      { id: "demal", title: "Демалғым келеді", icon: "🛋️", type: "need" },
      { id: "kiim", title: "Киім", icon: "👕", type: "object" },
      { id: "ayaqkiim", title: "Аяқ киім", icon: "👟", type: "object" },
      { id: "oiynshyk", title: "Ойыншық", icon: "🧸", type: "object" },
      { id: "telefon", title: "Телефон", icon: "📱", type: "object" }
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

function renderCategories() {
  categoriesContainer.innerHTML = "";

  data.forEach((category, index) => {
    const button = document.createElement("button");

    button.className =
      "cat-btn " + (index === currentCategoryIndex ? "active" : "");

    button.innerText =
      category.icon + " " + category.category;

    button.onclick = function () {
      currentCategoryIndex = index;
      renderCategories();
      renderCards();
    };

    categoriesContainer.appendChild(button);
  });
}

function renderCards() {
  cardsContainer.innerHTML = "";

  const category = data[currentCategoryIndex];

  category.cards.forEach((card) => {
    const cardElement = document.createElement("div");

    cardElement.className = "card";

    cardElement.innerHTML =
      '<div class="card-icon">' +
      card.icon +
      '</div>' +
      '<div class="card-title">' +
      card.title +
      '</div>';

    cardElement.onclick = function () {
      addCardToSentence(card);
    };

    cardsContainer.appendChild(cardElement);
  });
}

function addCardToSentence(card) {
  selectedCards.push(card);
  updateSentenceUI();
}

function updateSentenceUI() {
  sentenceBox.innerHTML = "";

  if (selectedCards.length === 0) {
    sentenceBox.innerHTML =
      '<span class="placeholder">Карточкаларды таңдаңыз...</span>';
    return;
  }

  selectedCards.forEach((card, index) => {
    const item = document.createElement("div");

    item.className = "sentence-item";

    item.innerHTML =
      "<span>" +
      card.icon +
      "</span> " +
      "<span>" +
      card.title +
      "</span>";

    item.onclick = function () {
      selectedCards.splice(index, 1);
      updateSentenceUI();
    };

    sentenceBox.appendChild(item);
  });
}

function buildKazakhSentence(cards) {
  const ids = cards.map(function (card) {
    return card.id;
  });

  if (
    ids.includes("men") &&
    ids.includes("su") &&
    ids.includes("ishuu")
  ) {
    return "Мен су ішкім келеді";
  }

  if (
    ids.includes("men") &&
    ids.includes("alma") &&
    ids.includes("zheu")
  ) {
    return "Мен алма жегім келеді";
  }

  if (
    ids.includes("men") &&
    ids.includes("nan") &&
    ids.includes("zheu")
  ) {
    return "Мен нан жегім келеді";
  }

  if (
    ids.includes("men") &&
    ids.includes("sut") &&
    ids.includes("ishuu")
  ) {
    return "Мен сүт ішкім келеді";
  }

  if (
    ids.includes("men") &&
    ids.includes("oynau")
  ) {
    return "Мен ойнағым келеді";
  }

  if (
    ids.includes("men") &&
    ids.includes("baru")
  ) {
    return "Мен барғым келеді";
  }

  if (
    ids.includes("men") &&
    ids.includes("uyktu")
  ) {
    return "Мен ұйықтағым келеді";
  }

  if (
    ids.includes("men") &&
    ids.includes("komek")
  ) {
    return "Маған көмек керек";
  }

  return cards
    .map(function (card) {
      return card.title;
    })
    .join(" ");
}

speakBtn.onclick = function () {
  if (selectedCards.length === 0) {
    return;
  }

  const text = buildKazakhSentence(selectedCards);

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "kk-KZ";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};

clearBtn.onclick = function () {
  selectedCards = [];
  updateSentenceUI();
};

renderCategories();
renderCards();
updateSentenceUI();
