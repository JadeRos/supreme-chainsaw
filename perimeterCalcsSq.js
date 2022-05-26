//Square
const perimeterSquareSide = document.getElementById("perimeterSquareSide");
const perimeterSquareForm = document.getElementById("perimeterSquareForm");
const squarePerimeterResultBox = document.getElementById(
  "squarePerimeterResultBox"
);
const squareResponse = document.getElementById("squarePerimeterResponseText");

perimeterSquareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let squareSide = perimeterSquareSide.value;
  let squarePerimeter = squareSide * 4;
  squarePerimeterResultBox.classList.remove("d-none");
  squareResponse.innerText = `El perímetro del cuadrado es de ${squarePerimeter} U.`;
});
