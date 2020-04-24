const URL = "https://rickandmortyapi.com/api/character/";
const cardsElement = document.querySelector("#cards");
let data = [];

async function getData() {
  const results = await fetch(URL)
    .then(r => r.json())
    .then(json => json.results);
  return results;
}

function renderCards(cards) {
  cardsElement.innerHTML = "";
  cards.map(renderCard);
}

function renderCard(card) {
  const div = document.createElement("div");
  div.style.width = "18rem";
  div.style.margin = "1rem";
  div.className = "card";
  div.innerHTML = `
  <img src="${card.image}" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">
      Situação: ${card.status}
    </p>
    <p class="card-text">
    Sexo: ${card.gender}
  </p>
  </div>
`;
  cardsElement.appendChild(div);
}

async function main() {
  data = await getData();
  renderCards(data);
}

main();
