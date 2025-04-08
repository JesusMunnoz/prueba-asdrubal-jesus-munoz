document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-dark-mode");
    const body = document.body;
    const h1 = document.querySelector("h1");

    // Activar modo oscuro si estaba activado previamente
    if (localStorage.getItem("modoOscuro") === "true") {
        body.classList.add("darkmode");
    }

    // Alternar modo oscuro y guardar preferencia
    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("darkmode");
        localStorage.setItem("modoOscuro", body.classList.contains("darkmode"));
    });

    // Cambiar el texto del h1 después de 2 segundos
    if (h1) {
        setTimeout(() => {
            h1.textContent = "But I dont know nothing yet about PHP and WordPress. Sorry! " + " I'm Working on it";
        }, 4000); // 2000 ms = 2 segundos
    }
});

/*document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.getElementById('main-title');
    if (h1) {
      h1.textContent = '¡Texto modificado automáticamente con JS!';
    }
});*/