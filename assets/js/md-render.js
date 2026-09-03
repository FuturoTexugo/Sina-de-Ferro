/**
 * md-render.js
 * ------------
 * Único ponto do sistema que sabe transformar Markdown em HTML.
 * Tanto o Núcleo quanto qualquer arquivo de /conteudo passam por aqui —
 * assim nunca existe duas lógicas de renderização para manter.
 */

const MdRender = (() => {
  const alvo = () => document.getElementById("conteudo");

  function carregando() {
    alvo().innerHTML = `<div class="estado">Carregando…</div>`;
  }

  function erro(caminho) {
    alvo().innerHTML = `
      <div class="estado">
        Não foi possível carregar <code>${caminho}</code>.<br><br>
        Se você abriu o <code>index.html</code> direto pelo arquivo (file://),
        o navegador bloqueia esse tipo de leitura por segurança.<br>
        Rode um servidor local na pasta do site, por exemplo:<br>
        <code>python3 -m http.server</code> e acesse via <code>http://localhost:8000</code>.
      </div>`;
  }

  async function renderizar(caminho) {
    carregando();
    try {
      const resp = await fetch(caminho, { cache: "no-cache" });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      const texto = await resp.text();
      alvo().innerHTML = marked.parse(texto);
    } catch (e) {
      console.error("Falha ao renderizar markdown:", caminho, e);
      erro(caminho);
    }
  }

  return { renderizar };
})();
