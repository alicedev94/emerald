const list = document.querySelector(".list");
const card = document.querySelector(".card");

function createList() {
  for (let index = 0; index < 5; index++) {
    const clone = card.cloneNode(true);
    list.appendChild(clone);
  }
}

createList();
