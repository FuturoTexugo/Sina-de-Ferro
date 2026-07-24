/**
 * router.js
 * ---------
 * Roteamento simples via hash (#/...), funciona em qualquer hospedagem
 * estática, sem precisar configurar rotas no servidor.
 *
 * Rotas:
 *   #/nucleo                         -> nucleo/Sina de Ferro — Núcleo.md
 *   #/conteudo/<caminho>.md          -> conteudo/<caminho>.md
 *   #/ficha                         -> carrega ficha/ficha.html num iframe
 *   #/licenca                       -> legal/Licenca.md
 */

const Router = (() => {
  const CAMINHO_NUCLEO = "nucleo/nucleo.md";
  const CAMINHO_LICENCA = "legal/Licenca.md";

  function tituloDaRota(rota) {
    if (rota === "#/nucleo" || rota === "") return "Núcleo do Sistema";
    if (rota === "#/ficha") return "Ficha de Personagem";
    if (rota === "#/licenca") return "Licença";
    if (rota.startsWith("#/conteudo/")) {
      const partes = decodeURIComponent(rota.replace("#/conteudo/", "")).split("/");
      return partes[partes.length - 1].replace(".md", "");
    }
    return "Sina de Ferro";
  }

  async function resolver() {
    const rota = location.hash || "#/nucleo";
    document.getElementById("topbarTitle").textContent = tituloDaRota(rota);
    Sidebar.marcarAtivo();
    fecharSidebarMobile();

    if (rota === "#/ficha") {
      renderizarFicha();
      return;
    }

    if (rota === "#/licenca") {
      await MdRender.renderizar(CAMINHO_LICENCA);
      return;
    }

    if (rota.startsWith("#/conteudo/")) {
      const caminho = "conteudo/" + decodeURIComponent(rota.replace("#/conteudo/", ""));
      await MdRender.renderizar(caminho);
      return;
    }

    // default: núcleo
    await MdRender.renderizar(CAMINHO_NUCLEO);
  }

  function renderizarFicha() {
    document.getElementById("conteudo").innerHTML = `
      <iframe src="ficha/ficha.html"
        style="width:100%; min-height: 78vh; border:1px solid var(--line); border-radius:4px; background:transparent;">
      </iframe>`;
  }

  function fecharSidebarMobile() {
    document.getElementById("sidebar").classList.remove("is-open");
  }

  function iniciar() {
    window.addEventListener("hashchange", resolver);
    resolver();
  }

  return { iniciar };
})();
