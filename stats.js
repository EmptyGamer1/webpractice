// Функция для перемещения элемента вверх
function moveUp(element) {
  var prev = element.previousElementSibling;
  if (prev) {
    element.parentNode.insertBefore(element, prev);
    addNews(`Место ${element.querySelector('h2').textContent} перемещено вверх`);
  }
}

// Функция для перемещения элемента вниз
function moveDown(element) {
  var next = element.nextElementSibling;
  if (next) {
    element.parentNode.insertBefore(next, element);
    addNews(`Место ${element.querySelector('h2').textContent} перемещено вниз`);
  }
}

// Функция для удаления элемента
function deleteElement(element) {
  element.parentNode.removeChild(element);
  addNews(`Место ${element.querySelector('h2').textContent} удалено`);
}

// Функция для добавления новости в ленту
function addNews(news) {
  var newsItem = document.createElement('p');
  newsItem.textContent = news;
  document.querySelector('.news').appendChild(newsItem);
}

// Получаем все кнопки на странице
var buttons = document.querySelectorAll('.actions button');

// Добавляем обработчики событий для каждой кнопки
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var place = this.parentNode.parentNode;
    if (this.classList.contains('up')) {
      moveUp(place);
    } else if (this.classList.contains('down')) {
      moveDown(place);
    } else if (this.classList.contains('delete')) {
      deleteElement(place);
    }
  });
});

// Добавляем обработчики событий для кнопок "Лайк" и "Дизлайк"
document.querySelectorAll('.like, .dislike').forEach(function(button) {
  button.addEventListener('click', function() {
    var place = this.parentNode.parentNode;
    var likes = place.querySelector('.likes');
    var dislikes = place.querySelector('.dislikes');
    if (this.classList.contains('like')) {
      likes.textContent = parseInt(likes.textContent) + 1;
      addNews('Новый лайк для места: ' + place.querySelector('h2').textContent, likes.textContent);
    } else if (this.classList.contains('dislike')) {
      dislikes.textContent = parseInt(dislikes.textContent) + 1;
      addNews('Новый дизлайк для места: ' + place.querySelector('h2').textContent, undefined, dislikes.textContent);
    }
  });
});

function addNews(text, likes, dislikes) {
  var news = document.createElement('div');
  news.textContent = text;
  if (likes !== undefined) {
    news.textContent += ' (Лайки: ' + likes + ')';
  }
  if (dislikes !== undefined) {
    news.textContent += ' (Дизлайки: ' + dislikes + ')';
  }
  document.querySelector('.news').insertAdjacentElement('afterbegin', news);
}

// Получаем форму
var form = document.querySelector('form');

// Добавляем обработчик события отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var image = document.getElementById('image').value;
  var description = document.getElementById('description').value;
  var locationValue = document.getElementById('location').value;
  var newPlace = `
    <div class="place">
      <img src="${image}" alt="${name}">
      <h2>${name}</h2>
      <p>${description}</p>
      <p class="location">${locationValue}</p>
      <div class="actions">
        <button class="up">▲</button>
        <button class="down">▼</button>
        <button class="delete">Удалить</button>
        <button class="like">Лайк <span class="likes-count">0</span></button>
        <button class="dislike">Дизлайк <span class="dislikes-count">0</span></button>
      </div>
    </div>
  `;
  document.querySelector('.places').insertAdjacentHTML('beforeend', newPlace);
  addNews(`Добавлено новое место: ${name}`);
  document.getElementById('name').value = '';
  document.getElementById('image').value = '';
  document.getElementById('description').value = '';
  document.getElementById('location').value = '';
  addEventListenersToButtons();
});

  // Добавляем обработчики событий для новых кнопок
  function addEventListenersToButtons() {
  var buttons = document.querySelectorAll('.places .place .actions button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var place = this.parentNode.parentNode;
      if (this.classList.contains('up')) {
        moveUp(place);
      } else if (this.classList.contains('down')) {
        moveDown(place);
      } else if (this.classList.contains('delete')) {
        deleteElement(place);
      } else if (this.classList.contains('like')) {
        addLike(place);
      } else if (this.classList.contains('dislike')) {
        addDislike(place);
      }
    });
  });
};

function addLike(place) {
  var likesCount = place.querySelector('.likes-count');
  var currentLikes = parseInt(likesCount.textContent);
  likesCount.textContent = currentLikes + 1;
}

function addDislike(place) {
  var dislikesCount = place.querySelector('.dislikes-count');
  var currentDislikes = parseInt(dislikesCount.textContent);
  dislikesCount.textContent = currentDislikes + 1;
}
