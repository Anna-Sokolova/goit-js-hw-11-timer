// Плагин Таймер через классы

class CountdownTimer {
  constructor({ selector, targetDate }) {
    //пробрасываем параметры в конструкторе
    //получаем все доступы к ДОМ элементам
    this.timerRef = document.querySelector(selector);
    this.daysRef = document.querySelector('span[data-value="days"]');
    this.hoursRef = document.querySelector('span[data-value="hours"]');
    this.minsRef = document.querySelector('span[data-value="mins"]');
    this.secsRef = document.querySelector('span[data-value="secs"]');
    this.targetDate = targetDate;
  }
  //метод Старт запускает таймер с интервалом 1 секунду
  start() {
    setInterval(() => {
      this.updateClockface(); //метод updateClockface передает в старт основные данные для отсчета
    }, 1000);
  }
  //метод updateClockface принимает все данные о времени и рисует интерфейс
  updateClockface() {
    const currentDate = Date.now(); //текущая дата в милисекундах
    const targetDate = new Date(this.targetDate); //целевая дата в виде объекта
    const deltaTime = targetDate - currentDate; //разница в милисекундах
    const { days, hours, mins, secs } = this.setTime(deltaTime); //вызываем функцию с просчитанными данными и записываем её в объект(деструктурируем его для удобства), т.к. setTime возвращает объект данных
    //рисуем интерфейс
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }
//метод setTime(time) высчитывает по формуле дни, часы, минуты и сек принимает параметром разницу во времени deltaTime
  setTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    // console.log('days -', days);
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    // console.log("hours -", hours);
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    // console.log("mins -", mins);
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    // console.log("secs -", secs);
    return { days, hours, mins, secs }; // Возвращает обьект со свойствами days, hours, mins, secs
  }
 //метод для вывода чисел в формате 00:00:00:00
  pad(value) {
    return String(value).padStart(2, "0");
  }
}
//создаем образец таймера по классу
const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
});

//вызываем новый таймер, запуская его методом старт
newTimer.start();
