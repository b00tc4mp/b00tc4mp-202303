document.getElementById("suma").onclick = function () {
  document.getElementById("result").innerText =
    Number(document.getElementById("number-1").value) +
    Number(document.getElementById("number-2").value);
};

document.getElementById("resta").onclick = function () {
  document.getElementById("result").innerText =
    Number(document.getElementById("number-1").value) -
    Number(document.getElementById("number-2").value);
};

document.getElementById("mul").onclick = function () {
  document.getElementById("result").innerText =
    Number(document.getElementById("number-1").value) *
    Number(document.getElementById("number-2").value);
};

document.getElementById("div").onclick = function () {
  document.getElementById("result").innerText =
    Number(document.getElementById("number-1").value) /
    Number(document.getElementById("number-2").value);
};
