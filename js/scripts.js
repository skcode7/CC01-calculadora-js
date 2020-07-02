const basePrice = 0.05;
const extraFee = 1.2;
const translations = {
  en: basePrice,
  fr: basePrice,
  hy: basePrice * 3,
};
const wordsInput = document.getElementById("words");
const languageSelector = document.getElementById("language");
const sprintCheckbox = document.getElementById("sprint")
let total = 0;

// function getTotal(quantity, rate) {
//   return parseFloat(quantity * rate).toFixed(2);
// }
//=== Convertida en Arrow Function
getTotal = (quantity, rate) => {
  total = Number(parseFloat(quantity * rate * (sprintCheckbox.checked ? extraFee : 1)));
  if (Number.isNaN(total)) {
    return Number(0);
  }
  return total;
  //   parseFloat(quantity * rate).toFixed(2);
};
printTotal = (total) =>
  (document.querySelector(
    "#js-calculate-total"
  ).innerHTML = total.toLocaleString("es", { minimunFractionDigits: 2 }));

wordsInput.addEventListener("input", function (wordsEvent) {
  total = getTotal(
    wordsEvent.target.value,
    translations[languageSelector.value]
  );
  printTotal(total);
  //   document.getElementById("js-calculate-total").innerHTML = total;
  //=== Otra alternativa es utilizar query selector
  // document.querySelector('#js-calculate-total').innerHTML = total
});

languageSelector.addEventListener("input", (languageEvent) => {
  total = getTotal(wordsInput.value, translations[languageEvent.target.value]);
  printTotal(total);
});

sprintCheckbox.addEventListener("input", (sprintEvent) => {
    total = getTotal(wordsInput.value, translations[languageSelector.value]);
    printTotal(total);
});

document.querySelector("button").addEventListener("click", () => window.print())