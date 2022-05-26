//Triangle
const areaTriangleHeight = document.getElementById("areaTriangleHeight");
const areaTriangleBase = document.getElementById("areaTriangleBase");
const areaTriangleForm = document.getElementById("areaTriangleForm");
const triangleAreaResultBox = document.getElementById("triangleAreaResultBox");
const triangleResponse = document.getElementById("triangleAreaResponseText");

areaTriangleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let triangleBase = areaTriangleBase.value;
  let triangleHeight = areaTriangleHeight.value;
  let triangleArea = (triangleBase * triangleHeight) / 2;
  triangleAreaResultBox.classList.remove("d-none");
  triangleResponse.innerText = `El área del triángulo rectángulo es de ${triangleArea} U².`;
});
