document.getElementById("input-benchpress").onclick = function () {
  document.getElementById("result-1").innerText =
    Number(document.getElementById("kilos").value) /
    (1.0278 - 0.0278 * Number(document.getElementById("reps").value));
};

document.getElementById("input-pullup").onclick = function () {
  document.getElementById("result-2").innerText =
    (Number(document.getElementById("kilos-2").value) +
      Number(document.getElementById("Bodyweight").value)) /
      (1.0278 - 0.0278 * Number(document.getElementById("reps-2").value)) -
    Number(document.getElementById("Bodyweight").value);
};
