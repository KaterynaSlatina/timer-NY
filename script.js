const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCounter (){

   const currentTime = new Date();
   const diff = nextYear - currentTime;

   //Перевод у дні
   const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

   //Всього годин, далі залишок від ділення на 24(щоб переробити в дні)
   const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

   //Всього хвилин, далі залишок від перетворення у години, хвилин
   const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

   //Всього секунд
   const secondsLeft = Math.floor(diff / 1000) % 60;

   // console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

   days.innerText = daysLeft;
   hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
   minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
   seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

setInterval(updateCounter, 1000);