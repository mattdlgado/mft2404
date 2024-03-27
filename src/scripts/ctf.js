document.addEventListener("DOMContentLoaded", function () {
  const options = document.getElementById("options");
  const btnBasic = document.getElementById("ctf-basic");
  const basicInfo = document.getElementById("ctf-basic-info");
  const btnAdvance = document.getElementById("ctf-advance");
  const advanceInfo = document.getElementById("ctf-advance-info");
  const closeButtons = document.querySelectorAll(".ctf-close");
  const inputs = document.getElementsByName("ctf");

  // Muestra el diálogo básico
  btnBasic.addEventListener("click", function () {
    basicInfo.classList.add("ctf-show");
    basicInfo.classList.add("ctf-show-visible");
    options.classList.add("ctf-hidden");

    if (inputs.length > 0) {
      inputs[0].value = "Rookie";
    }
  });

  // Muestra el diálogo avanzado
  btnAdvance.addEventListener("click", function () {
    advanceInfo.classList.add("ctf-show");
    advanceInfo.classList.add("ctf-show-visible");
    options.classList.add("ctf-hidden");

    if (inputs.length > 0) {
      inputs[0].value = "Advanced";
    }
  });

  // Cierra los diálogos y muestra las opciones
  function closeBoxes() {
    [basicInfo, advanceInfo].forEach((item) => {
      item.classList.remove("ctf-show");
      setTimeout(() => {
        item.classList.remove("ctf-show-visible");
      }, 100);
      options.classList.remove("ctf-hidden");

      if (inputs.length > 0) {
        inputs[0].value = "";
      }
    });
  }

  // Cierra los diálogos al hacer clic en los botones de cierre
  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeBoxes);
  });

  // Cierra los diálogos al hacer clic fuera de ellos
  // Dado que estamos trabajando con <div>, necesitamos una nueva lógica para manejar clics fuera
  document.addEventListener("click", function (event) {
    if (
      !basicInfo.contains(event.target) &&
      !btnBasic.contains(event.target) &&
      basicInfo.classList.contains("ctf-show")
    ) {
      closeBoxes();
    }
    if (
      !advanceInfo.contains(event.target) &&
      !btnAdvance.contains(event.target) &&
      advanceInfo.classList.contains("ctf-show")
    ) {
      closeBoxes();
    }
  });
});
