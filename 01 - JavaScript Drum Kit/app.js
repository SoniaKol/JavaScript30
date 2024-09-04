"use strict";

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", removeClassHandler)
);
document.body.addEventListener("keydown", keyHandler);

function keyHandler(evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`div[data-key='${evt.keyCode}']`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeClassHandler(evt) {
  if (evt.propertyName !== "transform") return;

  this.classList.remove("playing");
}
