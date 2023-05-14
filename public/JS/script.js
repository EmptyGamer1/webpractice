"use strict"
// Обработка лайков и дизлайков
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const likeCount = document.getElementById('like-count');
const dislikeCount = document.getElementById('dislike-count');

likeButton.addEventListener('click', function() {
  const count = parseInt(likeCount.textContent);
  likeCount.textContent = count + 1;
});

dislikeButton.addEventListener('click', function() {
  const count = parseInt(dislikeCount.textContent);
  dislikeCount.textContent = count + 1;
});

// Получаем элементы формы и списка комментариев
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Функция для добавления комментария в список
function addComment(comment) {
  const li = document.createElement('li');
  li.innerText = comment;
  commentList.appendChild(li);
}

// Обработчик отправки формы
commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Получаем текст комментария из поля ввода
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value;

  // Добавляем комментарий в список
  addComment(commentText);

  // Очищаем поле ввода
  commentInput.value = '';
});