import {getTimeOfDay} from './getTimeOfDay.js'

const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev"); 

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let randomNum = getRandomNum(1, 20);

let timeOfDay = getTimeOfDay(); 
let img = new Image(); 
function setBG() {
  if (randomNum >= 10) {
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/${randomNum}.jpg`;
  } else {
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/0${randomNum}.jpg`;
  }
  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
  };
}

setBG();

function getSlideNext() {
  if (randomNum == 20) {
    randomNum = 1;
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/0${randomNum}.jpg`;
  }
  randomNum = randomNum + 1;

  if (randomNum >= 10 && randomNum <= 20) {
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/${randomNum}.jpg`;
  } else if (randomNum > 1 && randomNum < 10) {
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/0${randomNum}.jpg`;
  }
  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
  };
}
function getSlidePrev() {
  if (randomNum === 1) {
    randomNum = 20;
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/${randomNum}.jpg`;
  }
  randomNum = randomNum - 1;
  if (randomNum >= 10 && randomNum < 20) {
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/${randomNum}.jpg`;
  } else if (randomNum < 10 && randomNum >= 1) {
    img.src = `https://raw.githubusercontent.com/ArtemSyulatov/imgs/assets/images/${timeOfDay}/0${randomNum}.jpg`;
  }
  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
  };
}


slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);
