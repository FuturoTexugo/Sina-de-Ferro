import os

# Pastas e arquivos a serem ignorados para manter a visualização limpa
IGNORE_DIRS = {
    ".git",
    "__pycache__",
    ".venv",
    "venv",
    "node_modules",
    ".idea",
    ".vscode",
}
IGNORE_FILES = {
    ".DS_Store",
    "thumbs.db",
    "estrutura_diretorios.txt",
}


def gerar_arvore(
    dir_path: str, prefixo: str = "", salvar_arquivo=None
) -> None:
    """Gera recursivamente a árvore de diretórios e arquivos."""
    try:
        itens = os.listdir(dir_path)
    except PermissionError:
        # Pula pastas sem permissão de leitura
        return

    # Filtra e ordena (pastas primeiro, depois arquivos em ordem alfabética)
    itens = [
        item
        for item in itens
        if item not in IGNORE_DIRS and item not in IGNORE_FILES
    ]

    pastas = sorted(
        [i for i in itens if os.path.isdir(os.path.join(dir_path, i))]
    )
    arquivos = sorted(
        [i for i in itens if os.path.isfile(os.path.join(dir_path, i))]
    )
    itens_ordenados = pastas + arquivos

    total = len(itens_ordenados)

    for i, item in enumerate(itens_ordenados):
        caminho_completo = os.path.join(dir_path, item)
        eh_ultimo = i == total - 1

        # Define os conectores visuais
        conector = "└── " if eh_ultimo else "├── "

        # Formata a linha atual
        se_pasta = os.path.isdir(caminho_completo)
        nome_exibicao = f"{item}/" if se_pasta else item
        linha = f"{prefixo}{conector}{nome_exibicao}\n"

        # Exibe no terminal e grava no arquivo (se fornecido)
        print(linha, end="")
        if salvar_arquivo:
            salvar_arquivo.write(linha)

        # Se for um diretório, avança recursivamente
        if se_pasta:
            extensao_prefixo = "    " if eh_ultimo else "│   "
            gerar_arvore(
                caminho_completo,
                prefixo + extensao_prefixo,
                salvar_arquivo,
            )


def executar():
    # Obtém o diretório atual onde o script está localizado
    pasta_raiz = os.getcwd()
    nome_raiz = os.path.basename(pasta_raiz) or pasta_raiz
    arquivo_saida = "estrutura_diretorios.txt"

    header = f"{nome_raiz}/\n"

    print("\nEstrutura de Diretórios:\n")
    print(header, end="")

    with open(arquivo_saida, "w", encoding="utf-8") as f:
        f.write(header)
        gerar_arvore(pasta_raiz, salvar_arquivo=f)

    print(f"\n✅ Árvore salva com sucesso em '{arquivo_saida}'!")


if __name__ == "__main__":
    executar()