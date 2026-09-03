> Este arquivo é a lista canônica de criaturas invocáveis do sistema — referenciada pela passiva do **Invocador** (`Classes.md`), pela Ativa Maior **Levantar Servo** do **Necromante**, e por qualquer Talento futuro de invocação (Página Conjurador). Todas as regras de equilíbrio ficam aqui, junto das fichas, para não se perderem espalhadas em notas de mesa.
---
## 0. Regras Gerais de Invocação
Essas regras valem para **qualquer** invocação de duração de combate/cena/sempre, seja do Invocador, do Necromante, ou de um Talento.
- **Ação para invocar:** Ação Padrão + custo em Mana indicado na ficha da criatura. Uma invocação já ativa não pode ser reinvocada até morrer ou o efeito acabar.
- **Duração:** a invocação permanece até o fim do combate/cena, ou até ser reduzida a 0 PV — o que vier primeiro. Fora de combate, o Mestre decide se ela persiste (ex: um construto guardando um acampamento) ou se dissipa ao fim da cena.
- **Turno próprio:** a invocação **não** compartilha ação com o conjurador. Ela entra na ordem de Iniciativa (10 + Velocidade dela) e o jogador controla suas ações normalmente — Ação Padrão, Movimento, Reativa e Bônus, como qualquer personagem.
- **Ao cair a 0 PV:** a invocação simplesmente desaparece (dissipa, desmorona, retorna ao plano de origem — flavor livre). Não faz teste de Salva-Guarda, não há risco de "morte" além do fim da invocação.
- **Limite de Invocados:** ver `Classes.md`, seção "Regra formal — Limite de Invocados". Resumindo: 1 invocação ativa por padrão, subindo para 2/3/4 nos Andares 2/3/4 para Invocador e Necromante. Algumas criaturas abaixo estão marcadas **Conta como 2** — consomem duas vagas do limite sozinhas.
- **Cópias:** nada impede invocar duas cópias da mesma criatura (respeitando o Limite) — cada uma é uma invocação independente, com sua própria ficha e Iniciativa.

---
## 1. Como as Fichas Escalam (regra de equilíbrio)
Em vez de fichas fixas que ficam fracas cedo demais ou fortes demais tarde, cada invocação usa uma fórmula amarrada ao **Atributo de Invocação** do conjurador (normalmente **Intelecto**, o mesmo atributo que já rege dano/DT do Necromante e do Invocador — ver seção 6.4, Escala de Poder, no núcleo) e ao **Nível de Invocação** da criatura (I, II ou III — mesma lógica dos Níveis de Magia, seção 6.5).

Isso segue o mesmo princípio já usado no resto do sistema (Companheiro Animal, dano de magia, etc.): **o número escala sozinho conforme o personagem investe no atributo certo**, sem o Mestre precisar recalcular ficha a cada nível.

### 1.1 Tabela de Escala por Nível de Invocação

| Nível de Invocação | Libera em (Nível do personagem) | Custo em Mana | PV Base | Bônus de Ataque Base | Defesa Base | RD Física / Mágica |
| ------------------ | ------------------------------- | ------------- | ------- | -------------------- | ----------- | ------------------ |
| **I**              | 1                               | 2             | 8       | +1                   | 11          | 0 / 0              |
| **II**             | 8                               | 4             | 16      | +3                   | 13          | 1 / 1              |
| **III**            | 16                              | 7             | 28      | +5                   | 15          | 2 / 2              |

_(Os marcos de nível reaproveitam exatamente os mesmos marcos de liberação de Nível de Magia — seção 2.2 do núcleo — nenhuma escala nova pra decorar.)_

### 1.2 Fórmulas Finais
- **PV da invocação** = PV Base (tabela acima) + (**Nível de Invocação × Atributo de Invocação**, sendo I=1, II=2, III=3) — arredondado, piso zero se o atributo for negativo.
- **Bônus de Ataque** = Bônus Base + metade do Atributo de Invocação (arredondado pra baixo, mínimo 0).
- **Dano da ação principal** = dado indicado na ficha da criatura + metade do Atributo de Invocação.
- **Defesa e RD** não escalam por atributo — só pelo Nível de Invocação (tabela acima), do mesmo jeito que a Defesa base do sistema nunca sobe por atributo (seção 2, núcleo).

> **Exemplo:** um Invocador de Nível 10 com Intelecto 6 invoca um **Espectro Sussurrante** (Nível II). PV = 16 + (2 × 6) = 28. Bônus de Ataque = +3 + 3 (metade de 6) = +6. Dano = 1d8 (da ficha) + 3 = 1d8+3.

### 1.3 Interação com o Menu do Invocador

As habilidades do menu do Invocador (`Classes.md`) somam **por cima** dessas fórmulas, não substituem nada:

- **Vínculo Espiritual** (+1/+2/+3 ataque e Defesa a curta distância do conjurador).
- **Reforço do Vínculo** (+2×nível PV, +3×nível no Andar 3) — some direto ao PV já calculado acima.
- **Invocação Dominante** — os bônus percentuais/fixos da Ativa Maior incidem sobre o resultado já calculado (PV final, Defesa final, etc.), não sobre o PV Base da tabela.

Isso é proposital: a ficha básica abaixo fica deliberadamente modesta, porque quem investe PP no Invocador já tem uma pilha de bônus próprios empilhando em cima. Um Invocador full-build fica sensivelmente mais forte que alguém que só pegou um Talento avulso de invocação — como deveria ser.

### 1.4 Balanceamento contra o Bestiário (referência de Mestre)

Uma invocação de Nível I com Atributo de Invocação 4 (comum por volta do nível 3-4) fica perto de um monstro **ND 1** do Bestiário (`Bestiario/Monstros.md`) em PV e dano — mas **abaixo** em versatilidade, porque ocupa a Ação Padrão + Mana do jogador pra existir e ainda compete por espaço de turno na iniciativa do grupo. É a mesma lógica de custo-benefício de qualquer "exército pessoal" em jogo de mesa: cada invocação individual deve ser mais fraca que um monstro equivalente sozinho, porque o jogador já está pagando o preço em ação econômica e recursos (Mana, PP, Limite de Invocados) para ter várias delas ao mesmo tempo.

Se o Mestre quiser dar mais personalidade a uma invocação específica (um "chefe" temático, por exemplo), pode aplicar 1 Tag de `Bestiario/_1 Tags de Criaturas_.md` — a mesma lógica de custo em PD vale, só que aqui o "preço" já é pago pelo jogador em Mana/Limite de Invocados, então **não é necessário** compensar em nível pra isso, ao contrário do Bestiário.

---

## 2. Nível de Invocação I (a partir do Nível 1, 2 Mana)

### Servo Ossudo _(Mortos-vivos — Necromante)_

- **Tipo:** Invocado (Morto-vivo)
- **Dado de dano:** 1d6 físico (cortante, garras/ossos)
- **Ações:**
    - **Investida Óssea:** ataque corpo a corpo simples usando o Bônus de Ataque + dano da tabela.
    - **Corpo Sem Vida (Passiva Leve):** imune a veneno, medo, sono e doença.
- **Nota:** a opção "padrão" pra reanimar o primeiro cadáver disponível — sem frescura, só um corpo que ainda obedece.

### Eco Espiritual _(Espírito — Invocador/Xamã)_

- **Tipo:** Invocado (Espírito)
- **Dado de dano:** 1d4 mágico (toque etéreo)
- **Ações:**
    - **Toque do Além:** ataque corpo a corpo simples; ao acertar, o alvo sofre -1 no próximo teste de resistência que fizer (não cumulativo com ele mesmo).
    - **Incorpóreo (Passiva Forte):** só pode ser atingido por ataques mágicos ou armas com propriedade mágica; ataques físicos comuns o atravessam sem efeito.
- **Nota:** frágil, mas quase impossível de acertar pra grupos sem acesso a dano mágico — bom pra abrir espaço tático, ruim como "tanque".

### Golem de Sucata _(Constructo — Invocador)_

- **Tipo:** Invocado (Constructo)
- **Dado de dano:** 1d8 físico (impacto)
- **Ações:**
    - **Golpe de Ferro-velho:** ataque corpo a corpo simples.
    - **Estrutura Rígida (Passiva Leve):** +1 RD Física adicional (some ao valor da tabela), mas Velocidade sempre tratada como 0 pra fins de Iniciativa e Movimento.
- **Nota:** a linha "tanque" do Nível I — dano baixo, mas aguenta e segura espaço melhor que os outros dois.

### Fagulha Viva _(Elemental — Invocador/Elementalista)_

- **Tipo:** Invocado (Elemental)
- **Dado de dano:** 1d6 de fogo (chama viva)
- **Ações:**
    - **Lambida de Fogo:** ataque corpo a corpo simples; aplica o Efeito Elemental de Fogo (seção 6.6, núcleo — Queimando) se acertar.
    - **Corpo Instável (Passiva Leve):** imune a dano de fogo; sofre dano dobrado de água ou gelo.
- **Nota:** a linha "elemental" do Nível I — dano modesto, mas aplica Queimando de graça em todo acerto, sem precisar de Sobrecarga.

### Faísca Angelical _(Celestial — Clérigo/Teurgo)_

- **Tipo:** Invocado (Celestial)
- **Dado de dano:** 1d4 sagrado (luz pura)
- **Ações:**
    - **Toque de Luz:** ataque corpo a corpo simples; causa dano dobrado contra criaturas do tipo Morto-vivo.
    - **Aura Fraca (Passiva Leve):** aliados adjacentes a ela recebem +1 em testes de Vontade contra medo.
- **Nota:** frágil como as demais opções de Nível I, mas já entrega utilidade de suporte só por existir em campo — a linha pensada pro conjurador que quer companhia, não um soldado.

---

## 3. Nível de Invocação II (a partir do Nível 8, 4 Mana)

### Cavaleiro Decrépito _(Mortos-vivos — Necromante)_

- **Tipo:** Invocado (Morto-vivo)
- **Dado de dano:** 1d10 físico (lâmina enferrujada)
- **Ações:**
    - **Golpe de Lâmina:** ataque corpo a corpo simples.
    - **Presença Pavorosa (Ativa Menor, 1x por combate):** todos os inimigos a curta distância fazem teste de Vontade (DT 10 + Atributo de Invocação do conjurador) ou ficam Amedrontados por 1 rodada.
- **Nota:** o "meio-campo" do Necromante — dano relevante e ainda contribui com controle uma vez por combate.

### Espectro Sussurrante _(Espírito — Invocador)_

- **Tipo:** Invocado (Espírito)
- **Dado de dano:** 1d8 mágico (dreno)
- **Ações:**
    - **Dreno Espectral:** ataque corpo a corpo simples; se acertar, o conjurador recupera 2 PV.
    - **Incorpóreo (Passiva Forte):** como o Eco Espiritual (Nível I).
- **Nota:** segue incorpóreo, agora com dano relevante e sustain leve pro conjurador — a linha "esquiva total contra dano físico" continua sendo o atrativo.

### Autômato de Guerra _(Constructo — Invocador)_ — **Conta como 2 no Limite**

- **Tipo:** Invocado (Constructo)
- **Dado de dano:** 1d8 físico (dois ataques por rodada — ver abaixo)
- **Ações:**
    - **Dupla Investida (Formidável):** ataca duas vezes na Ação Padrão; a segunda investida sofre -2 no Bônus de Ataque (mesma regra da Tag Formidável do Bestiário).
    - **Estrutura Rígida (Passiva Leve):** como o Golem de Sucata (Nível I).
- **Nota:** o dano dobrado da Tag Formidável é forte o bastante pra justificar consumir 2 vagas do Limite de Invocados sozinho — pense nele como "duas invocações fundidas em uma".

### Corrente Viva _(Elemental — Invocador/Elementalista)_

- **Tipo:** Invocado (Elemental)
- **Dado de dano:** 1d8 elétrico (descarga)
- **Ações:**
    - **Chicote de Faísca:** ataque corpo a corpo simples; aplica o Efeito Elemental de Raio (seção 6.6, núcleo — Choque) se acertar.
    - **Corpo Instável (Passiva Leve):** imune a dano elétrico; sofre dano dobrado de dano de água/exposição direta.
- **Nota:** troca o dano bruto do Cavaleiro Decrépito por controle confiável — -2 em qualquer teste do alvo por até 2 turnos, garantido a cada acerto.

### Arauto de Luz _(Celestial — Clérigo/Teurgo)_

- **Tipo:** Invocado (Celestial)
- **Dado de dano:** 1d8 sagrado
- **Ações:**
    - **Lança Radiante:** ataque corpo a corpo simples; causa dano dobrado contra criaturas do tipo Morto-vivo.
    - **Toque Curativo (Ativa Menor, 1x por combate):** cura 1d6 PV em um aliado adjacente ao Arauto.
- **Nota:** a primeira linha celestial que também cura — mais frágil que o Espectro Sussurrante em dano puro, mas devolve recurso pro grupo, não só pro conjurador.

---

## 4. Nível de Invocação III (a partir do Nível 16, 7 Mana)

### Arauto Ossuário _(Mortos-vivos — Necromante)_ — **Conta como 2 no Limite**

- **Tipo:** Invocado (Morto-vivo, Elite)
- **Dado de dano:** 2d6 físico/necrótico (à escolha no momento de conjurar)
- **Ações:**
    - **Golpe Ceifador:** ataque corpo a corpo simples.
    - **Regenerador (Passiva Forte):** recupera PV igual a 1/10 do PV máximo (arred. pra cima) no início de cada um dos próprios turnos, desde que esteja com pelo menos 1 PV. Dano de Luz Sagrada impede a regeneração naquela rodada.
    - **Aura de Decadência (Passiva Leve):** inimigos adjacentes ao Arauto sofrem -1 em testes de resistência contra magias do Necromante que o invocou.
- **Nota:** o "servo definitivo" — junta Regenerador (Tags de Criaturas) com dano alto e ainda debilita a resistência ao redor dele. Consome 2 vagas do Limite por ser, na prática, um miniboss pessoal.

### Guardião Etéreo _(Espírito — Invocador)_

- **Tipo:** Invocado (Espírito, Elite)
- **Dado de dano:** 2d6 mágico
- **Ações:**
    - **Lâmina do Além:** ataque corpo a corpo simples.
    - **Incorpóreo (Passiva Forte):** como as versões anteriores.
    - **Guardião (Reação):** pode gastar a Ação Reativa pra se colocar entre um aliado adjacente e um atacante, virando o novo alvo (mesma Tag Guardião do Bestiário).
- **Nota:** o pináculo da linha espiritual — continua praticamente imune a dano físico comum e agora protege ativamente o grupo.

### Colosso Arcano _(Constructo — Invocador)_ — **Conta como 2 no Limite**

- **Tipo:** Invocado (Constructo, Elite)
- **Dado de dano:** 2d8 físico
- **Ações:**
    - **Esmagar:** ataque corpo a corpo simples; se acertar, o alvo faz teste de Força (DT 8 + metade do Nível de Invocação × Atributo de Invocação do conjurador, arred. pra baixo) ou é derrubado.
    - **Estrutura Rígida (Passiva Leve):** como as versões anteriores.
    - **Explosivo (Passiva Forte):** ao ser reduzido a 0 PV, explode — criaturas adjacentes fazem teste de Velocidade (DT 8 + metade do ND equivalente) ou sofrem o dado de dano da Esmagar (sucesso = metade).
- **Nota:** o "tanque definitivo" — segura a linha de frente e ainda deixa um problema pra trás quando cai.

### Titã de Pedra Menor _(Elemental — Invocador/Elementalista)_ — **Conta como 2 no Limite**

- **Tipo:** Invocado (Elemental, Elite)
- **Dado de dano:** 2d6 físico (impacto de pedra)
- **Ações:**
    - **Punho de Terra:** ataque corpo a corpo simples; aplica o Efeito Elemental de Terra (seção 6.6, núcleo — Lentificado) se acertar.
    - **Corpo de Pedra (Passiva Leve):** +1 RD Física adicional (some ao valor da tabela).
    - **Regenerador (Passiva Forte):** recupera PV igual a 1/10 do PV máximo (arred. pra cima) no início de cada um dos próprios turnos, desde que esteja com pelo menos 1 PV. Dano de água corrente ou corrosão impede a regeneração naquela rodada.
- **Nota:** o topo da linha elemental — junta o papel de tanque do Colosso Arcano com regeneração, mas troca o estouro final por resistência sustentada. Consome 2 vagas do Limite pela mesma lógica.

### Serafim Menor _(Celestial — Teurgo)_ — **Conta como 2 no Limite**

- **Tipo:** Invocado (Celestial, Elite)
- **Dado de dano:** 2d6 sagrado
- **Ações:**
    - **Lâmina Radiante:** ataque corpo a corpo simples; causa dano dobrado contra criaturas do tipo Morto-vivo ou marcadas com a tag "Ruína" (Bestiário).
    - **Guardião (Reação):** pode gastar a Ação Reativa pra se colocar entre um aliado adjacente e um atacante, virando o novo alvo (mesma Tag Guardião do Bestiário).
    - **Cura Radiante (Ativa Menor, 1x por combate):** cura 2d6 PV em um aliado a curta distância.
- **Nota:** o pináculo da linha celestial — na prática, um segundo suporte em campo, protegendo e curando o grupo. Consome 2 vagas do Limite pela mesma lógica dos outros Elites.

---

## 5. Variações Rápidas (opcional pro Mestre)
Pra não travar a mesa esperando uma ficha nova toda vez que o jogador quiser um sabor diferente, qualquer criatura acima pode receber **uma única** das trocas abaixo sem alterar Mana, PV ou Bônus de Ataque — só o _flavor_ e um pequeno efeito lateral:

|Elemento aplicado|Efeito lateral (na ação principal)|
|---|---|
|Fogo|+1d4 de dano, aplica Efeito Elemental de Fogo (seção 6.6, núcleo) em vez do dano padrão do dado.|
|Gelo|Ao acertar, o alvo faz teste de Vigor ou fica Lentificado (-1 Velocidade) por 1 rodada.|
|Elétrico|Ao acertar um crítico, a descarga salta pra um inimigo adjacente ao alvo (mesmo dano, sem novo teste de ataque).|
|Veneno/Corrosivo|Como a Tag Corrosivo do Bestiário: -1 fixo em RD Física do alvo, acumulativo, até o fim do combate.|

Essas trocas existem pra dar identidade temática (um Necromante "de fogo pútrido", um Invocador "do gelo eterno") sem inflar poder de verdade — o Mestre decide junto do jogador na hora de escolher a invocação.

> **Nota sobre as linhagens Elemental/Celestial:** como essas duas linhagens já aplicam um Efeito Elemental ou bônus temático de forma inata (ver fichas acima), a Variação Rápida da mesma família (Fogo na Fagulha Viva, por exemplo) não se acumula — o Mestre pode permitir uma segunda família de elemento pra variar o visual, mas o efeito lateral mecânico não dobra.