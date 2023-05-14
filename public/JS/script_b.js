const bookList = document.querySelector('#book-list ul');
const addBookForm = document.querySelector('#add-book form');

// Функция для создания новой книги в списке
function createBook(title, summary, quote, link) {
    // Создаем элементы списка
    const li = document.createElement('li');
    const bookTitle = document.createElement('h3');
    const bookSummary = document.createElement('p');
    const bookQuote = document.createElement('p');
    const bookLink = document.createElement('a');
    const deleteButton = document.createElement('button');
    const moveUpButton = document.createElement('button');
    const moveDownButton = document.createElement('button');
    const rating = document.createElement('div');
    const likeButton = document.createElement('button');
    const likeCount = document.createElement('span');
    const dislikeButton = document.createElement('button');
    const dislikeCount = document.createElement('span');

    // Добавляем содержимое элементов
    bookTitle.textContent = title;
    bookSummary.textContent = summary;
    bookQuote.textContent = quote;
    bookLink.textContent = 'Купить книгу';
    bookLink.setAttribute('href', link);
    deleteButton.textContent = 'Удалить книгу';
    moveUpButton.textContent = 'Переместить вверх';
    moveDownButton.textContent = 'Переместить вниз';
    likeButton.textContent = 'Лайк';
    dislikeButton.textContent = 'Дизлайк';

    // Добавляем классы элементам
    li.classList.add('book');
    deleteButton.classList.add('delete-button');
    moveUpButton.classList.add('move-up-button');
    moveDownButton.classList.add('move-down-button');
    rating.classList.add('rating');
    likeButton.classList.add('like-button');
    likeCount.classList.add('like-count');
    dislikeButton.classList.add('dislike-button');
    dislikeCount.classList.add('dislike-count');

    // Добавляем элементы в DOM
    rating.appendChild(likeButton);
    rating.appendChild(likeCount);
    rating.appendChild(dislikeButton);
    rating.appendChild(dislikeCount);
    li.appendChild(bookTitle);
    li.appendChild(bookSummary);
    li.appendChild(bookQuote);
    li.appendChild(bookLink);
    li.appendChild(deleteButton);
    li.appendChild(moveUpButton);
    li.appendChild(moveDownButton);
    li.appendChild(rating);
    bookList.appendChild(li);
}

// Обработчик отправки формы добавления книги
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = addBookForm.querySelector('#book-title').value;
    const summary = addBookForm.querySelector('#book-summary').value;
    const quote = addBookForm.querySelector('#book-quote').value;
    const link = addBookForm.querySelector('#book-link').value;
    createBook(title, summary, quote, link);
    addBookForm.reset();
});

// Обработчик клика на кнопку удаления книги
bookList.addEventListener('click', function(event) {
    if (event.target.className === 'delete-button') {
        const li = event.target.parentElement;
        bookList.removeChild(li);
    }
});

// Обработчик клика на кнопку перемещения книги вверх
bookList.addEventListener('click', function(event) {
    if (event.target.className === 'move-up-button') {
        const li = event.target.parentElement;
        const prevLi = li.previousElementSibling;
        if (prevLi) {
            bookList.insertBefore(li, prevLi);
        }
    }
});

// Обработчик клика на кнопку перемещения книги вниз
bookList.addEventListener('click', function(event) {
    if (event.target.className === 'move-down-button') {
        const li = event.target.parentElement;
        const nextLi = li.nextElementSibling;
        if (nextLi) {
            bookList.insertBefore(nextLi, li);
        }
    }
});

// Обработчик клика на кнопку лайка
bookList.addEventListener('click', function(event) {
    if (event.target.className === 'like-button') {
        const li = event.target.parentElement.parentElement;
        const likeCount = li.querySelector('.like-count');
        likeCount.textContent = Number(likeCount.textContent) + 1;
    }
});

// Обработчик клика на кнопку дизлайка
bookList.addEventListener('click', function(event) {
    if (event.target.className === 'dislike-button') {
        const li = event.target.parentElement.parentElement;
        const dislikeCount = li.querySelector('.dislike-count');
        dislikeCount.textContent = Number(dislikeCount.textContent) + 1;
    }
});