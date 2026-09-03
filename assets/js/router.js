const Router = (() => {
  const CAMINHO_NUCLEO = "nucleo/nucleo.md";


  function tituloDaRota(rota) {
    if (rota === "#/nucleo" || rota === "") return "Núcleo do Sistema";
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

    if (rota.startsWith("#/conteudo/")) {
      const caminho = "conteudo/" + decodeURIComponent(rota.replace("#/conteudo/", ""));
      await MdRender.renderizar(caminho);
      return;
    }

    // default: núcleo
    await MdRender.renderizar(CAMINHO_NUCLEO);
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
