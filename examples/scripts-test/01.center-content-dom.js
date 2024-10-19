const list = document.querySelector(".list");
const card = document.querySelector(".card");
const navTheme = document.querySelector(".nav-theme");
const body = document.querySelector(".body");
const header = document.querySelector("header");
const content = document.querySelector("eme-content");

// Events
navTheme.addEventListener("click", changeTheme);

// Function
function createList() {
  for (let index = 0; index < 5; index++) {
    const clone = card.cloneNode(true);
    list.appendChild(clone);
  }
}

function changeTheme() {
  console.log("click");
  header.classList.toggle("eme-nav-light");
  header.classList.toggle("eme-nav-dark");
  body.classList.toggle("eme-light");
  body.classList.toggle("eme-dark");
  content.classList.toggle("eme-content-light");
  content.classList.toggle("eme-content-dark");
}

createList();
