const clockCantainer = document.querySelector(".js-clock");
const clockTitle = clockCantainer.querySelector("h1");
// query selector는 elements의 자식을 탐색

function getTime() {
  const date = new Date();
  const Minute = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    Minute < 10 ? `0${Minute}` : Minute
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
// seconds가 10보다 작으면 ?(if) > 0+seconds 추출  아니라면 (:) seconds

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
