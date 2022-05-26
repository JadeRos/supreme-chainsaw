//Triangle
const perimeterTriangleHeight = document.getElementById(
  "perimeterTriangleHeight"
);
const perimeterTriangleBase = document.getElementById("perimeterTriangleBase");
const perimeterTriangleHipo = document.getElementById("perimeterTriangleHipo");
const perimeterTriangleForm = document.getElementById("perimeterTriangleForm");
const trianglePerimeterResultBox = document.getElementById(
  "trianglePerimeterResultBox"
);
const triangleResponse = document.getElementById(
  "trianglePerimeterResponseText"
);

perimeterTriangleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let triangleBase = perimeterTriangleBase.value;
  let triangleHeight = perimeterTriangleHeight.value;
  let triangleHipo = perimeterTriangleHipo.value;
  let trianglePerimeter = +triangleBase + +triangleHeight + +triangleHipo;
  trianglePerimeterResultBox.classList.remove("d-none");
  triangleResponse.innerText = `El perímetro del triángulo rectángulo es de ${trianglePerimeter} U.`;
});
