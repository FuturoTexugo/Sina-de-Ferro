/**
 * sidebar.js
 * ----------
 * Lê /conteudo/manifest.json (gerado por scripts/gerar_manifest.py) e monta
 * o menu lateral agrupado por categoria. Não precisa tocar nesse arquivo
 * quando um novo conteúdo (raça, classe, item...) for adicionado — só rodar
 * o script Python de novo.
 */

const Sidebar = (() => {
  const ITENS_FIXOS_TOPO = [
    { titulo: "Núcleo do Sistema", rota: "#/nucleo" },
  ];

  const ITENS_FIXOS_RODAPE = [
    { titulo: "Ficha de Personagem", rota: "#/ficha" },
    { titulo: "Licença", rota: "#/licenca" },
  ];

  function linkHtml(titulo, rota) {
    return `
      <a class="nav-link" href="${rota}" data-rota="${rota}">
        <span class="marca"></span>${titulo}
      </a>`;
  }

  function grupoHtml(nomeGrupo, itens) {
    const links = itens
      .map((i) => linkHtml(i.titulo, `#/conteudo/${i.caminho.replace("conteudo/", "")}`))
      .join("");
    return `
      <div class="nav-group">
        <div class="nav-group-label">${nomeGrupo}</div>
        ${links}
      </div>`;
  }

  async function montar() {
    const nav = document.getElementById("nav");
    try {
      const resp = await fetch("conteudo/manifest.json", { cache: "no-cache" });
      const manifest = await resp.json();

      const porCategoria = manifest.reduce((acc, item) => {
        (acc[item.categoria] ||= []).push(item);
        return acc;
      }, {});

      let html = `<div class="nav-group">${ITENS_FIXOS_TOPO.map((i) => linkHtml(i.titulo, i.rota)).join("")}</div>`;

      // "Geral" primeiro (Classes, Raças, Santuários direto na raiz de /conteudo)
      const ordemCategorias = Object.keys(porCategoria).sort((a, b) => {
        if (a === "Geral") return -1;
        if (b === "Geral") return 1;
        return a.localeCompare(b);
      });

      for (const categoria of ordemCategorias) {
        html += grupoHtml(categoria === "Geral" ? "Conteúdo" : categoria, porCategoria[categoria]);
      }

      html += `<div class="nav-group">${ITENS_FIXOS_RODAPE.map((i) => linkHtml(i.titulo, i.rota)).join("")}</div>`;

      nav.innerHTML = html;
      marcarAtivo();
    } catch (e) {
      console.error("Falha ao montar sidebar:", e);
      nav.innerHTML = `<div class="estado">Não foi possível carregar o índice de conteúdo.</div>`;
    }
  }

  function marcarAtivo() {
    const rotaAtual = location.hash || "#/nucleo";
    document.querySelectorAll(".nav-link").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.rota === rotaAtual);
    });
  }

  return { montar, marcarAtivo };
})();
