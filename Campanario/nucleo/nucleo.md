# Introdução

> Quando a Ruína desperta...
> 
> o Sino de Ferro volta a tocar.
> 
> Você é um Herói.
> 
> Um dos poucos capazes de mudar o destino.
> 
> Em Sina de Ferro você pode

- explorar masmorras;
- derrotar monstros;
- proteger reinos;
- salvar o mundo;
- enfrentar a Ruína.

---

# Parte 1 — Personagem

## 1. Atributos

Não há perícias. Cada personagem tem 7 atributos. Cada ponto no atributo dá **+1 direto** em testes relacionados a ele. Em **valores pares** (2, 4, 6, 8...), o atributo também concede um bônus adicional, que **se soma** ao +1 normal (não substitui). Esse bônus par segue a fórmula **Bônus Par = ⌊Atributo ÷ 2⌋** (metade do atributo, arredondada para baixo) — é uma escala contínua que cresce a cada valor par, não um bônus fixo de evento único (ver também seção 5.1).

|Atributo|Testes principais|Bônus em valores pares|
|---|---|---|
|**Força**|Dano corpo a corpo/desarmado, carregar peso, arrombar por força|+1 Redução de Dano Física|
|**Vigor**|Vida, resistir veneno/doença/fadiga|+1 PV extra|
|**Velocidade**|Deslocamento|+1 de movimento|
|**Atenção**|Percepção, achar segredos/armadilhas, rastrear, destreza geral|+1 em qualquer Reação|
|**Vontade**|Resistir medo/controle mental, reserva de Mana|+1 Redução de Dano Mágica|
|**Intelecto**|Conhecimento, identificar criaturas/magias, enigmas|+1 Mana extra|
|**Talento**|Persuasão, intimidação, performance, ofícios, manualidade com as mãos|+1 adorno|

_(os bônus já estão postos nos cálculos de vida, mana, adornos, etc.)_

> **Nota — Bloquear e Esquivar não são testes:** nenhum dos dois aparece na coluna de Testes principais porque nenhum dos dois envolve rolar um d20. São ações passivas de soma direta: Esquivar soma Velocidade (+ bônus de Atenção) direto na Defesa.

> **Piso zero para cálculo de bônus:** se um atributo estiver negativo (por modificadores de classe/raça, penalidades, etc.), ele é tratado como 0 somente para fins de cálculo do bônus par e de qualquer bônus/fórmula que dependa dele (ex: Redução de Dano, PV extra, movimento extra, Mana extra, adorno extra) — isso evita punir o jogador duas vezes pelo mesmo atributo baixo. O +1 direto do teste em si (d20 + Atributo) continua sendo o valor real, negativo inclusive. A mesma lógica de piso zero vale para qualquer recurso derivado que fique negativo (Vida, Mana, Espaços de inventário, Movimento, etc.): ele nunca gera bônus/penalidade adicional em cascata por estar abaixo de 0, mas o valor real permanece negativo/zerado para todos os outros efeitos.

### Teste de Atributo

**Rolagem:** `d20 + Atributo` vs **Dificuldade (DT)**

### Distribuição na criação

- Todo personagem começa com **0** em cada atributo (base = 0 pontos totais).
- **3 pontos livres** para distribuir.
- Classes alteram esses valores de forma mais dramática (ver seção 3, Classes), ainda sob os limites de atributos.
- Raças dão um modificador menor, ainda sob os limites de atributos.
- Cada personagem começa com **3 pontos de Sina**, e não pode ultrapassar 3. Cada ponto de Sina pode ser gasto para rerolar um dado, ou escolher 10 e somar modificadores. As únicas formas de ganhar pontos de Sina são fazer uma ação impactante contra o destino do mundo, ou se vincular a um Santuário (ver seção 10, Santuários).

> **Exemplo:** Um personagem começa com 0 em todos os atributos e escolhe a classe Guerreiro e a raça Anão.
> 
> **Guerreiro** — Modificadores de atributo: +4 Força, +2 Vigor, -3 Intelecto, -3 Velocidade. **Anão** — Atributos: +1 Vigor.
> 
> Portanto, ele tem: 4 de Força, 3 de Vigor, -3 de Intelecto, -3 de Velocidade, 0 de Atenção, 0 de Vontade e 0 de Talento, além dos 3 pontos livres para distribuir a sua escolha — caso o modificador da raça faça algum atributo superar o limite inicial de 4, esse +1 é posto no atributo secundário da classe. Por exemplo, caso a raça do exemplo acima desse +1 de Força em vez de Vigor, esse +1 seria posto em Vigor, já que o atributo Força ficaria em 5, superior ao limite inicial.

---

## 2. Valores do personagem e nível

- **PV inicial (nível 1):** 8 + metade de Vigor (arredondado para baixo).
- **Ganho de PV por nível (a partir do 2º):** 6 + metade de Vigor (arredondado para baixo).
- **Mana inicial (nível 1):** 4 + metade de Intelecto (arredondado para baixo).
- **Ganho de Mana por nível (a partir do 2º):** 4 + metade de Intelecto (arredondado para baixo).
- **Espaços de inventário:** 6 + Atributo Talento.
- **Limite de Adornos:** 2 + metade do atributo Talento (arredondado para baixo).
- **Iniciativa base** = 10 + Velocidade. Define a ordem de ação no combate, **sem rolagem** — quem tem o maior valor age primeiro. Em caso de empate, vantagem para quem tiver maior **Atenção** (ver bônus par da tabela, seção 1) — o desempate do sistema é sempre por Atenção, nunca por Velocidade.
- **Defesa base:** sempre **10**, fixa. Nenhum atributo altera a Defesa base — ela só aumenta por armadura e itens. (Atributos entram em jogo apenas nas Reações defensivas, ver seção 5.1/5.2, e nunca de forma permanente.)
- **Movimento:** cada Ação (de Movimento e Padrão) concede, individualmente, **6 espaços de movimento + bônus par de Velocidade** (ver seção 1). Isso significa:
    - Usando só a Ação de Movimento para se deslocar: 6 + bônus de Velocidade.
    - Gastando a Ação Padrão também em deslocamento (em vez de atacar/conjurar/etc.): mais 6 + bônus de Velocidade.
    - Se o jogador gastar as duas Ações em movimento na mesma rodada, os dois valores se somam (até 12 espaços + o bônus de Velocidade contado duas vezes, uma por Ação).
    - O jogador pode preferir gastar apenas a Ação Padrão em movimento (e guardar a Ação de Movimento, ex: para um Talento que a exija livre) — é uma escolha válida, o efeito é o mesmo 6 + bônus de Velocidade.
- **Limite de atributo:** 4 + nível do personagem / 2. Esse teto vale sempre e para tudo que altera um atributo de forma permanente ou semipermanente (pontos de criação, classe, raça, Progressão) — a única exceção são efeitos temporários vindos de magias ou itens (buffs de duração limitada), que podem ultrapassar o limite enquanto durarem. Fora isso, nada supera o teto.
- **XP para o próximo nível:** 10 no 1º nível; a partir daí, cada nível exige **1,5× o valor anterior**, arredondado para cima.

**Usos da Mana:**

- Gastar **1 Mana** → +2 no resultado de um teste (pode ser usado depois de ver o dado).
- Gastar **X Mana** → conjurar magia (custo definido por magia/classe — ver seção 6, Magia).
- Recupera ao descansar (ver seção 8, Descanso e Provisões).

### 2.1. Progressão

O jogo usa **níveis**. A cada nível, o personagem ganha uma quantia de **Pontos de Progressão**, abreviados para **PP**. Podendo os gastar de diferentes formas, como:

- Aumentar atributos;
- Passivas/Ativas do menu inicial de classe que não foram escolhidas na criação;
- **Talentos** — habilidades equivalentes a passivas/ativas, mas exclusivas de progressão (não podem ser escolhidas na criação do personagem). Divididas em Páginas e Andares.

Além disso, todo personagem ganha automaticamente o **Ganho de PV/Mana por nível** definido na seção 2.

### 2.2 Tabelas de progressão

#### Tabela de Progressão de Personagem

|Nível|XP p/ próx. nível|XP total acumulado|PV ganho|Mana ganho|Pontos de Progressão|Limite de Atributo|
|---|---|---|---|---|---|---|
|1|10|0|8 + ½ Vigor (inicial)|4 + ½ Intelecto (inicial)|— (criação)|4|
|2|15|10|6 + ½ Vigor|4 + ½ Intelecto|3|5|
|3|23|25|6 + ½ Vigor|4 + ½ Intelecto|3|5|
|4|35|48|6 + ½ Vigor|4 + ½ Intelecto|3|6|
|5|53|83|6 + ½ Vigor|4 + ½ Intelecto|3|6|
|6|80|136|6 + ½ Vigor|4 + ½ Intelecto|**5**|7|
|7|120|216|6 + ½ Vigor|4 + ½ Intelecto|3|7|
|8|180|336|6 + ½ Vigor|4 + ½ Intelecto|3|8|
|9|270|516|6 + ½ Vigor|4 + ½ Intelecto|3|8|
|10|405|786|6 + ½ Vigor|4 + ½ Intelecto|3|9|
|11|608|1191|6 + ½ Vigor|4 + ½ Intelecto|3|9|
|12|912|1799|6 + ½ Vigor|4 + ½ Intelecto|**5**|10|
|13|1368|2711|6 + ½ Vigor|4 + ½ Intelecto|3|10|
|14|2052|4079|6 + ½ Vigor|4 + ½ Intelecto|3|11|
|15|3078|6131|6 + ½ Vigor|4 + ½ Intelecto|3|11|
|16|4617|9209|6 + ½ Vigor|4 + ½ Intelecto|3|12|
|17|6926|13826|6 + ½ Vigor|4 + ½ Intelecto|3|12|
|18|10389|20752|6 + ½ Vigor|4 + ½ Intelecto|**5**|13|
|19|15584|31141|6 + ½ Vigor|4 + ½ Intelecto|3|13|
|20|— (teto)|46725|6 + ½ Vigor|4 + ½ Intelecto|3|14|

_(PV/Mana ganhos ficam como fórmula, não número fixo, porque dependem de Vigor/Intelecto do personagem — igual já está na seção 2.)_

#### Marcos de liberação — Andares de Talento e Níveis de Magia

|Nível|Libera|
|---|---|
|**1**|Andar 1 de Talento (Iniciante) · Nível de Magia I|
|**6**|Andar 2 de Talento (Avançado)|
|**8**|Nível de Magia II|
|**12**|Andar 3 de Talento (Mestre)|
|**16**|Nível de Magia III (teto de poder mágico)|
|**18**|Andar 4 de Talento (Lendário)|

_(O custo de cada magia em Espaços de Magia, e quantos Espaços cada classe possui, está detalhado na seção 6.5, Espaços de Magia.)_

#### 2.3 Tabela de custo — Pontos de Progressão (por nível)

|Compra|Custo|
|---|---|
|Habilidade de classe não escolhida na criação|Mesmo custo do menu (Leve 1 / Forte 2 / Menor 2 / Maior 4)|
|Talento — Andar 1 (Iniciante)|1 PP|
|Talento — Andar 2 (Avançado)|2 PP|
|Talento — Andar 3 (Mestre)|3 PP|
|Talento — Andar 4 (Lendário)|5 PP|

#### Tabela de Custos de Atributo

|Valor Atual do Atributo|Custo para Aumentar em +1|
|---|---|
|Até +2|1 PP|
|De +3 a +5|2 PP|
|De +6 a +8|3 PP|
|+9 ou mais|4 PP|

#### 2.4 Poderes Heróicos

Nos **Níveis 6, 12 e 18**, além de todos os ganhos normais do nível, o herói recebe **1 Ponto de Poder Heróico**.

- **Regras de Uso:** Esses pontos só podem ser gastos na lista de Poderes Heróicos. Eles **não** podem ser convertidos em XP, pontos de atributo ou qualquer outro recurso.
- **Limite:** Cada Poder Heróico só pode ser adquirido **uma única vez** por personagem.

**Exemplo:**

##### Aura Resplandecente

- **Tipo:** Passiva Heróica
- **Efeito:** Enquanto você estiver com **metade ou mais de sua Vida máxima**, todos os aliados a curta distância que possam ver você recebem **+1 em testes de Confronto e resistência**.
- **Restrição:** Efeito **não cumulativo** (múltiplas fontes deste poder no mesmo grupo não se somam).

#### 2.5 Talentos

Talentos são habilidades passivas ou ativas exclusivas de progressão — ao contrário das habilidades de classe, não existem na criação do personagem. Eles representam técnicas, marcas e poderes que o Herói só desenvolve vivendo a jornada, não algo que já nasce sabendo.

**Estrutura: Páginas × Andares**

Os Talentos são organizados em uma matriz de duas dimensões:

**Andares** — o nível de poder do talento (Iniciante → Avançado → Mestre → Lendário). Definem quando o talento fica disponível e quanto PP custa. Já definidos na seção 2.2/2.3:

|Andar|Nome|Nível mínimo|Custo|
|---|---|---|---|
|1|Iniciante|1|1 PP|
|2|Avançado|6|2 PP|
|3|Mestre|12|3 PP|
|4|Lendário|18|5 PP|

**Páginas** — o tema do talento. Cada Página é uma linha temática que atravessa os quatro Andares, do básico ao lendário. Um personagem pode comprar talentos de qualquer Página, livremente — nada prende o Herói a uma só linha temática. As quatro Páginas propostas:

|Página|Foco temático|
|---|---|
|Rastreador|Percepção, sobrevivência, exploração e domínio do ambiente — achar, perseguir, se mover onde outros não conseguem.|
|Lutador|Combate direto, corpo a corpo e à distância — dano, técnica marcial, controle de posição em confronto.|
|Conjurador|Magia e tudo que gira em torno dela — Reserva de Mana, Espaços de Magia, Redução de Dano Mágica, efeitos arcanos.|
|Poderes Heroicos|Talentos de escala heróica, ligados ao destino e à Ruína — a linha mais rara e situacional das quatro.|

> A Página Poderes Heroicos é uma linha temática de Talentos como as outras três, comprada com PP normalmente — não deve ser confundida com os **Pontos de Poder Heróico** da seção 2.4, que são uma moeda separada, ganha apenas nos níveis 6, 12 e 18 e gasta só na lista fixa de Poderes Heróicos.

---

## 3. Classes e Raças

Cada classe:

- Concede modificadores **impactantes** de atributo (ex: +4/-2, ou +3/+3/-3) — a classe deve definir o personagem, não ser um extra sutil.
- Tem um **orçamento de 4 pontos** para gastar num menu próprio de habilidades:

|Tipo de habilidade|Custo|
|---|---|
|Passiva Leve (bônus pequeno e situacional)|1 ponto|
|Passiva Forte (efeito relevante, sempre ativo)|2 pontos|
|Ativa Menor (custo baixo de Mana/usos limitados, efeito modesto)|2 pontos|
|Ativa Maior (efeito grande, custo alto ou 1x por descanso)|4 pontos|

Não há exigência de "1 passiva + 1 ativa" — um personagem pode ter, por exemplo, quatro Passivas Leves e nenhuma habilidade ativa.

Já Raças são um **flavor** — concedem um modificador de atributo menor (ainda sob os limites de atributos, ver seção 1).



### 3.1 Multiclasse
**Elegibilidade**
- Escolhida **uma única vez por personagem**, a partir do **nível 3**
- A Classe Secundária precisa ser diferente da Primária, óbvio, e  **não pode ser Mestre Animal** como secundária (o Vínculo Selvagem é uma "Passiva Extra Única" fora do menu de 4 pontos, Outras "passivas extra unicas", como a do elementalista, ainda sao ganhas

**O que ela NÃO dá**:
- Nenhum modificador de atributo da classe secundária.
- Nenhum PV/Mana inicial extra dela.
- Nenhum Espaço de Magia grátis dela (se ela for Híbrida/Puro) — quem quiser conjurar por essa via compra Talento de Conjurador normalmente, como qualquer Não Conjurador já pode.

**O que ela dá:**
- Acesso a **comprar** habilidades do menu da classe secundária com PP, usando a **mesma tabela de custo** que já existe (Leve 1 / Forte 2 / Menor 2 / Maior 4 — seção 2.3).

**Limites (pra manter isso como opção, não como "classe dupla"):**

| Regra                                           | Valor                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taxa de entrada (uma vez, ao escolher a Trilha) | 2 PP                                                                                                                                               |
| Máximo de habilidades da secundária compráveis  | 3 (das 4 disponíveis no menu dela)                                                                                                                 |
| Gating de Andar                                 | Só pode comprar uma habilidade da secundária cujo Andar de liberação (seção 2.2) você já tenha alcançado na sua progressão normal — sem furar fila |

---

## 4. Itens

### Raridade de itens

|Raridade|Papel|
|---|---|
|**Comum**|Equipamento comum. Sem bônus.|
|**Incomum**|Pequeno aprimoramento. (+1 **ou** passiva leve.)|
|**Raro**|Primeiro item que realmente muda como você joga.|
|**Lendário**|Item que pode definir uma build inteira ou virar a assinatura de um Herói.|
|**Mítico**|Artefato único, ligado ao destino, à Ruína ou aos Santuários, que altera regras do jogo em vez de apenas aumentar números.|

### Slots de Equipamento

|Slot|Quantidade|
|---|---|
|Cabeça|1|
|Corpo|1|
|Mão Direita|1|
|Mão Esquerda|1|
|Adornos|2 + metade do atributo Talento (arredondado para baixo)|

- **Adornos** englobam tudo que não se encaixa nos slots anteriores — capas, anéis, colares, mochilas, cintos, etc. — não precisam ser mágicos, só ocupam um slot de acessório geral.
- **Armas de duas mãos** ocupam Mão Esquerda + Mão Direita simultaneamente.

### Categorias de Armas

Toda arma pertence a uma das categorias abaixo. A categoria **não determina o atributo utilizado** — cada arma informa em sua própria descrição qual atributo é usado para realizar seus ataques. As categorias existem apenas para organizar equipamentos e servir de requisito para alguns Talentos, habilidades e efeitos.

#### Corpo a Corpo

Armas feitas para combate em curta distância, como espadas, machados, lanças, martelos, adagas e armas semelhantes. São utilizadas para atacar alvos adjacentes e representam a maior parte do arsenal de guerreiros e combatentes.

#### À Distância

Armas capazes de atingir inimigos além do alcance corpo a corpo, como arcos, bestas, fundas e armas de arremesso. Cada arma possui suas próprias regras de alcance, munição e recarga quando aplicável.

#### Canalizadores

Instrumentos capazes de conduzir e amplificar magia, como cajados, grimórios, orbes, varinhas, relicários e outros focos arcanos. Embora muitos também possam ser usados como armas comuns, sua principal função é servir de foco para magias e habilidades mágicas.

#### Auxiliares

Itens que ocupam uma mão (quase sempre a secundária, junto de uma arma de 1 mão em Corpo a Corpo/À Distância/Canalizadora), mas cujo propósito não é o dano direto. Não contam como Corpo a Corpo, À Distância ou Canalizadora pra fins de Talento de categoria — Auxiliares é a sua própria categoria.

---

# Parte 2 — Resolução

## 5. Combate e Ações

**Ações por turno:** 1 Ação padrão + 1 Movimento + 1 Ação Reativa + 1 Bônus (uso de itens, habilidades rápidas, etc.)

### 5.1 Ação **Reativa**

Todo personagem tem **1 Ação Reativa** por rodada, usada para responder a eventos fora do próprio turno (ex: reações defensivas, ver Ataque abaixo). **Atenção** concede a qualquer Reação um bônus adicional igual à **metade de Atenção, arredondado para baixo** — cresce a cada valor par (2 = +1, 4 = +2, 6 = +3...), da mesma forma que os outros bônus pares da tabela da seção 1. Esse bônus se aplica a toda reação executada com a Ação Reativa, não só às listadas em 5.2.

### Ataque

- **Atacante** rola `d20 + atributo definido pela arma` vs **Defesa** (valor fixo, não rolado).
- Cada **arma** define qual atributo o atacante usa no teste (ex: arco curto pode usar Velocidade, arco de mira/besta pode usar Atenção, espada usa Força, etc.).

**Defesa** = valor fixo (10 + bônus de armadura). Não há rolagem do defensor por padrão, e nenhum atributo soma diretamente a esse valor base.

### 5.2 Reações defensivas

Usando a **Ação Reativa** (ver 5.1, acima), o defensor pode responder a um ataque somando um atributo relevante à situação **mais o bônus de Atenção** (par de Atenção, arredondado para baixo — ver 5.1), por exemplo:

- **Esquivar:** soma Velocidade + metade de Atenção à Defesa contra aquele ataque específico.
- **Bloquear (Aparar/Suportar o Golpe):** soma Vigor + metade de Atenção à Redução de Dano daquele ataque.
- Outras reações podem existir, ligadas a classe/talento — todas recebem o mesmo bônus de Atenção.

### Dano

`Dado de dano da arma + atributo relevante`, reduzido pela **Redução de Dano** do alvo (armadura/traços). Existem dois tipos, que não se misturam:

- **Redução de Dano Física:** armadura + bônus par de Força. Reduz dano de ataques físicos (corpo a corpo, à distância).
- **Redução de Dano Mágica:** equivalente mágico (proteções, encantamentos) + bônus par de Vontade. Reduz dano de magias e efeitos mágicos.

_Exemplo: Espada longa 1d8 + Força, menos a Redução de Dano Física do alvo._

> **Piso de dano:** o dano final de um golpe nunca é negativo. Se a Redução de Dano do alvo (mesmo somando penalidades, como as da Maré de Sangue) for maior que o dado de dano rolado, o resultado é sempre 0 — a Redução de Dano nunca vira cura.

### Crítico

- **20 natural:** sempre crítico, independente do total. Ignora a Defesa do alvo (acerto garantido) e o dano é **dobrado** (rola o dado de dano duas vezes).
- **1 natural:** sempre falha crítica, independente do total. Erra automaticamente **e** sofre uma consequência extra (arma emperra, perde equilíbrio, expõe a guarda, etc. — vira uma tabela pequena a ser detalhada).
- Itens/habilidades podem **expandir a margem de crítico** (ex: 19-20, 18-20). Vale para ataques; testes gerais permanecem só no 20 natural.

### Tabela de Falha crítica

Rola **1d10** junto com a falha automática:

|d10|Consequência|
|---|---|
|**1**|**Arma emperra / feitiço falha:** a próxima vez que usar essa arma ou magia neste combate, sofre **-2** no teste de ataque.|
|**2**|**Perde o equilíbrio:** sua **Defesa** fica **-2** até o início do seu próximo turno.|
|**3**|**Guarda exposta:** perde a **Ação Reativa** até o início do seu próximo turno.|
|**4**|**Ferimento próprio:** sofre **1d4** de dano (físico se for arma, mágico se for magia) — ignora Redução de Dano.|
|**5**|**Perde o item da mão / perde o foco:** se for arma, ela cai no chão (precisa de uma Ação Bônus pra recuperá-la); se for magia, o efeito se dissipa e a Mana gasta é perdida mesmo assim.|
|**6**|**Atinge quem não devia:** se houver um aliado ao alcance do ataque, ele sofre metade do dano da arma/magia (sem Redução de Dano); se não houver ninguém por perto, nada além da falha acontece.|
|**7**|**Tropeço:** perde a **Ação de Movimento** do próximo turno.|
|**8**|**Desperdício:** se for ataque à distância, perde **1 munição/carga extra** sem efeito nenhum; se for corpo a corpo ou magia, sofre **-2** na próxima **Iniciativa** por perder o ritmo do combate.|
|**9**|**Abertura:** o próximo inimigo a atacar você neste combate ganha **+2** no teste de ataque contra você (uma única vez).|
|**10**|**Pane total:** combine dois efeitos rolados nesta mesma tabela (role duas vezes, ignorando um segundo 10).|

O Mestre define falhas críticas fora de combate.

### Teste de Confronto

Sempre que a ação de um personagem for oposta diretamente pela ação, resistência ou reação de outro personagem ou criatura (como em uma disputa de força para empurrar um portão mantido por um guarda, uma disputa de furtividade contra percepção, ou uma reação defensiva), realiza-se um **Teste de Confronto**.

#### Como Resolver:

1. **Atacante (ou Iniciador):** Rola `d20 + Atributo Relevante`.
2. **Defensor (ou Reator):** Rola `d20 + Atributo Relevante`.
3. O lado com o **maior resultado total** vence o confronto.

#### Regra de Empate (Vantagem do Defensor)

Caso os totais finais de ambos os lados sejam **idênticos**, a prioridade é sempre de quem está se defendendo ou reagindo. **Em caso de empate, o Defensor vence o confronto.**

> **Nota:** Se a disputa não possuir uma divisão clara de "Atacante" e "Defensor" (ex: dois personagens correndo para agarrar a mesma relíquia do chão ao mesmo tempo), o empate é resolvido pela maior **Atenção base** dos envolvidos, mantendo a coerência com a regra de desempate do sistema (ver Iniciativa, seção 2).

### Maré de Sangue

A cada **2 rodadas completas** de combate, todos os presentes recebem cumulativamente:

- **-2** na Defesa
- **-2** na Redução de Dano
- **+2** de dano fixo nos ataques

Escala até um **teto de 3 estágios** (atingido na 6ª rodada); depois disso, o efeito permanece fixo nesse patamar enquanto o combate continuar. Representa o combate ficando mais selvagem e descontrolado quanto mais se arrasta — pressiona o grupo a resolver o confronto em vez de prolongá-lo indefinidamente.

> A Redução de Dano perdida pela Maré de Sangue segue a mesma regra da seção Dano, acima: pode reduzir a RD do alvo até 0, mas o dano final de um golpe nunca é negativo.

### Passos de Dado

Certos efeitos podem aumentar ou diminuir a categoria de um dado. Essa variação segue a **Escala de Passos**:

> **1d2 → 1d4 → 1d6 → 1d8 → 1d10 → 1d12**

- **Aumentar um passo:** Avance um degrau para a direita na escala (ex: 1d6 vira 1d8).
- **Diminuir um passo:** Recue um degrau para a esquerda na escala (ex: 1d8 vira 1d6).
- **Acima de 1d12:** Cada passo adicional após o 1d12 acrescenta +1d2 e inicia um novo ciclo de evolução individual (ex: 1d12 + 1 passo → 1d12 + 1d2 → 1d12 + 1d4, e assim por diante).

### Alcance

- **Adjacente:** um alvo ou espaço imediatamente ao seu lado (0–1 espaço).
- **Alcance de Toque:** afeta apenas um alvo Adjacente que você consiga tocar fisicamente — como Adjacente, mas exige contato direto (usado por magias/habilidades de cura, drenar, etc. que não fazem sentido à distância).
- **Alcance Curto:** até 6 espaços de distância.
- **Alcance Médio:** além do Curto, até 12 espaços de distância.
- **Alcance Longo:** além do Médio, até 24 espaços de distância.
- **Fora de Alcance:** além de 24 espaços — nenhuma arma, magia ou habilidade padrão alcança, salvo indicação contrária.

Cada arma, magia ou habilidade define qual dessas faixas usa (já mencionado na seção de Categorias de Armas) — essas cinco categorias são só o vocabulário compartilhado; os números específicos de cada fonte podem variar se o item disser explicitamente.

### Luz e Escuridão

**Fontes de Luz:** cada fonte (tocha, lanterna, magia) ilumina em faixas, espelhando o Alcance:

- **Luz Plena:** área bem iluminada — luz do dia, fogueiras próximas, magia de luz. Nenhum efeito mecânico.
- **Penumbra:** área parcialmente escura — crepúsculo, luar, borda de uma tocha. Testes de Atenção baseados em visão sofrem -2; quem está na Penumbra recebe +2 em testes de Furtividade contra observadores em Luz Plena.
- **Escuridão Total:** ausência completa de luz. Sem um sentido que veja no escuro, o personagem só pode atacar ou mirar alvos em Alcance de Toque ou Adjacente, e qualquer teste de Atenção baseado em visão falha automaticamente contra algo além disso.

Criaturas com Visão no Escuro (traço de raça/talento) ignoram os efeitos da Penumbra e da Escuridão Total normalmente.

---

## 6. Magia

Magia em Sina de Ferro usa os mesmos motores que já existem no sistema — ataque, dano, Redução de Dano Mágica, testes de Atributo — em vez de criar um sistema paralelo. Toda magia se enquadra em uma de duas categorias de resolução: Magia de Dano (funciona como um ataque) ou Magia de Controle (o alvo resiste). Magias naturalmente usam Ações Padrões, a não ser que algo diga o contrário.

### 6.1 Magia de Dano

Resolve exatamente como um ataque físico (ver seção 5, Ataque), trocando o atributo do conjurador:

- Conjurador rola `d20 + Vontade ou Intelecto` (propriedade de cada magia — algumas usam Vontade, outras Intelecto, dependendo da natureza do efeito) vs Defesa do alvo.
- Dano: Dado de dano da magia + atributo usado na conjuração, reduzido pela Redução de Dano Mágica do alvo.
- Regras de Crítico (seção 5, Crítico) se aplicam normalmente: 20 natural ignora Defesa e dobra o dano; 1 natural falha automaticamente e sofre uma consequência extra.

_Exemplo: Lança de Gelo — 2d6 + Intelecto, custo 2 Mana, dano reduzido pela Redução de Dano Mágica do alvo._

### 6.2 Magia de Controle

Para efeitos que não causam dano diretamente — medo, atordoar, enfraquecer, enfeitiçar — o alvo resiste, em vez do conjurador atacar:

- Alvo rola `d20 + Atributo relevante` (normalmente Vontade, mas pode variar conforme a magia) vs DT = 10 + Atributo de conjuração do conjurador (o mesmo Vontade ou Intelecto usado em 6.1).
- Sucesso do alvo: resiste ao efeito (algumas magias podem prever um efeito parcial em caso de sucesso — a definir por magia).
- Falha do alvo: sofre o efeito descrito pela magia.
- O alvo pode gastar 1 Mana para +2 no próprio teste de resistência, como em qualquer teste (ver seção 2, Vida e Mana) — inclusive depois de ver o dado.
- Testes de resistência são testes gerais, não ataques: 20 natural sempre sucede, mas a margem de crítico não se aplica (ver seção 5, Crítico).

_Exemplo: Grito do Vazio — alvo resiste com Vontade ou fica Amedrontado por 1 rodada, custo 2 Mana._

Efeitos como o que acontece ao resistir, duração, etc., são especificados na magia em si.

### 6.3 Custo em Mana

Cada magia define seu próprio custo fixo em Mana (ver seção 2, Vida e Mana), normalmente escalando com a força do efeito: controle leve ou dano baixo custa pouco, efeitos devastadores custam Reserva significativa. Não há fórmula universal.

### 6.4 Escala de Poder

- **Escala automática por Atributo:** dano e DT de resistência já crescem sozinhos conforme o personagem investe em Vontade/Intelecto ao subir de nível.
- **Sobrecarga (opcional):** o conjurador pode gastar Mana extra, além do custo base, no momento de conjurar, pra intensificar o efeito — ex: +1 Mana extra = +1d6 de dano, ou +1 rodada de duração num efeito de controle. Isso é literalmente a mesma lógica que já se usa em "gastar Mana por benefício direto" (seção 2), só aplicada à própria magia em vez de a um teste genérico.

### 6.5 Níveis de Magia e Aprendizado

Toda magia pertence a um de três Níveis de Magia: I, II ou III — uma escala de poder independente do Nível do personagem, que representa o quão avançada/exigente aquela magia é de conjurar.

- **Nível de Magia I:** efeitos básicos, custo baixo de Mana.
- **Nível de Magia II:** efeitos intermediários, custo moderado.
- **Nível de Magia III:** efeitos avançados, custo alto — o teto de poder mágico do sistema.

Um personagem só pode conhecer magias dentro do seu limite de Nível de Magia liberado. Na criação, o conjurador começa liberado apenas para Nível de Magia I. Conforme sobe de Nível como personagem (ver seção 2.1, Progressão), o Mestre/sistema libera Níveis de Magia mais altos, junto com os pontos de Atributo/Talento que o personagem já ganha a cada Nível (ver tabela de marcos, seção 2.2).

Magias conhecidas vs magias conjuráveis: conhecer uma magia não gasta Mana — o custo em Mana (seção 6.3) só é pago no momento de conjurar. O limite de **Espaços de Magia**, abaixo, controla quantas e quais magias o personagem sabe, não quantas vezes pode usá-las por dia (isso já é regulado pela Reserva de Mana).

#### Espaços de Magia

Cada magia conhecida ocupa uma quantidade de Espaços de Magia de acordo com seu Nível:

|Nível da Magia|Custo em Espaços de Magia|
|---|---|
|Nível I|1|
|Nível II|2|
|Nível III|4|

O total de Espaços de Magia que um personagem possui depende do tipo de classe e cresce com o Nível.

#### Espaços de Magia Iniciais por Classe (criação)

|Tipo de Classe|Espaços de Magia grátis|
|---|---|
|Não Conjurador|0|
|Híbrido|2|
|Puro|4|

#### Crescimento por Nível

|Marco|Puro|Híbrido|
|---|---|---|
|Nível 4|+1 Espaço|—|
|Nível 6|+1 Espaço|+1 Espaço|
|Nível 8|+1 Espaço|—|
|Nível 12|+1 Espaço|+1 Espaço|
|Nível 16|+1 Espaço|—|
|Nível 18|+1 Espaço|+1 Espaço|

Além dos ganhos automáticos acima, qualquer conjurador pode comprar Espaços de Magia extras gastando Pontos de Progressão em Talentos (ver seção 2.5, Talentos).

- **Conjuradores puros** (identidade 100% em cima de magia) começam com mais Espaços — o suficiente pra montar um repertório funcional de saída sem tocar em Talento nenhum, deixando os PP livres pra ir em Reserva de Mana, RD Mágica, Rastreador, ou o que fizer mais sentido pra build.
- **Híbridos** (Bardo, Paladino — magia é parte da identidade, não o todo) começam com menos, só pra não ficarem zerados, mas ainda incentivados a comprar Ampliar Repertório se quiserem ir mais fundo na parte mágica da build.
- **Não-conjuradores** ficam em 0 — continuam podendo comprar Talentos de Conjurador normalmente (nada impede um Guerreiro de pegar 1-2 magias utilitárias), só não ganham de graça, porque não é a proposta da classe.

### 6.6 Efeitos Elementais (regra opcional)

Alguns ataques, magias e itens causam dano associado a um elemento (Fogo, Raio, Gelo, Terra, Água...). Por padrão, causar dano de um elemento não aciona nada além do dano em si — o Efeito Elemental só acontece quando a fonte (magia, arma, habilidade de monstro) diz explicitamente que "aplica o Efeito Elemental de [Elemento]".

**Como resolver:**

1. O ataque/magia precisa acertar (ou, no caso de Magia de Controle, o alvo precisa falhar no teste de resistência) primeiro.
2. Se a fonte aplica um Efeito Elemental, o alvo faz um teste de Vigor (salvo se a fonte indicar outro Atributo) vs a mesma DT/teste de ataque já usado no golpe.
3. Falha: sofre o efeito do elemento, abaixo. Sucesso: só o dano normal, sem efeito extra.
4. Efeitos elementais não empilham duração — reaplicar o mesmo efeito no mesmo alvo apenas reinicia a duração, nunca soma (dano contínuo não dobra, penalidades não acumulam), a menos que a fonte diga o contrário.

**Fogo — Queimando** O alvo pega fogo: sofre 1d4 de dano fixo de fogo no início de cada um dos seus turnos, por 2 rodadas. Pode ser apagado antes do fim gastando a própria Ação para se jogar no chão e rolar, ou entrando em água/neve.

**Raio — Choque** O alvo sofre -2 em todos os testes que fizer por 1d2 turnos.

**Gelo — Frágil** O alvo perde -2 de Redução de Dano (Física e Mágica) até o início do seu próximo turno.

**Terra — Lentificado** O alvo sofre -1 espaço de deslocamento e -1 na Defesa por 2 rodadas.

**Água — Exposto** Por 1d3 turnos, o alvo perde qualquer imunidade completa que tenha (a doenças, veneno, medo, condições específicas, etc.) — não afeta Redução de Dano nem resistências parciais, só imunidade total.

**Ácido — Corroído** O alvo perde **-1 Redução de Dano Física** (a armadura ou pele derrete parcialmente no contato) até o **fim do combate**. Diferente dos outros Efeitos Elementais, esse dura o combate inteiro em vez de só até o próximo turno — mas, seguindo a regra 4 acima, reaplicar o efeito no mesmo alvo não soma um segundo -1, só reinicia a duração.

**Veneno — Envenenado** O alvo sofre **desvantagem em testes de Força e Vigor**, além de **1d4 de dano fixo de veneno** no início de cada um dos seus turnos, por **2 rodadas**. Pode ser removido antes do fim da duração por qualquer efeito que cure veneno (magia, item, ou talento com essa função).

---

## 7. Morte e Salva-Guarda

Na criação, o jogador escolhe **2 atributos** como **Salva-Guardas**.

**Ao zerar os PV:**

1. Rola um dos dois Salva-Guardas (escolha do jogador no momento) vs uma **DT escalável**:
    - DT base = **10**
    - **+3** para cada vez que esse personagem já **sobreviveu** a um teste de Salva-Guarda desde o último descanso completo ou revivência.
    - **+2 opcional** se o golpe que zerou o PV foi excepcionalmente grave (ex: dano recebido foi o dobro do PV máximo, ou veio de ataque especial/crítico de inimigo forte).
2. **Sucesso:** sobrevive com 1 PV, mas sofre **-2 de Forma Duradoura** no atributo usado (cumulativo) até o próximo descanso completo.
3. **Falha:** o personagem **morre**. Só pode ser revivido em **pontos específicos do mundo** (santuários, NPCs, itens raros), pagando um custo (ouro, item, favor, ou algo mais caro dependendo do local).

> Se o personagem estiver vinculado a um Santuário no momento da falha, o vínculo altera esse resultado — ver seção 10, Santuários.

---

# Parte 3 — Mundo e Campanha

## 8. Descanso e Provisões

**Provisões** representam comida, água potável e suprimentos básicos de sobrevivência — um recurso abstrato, não um item rastreado peça por peça.

- **Ração:** unidade de compra e transporte. **1 Ração = 5 unidades de Provisões**, ocupa **1 espaço de inventário** (ver seção 2, Espaços de inventário).
- **Preço base:** 1 Ração custa **1 moeda de Ouro (CO)**, sujeito ao mesmo **multiplicador de preços por Faixa de Ruína** já definido na seção 11.3 — não existe uma tabela de preço separada só pra Provisões.
- **Forragem:** durante uma viagem, um personagem "de sobra" (ver seção 9.2.1, opção **Buscar extra**) pode tentar achar Provisões em vez de item/atalho/pista. Sucesso no teste: encontra **1d3 unidades** de Provisões. Não consome Ração nem espaço de inventário até ser formalmente empacotada num momento de descanso.

### 8.1 Descanso Curto

- **Requisitos:** lugar calmo, mínimo de 15 minutos, **1 unidade de Provisões** por personagem.
- **Teste de Atenção** vs DT 13 (Médio) + nível de perigo da zona para não ser emboscado.
- A cada Descanso Curto realizado desde o último Descanso Longo, **após o primeiro**, esse teste recebe **-2 cumulativo** (2º descanso curto = -2, 3º = -4, e assim por diante). O contador reseta ao realizar um Descanso Longo.
- **Recuperação:** rola **1 Dado de Vida (1d8) + Vigor** de PV, e **1 Dado de Mana (1d6) + Vontade** de Mana.

### 8.2 Descanso Longo

- **Requisitos:** estrutura mais robusta — fogueira, quarto de hospedaria, barraca, etc., mínimo de 8 horas.
- Gasta **3 unidades de Provisões** por personagem (o triplo do Descanso Curto).
- **Teste de Atenção** vs DT 15 + nível de perigo da zona.
- **Recuperação:** PV e Mana totalmente restaurados, remove condições negativas, remove **toda** a penalidade de Forma Duradoura acumulada nos dois atributos de Salva-Guarda (não só no último usado), e reseta tanto o contador de escaladas de Salva-Guarda quanto o contador de Descansos Curtos.

### 8.3 Falta de Provisões

Se o grupo não tiver unidades suficientes pra cobrir o custo de um Descanso, o Descanso **ainda ocorre normalmente na duração** (não impede a ação), mas:

- A **recuperação de PV e Mana** daquele Descanso é **reduzida à metade, arredondado para baixo** — inclusive num Descanso Longo, que normalmente restaura tudo.
- Um Descanso Longo sem Provisões suficientes **não remove** a penalidade de Salva-Guarda nem reseta os contadores (de escalada de Salva-Guarda e de Descansos Curtos) — o corpo descansa, mas o desgaste acumulado continua.

---

## 9. Viagem e Zonas

O mundo de Sina de Ferro é dividido em **Zonas**: trechos de território que variam livremente em tamanho e escala — uma Zona pode ser uma floresta inteira, uma única masmorra, uma vila e seus arredores, ou uma estrada perigosa entre dois pontos. **O que define uma Zona não é a distância, é o conteúdo**: uma Zona existe porque tem algo relevante dentro dela — um perigo, um objetivo, um Templo, um Artifício, um Arauto, um Santuário. Território sem conteúdo relevante não vira Zona, é só a viagem entre elas. Mas o tempo necessário de ir de uma zona para outra pode variar bastante.

### 9.1 Estrutura de uma Zona

Cada Zona é definida por, no mínimo:

- **Nome e conceito** — o que é essa Zona em uma frase (ex: "Vinharia Afogada — adega submersa onde um Arauto se esconde").
- **Perigo(s) presente(s)** — encontros, armadilhas, ou ameaças ambientais.
- **Pontos de interesse** — Santuários (ver seção 10), Templos, Artifícios, NPCs, segredos.
- **Estado de Corrupção** — se a Zona está limpa, ameaçada, ou Corrompida pela Ruína (ver seção 9.3).

### 9.2 Viajar entre Zonas

Viajar de uma Zona para outra é feito através de uma **Rota**. Cada Rota possui três características:

- **Tempo** — quantos trechos precisam ser percorridos até chegar ao destino.
- **Perigo** — define a tabela de eventos utilizada durante a viagem.
- **Recursos** — indica quais tipos de oportunidades, recompensas ou descobertas podem ser encontrados naquela rota.

**Exemplos de Rota:**

> **Estrada Real** Tempo: 2 Perigo: Baixo Recursos: Mercadores, pouco saque.

> **Floresta Negra** Tempo: 1 Perigo: Alto Recursos: Ervas raras, tesouros, atalhos.

#### 9.2.1 Trechos da Viagem

Cada ponto de **Tempo** representa um **Trecho** da viagem. Ao atravessar um Trecho, o grupo deve obter a quantidade de sucessos exigida pela Rota. Cada sucesso é obtido através de um **Teste de Atributo**, usando os atributos determinados pelo Mestre conforme o terreno e os desafios daquele caminho.

Uma estrada bem conservada pode exigir apenas **2 sucessos**, enquanto uma travessia por montanhas, pântanos ou florestas amaldiçoadas pode exigir **3 ou 4 sucessos**, distribuídos entre atributos diferentes.

Exemplos:

- Estrada: Atenção e Vigor.
- Floresta: Atenção, Velocidade e Vontade.
- Montanha: Força, Vigor, Atenção e Intelecto.

Esses testes de trechos de viagem são chamados de **"Testes de Jornada"**.

Um mesmo personagem não pode realizar mais de um teste no mesmo Trecho, exigindo que todo o grupo participe da jornada.

**Falta de jogadores.** Se o grupo tiver menos personagens presentes do que sucessos exigidos pelo Trecho, cada sucesso sem alguém pra cobrir precisa ser resolvido de um dos dois jeitos, à escolha de quem for cobrir a lacuna:

- **Teste forçado:** um personagem que já testou nesse Trecho pode se voluntariar pra um **segundo teste**, sofrendo **-4** nele. Cada personagem só pode se forçar a testar duas vezes no mesmo Trecho — se ainda sobrar sucesso sem cobertura depois disso, o grupo precisa aceitar o desgaste abaixo.
- **Desgaste:** em vez de forçar outro teste, o grupo aceita a lacuna e um personagem à escolha do grupo perde **1d4 + Nível** de PV — dano de exaustão, ignora Redução de Dano (não é combate, é o corpo cobrando o preço do esforço).

**Sobra de jogadores.** Se o grupo tiver mais personagens do que sucessos exigidos, cada personagem "de sobra" escolhe uma das opções abaixo por Trecho:

- **Auxiliar:** soma **apenas o bônus de atributo** (sem rolar) ao teste de um companheiro que ainda vai testar naquele Trecho.
- **Buscar extra:** faz um teste à parte (atributo definido pelo Mestre conforme a oportunidade do momento) tentando achar algo a mais na viagem — item, atalho, pista. Não conta pro limite de sucessos do Trecho; é só uma chance bônus.

#### 9.2.2 Resultado do Trecho

Independentemente do resultado dos testes, a viagem sempre avança. Os sucessos obtidos determinam apenas o custo da travessia.

- **Todos os sucessos obtidos:** o grupo atravessa o Trecho sem complicações.
- **Faltou 1 sucesso:** o Mestre aplica uma complicação leve (como consumir Provisões extras, sofrer atraso ou enfrentar terreno difícil).
- **Faltaram 2 ou mais sucessos:** além da complicação, um Evento da Rota é resolvido.

Após resolver o Trecho, o grupo reduz o Tempo restante da Rota em 1 e inicia o próximo Trecho, até chegar à Zona de destino.

#### 9.2.3 Eventos da Rota

Ao final de cada Trecho, o Mestre consulta a **Tabela de Eventos** correspondente ao nível de Perigo da Rota. Esses eventos representam acontecimentos ocorridos durante a viagem, como emboscadas, mudanças climáticas, viajantes, tesouros, armadilhas ou descobertas. Cada Rota utiliza uma tabela própria, reforçando sua identidade e tornando diferentes caminhos experiências distintas.

**Tabela de Eventos — Perigo Baixo (1d10)**

|d10|Nome|Efeito|
|---|---|---|
|1|**Estrada Tranquila**|Nada acontece — o trecho passa sem incidentes.|
|2|**Mercador de Passagem**|Um comerciante itinerante cruza o caminho; oferece 1d3 itens Comuns/Incomuns a preço normal (ver seção 12).|
|3|**Marco Desgastado**|Um marco de pedra indica um atalho: reduz o Tempo da próxima Rota em 1, se o grupo optar por segui-lo agora.|
|4|**Viajante Perdido**|Um NPC pede ajuda ou informação — só narrativa, sem custo mecânico direto.|
|5|**Clima Ameno**|Nenhum efeito mecânico; oportunidade de diálogo/roleplay entre o grupo.|
|6|**Vestígios de Caça**|Sinais de uma criatura na região — Teste de Atenção (DT 12): sucesso revela uma trilha até um pequeno bônus de Forragem (1d3 Provisões extras, ver seção 8).|
|7|**Pequeno Reparo Necessário**|Uma roda solta, uma correia arrebentada — gasta 1 unidade de Provisões extra ou perde 1 espaço de Tempo do dia (a critério do grupo).|
|8|**Encontro Pacífico**|Uma criatura ou grupo neutro aparece; pode ser evitado ou abordado, sem hostilidade inicial.|
|9|**Achado Simples**|O grupo encontra um item Comum largado ou esquecido.|
|10|**Sinal Distante de Corrupção**|O grupo é atacado por um bando fraco.|

**Tabela de Eventos — Perigo Médio (1d10)**

|d10|Nome|Efeito|
|---|---|---|
|1|**Emboscada Leve**|1-2 inimigos comuns atacam de surpresa; primeira rodada de combate com desvantagem de Iniciativa pro grupo.|
|2|**Mercador Itinerante**|Chance de item Raro à venda (ver 12.6), preço normal +10% pelo risco da rota.|
|3|**Terreno Traiçoeiro**|Teste de Velocidade ou Atenção (DT 14): falha custa 1 unidade extra de Provisões ou força Descanso Curto não planejado.|
|4|**Restos de uma Caravana**|Uma caravana anterior foi atacada — saque possível (1d2 itens Incomuns), mas Teste de Atenção (DT 13) pra notar se o perigo que a atacou ainda ronda a área.|
|5|**Criatura Territorial**|Um predador defende seu território; pode ser evitado com Teste de Furtividade/Atenção (DT 14) ou vira combate.|
|6|**Tempestade Repentina**|Reduz visibilidade — próximo Teste de Jornada do grupo sofre -2.|
|7|**Refugiados**|Um pequeno grupo de fugitivos de uma Zona Corrompida próxima pede ajuda ou passagem — gancho narrativo, possível recompensa se ajudados.|
|8|**Armadilha Natural**|Buracos, areia movediça, ponte podre — Teste de Atenção (DT 14): falha causa 1d4 de dano a quem estiver na frente do grupo.|
|9|**Zona de Forragem Rica**|Teste de sobra (ver 9.2.1, Buscar extra) nesse trecho tem vantagem — Provisões encontradas dobradas em caso de sucesso.|
|10|**Sinais de Arauto**|Rastros ou destruição recente indicam que um Arauto da Ruína (seção 11.2) passou por ali — não é encontro, é pista.|

**Tabela de Eventos — Perigo Alto (1d10)**

|d10|Nome|Efeito|
|---|---|---|
|1|**Emboscada Pesada**|2-3 inimigos fortes ou 1 elite ataca de surpresa; grupo começa em desvantagem (sem Ação Reativa na primeira rodada).|
|2|**Mercador Especializado**|Chance de item Lendário à venda (ver 12.6) — raro, caro, pode não se repetir na campanha.|
|3|**Colapso do Terreno**|Ponte cai, desfiladeiro se abre, etc. — Teste de Força ou Velocidade (DT 16): falha causa 2d4 de dano e perda de 1 espaço de inventário (item cai/se perde).|
|4|**Zona de Influência da Ruína**|O grupo cruza brevemente uma área sob efeito de Ruína ativa — aplicam-se, só durante o trecho, os bônus de combate da Faixa de Ruína atual (seção 11.3) a qualquer encontro que ocorra ali.|
|5|**Seguidores da Ruína em Trânsito**|Um grupo de Seguidores é avistado escoltando algo (Artifício? prisioneiro?) — pode ser ignorado, seguido ou enfrentado; se enfrentado, é um combate real, não emboscada leve.|
|6|**Tempestade Violenta**|Próximo Descanso (Curto ou Longo) nesta Rota tem seu custo de Provisões dobrado.|
|7|**Predador Alfa**|Uma criatura muito mais forte que o normal da região aparece — o Mestre pode tratar como combate opcional de alto risco/alta recompensa, ou apenas uma perseguição a ser evitada.|
|8|**Ruína a Céu Aberto**|Um Artifício ou vestígio de Arauto é avistado à distância — não é encontro obrigatório, mas abre a possibilidade de um desvio da Rota pra investigar.|
|9|**Colheita Perigosa**|Recursos raros (ervas, minérios) estão ali, mas guardados por um perigo ambiental ou criatura — Teste de Confronto ou Atributo (DT 16) define se o grupo consegue coletar sem incidente.|
|10|**Marca da Corrupção Avançando**|Um sinal claro e imediato de que uma Zona próxima está prestes a Corromper (ver seção 9.3) — o Mestre pode usar isso como gatilho de urgência: se o grupo não agir logo, a Zona cai.|

### 9.3 Corrupção de Zona

Zonas próximas a fontes de Ruína (Artifícios ativos, Arautos, Templos destruídos) podem se tornar **Zonas Corrompidas**. Uma Zona Corrompida:

- Aumenta a DT de testes de Atenção durante viagem e descanso na região;
- Pode elevar o custo de Provisões ali (ver seção 11.3);
- Pode substituir ou fortalecer os perigos originais da Zona por versões mais hostis.

Destruir a fonte de Ruína ligada a uma Zona Corrompida (o Artifício protegido nela, o Arauto que a assombra) **limpa a Zona** — reverte seus efeitos, refletindo no mapa o progresso concreto dos heróis contra o fim do mundo.

---

## 10. Santuários e Templos

### 10.1 Santuários

Santuários são estruturas espalhadas pelo mapa que podem ser encontradas.

- Um personagem pode se vincular a **um único santuário** por vez.
- Enquanto vinculado, recebe **bônus fixos** definidos por aquele santuário específico, seja mais vida, mana, atributos, etc.
- Ao se conectar a um santuário, o personagem recupera **integralmente** PV, Mana, pontos de Sina, remove condições negativas, e reseta o contador de escaladas de Salva-Guarda.
- O vínculo funciona **à distância** (ligação mística, não é necessário estar fisicamente no santuário para ele proteger o personagem).
- Se o personagem **falhar** num teste de Salva-Guarda (o que normalmente resultaria em morte — ver seção 7), o **santuário vinculado é destruído em seu lugar**: o personagem sobrevive automaticamente com 1 PV, sem custo de revivência — mas perde todos os bônus fixos e a possibilidade de usar aquele santuário nunca mais, e o nível de Ruína do mundo aumenta em **1**. Mas pode futuramente se vincular a outro.
    - **Penalidade de atributo não se aplica:** o -2 de Forma Duradoura no atributo que normalmente acompanha um sucesso no teste de Salva-Guarda (seção 7) não ocorre quando o Santuário absorve uma falha. O sistema trata esse caso como se o teste de Salva-Guarda nunca tivesse acontecido — o personagem só paga o preço do Santuário (bônus perdidos, Ruína +1, e a penalidade permanente ao grupo descrita abaixo), não o preço de atributo.
    - **Marca permanente:** além da Ruína, a queda de um santuário deixa uma cicatriz no mundo que **todo o grupo** sente — não só quem estava vinculado. Cada Santuário define, na própria ficha (ver módulo Conteúdo, Santuários), uma penalidade fixa e **permanente** que todos os personagens do grupo sofrem ao perdê-lo, relacionada ao bônus que ele concedia. Essa penalidade **não é removida por Descanso Longo** nem por nenhum outro meio de recuperação padrão — é permanente, e se **acumula** caso mais santuários sejam perdidos ao longo da campanha.
        - **Régua de calibragem (não é fórmula obrigatória):** ao criar um Santuário nas anotações da campanha, uma referência prática é usar cerca de **1/5 do valor do bônus fixo** concedido (arredondado para baixo, mínimo de 1) como ponto de partida pra penalidade. Ex: um santuário de +10 PV máximo sugere algo em torno de -2 PV máximo permanente ao grupo — mas o Mestre pode ajustar pra cima ou pra baixo conforme o quão significativo aquele santuário é pra narrativa e pro jogo.

### 10.2 Templos

Enquanto o Santuário é pessoal (um vínculo entre o mundo e um personagem específico), o Templo é **territorial** — ligado a uma Zona ou a um pequeno grupo de Zonas, não a um jogador.

- Um Templo não tem ficha própria, não concede bônus a personagens, e ninguém se vincula a ele. Sua única função mecânica é **manter a Zona (ou Zonas) sob sua proteção livre de Corrupção** (ver seção 9.3, Corrupção de Zona).
- Enquanto o Templo responsável por uma região está de pé, aquela Zona resiste a se tornar Corrompida (a critério do Mestre — ex: DT mais alta para o gatilho de Corrupção, ou a Zona simplesmente não corrompe enquanto o Templo existir).
- Se o Templo **cai** — destruído por forças da Ruína, ou perdido por negligência dos jogadores — dois efeitos acontecem imediatamente:
    - A(s) Zona(s) sob sua proteção **tornam-se Corrompidas** de imediato (seção 9.3).
    - A Ruína do mundo aumenta em **1**, fora do ritmo natural do tempo (ver seção 11.1) — mesmo efeito de um Santuário destruído.
- Diferente do Santuário, que é achado e perdido por consequência de uma falha individual, o Templo é o tipo de marco que o grupo pode **defender ativamente** — dá ao Mestre um gancho natural de "cheguem a tempo ou percam a região", sem precisar de nenhuma mecânica nova além das que já existem (Corrupção de Zona e Ruína).

---

## 11. Ruína

O mundo de Sina de Ferro está morrendo. A **Ruína** é um medidor universal e cumulativo que representa o colapso do mundo — compartilhado por toda a campanha, não por personagem. Quanto maior a Ruína, mais hostil, caro e perigoso o mundo se torna. O objetivo final da campanha é impedir que a Ruína chegue ao fim e destrua o mundo.

> Use o Rastreador de Ruína interativo na mesa para acompanhar o contador, os Descansos Longos e a faixa de efeitos atual sem precisar calcular nada na mão.

### 11.1 O que aumenta a Ruína

- **Descanso Longo:** a cada **3 Descansos Longos** realizados pelo grupo (contagem da campanha, não por personagem), a Ruína aumenta em **1**. É o motor principal do medidor — o mundo piora mesmo que os heróis não façam nada, e descansar para se recuperar tem um custo real ao mundo.
- **Templos e Santuários destruídos:** quando um Templo ou Santuário protetor cai (ver seção 10), a Ruína aumenta em **1**, fora do ritmo natural do tempo. Representa uma perda concreta de proteção no mundo, não uma contagem abstrata.

### 11.2 O que reduz a Ruína

Espalhados pelo mundo existem duas ameaças ativas, ligadas à Ruína, que os heróis podem derrotar:

- **Arautos da Ruína:** seres vivos, servos ou avatares da Ruína. Derrotar um Arauto reduz a Ruína em **1**.
- **Artifícios da Ruína:** objetos protegidos por Seguidores da Ruína. Destruir um Artifício (o que normalmente exige derrotar seus guardiões) reduz a Ruína em **1**.

Cada Arauto e cada Artifício destruído é único — não voltam a aparecer. Isso significa que a campanha tem, desde o início, um número finito de fontes de redução: o Mestre sabe quantos Arautos e Artifícios existem no mundo, e isso define quanto "fôlego" os jogadores têm contra o avanço do tempo.

### 11.3 Efeitos da Ruína

Conforme a Ruína sobe, o mundo rui em duas frentes: as ameaças ficam mais fortes, e o mundo ao redor piora por conta própria.

##### Combate

Todas as ameaças do mundo (monstros, inimigos comuns, criaturas corrompidas) recebem bônus cumulativos, por faixa:

|Faixa|Ruína|Dano|Ataque|Vida (PV)|
|---|---|---|---|---|
|0|0|—|—|—|
|1|1–3|+1 dado de dano|+10% do Ataque base (mín. +1)|+10% do PV máximo|
|2|4–6|+2 dados de dano|+20% do Ataque base (mín. +1)|+20% do PV máximo|
|3|7–9|+3 dados de dano|+35% do Ataque base (mín. +2)|+35% do PV máximo|
|4|10–12|+4 dados de dano|+55% do Ataque base (mín. +3)|+55% do PV máximo|

> Bônus de Vida calculados sobre o **PV máximo da ficha do inimigo** (arredondado para baixo), não sobre Atributos — consistente com o módulo Bestiário, onde inimigos não derivam PV de Vigor.

|Faixa|Dano (Seguidor)|Ataque (Seguidor)|Vida (Seguidor)|
|---|---|---|---|
|1|+0|+0|+0|
|2|+1 dado|+10% do Ataque base (mín. +1)|+10% do PV máximo|
|3|+2 dados|+20% do Ataque base (mín. +1)|+20% do PV máximo|
|4|+3 dados|+35% do Ataque base (mín. +2)|+35% do PV máximo|

_Seguidores recebem uma versão contida da mesma curva — eles existem para serem numerosos, não para rivalizar em dureza com as ameaças principais da faixa._

> **Nota de leitura:** as duas tabelas usam a mesma coluna Faixa, mas com timing diferente — os Seguidores começam zerados na Faixa 1 e só passam a escalar a partir da Faixa 2, ou seja, ficam sempre uma Faixa atrás das ameaças principais. É intencional (a curva contida citada acima), não um erro de tabela.

##### Mundo e economia

Além do combate, a Ruína também degrada o mundo como um todo:

|Faixa|Ruína|Multiplicador de preços|Dificuldade extra (testes de Jornada*)|Efeitos extras|
|---|---|---|---|---|
|0|0|—|—|—|
|1|1–3|1,2x|+2|Todo encontro com Seguidores da Ruína ganha +1 Seguidor extra.|
|2|4–6|1,5x|+3|Céu arroxeado; chance de chuva tóxica por dia.|
|3|7–9|2x|+4|Monstros enraivecidos e mais agressivos.|
|4|10–12|2,5x|+6|Mundo desmoronando — montanhas caindo, mares violentos, etc.|

_*Dificuldade extra: soma à DT de testes de Atenção durante Viagem (seção 9.2) e Descanso (seção 8)._

> **Se a Ruína atingir 13, a campanha chega ao fim: o mundo sucumbe ao colapso, e o Mal vence.**

Além do bônus de combate, a Ruína também afeta o mundo de forma mais ampla:

- **Economia:** preços de itens sobem (recursos ficam mais escassos e disputados).
- **Território:** partes do mapa se tornam **Zonas Corrompidas** — mais perigosas, com efeitos próprios (ver seção 9.3).
- **Seguidores:** mais Seguidores da Ruína aparecem pelo mundo conforme a faixa sobe.

### 11.4 Roleta da Dor

A partir do **3º estágio de Maré de Sangue** (ver seção 5, Maré de Sangue) e pelo menos **1 no contador da Ruína**, qualquer combate em andamento invoca a **Roleta da Dor**: uma vez por rodada, um efeito aleatório e impactante (por vezes cômico, sempre relevante) é sorteado e se aplica a todos os combatentes até o fim daquela rodada.

A tabela completa (1d20) está na seção 11.4.1, abaixo.

A Roleta representa o ponto em que a violência do combate e o colapso do mundo se tornam a mesma força: o confronto já não é mais só entre os combatentes, é o próprio mundo perdendo o controle ao redor deles.

> Use a Roleta da Dor interativa na mesa para sortear o resultado sem precisar rolar e consultar a tabela manualmente.

#### 11.4.1 Tabela da Roleta da Dor (1d20)

|d20|Nome|Efeito|
|---|---|---|
|1|**Sem Recuar!**|Ninguém pode usar a Ação de Movimento para se afastar de um inimigo.|
|2|**Sangue Fervendo**|Todo dano causado nesta rodada (físico ou mágico) ganha **+1d4** fixo.|
|3|**Fome de Lâminas**|A margem de crítico de todos os ataques aumenta em 1 (ex: 19-20) até o fim da rodada.|
|4|**Guarda Escancarada**|Ninguém pode usar a Ação Reativa nesta rodada — toda defesa fica só na sorte do dado.|
|5|**Grito da Ruína**|A Ação Bônus só pode ser usada para atacar ou avançar; nada de cura, item ou manobra defensiva.|
|6|**Chão que Sangra**|Ao fim do turno de cada personagem, quem estiver adjacente a outro combatente sofre **1d4** de dano de impacto (ignora Redução de Dano).|
|7|**Fúria Contagiante**|Sempre que alguém sofrer dano corpo a corpo, pode gastar a Ação Reativa (se ainda tiver) para devolver **1d4** de dano automático ao atacante.|
|8|**Vento Feroz**|Deslocamentos usados para se aproximar de um inimigo ganham **+1 espaço** extra nesta rodada.|
|9|**Marca do Colapso**|Quem terminar o turno sem ter atacado ou conjurado perde **1 PV**, consumido pela instabilidade do mundo.|
|10|**Eco Duplo**|Todo ataque corpo a corpo bem-sucedido permite um ataque extra imediato contra o mesmo alvo, com **-4** no teste, sem custo de ação.|
|11|**Chuva de Cascalho**|Uma tempestade de destroços cai sobre a arena: todos sofrem **1 de dano fixo** ao fim da rodada (ignora Redução de Dano).|
|12|**Recarga Frenética**|Ataques à distância não gastam munição/carga nesta rodada — mas quem puder atacar é **obrigado** a fazê-lo.|
|13|**Mão Pesada**|Dano de arma corpo a corpo é rolado **duas vezes**; usa-se o maior resultado, +1 fixo.|
|14|**Presságio de Sangue**|Magias causam **+1d4** de dano extra nesta rodada, mas custam **+1 Mana** a mais — o mundo cobra seu preço.|
|15|**Última Gota**|Se um ataque zerar o PV de um alvo nesta rodada, o atacante pode imediatamente atacar outro alvo ao alcance, de graça.|
|16|**Fervura Coletiva**|A Redução de Dano (física e mágica) de todos cai pela metade, arredondado para baixo, só nesta rodada.|
|17|**Julgamento do Confronto**|Em todo Teste de Confronto resolvido nesta rodada, quem perder sofre **1d4** de dano adicional.|
|18|**Sem Alívio**|Curas de qualquer tipo (magia, item, recuperação) são reduzidas à metade nesta rodada.|
|19|**Investida Selvagem**|Quem se mover ao menos 2 espaços antes de atacar corpo a corpo ganha **+1d4** de dano nesse ataque.|
|20|**Colapso Total**|Todos sofrem **1d4** de dano fixo (ignora Redução de Dano) ao fim da rodada, e a Maré de Sangue avança **um estágio extra** só nesta rodada (volta ao normal na seguinte).|

---

## 12. Economia

### 12.1 Moeda

Existe uma única moeda no jogo chamada de **Coroa de Ouro (CO)**, ou só Ouro. Não ocupa espaço de inventário; é tratada como um valor abstrato na ficha, não como item físico contável.

### 12.2 Efeito da Ruína sobre preços

O **multiplicador de preços** da seção 11.3 se aplica **apenas à compra**, nunca à venda. Isso é proposital: se afetasse os dois lados, vender ficaria proporcionalmente mais vantajoso conforme o mundo piora, e o jogador passaria a _querer_ a Ruína alta — o que contradiz o tom da mecânica. Preço-base de compra × multiplicador da faixa atual = preço final.

### 12.3 Venda de itens

Venda paga **metade do preço-base** (arredondado pra baixo), sem sofrer o multiplicador de Ruína — valor fixo, simples de calcular na mesa.

### 12.4 Como o dinheiro entra em jogo

- **Loot de combate:** o Mestre define a quantia por encontro (referência solta: Comum ~5–20, escala com a força do encontro).
- **Recompensas de missão/Templo/Santuário:** valores narrativos, a critério do Mestre.
- **Venda de itens** (12.3).
- **Buscar extra** durante viagem (seção 9.2.1) — quando bem-sucedido, pode render Coroas em vez de item, à escolha do Mestre.

### 12.5 Mercadores e disponibilidade

Liga direto ao campo **Recursos** de cada Rota (seção 9.2): a Rota define não só _se_ há mercador, mas **que raridade de item ele carrega**.

- **Rotas de Perigo Baixo:** mercadores fixos/vilas — estoque limitado a Comum/Incomum.
- **Rotas de Perigo Médio:** mercadores itinerantes — chance de Raro.
- **Rotas de Perigo Alto:** mercadores raros e especializados — únicos a oferecer Lendários (nunca Mítico, que não é vendido — 12.2).

Isso reforça risco/recompensa: quanto mais perigosa a rota, melhor o que se pode comprar, não só achar.

### 12.6 Provisões

O custo de Provisões (seção 8/9) é pago em Coroas, na mesma lógica de preço-base — trate Provisões como item de raridade **Comum**, sofrendo o multiplicador de Ruína normalmente (11.3), já que ele já prevê isso explicitamente.

### 12.7 Tabela Base de Custos (Itens e Raridades)

Estes são os **preços-base de compra**. Lembre-se de que o preço final de compra sofrerá o **multiplicador da Faixa de Ruína**, enquanto a venda pelo jogador rende sempre **50% do valor base**.

|Categorias / Raridades|Preço-Base em CO|Descrição / Exemplo|
|---|---|---|
|**Consumível Básico (Ração)**|1 CO|1 Ração (fornece 5 Provisões, ocupa 1 slot).|
|**Consumível Comum**|5 – 15 CO|Poção de cura leve (1d6 PV), antídoto simples, tochas.|
|**Equipamento Comum**|15 – 40 CO|Armas e armaduras básicas sem bônus mágico.|
|**Item Incomum**|100 – 250 CO|Poções de efeito médio, armas/armaduras com +1 ou passiva leve.|
|**Item Raro**|800 – 1.800 CO|Anéis com bônus fixos, armas que alteram a dinâmica de combate.|
|**Item Lendário**|4.500 – 10.000 CO|Equipamentos lendários que definem builds inteiras.|
|**Item Mítico**|Inestimável|Artefatos únicos; **não são vendidos** em lojas.|

### 12.8 Ganho de Ouro por Inimigo (Saque por ND)

Como nem todos os monstros carregam carteiras, trate esse valor como o **saque total convertido do combate** (moedas no bolso, dentes/peles vendáveis, pequenos adornos do inimigo). Os valores são calibrados pelo Nível de Desafio (ND) da ficha:

|Faixa de ND|Ouro Médio por Inimigo Derrotado|Ouro Total Sugerido por Encontro Padrão|
|---|---|---|
|**ND 1 – 2**|3 – 8 CO|15 – 30 CO|
|**ND 3 – 5**|12 – 25 CO|50 – 100 CO|
|**ND 6 – 8**|40 – 80 CO|200 – 400 CO|
|**ND 9 – 11**|100 – 200 CO|500 – 1.000 CO|
|**ND 12 – 14**|250 – 500 CO|1.200 – 2.500 CO|
|**ND 15 – 17**|600 – 1.200 CO|3.000 – 6.000 CO|
|**ND 18 – 20**|1.500 – 3.500 CO|8.000 – 15.000 CO|

> **Regra Prática:** Inimigos do tipo **Seguidor da Ruína** ou feras selvagens costumam dar menos ouro direto, mas podem render materiais que são vendidos pelo valor equivalente.

### 12.9 Recompensas de Quests e Missões

As recompensas de missões devem ser divididas por **Faixas de Nível do Grupo** (alinhadas aos marcos de liberação de Talentos e Magias):

|Faixa de Nível|Quest Menor (Favores/Rotas)|Quest Principal (Zonas/Vilarejos)|Quest Épica (Santuários/Arautos)|
|---|---|---|---|
|**Níveis 1 – 5** (Iniciante)|15 – 30 CO / jogador|80 – 150 CO / jogador|300 CO + 1 Item Incomum|
|**Níveis 6 – 11** (Avançado)|100 – 200 CO / jogador|400 – 750 CO / jogador|1.500 CO + 1 Item Raro|
|**Níveis 12 – 17** (Mestre)|500 – 900 CO / jogador|2.000 – 3.500 CO / jogador|7.000 CO + 1 Item Lendário|
|**Níveis 18 – 20** (Lendário)|2.000 – 4.000 CO / jogador|8.000 – 15.000 CO / jogador|30.000 CO + Recompensa Única|

### 12.10 Drenos de Ouro (Onde os Jogadores Gastam)

Para evitar que o ouro perca a utilidade nos níveis mais altos, a economia precisa de **drenos constantes**:

1. **Manutenção de Provisões:** Ao longo de longas viagens em Rotas com alto _Tempo_, a compra frequente de Rações se torna um custo recorrente significativo, especialmente sob multiplicadores da Ruína.
2. **Serviços de Revivência e Rituais:** Se um personagem morre por falhar na Salva-Guarda sem vínculo de Santuário, os pontos de revivência/NPCs devem cobrar taxas elevadas (ex: 200 CO no Tier 1, chegando a 10.000+ CO no Tier 4 ou um favor/item equivalente).
3. **Serviços de Hospedaria e Segurança:** Pagar por locais seguros para realizar Descansos Longos sem necessidade de testes de emboscada de alta DT.
4. **Infraestrutura / Reconstrução de Templos:** Permitir que o grupo gaste grandes somas de ouro (ex: 1.000 a 5.000 CO) para financiar a restauração ou fortificação de Templos regionais.


### 13. Criação (Crafting)
#### 13.1 Quem pode Criar
Só personagens com acesso a **Reagentes** podem criar itens. Reagentes seguem exatamente a mesma lógica de Espaços de Magia (seção 6.5) — é o que separa quem "é da área" de quem não é:

| Tipo de Classe (Criação)                                | Reagentes iniciais (criação)                     | Ganhos por descanso longo |
| ------------------------------------------------------- | ------------------------------------------------ | ------------------------- |
| Não Criador                                             | 0                                                | tudo                      |
| Criador (Alquimista, e futuramente Artífice/Ferromante) | 3 + metade de Intelecto (arredondado para baixo) | tudo                      |

- **Ganho de Reagentes por nível** (a partir do 2º, só Criadores): 2 + metade de Intelecto (arredondado para baixo).
- Igual Magia: nada impede um Não Criador de comprar um Talento futuro que dê uma reserva pequena de Reagentes — só não ganha de graça, porque não é a proposta da classe dele.


#### 13.2 O que dá pra Criar
Só **Consumíveis** (poções, bombas, venenos, antídotos, engenhocas — nunca armas/armaduras/adornos permanentes, isso fica fora do escopo por ora). Cada classe Criadora tem sua categoria que ja começa com:

| Classe     | Categoria criável                                           |
| ---------- | ----------------------------------------------------------- |
| Alquimista | Consumíveis Alquímicos (poções, bombas, venenos, antídotos) |
| Artífice   | `[A definir]`                                               |
| Ferromante | `[A definir]`                                               |

#### 13.3 Raridade máxima criável por Nível
Reaproveita exatamente as mesmas faixas de nível que você já usa em 12.9 (Recompensas de Quest) — sem inventar uma escala nova:

| Faixa de Nível | Raridade máxima criável |
| -------------- | ----------------------- |
| 1–5            | Incomum                 |
| 6–11           | Raro                    |
| 12–17          | Lendário                |
| 18–20          | Lendário                |

Mítico nunca é criável — continua exclusivo de narrativa/Santuário, igual já vale pra venda (12.2).
#### 13.4 Custo por Raridade

| Raridade | Custo em Reagentes | DT do Teste de Criação | Custo em Coroas             |
| -------- | ------------------ | ---------------------- | --------------------------- |
| Comum    | 1                  | 10                     | metade do preço-base (12.7) |
| Incomum  | 2                  | 13                     | metade do preço-base        |
| Raro     | 4                  | 16                     | metade do preço-base        |
| Lendário | 8                  | 19                     | metade do preço-base        |

O custo em Coroas usa a mesma regra de "metade do preço-base" que já existe pra venda (12.3) — fácil de lembrar na mesa, sem tabela nova pra decorar.

#### 13.5 Teste de Criação
Durante um **Descanso Longo**, o personagem pode criar quantos itens quiser (limitado só por Reagentes/Coroas disponíveis — o recurso já é o freio natural, não precisa de outro limite artificial).

Pra cada item: `d20 + Intelecto` vs a DT da raridade (13.4).

- **Sucesso:** item criado, funciona normalmente.
- **Falha:** Reagentes e Coroas são gastos mesmo assim (o material foi consumido tentando), mas o item não sai — perde a tentativa. _(Sem penalidade extra tipo explosão/dano — isso é sabor de mesa, o Mestre decide se quiser.)_

#### 13.6 Interação com Reciclagem (Alquimista)
Continua igual: 1x por Descanso Longo, recupera 1 uso de um consumível **já gasto na sessão** — não interfere em nada do crafting, é uma segunda fonte de itens, mais barata (não gasta Reagentes) mas limitada a algo que você já tinha antes.