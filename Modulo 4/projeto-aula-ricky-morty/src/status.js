const buttonAlive = document.querySelector("#status-alive");
const buttonDead = document.querySelector("#status-dead");
const buttonUnknown = document.querySelector("#status-unknown");
const buttonAll = document.querySelector("#status-all");

buttonAll.addEventListener("click", () => renderCards(data));
buttonAlive.addEventListener("click", () => renderByStatus("Alive"));
buttonDead.addEventListener("click", () => renderByStatus("Dead"));
buttonUnknown.addEventListener("click", () => renderByStatus("unknown"));

function renderByStatus(status) {
  const newData = filterByStatus(data, status);
  renderCards(newData);
}
