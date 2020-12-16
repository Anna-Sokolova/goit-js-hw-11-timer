import refs from "./refs.js";

const { timerRef, daysRef, hoursRef, minsRef, secsRef } = refs;

// console.log(refs);

let day = "Dec 31 2020"; //дата, до которой будет считать счетчик

//основная функция для создания счетчика
function timer(date) {
  const targetDate = new Date(date);  //целевая дата
  const currentDate = Date.now();     //текущая дата
  const deltaTime = targetDate - currentDate;  //разница, которую будем показывать в счетчике

  const objTime = setTime(deltaTime); //вызываем функцию с просчитанными данными и записываем её в объект, т.к. setTime возвращает объект данных
  updateClockface(objTime); //вызываем функцию, которая рисует интерфейс
}

//функция задает интервал отсчета каждую секунду
setInterval(() => {
  timer(day);    //передаем основную функцию
}, 1000);

// функция принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
function pad(value) {
  return String(value).padStart(2, "0");
}

//функция для расчета времени, принимает параметром разницу между targetDate и текущей датой (в миллисекундах)
function setTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  // console.log('days -', days);
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  // console.log("hours -", hours);
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  // console.log("mins -", mins);
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  // console.log("secs -", secs);
  return { days, hours, mins, secs }; // Возвращает обьект со свойствами days, hours, mins, secs
}

//функция принимает объект данных времени, которые возвращает setTime(time) и перерисовывает интерфейс счетчика
function updateClockface(obj) {
  daysRef.textContent = obj.days;
  hoursRef.textContent = obj.hours;
  minsRef.textContent = obj.mins;
  secsRef.textContent = obj.secs;
}
