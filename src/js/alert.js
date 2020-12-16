import refs from "./refs.js";  //получаем импорт доступов

const { notificationRef } = refs; //деструктр

// console.log(notificationRef);

let timeoutId = null; //объявляем переменную для зачистки сеттаймаута


showNotification(); //функция показывает оповещение сразу на странице

function notificationClickHandler() {   //функция, при клике на ооповещение, приячет его и зачищает сеттайм аут
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {   //функ доб класс is-visible и вызывает сеттаймаут
  notificationRef.classList.add("is-visible");
  timeoutId = setTimeout(hideNotification, 3000); //сеттаймаут прячет оповещение через 3 сек
}

function hideNotification() {  //функ снимает класс is-visible чтобы скрыть оповещение
  notificationRef.classList.remove("is-visible");
}

notificationRef.addEventListener("click", notificationClickHandler); //слушатель