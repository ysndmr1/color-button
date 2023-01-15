const btn = document.querySelector(".btn");
const p = document.querySelector(".color");
const body = document.querySelector(".container");

btn.addEventListener("click", function () {
  const x = Math.round(Math.random() * 255);
  const y = Math.round(Math.random() * 255);
  const z = Math.round(Math.random() * 255);
  const colors = `rgb(${x},${y},${z})`;
  body.style.backgroundColor = colors;
  p.textContent = `Color code is ${colors}`;
  p.style.fontSize = "40px";
});
