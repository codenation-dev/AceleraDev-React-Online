const buttonGenderMale = document.querySelector("#gender-male");
const buttonGenderFemale = document.querySelector("#gender-female");
const buttonGenderUnknown = document.querySelector("#gender-unknown");
const buttonGenderAll = document.querySelector("#gender-all");

buttonGenderAll.addEventListener("click", () => renderCards(data));
buttonGenderMale.addEventListener("click", () => renderByGender("Male"));
buttonGenderFemale.addEventListener("click", () => renderByGender("Female"));
buttonGenderUnknown.addEventListener("click", () => renderByGender("unknown"));

function renderByGender(gender) {
  const newData = filterByGender(data, gender);
  renderCards(newData);
}
