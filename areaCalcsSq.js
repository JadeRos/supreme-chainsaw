//Square
const areaSquareSide = document.getElementById("areaSquareSide");
const areaSquareForm = document.getElementById("areaSquareForm");
const squareAreaResultBox = document.getElementById("squareAreaResultBox");
const squareResponse = document.getElementById("squareAreaResponseText");

areaSquareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let squareSide = areaSquareSide.value;
  let squareArea = Math.pow(squareSide, 2);
  squareAreaResultBox.classList.remove("d-none");
  squareResponse.innerText = `El área del cuadrado es de ${squareArea} U².`;
});
