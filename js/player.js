import music from "./store.js";

const play = document.querySelector(".play");
const next = document.querySelector(".play-next");
const prev = document.querySelector(".play-prev");
const playList = document.querySelector(".play-list");
const player = document.querySelector(".player");
const audio = document.createElement("audio");
player.append(audio);
let isPlay = false;
let numOfSong = 0;
const playAudio = (e) => {
  if (e.target.id) {
    numOfSong = e.target.id;
  }
  audio.src = music[numOfSong].src;
  audio.currentTime;
  if (!isPlay) {
    audio.play();
    isPlay = true;
    play.classList.add("pause");
  } else {
    audio.pause();
    isPlay = false;
    play.classList.remove("pause");
  }
  console.log(audio.currentTime);
};
console.log(audio);
music.forEach((elem) => {
  let list = document.createElement("li");
  list.append(elem.title);
  list.style.cursor = "pointer";
  list.style.marginTop = "20px";
  list.style.marginLeft = "20px";
  list.id = elem.id;
  playList.append(list);
  list.addEventListener("click", playAudio);
});
play.addEventListener("click", playAudio);
prev.addEventListener("click", (e) => {
  if(numOfSong===0){
    return
  }
  numOfSong -= 1
  isPlay = false;
  playAudio(e)
});
next.addEventListener("click", (e) => {
  if(numOfSong===3){
    return
  }
  numOfSong += 1
  isPlay = false;
  playAudio(e)
});