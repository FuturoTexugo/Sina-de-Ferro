#!/usr/bin/env python3
"""
gerar_manifest.py
------------------
Varre a pasta /conteudo e gera /conteudo/manifest.json, que o site usa
para montar o menu lateral sem precisar listar diretórios no navegador
(coisa que o JS puro não consegue fazer em um site estático).

Rode este script sempre que adicionar, remover ou renomear um arquivo .md
dentro de /conteudo. Não precisa mexer em nenhum HTML/JS depois.

Uso:
    python3 scripts/gerar_manifest.py
"""

import json
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PASTA_CONTEUDO = RAIZ / "conteudo"
SAIDA = PASTA_CONTEUDO / "manifest.json"


def extrair_titulo(caminho_md: Path) -> str:
    """Usa o primeiro cabeçalho '# ...' do arquivo como título de exibição.
    Se não achar, usa o nome do arquivo."""
    try:
        texto = caminho_md.read_text(encoding="utf-8")
    except Exception:
        return caminho_md.stem

    m = re.search(r"^#\s+(.+)$", texto, re.MULTILINE)
    if m:
        return m.group(1).strip()
    return caminho_md.stem


def montar_manifest() -> list[dict]:
    itens = []

    for caminho in sorted(PASTA_CONTEUDO.rglob("*.md")):
        relativo = caminho.relative_to(RAIZ)
        pasta_pai = caminho.parent.relative_to(PASTA_CONTEUDO)

        # arquivos direto na raiz de /conteudo => categoria "Geral"
        categoria = "Geral" if str(pasta_pai) == "." else str(pasta_pai)

        itens.append(
            {
                "titulo": extrair_titulo(caminho),
                "categoria": categoria,
                "caminho": str(relativo).replace("\\", "/"),
            }
        )

    # Agrupa por categoria e ordena para um menu previsível
    itens.sort(key=lambda i: (i["categoria"], i["titulo"]))
    return itens


def main():
    manifest = montar_manifest()
    SAIDA.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Manifest gerado com {len(manifest)} arquivo(s) em: {SAIDA}")


if __name__ == "__main__":
    main()
