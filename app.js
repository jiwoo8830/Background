const css = document.querySelector("h3");
//색입력 2개 input
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
//getElementById("id") id만 선택
const body = document.getElementById("gradient");

function setColor() {
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
