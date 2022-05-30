console.log("**** app.js *******");

const langInput = document.querySelector(".input");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const langSection = document.querySelector("#lang-section");

const ul = document.createElement("ul");

langSection.appendChild(ul);

console.log(langSection.children[0]);
console.log(langSection.parentNode.parentNode);

console.log(ul.parentNode.parentNode.parentNode.children[0]);

const h1 = ul.closest(`.container`).firstElementChild;
// const h1 = ul.closest(`.container`).firstChild;
console.log(h1);

h1.style.color = "red";

//* container classı icerisindeki btn classına ait olan elementleri arar
buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons[0].innerText);

addBtn.onclick = function () {
  if (!langInput.value) {
    alert("Please enter something first!");
  } else {
    ul.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = "";
    jsControl();
  }
};

deleteBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert("Calm down, nothing to delete here..");
};

const jsControl = () => {
  document.querySelectorAll("ul li").forEach((lang) => {
    const lowerCase = lang.textContent.toLowerCase();
    if (lowerCase === "javascript") {
      //   input.className = "red";
      lang.setAttribute("class", "red");
    }
  });
};

langInput.addEventListener("keydown", (a) => {
  if (a.keyCode === 13) {
    addBtn.click();
  }
  if (a.keyCode === 46 || a.keyCode === 109) {
    deleteBtn.click();
  }
});

window.onload = () => {
  jsControl();
  langInput.focus();
};
