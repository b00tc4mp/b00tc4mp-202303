document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  if (
    document.getElementById("name").value === "" ||
    document.getElementById("last-name").value === "" ||
    document.getElementById("e-mail").value === "" ||
    document.getElementById("password").value === "" ||
    document.getElementById("confirm-password").value === ""
  ) {
    document.getElementById("mensaje").innerText = "Campo incompleto";
    document.getElementById("mensaje").style.color = "red";
    document.getElementById("mensaje").style.width = "100%";
    document.getElementById("mensaje").style.height = "100%";
    document.getElementById("mensaje").style.textAlign = "center";
  } else if (
    document.getElementById("password").value !=
    document.getElementById("confirm-password").value
  ) {
    document.getElementById("mensaje").innerText = "Contraseña diferente";
    document.getElementById("mensaje").style.color = "red";
    document.getElementById("mensaje").style.width = "100%";
    document.getElementById("mensaje").style.height = "100%";
    document.getElementById("mensaje").style.textAlign = "center";
  }
};
