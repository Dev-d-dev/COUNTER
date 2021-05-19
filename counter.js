const minus = document.getElementById("btnminus");
const plus = document.getElementById("btnplus");
const num = document.getElementById("num");
const clear = document.getElementById("clear");

minus.addEventListener("click", function () {
  num.value--;
});

plus.addEventListener("click", function () {
  num.value++;
});

clear.addEventListener("click", function () {
  num.value = "";
});
