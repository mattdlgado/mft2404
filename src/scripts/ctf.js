document.addEventListener("DOMContentLoaded", function () {
  const options = document.getElementById("options");
  const btnBasic = document.getElementById("ctf-basic");
  const basicInfo = document.getElementById("ctf-basic-info");
  const btnAdvance = document.getElementById("ctf-advance");
  const advanceInfo = document.getElementById("ctf-advance-info");
  const closeButtons = document.querySelectorAll(".ctf-close");

  // Muestra el diálogo básico
  btnBasic.addEventListener("click", function () {
    basicInfo.showModal();
    setTimeout(() => {
      basicInfo.classList.add("ctf-show");
    }, 100);
    options.classList.add("ctf-hidden");
  });

  // Muestra el diálogo avanzado
  btnAdvance.addEventListener("click", function () {
    advanceInfo.showModal();
    setTimeout(() => {
      advanceInfo.classList.add("ctf-show");
    }, 100);
    options.classList.add("ctf-hidden");
  });

  // Cierra los diálogos y muestra las opciones
  function closeDialogs() {
    [basicInfo, advanceInfo].forEach(dialog => {
      if (dialog.open) {
        dialog.classList.remove("ctf-show");
        setTimeout(() => {
          dialog.close();
        }, 100);
        options.classList.remove("ctf-hidden");
      }
    });
  }

  // Cierra los diálogos al hacer clic en los botones de cierre
  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeDialogs);
  });

  // Cierra los diálogos al hacer clic fuera de ellos
  [basicInfo, advanceInfo].forEach(dialog => {
    dialog.addEventListener('click', function(event) {
      if (event.target === this) {
        closeDialogs();
      }
    });
  });

  // Cierra los diálogos al presionar la tecla Esc
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      closeDialogs();
    }
  });
});
