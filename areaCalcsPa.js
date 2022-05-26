//Paralelo
const areaParaHeight = document.getElementById("areaParaHeight");
const areaParaBase = document.getElementById("areaParaBase");
const areaParaForm = document.getElementById("areaParaForm");
const paraAreaResultBox = document.getElementById("paraAreaResultBox");
const paraResponse = document.getElementById("paraAreaResponseText");

areaParaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let paraBase = areaParaBase.value;
  let paraHeight = areaParaHeight.value;
  let paraArea = paraBase * paraHeight;
  paraAreaResultBox.classList.remove("d-none");
  paraResponse.innerText = `El área del triángulo rectángulo es de ${paraArea} U².`;
});
