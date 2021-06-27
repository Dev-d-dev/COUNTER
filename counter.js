const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
const list = document.getElementById("list");

minus.addEventListener("click", function () {
  screen.value--;
});
plus.addEventListener("click", function () {
  screen.value++;
});
clear.addEventListener("click", function () {
  if (screen.value != 0) {
    let option = document.createElement("option");
    option.text = screen.value;
    list.appendChild(option);
  }
  screen.value = "";
});
