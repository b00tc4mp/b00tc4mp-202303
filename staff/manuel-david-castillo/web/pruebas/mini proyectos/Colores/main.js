setInterval(function () {
  let randomNumber = Math.round(Math.random() * 100);
  if (randomNumber < 33) {
    document.body.style.backgroundColor = "red";
  } else if (randomNumber < 66) {
    document.body.style.backgroundColor = "greenyellow";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}, 1000);

let count = 0;
document.getElementById("box-1").onclick = function () {
  if (
    document.getElementById("box-1").style.backgroundColor ===
    document.body.style.backgroundColor
  ) {
    count++;
    historialDePuntos.push(count);
  } else {
    count--;
    historialDePuntos.push(count);
  }
  document.getElementById("puntos").innerText = "Puntos: " + count;
  document.getElementById("historial").innerText =
    "Historial de puntos: " + historialDePuntos;
};

document.getElementById("box-2").onclick = function () {
  if (
    document.getElementById("box-2").style.backgroundColor ===
    document.body.style.backgroundColor
  ) {
    count++;
    historialDePuntos.push(count);
  } else {
    count--;
    historialDePuntos.push(count);
  }
  document.getElementById("puntos").innerText = "Puntos: " + count;
  document.getElementById("historial").innerText =
    "Historial de puntos: " + historialDePuntos;
};

document.getElementById("box-3").onclick = function () {
  if (
    document.getElementById("box-3").style.backgroundColor ===
    document.body.style.backgroundColor
  ) {
    count++;
    historialDePuntos.push(count);
  } else {
    count--;
    historialDePuntos.push(count);
  }
  document.getElementById("puntos").innerText = "Puntos: " + count;
  document.getElementById("historial").innerText =
    "Historial de puntos: " + historialDePuntos;
};

let historialDePuntos = [];
document.getElementById("puntos").onclick = function () {
  alert(historialDePuntos);
};
