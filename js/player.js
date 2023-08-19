import music from "./store.js";

const play = document.querySelector(".play");
const next = document.querySelector(".play-next");
const prev = document.querySelector(".play-prev");
const playList = document.querySelector(".play-list");
const player = document.querySelector(".player");
let audio = document.createElement("audio");
player.append(audio);
audio.src = "../assets/sounds/Summer Wind.mp3"; 
music.forEach((elem) => {
  let list = document.createElement("li");
  list.append(elem.title);
  playList.append(list);
});
