// Деректер базасы (Карточкалар мен Категориялар)
const data = [
  {
    category: "Басты",
    icon: "🏠",
    cards: [
      { id: "men", title: "Мен", icon: "🧒", type: "subject" },
      { id: "kalaymyn", title: "Қалаймын", icon: "❤️", type: "verb" },
      { id: "su", title: "Су", icon: "🥤", type: "object" },
      { id: "tamtak", title: "Тамақ", icon: "🍎", type: "object" },
      { id: "komek", title: "Көмек", icon: "🆘", type: "action" }
    ]
  },
  {
    category: "Тамақ & Ішу",
    icon: "🍎",
    cards: [
      { id: "su", title: "Су", icon: "🥤", type: "object" },
      { id: "nan", title: "Нан", icon: "🍞", type: "object" },
      { id: "alma", title: "Алма", icon: "🍎", type: "object" },
      { id: "sut", title: "Сүт", icon: "🥛", type: "object" }
    ]
  },
  {
    category: "Әрекеттер",
    icon: "🎮",
    cards: [
      { id: "ishuu", title: "Ішу", icon: "🥤", type: "verb_base" },
      { id: "zheu", title: "Жеу", icon: "🍽️", type: "verb_base" },
      { id: "oynau", title: "Ойнау", icon: "🎮", type: "verb_base" },
      { id: "baru", title: "Бару", icon: "🚗", type: "verb_base" }
    ]
  }
];

let selectedCards = [];
let currentCategoryIndex = 0;

// DOM Элементтері
const categoriesContainer = document.getElementById('categories-container');
const cardsContainer = document.getElementById('cards-container');
const sentenceBox = document.getElementById('sentence-box');
const speakBtn = document.getElementById('speak-btn');
const clearBtn = document.getElementById('clear-btn');

// 1. Категорияларды шығару
function renderCategories() {
  categoriesContainer.innerHTML = '';
  data.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${index === currentCategoryIndex ? 'active' : ''}`;
    btn.innerText = `${cat.icon} ${cat.category}`;
    btn.onclick = () => {
      currentCategoryIndex = index;
      renderCategories();
      renderCards();
    };
    categoriesContainer.appendChild(btn);
  });
}

// 2. Карточкаларды шығару
function renderCards() {
  cardsContainer.innerHTML = '';
  const currentCategory = data[currentCategoryIndex];
  
  currentCategory.cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
      <div class="card-icon">${card.icon}</div>
      <div class="card-title">${card.title}</div>
    `;
    cardEl.onclick = () => addCardToSentence(card);
    cardsContainer.appendChild(cardEl);
  });
}

// 3. Сөйлемге карточка қосу
function addCardToSentence(card) {
  selectedCards.push(card);
  updateSentenceUI();
}

// 4. Сөйлем UI жаңарту
function updateSentenceUI() {
  sentenceBox.innerHTML = '';
  
  if (selectedCards.length === 0) {
    sentenceBox.innerHTML = '<span class="placeholder">Карточкаларды таңдаңыз...</span>';
    return;
  }

  selectedCards.forEach((card) => {
    const item = document.createElement('div');
    item.className = 'sentence-item';
    item.innerHTML = `<span>${card.icon}</span> <span>${card.title}</span>`;
    sentenceBox.appendChild(item);
  });
}

// 5. Қазақ тілінің грамматикалық адаптері (Grammar Engine)
function buildKazakhSentence(cards) {
  const ids = cards.map(c => c.id);

  // Қарапайым ережелер: Мен + Су + Ішу -> "Мен су ішкім келеді"
  if (ids.includes('men') && ids.includes('su') && ids.includes('ishuu')) {
    return "Мен су ішкім келеді";
  }
  if (ids.includes('men') && ids.includes('alma') && ids.includes('zheu')) {
    return "Мен алма жегім келеді";
  }
  if (ids.includes('men') && ids.includes('kalaymyn') && ids.includes('su')) {
    return "Мен су ішкім келеді";
  }

  // Әдепкі жағдайда сөздерді тізбектеп айту
  return cards.map(c => c.title).join(' ');
}

// 6. Дауыстап айту (Speech Synthesis)
speakBtn.onclick = () => {
  if (selectedCards.length === 0) return;

  const textToSpeak = buildKazakhSentence(selectedCards);
  
  // Web Speech API
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'kk-KZ'; // Қазақ тілі
  utterance.rate = 0.9; // Балаларға арналған сәл баяу қарқын

  window.speechSynthesis.speak(utterance);
};

// 7. Сөйлемді тазалау
clearBtn.onclick = () => {
  selectedCards = [];
  updateSentenceUI();
};

// Инициализация
renderCategories();
renderCards();
