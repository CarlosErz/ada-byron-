const inputConfcontra = document.getElementById("confContra");
const inputContra = document.getElementById("contra");
const eye = document.getElementById("eye");
const eye2 = document.getElementById("eyes2");

eye.addEventListener("click", function () {
  const type = inputContra.getAttribute("type");
  const icon = this.querySelector("i");
  if (type === "password") {
    inputContra.setAttribute("type", "text");
    icon.classList.remove("eye_clost");
    icon.classList.add("eye_open");
  }
  else if (type === "text") {
    inputContra.setAttribute("type", "password");
    icon.classList.remove("eye_open");
    icon.classList.add("eye_clost");

  }
});

eye2.addEventListener("click", function () {
  const confi = inputConfcontra.getAttribute("type");
  const icon2 = this.querySelector("i");
  if (confi === "password") {
    inputConfcontra.setAttribute("type", "text");
    icon2.classList.remove("eye_clost");
    icon2.classList.add("eye_open");
  }
  else if (confi === "text") {
    inputConfcontra.setAttribute("type", "password");
    icon2.classList.remove("eye_open");
    icon2.classList.add("eye_clost");

  }
});