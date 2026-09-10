
// ======================================================
// DAMU TALK — КАРТОЧКАЛАР ДЕРЕКТЕР БАЗАСЫ
// ======================================================

const data = [
  {
    category: "Басты",
    icon: "🏠",
    cards: [
      { id: "men", title: "Мен", icon: "🧒", type: "subject" },
      { id: "sen", title: "Сен", icon: "👤", type: "subject" },
      { id: "ol", title: "Ол", icon: "👤", type: "subject" },
      { id: "kalaymyn", title: "Қалаймын", icon: "❤️", type: "verb" },
      { id: "kalamyn", title: "Қаламын", icon: "👍", type: "verb" },
      { id: "su", title: "Су", icon: "🥤", type: "object" },
      { id: "tamtak", title: "Тамақ", icon: "🍎", type: "object" },
      { id: "komek", title: "Көмек", icon: "🆘", type: "action" },
      { id: "iya", title: "Иә", icon: "✅", type: "answer" },
      { id: "zhok", title: "Жоқ", icon: "❌", type: "answer" },
      { id: "tagy", title: "Тағы", icon: "➕", type: "request" },
      { id: "bolady", title: "Болды", icon: "✋", type: "request" }
    ]
  },

  // ======================================================
  // ТАМАҚ
  // ======================================================

  {
    category: "Тамақ & Ішу",
    icon: "🍎",
    cards: [
      { id: "su", title: "Су", icon: "🥤", type: "object" },
      { id: "nan", title: "Нан", icon: "🍞", type: "object" },
      { id: "alma", title: "Алма", icon: "🍎", type: "object" },
      { id: "sut", title: "Сүт", icon: "🥛", type: "object" },
      { id: "shai", title: "Шай", icon: "🍵", type: "object" },
      { id: "shyrin", title: "Шырын", icon: "🧃", type: "object" },
      { id: "sorpa", title: "Сорпа", icon: "🍲", type: "object" },
      { id: "botka", title: "Ботқа", icon: "🥣", type: "object" },
      { id: "et", title: "Ет", icon: "🥩", type: "object" },
      { id: "tauyk", title: "Тауық", icon: "🍗", type: "object" },
      { id: "makaron", title: "Макарон", icon: "🍝", type: "object" },
      { id: "kartop", title: "Картоп", icon: "🥔", type: "object" },
      { id: "banan", title: "Банан", icon: "🍌", type: "object" },
      { id: "apelsin", title: "Апельсин", icon: "🍊", type: "object" },
      { id: "yogurt", title: "Йогурт", icon: "🥛", type: "object" },
      { id: "pechenye", title: "Печенье", icon: "🍪", type: "object" },
      { id: "tort", title: "Торт", icon: "🍰", type: "object" },
      { id: "balmuzdak", title: "Балмұздақ", icon: "🍦", type: "object" }
    ]
  },

  // ======================================================
  // ӘРЕКЕТТЕР
  // ======================================================

  {
    category: "Әрекеттер",
    icon: "🎮",
    cards: [
      { id: "ishuu", title: "Ішу", icon: "🥤", type: "verb_base" },
      { id: "zheu", title: "Жеу", icon: "🍽️", type: "verb_base" },
      { id: "oynau", title: "Ойнау", icon: "🎮", type: "verb_base" },
      { id: "baru", title: "Бару", icon: "🚗", type: "verb_base" },
      { id: "kelu", title: "Келу", icon: "🚶", type: "verb_base" },
      { id: "uyiktau", title: "Ұйықтау", icon: "😴", type: "verb_base" },
      { id: "tur", title: "Тұру", icon: "🧍", type: "verb_base" },
      { id: "otyru", title: "Отыру", icon: "🪑", type: "verb_base" },
      { id: "zhuru", title: "Жүру", icon: "🚶", type: "verb_base" },
      { id: "zhat", title: "Жату", icon: "🛏️", type: "verb_base" },
      { id: "kory", title: "Көру", icon: "👀", type: "verb_base" },
      { id: "tyndau", title: "Тыңдау", icon: "👂", type: "verb_base" },
      { id: "oku", title: "Оқу", icon: "📖", type: "verb_base" },
      { id: "zhazu", title: "Жазу", icon: "✏️", type: "verb_base" },
      { id: "salu", title: "Салу", icon: "🎨", type: "verb_base" },
      { id: "alu", title: "Алу", icon: "🤲", type: "verb_base" },
      { id: "beru", title: "Беру", icon: "🎁", type: "verb_base" }
    ]
  },

  // ======================================================
  // СЕЗІМДЕР
  // ======================================================

  {
    category: "Сезімдер",
    icon: "😊",
    cards: [
      { id: "kuanyshtymyn", title: "Қуаныштымын", icon: "😊", type: "feeling" },
      { id: "munaydymyn", title: "Мұңайып тұрмын", icon: "😢", type: "feeling" },
      { id: "ashulymyn", title: "Ашулымын", icon: "😡", type: "feeling" },
      { id: "korkamyn", title: "Қорқамын", icon: "😨", type: "feeling" },
      { id: "sharshadym", title: "Шаршадым", icon: "😩", type: "feeling" },
      { id: "uykymkeldi", title: "Ұйқым келді", icon: "😴", type: "feeling" },
      { id: "zhaksy", title: "Жақсы", icon: "👍", type: "feeling" },
      { id: "zhaksyemes", title: "Жақсы емес", icon: "👎", type: "feeling" },
      { id: "auyrady", title: "Ауырады", icon: "🤕", type: "feeling" },
      { id: "zhallygym", title: "Жалғызбын", icon: "🥺", type: "feeling" },
      { id: "suyemin", title: "Жақсы көремін", icon: "❤️", type: "feeling" },
      { id: "bilmeimin", title: "Білмеймін", icon: "🤷", type: "feeling" }
    ]
  },

  // ======================================================
  // МЕКТЕП
  // ======================================================

  {
    category: "Мектеп",
    icon: "🏫",
    cards: [
      { id: "mektep", title: "Мектеп", icon: "🏫", type: "place" },
      { id: "muǵalim", title: "Мұғалім", icon: "👩‍🏫", type: "person" },
      { id: "synyp", title: "Сынып", icon: "🏫", type: "place" },
      { id: "sabak", title: "Сабақ", icon: "📚", type: "object" },
      { id: "kitap", title: "Кітап", icon: "📖", type: "object" },
      { id: "dapter", title: "Дәптер", icon: "📓", type: "object" },
      { id: "kalam", title: "Қалам", icon: "🖊️", type: "object" },
      { id: "karandash", title: "Қарындаш", icon: "✏️", type: "object" },
      { id: "taktа", title: "Тақта", icon: "🧑‍🏫", type: "object" },
      { id: "demalys", title: "Үзіліс", icon: "⏰", type: "object" },
      { id: "tapstyrma", title: "Тапсырма", icon: "📝", type: "object" },
      { id: "suraq", title: "Сұрақ", icon: "❓", type: "object" }
    ]
  },

  // ======================================================
  // ҮЙ
  // ======================================================

  {
    category: "Үй",
    icon: "🏠",
    cards: [
      { id: "ui", title: "Үй", icon: "🏠", type: "place" },
      { id: "bolme", title: "Бөлме", icon: "🚪", type: "place" },
      { id: "asuy", title: "Ас үй", icon: "🍳", type: "place" },
      { id: "zhatynbolme", title: "Жатын бөлме", icon: "🛏️", type: "place" },
      { id: "televisor", title: "Теледидар", icon: "📺", type: "object" },
      { id: "telefon", title: "Телефон", icon: "📱", type: "object" },
      { id: "kompyuter", title: "Компьютер", icon: "💻", type: "object" },
      { id: "stol", title: "Үстел", icon: "🪑", type: "object" },
      { id: "tosek", title: "Төсек", icon: "🛏️", type: "object" },
      { id: "esik", title: "Есік", icon: "🚪", type: "object" }
    ]
  },

  // ======================================================
  // АДАМДАР
  // ======================================================

  {
    category: "Адамдар",
    icon: "👨‍👩‍👧",
    cards: [
      { id: "ana", title: "Ана", icon: "👩", type: "person" },
      { id: "ake", title: "Әке", icon: "👨", type: "person" },
      { id: "apa", title: "Апа", icon: "👵", type: "person" },
      { id: "ata", title: "Ата", icon: "👴", type: "person" },
      { id: "aga", title: "Аға", icon: "👦", type: "person" },
      { id: "ini", title: "Іні", icon: "👦", type: "person" },
      { id: "apke", title: "Әпке", icon: "👧", type: "person" },
      { id: "dos", title: "Дос", icon: "🧑‍🤝‍🧑", type: "person" },
      { id: "bala", title: "Бала", icon: "🧒", type: "person" }
    ]
  },

  // ======================================================
  // ҚАЖЕТТІЛІКТЕР
  // ======================================================

  {
    category: "Қажеттіліктер",
    icon: "🆘",
    cards: [
      { id: "komek", title: "Көмек керек", icon: "🆘", type: "request" },
      { id: "daret", title: "Дәретхана", icon: "🚽", type: "place" },
      { id: "ash", title: "Қарным ашты", icon: "🍽️", type: "need" },
      { id: "shol", title: "Шөлдедім", icon: "🥤", type: "need" },
      { id: "uyky", title: "Ұйқым келді", icon: "😴", type: "need" },
      { id: "demal", title: "Демалғым келеді", icon: "🛋️", type: "need" },
      { id: "toqtat", title: "Тоқтат", icon: "✋", type: "request" },
      { id: "kute", title: "Күте тұр", icon: "⏳", type: "request" },
      { id: "zhardem", title: "Маған көмектес", icon: "🤝", type: "request" }
    ]
  },

  // ======================================================
  // КИІМ
  // ======================================================

  {
    category: "Киім",
    icon: "👕",
    cards: [
      { id: "koilek", title: "Көйлек", icon: "👕", type: "object" },
      { id: "shalbar", title: "Шалбар", icon: "👖", type: "object" },
      { id: "ayaqq", title: "Аяқ киім", icon: "👟", type: "object" },
      { id: "kurtke", title: "Күртке", icon: "🧥", type: "object" },
      { id: "bas_kiim", title: "Бас киім", icon: "🧢", type: "object" },
      { id: "socks", title: "Шұлық", icon: "🧦", type: "object" },
      { id: "pijama", title: "Пижама", icon: "🛌", type: "object" }
    ]
  },

  // ======================================================
  // ОЙЫН
  // ======================================================

  {
    category: "Ойын & Заттар",
    icon: "🧸",
    cards: [
      { id: "oyynshyk", title: "Ойыншық", icon: "🧸", type: "object" },
      { id: "dop", title: "Доп", icon: "⚽", type: "object" },
      { id: "mashina", title: "Машина", icon: "🚗", type: "object" },
      { id: "kubik", title: "Кубик", icon: "🧊", type: "object" },
      { id: "lego", title: "Лего", icon: "🧱", type: "object" },
      { id: "muzika", title: "Музыка", icon: "🎵", type: "object" },
      { id: "multik", title: "Мультфильм", icon: "📺", type: "object" },
      { id: "surеt", title: "Сурет", icon: "🎨", type: "object" }
    ]
  },

  // ======================================================
  // ОРЫНДАР & КӨЛІК
  // ======================================================

  {
    category: "Орындар & Көлік",
    icon: "🚗",
    cards: [
      { id: "duken", title: "Дүкен", icon: "🛒", type: "place" },
      { id: "auyla", title: "Аула", icon: "🏡", type: "place" },
      { id: "sayabаq", title: "Саябақ", icon: "🌳", type: "place" },
      { id: "auruhana", title: "Аурухана", icon: "🏥", type: "place" },
      { id: "balabaqsha", title: "Балабақша", icon: "🧒", type: "place" },
      { id: "avtobus", title: "Автобус", icon: "🚌", type: "transport" },
      { id: "mashina", title: "Машина", icon: "🚗", type: "transport" },
      { id: "taksi", title: "Такси", icon: "🚕", type: "transport" },
      { id: "zhayaу", title: "Жаяу", icon: "🚶", type: "transport" }
    ]
  },

  // ======================================================
  // УАҚЫТ
  // ======================================================

  {
    category: "Уақыт",
    icon: "⏰",
    cards: [
      { id: "bugіn", title: "Бүгін", icon: "📅", type: "time" },
      { id: "erteŋ", title: "Ертең", icon: "🌅", type: "time" },
      { id: "keşe", title: "Кеше", icon: "🌙", type: "time" },
      { id: "qazir", title: "Қазір", icon: "⏰", type: "time" },
      { id: "keyin", title: "Кейін", icon: "➡️", type: "time" },
      { id: "taŋ", title: "Таң", icon: "🌅", type: "time" },
      { id: "tus", title: "Түс", icon: "☀️", type: "time" },
      { id: "keş", title: "Кеш", icon: "🌆", type: "time" },
      { id: "tun", title: "Түн", icon: "🌙", type: "time" }
    ]
  },

  // ======================================================
  // ӨТІНІШТЕР
  // ======================================================

  {
    category: "Өтініштер",
    icon: "🙏",
    cards: [
      { id: "berşi", title: "Беріңізші", icon: "🙏", type: "request" },
      { id: "ashypber", title: "Ашып беріңізші", icon: "🚪", type: "request" },
      { id: "zhabypber", title: "Жауып беріңізші", icon: "🚪", type: "request" },
      { id: "komektes", title: "Көмектесіңізші", icon: "🤝", type: "request" },
      { id: "kute_tur", title: "Күте тұрыңызшы", icon: "⏳", type: "request" },
      { id: "qosypber", title: "Қосып беріңізші", icon: "🔌", type: "request" },
      { id: "oshiripber", title: "Өшіріп беріңізші", icon: "⏹️", type: "request" },
      { id: "barayiқ", title: "Барайықшы", icon: "🚶", type: "request" }
    ]
  },

  // ======================================================
  // ЖАУАПТАР
  // ======================================================

  {
    category: "Жауаптар",
    icon: "💬",
    cards: [
      { id: "iya", title: "Иә", icon: "✅", type: "answer" },
      { id: "zhok", title: "Жоқ", icon: "❌", type: "answer" },
      { id: "bіlem", title: "Білемін", icon: "💡", type: "answer" },
      { id: "bilmeim", title: "Білмеймін", icon: "🤷", type: "answer" },
      { id: "bolady", title: "Болады", icon: "👍", type: "answer" },
      { id: "bolmaidy", title: "Болмайды", icon: "🚫", type: "answer" },
      { id: "zhaksy", title: "Жақсы", icon: "😊", type: "answer" },
      { id: "zhaksyemes", title: "Жақсы емес", icon: "😕", type: "answer" }
    ]
  }
];


// ======================================================
// НЕГІЗГІ ЖҮЙЕ
// ======================================================

let selectedCards = [];
let currentCategoryIndex = 0;


// DOM элементтері

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


// ======================================================
// КАТЕГОРИЯЛАРДЫ ШЫҒАРУ
// ======================================================

function renderCategories() {

  categoriesContainer.innerHTML = "";

  data.forEach((cat, index) => {

    const btn = document.createElement("button");

    btn.className =
      `cat-btn ${index === currentCategoryIndex ? "active" : ""}`;

    btn.innerText =
      `${cat.icon} ${cat.category}`;

    btn.onclick = () => {

      currentCategoryIndex = index;

      renderCategories();

      renderCards();
    };

    categoriesContainer.appendChild(btn);

  });
}


// ======================================================
// КАРТОЧКАЛАРДЫ ШЫҒАРУ
// ======================================================

function renderCards() {

  cardsContainer.innerHTML = "";

  const currentCategory =
    data[currentCategoryIndex];

  currentCategory.cards.forEach(card => {

    const cardEl =
      document.createElement("div");

    cardEl.className = "card";

    cardEl.innerHTML = `
      <div class="card-icon">${card.icon}</div>
      <div class="card-title">${card.title}</div>
    `;

    cardEl.onclick = () => {

      addCardToSentence(card);

    };

    cardsContainer.appendChild(cardEl);

  });
}


// ======================================================
// СӨЙЛЕМГЕ КАРТОЧКА ҚОСУ
// ======================================================

function addCardToSentence(card) {

  selectedCards.push(card);

  updateSentenceUI();

}


// ======================================================
// СӨЙЛЕМ UI
// ======================================================

function updateSentenceUI() {

  sentenceBox.innerHTML = "";

  if (selectedCards.length === 0) {

    sentenceBox.innerHTML =
      '<span class="placeholder">Карточкаларды таңдаңыз...</span>';

    return;
  }

  selectedCards.forEach((card, index) => {

    const item =
      document.createElement("div");

    item.className =
      "sentence-item";

    item.innerHTML = `
      <span>${card.icon}</span>
      <span>${card.title}</span>
    `;

    // Карточканы сөйлемнен өшіру
    item.onclick = () => {

      selectedCards.splice(index, 1);

      updateSentenceUI();

    };

    sentenceBox.appendChild(item);

  });
}


// ======================================================
// ҚАЗАҚША СӨЙЛЕМ ҚҰРАСТЫРУ
// ======================================================

function buildKazakhSentence(cards) {

  const ids = cards.map(c => c.id);

  // Мен + су + ішу
  if (
    ids.includes("men") &&
    ids.includes("su") &&
    ids.includes("ishuu")
  ) {
    return "Мен су ішкім келеді";
  }

  // Мен + алма + жеу
  if (
    ids.includes("men") &&
    ids.includes("alma") &&
    ids.includes("zheu")
  ) {
    return "Мен алма жегім келеді";
  }

  // Мен + мектеп + бару
  if (
    ids.includes("men") &&
    ids.includes("mektep") &&
    ids.includes("baru")
  ) {
    return "Мен мектепке барғым келеді";
  }

  // Мен + үй + бару
  if (
    ids.includes("men") &&
    ids.includes("ui") &&
    ids.includes("baru")
  ) {
    return "Мен үйге барғым келеді";
  }

  // Мен + су
  if (
    ids.includes("men") &&
    ids.includes("su")
  ) {
    return "Мен су қалаймын";
  }

  // Мен + тамақ
  if (
    ids.includes("men") &&
    ids.includes("tamtak")
  ) {
    return "Мен тамақ қалаймын";
  }

  // Мен + ұйықтау
  if (
    ids.includes("men") &&
    ids.includes("uyiktau")
  ) {
    return "Мен ұйықтағым келеді";
  }

  // Мен + ойнау
  if (
    ids.includes("men") &&
    ids.includes("oynau")
  ) {
    return "Мен ойнағым келеді";
  }

  // Мен + көмек
  if (
    ids.includes("men") &&
    ids.includes("komek")
  ) {
    return "Маған көмек керек";
  }

  // Егер арнайы ереже болмаса,
  // карточкаларды ретімен біріктіреді

  return cards
    .map(c => c.title)
    .join(" ");
}


// ======================================================
// ДАУЫСТАП ОҚУ
// ======================================================

speakBtn.onclick = () => {

  if (selectedCards.length === 0) {
    return;
  }

  const textToSpeak =
    buildKazakhSentence(selectedCards);

  const utterance =
    new SpeechSynthesisUtterance(textToSpeak);

  utterance.lang = "kk-KZ";

  utterance.rate = 0.9;

  window.speechSynthesis.cancel();

  window.speechSynthesis.speak(utterance);

};


// ======================================================
// ТАЗАЛАУ
// ======================================================

clearBtn.onclick = () => {

  selectedCards = [];

  updateSentenceUI();

};


// ======================================================
// БАСТАПҚЫ ІСКЕ ҚОСУ
// ======================================================

renderCategories();

renderCards();

updateSentenceUI();
