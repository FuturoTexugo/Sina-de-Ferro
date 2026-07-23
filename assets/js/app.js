/**
 * app.js
 * ------
 * Ponto de entrada. Monta o menu lateral a partir do manifest, inicia o
 * router de hash, e liga o botão de menu no modo mobile.
 */

(async function iniciarApp() {
  await Sidebar.montar();
  Router.iniciar();

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("is-open");
  });

  // fecha o menu mobile ao clicar em qualquer link do nav
  document.getElementById("nav").addEventListener("click", (e) => {
    if (e.target.closest(".nav-link")) {
      document.getElementById("sidebar").classList.remove("is-open");
    }
  });
})();
