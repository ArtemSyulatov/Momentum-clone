import { getTimeOfDay } from "./getTimeOfDay.js";

const greeting = document.querySelector(".greeting");
const name = document.querySelector(".name");

function greetings() { 
  const greetingText = `Good ${getTimeOfDay()}`;
  greeting.textContent = greetingText;
  setInterval(getTimeOfDay, 1000);
}
greetings();

function setLocalStorage() {
  localStorage.setItem("name", name.value);
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  } 
}
window.addEventListener("load", getLocalStorage);


