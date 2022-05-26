//Paralelo
const perimeterParaHeight = document.getElementById("perimeterParaHeight");
const perimeterParaBase = document.getElementById("perimeterParaBase");
const perimeterParaForm = document.getElementById("perimeterParaForm");
const paraPerimeterResultBox = document.getElementById(
  "paraPerimeterResultBox"
);
const paraResponse = document.getElementById("paraPerimeterResponseText");

perimeterParaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let paraBase = perimeterParaBase.value;
  let paraHeight = perimeterParaHeight.value;
  let paraPerimeter = paraBase * 2 + paraHeight * 2;
  paraPerimeterResultBox.classList.remove("d-none");
  paraResponse.innerText = `El perímetro del paralelogramo es de ${paraPerimeter} U.`;
});
