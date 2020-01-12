const clockCantainer = document.querySelector(".js-clock");
const clockTitle = clockCantainer.querySelector("h1");
// query selector는 elements의 자식을 탐색

function getTime() {
  const date = new Date();
  const Minute = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hour}:${Minute}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
