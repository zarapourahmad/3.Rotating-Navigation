"use strict";
const open = document.getElementById("opening");
const close = document.getElementById("closing");
const main = document.querySelector("main");
const ul = document.querySelector("ul");

open.addEventListener("click", function () {
  main.classList.add("rotate");
  ul.classList.remove("hide");
  close.classList.remove("hide");
  open.classList.add("hide");
});
close.addEventListener("click", function () {
  main.classList.remove("rotate");
  ul.classList.add("hide");
  open.classList.remove("hide");
  close.classList.add("hide");
});
