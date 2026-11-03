---
name: Mylenna — Portfólio para recrutadores
description: Relatório de carreira em rosa neon sobre fundo escuro; KPIs, barras, painéis em Power BI e matriz provam o ofício de dados e BI.
colors:
  pink: "#ff2d95"
  pink-2: "#ff6fb7"
  pink-3: "#ffb3d9"
  pink-deep: "#c7156f"
  pink-btn: "#d61a78"
  glow: "rgba(255, 45, 149, 0.55)"
  bg: "#0d0510"
  bg-2: "#150818"
  bg-3: "#1d0b22"
  surface: "rgba(23, 15, 26, 0.96)"
  surface-2: "rgba(255, 255, 255, 0.07)"
  border: "rgba(255, 111, 183, 0.18)"
  border-strong: "rgba(255, 45, 149, 0.45)"
  text: "#f6ebf2"
  text-2: "#c9b3c1"
  text-3: "#9a8494"
  on-pink: "#ffffff"
  status-live: "#3ddc84"
  status-live-line: "rgba(61, 220, 132, 0.45)"
  status-live-wash: "rgba(61, 220, 132, 0.08)"
  light-bg: "#fff5fa"
  light-bg-2: "#ffe9f3"
  light-bg-3: "#ffdcec"
  light-surface: "rgba(255, 255, 255, 0.96)"
  light-surface-2: "rgba(199, 21, 111, 0.06)"
  light-border: "rgba(199, 21, 111, 0.15)"
  light-border-strong: "rgba(199, 21, 111, 0.4)"
  light-text: "#2a0d1f"
  light-text-2: "#5a3450"
  light-text-3: "#7d5a70"
  light-pink-2: "#d61a78"
  light-glow: "rgba(255, 45, 149, 0.3)"
typography:
  display:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.9rem, 2.6vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tabular-nums"
  signature:
    fontFamily: "Great Vibes, Brush Script MT, cursive"
    fontSize: "2.2rem"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
  mono:
    fontFamily: "JetBrains Mono, Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "tabular-nums"
rounded:
  bar: "6px"
  chip: "8px"
  shot: "10px"
  sm: "12px"
  md: "18px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "0.45rem"
  sm: "0.8rem"
  md: "1rem"
  lg: "1.4rem"
  xl: "2.2rem"
  section: "5.5rem"
  container: "min(1180px, 100% - 2.5rem)"
  nav-h: "76px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.pink-btn}, {colors.pink-deep})"
    textColor: "{colors.on-pink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
  button-primary-sm:
    backgroundColor: "linear-gradient(135deg, {colors.pink-btn}, {colors.pink-deep})"
    textColor: "{colors.on-pink}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.1rem"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.pink-2}"
  slicer:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.pill}"
    padding: "0.42rem 0.95rem"
  slicer-active:
    backgroundColor: "{colors.pink-deep}"
    textColor: "{colors.on-pink}"
    rounded: "{rounded.pill}"
    padding: "0.42rem 0.95rem"
  viewer-tab:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.pill}"
    padding: "0.42rem 0.95rem"
  viewer-tab-selected:
    backgroundColor: "{colors.pink-deep}"
    textColor: "{colors.on-pink}"
    rounded: "{rounded.pill}"
    padding: "0.42rem 0.95rem"
  viewer-page:
    backgroundColor: "transparent"
    textColor: "{colors.text-3}"
    padding: "0.55rem 0.9rem"
  viewer-page-active:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    padding: "0.55rem 0.9rem"
  chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.chip}"
    padding: "0.35rem 0.8rem"
  chip-hover:
    backgroundColor: "{colors.pink-deep}"
    textColor: "{colors.on-pink}"
    rounded: "{rounded.chip}"
  status-tag:
    backgroundColor: "{colors.status-live-wash}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.85rem"
  cert-link:
    backgroundColor: "transparent"
    textColor: "{colors.pink-2}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.75rem"
  cert-link-hover:
    backgroundColor: "{colors.pink-deep}"
    textColor: "{colors.on-pink}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.4rem 1.6rem"
  card-kpi:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.pink-2}"
    rounded: "{rounded.md}"
    padding: "1.1rem 1.15rem 1rem"
  card-about:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.md}"
    padding: "1.8rem 2rem"
  card-about-side:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.md}"
    padding: "1.6rem 1.5rem"
  viewer-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.md}"
    padding: "1.3rem"
  viewer-shot:
    backgroundColor: "#ffffff"
    rounded: "{rounded.shot}"
  bar-strip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.1rem"
  soft-line:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.3rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.85rem"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.85rem"
  input:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "1.1rem 1rem 0.6rem"
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.pink-2}"
    rounded: "{rounded.circle}"
    size: "42px"
  repo-icon:
    backgroundColor: "transparent"
    textColor: "{colors.text-3}"
    rounded: "{rounded.chip}"
    size: "26px"
  lightbox-button:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.on-pink}"
    rounded: "{rounded.circle}"
    size: "46px"
  float-icon:
    textColor: "{colors.pink-2}"
    rounded: "{rounded.sm}"
    size: "42px"
  hexicon-sm:
    backgroundColor: "transparent"
    textColor: "{colors.pink-2}"
    size: "32px"
  hexicon:
    backgroundColor: "transparent"
    textColor: "{colors.pink-2}"
    size: "46px"
  hexicon-lg:
    backgroundColor: "transparent"
    textColor: "{colors.pink-2}"
    size: "64px"
---

# Design System: Mylenna — Portfólio para recrutadores

## Overview

**Creative North Star: "O Relatório Neon"**

O site se apresenta como um relatório de Power BI que a própria candidata construiu: barra de relatório com carimbo de atualização, faixa de KPIs, gráfico de barras com valor à direita, painéis reais em Power BI com abas de página, segmentadores em pílula, matriz de projetos com linhas expansíveis e um Gantt sobre eixo de anos. O rosa neon (`pink`) é a cor do dado e da ação; o resto da página é escuro, sereno e de baixo contraste para que os números sejam a primeira coisa lida. A identidade fixa da marca (assinatura manuscrita "Mylenna ♡", hexágonos de contorno com ícone, traços de circuito com nós, órbitas em volta da foto) entra como motivo, não como decoração espalhada: ela aparece nos cantos da página, no logo, no rodapé, no cartão de perfil e nos ícones, e some no meio do conteúdo.

A densidade é de painel, não de landing page: cascos de dado quase opacos (`surface`, ameixa a 96%) com borda rosa sutil (`border`), muitos itens por viewport, tipografia pequena e precisa. Os efeitos de fundo — teia, traços de circuito, blooms — vivem só nas calhas entre os cascos; nenhum deles atravessa um número. A hierarquia vem de peso e cor, não de tamanho: números grandes em rosa claro, rótulos em branco quente, metadados em cinza-rosado. O modo claro é a mesma estrutura com papel rosa-pálido, cascos brancos e tinta vinho; os tokens são trocados por `[data-theme="light"]`, nunca por CSS paralelo. O relatório abre espaço para uma voz: a seção "Sobre mim" é o único bloco de prosa longa em primeira pessoa, e vive no mesmo casco dos visuais, sem virar página à parte. A prova visual é real: os painéis e os certificados são capturas dos próprios arquivos, sempre sobre fundo branco e ampliáveis.

A motion é a do relatório atualizando: ao entrar na tela, os KPIs contam e as barras crescem em sequência escalonada. Ao lado disso, cada bloco de conteúdo entra como o visual que ele é: linhas de matriz e de tabela deslizam da esquerda em cascata, cartões e grupos sobem, chips estouram um a um, sempre por `[data-reveal]` + `.in` e com a curva de entrada `cubic-bezier(0.16, 1, 0.3, 1)`. Fora da entrada, o movimento é reação a estado: hover levanta, clique afunda, foco brilha, o Gantt aquece o cartão ligado. Dois movimentos contínuos vivem no fundo e no perfil: a teia de pontos em canvas, que deriva devagar, se liga por proximidade e acende sob o mouse sem guardar nada, e o visual orbital da foto, com duas órbitas girando em sentidos opostos e quatro ícones que flutuam. Continuam fora: fade por seção inteira e holofote de cursor.

**Key Characteristics:**
- Um só acento (rosa neon) em quatro tons, usado como dado, ação e brilho.
- Cascos de dado quase opacos com borda rosa a 18% de opacidade; a teia e os circuitos só aparecem nas calhas; profundidade por camadas tonais, sombra só ambiente.
- Números em `tabular-nums`; mono apenas em datas, carimbos e medidas.
- Pílula (999px) para ação e filtro; 18px para cartão; 12px para bloco utilitário; 10px para captura; 8px para chip; 6px para barra de dado.
- Hexágono de contorno com brilho como moldura de todo ícone de conteúdo, em três tamanhos (32, 46 e 64px).
- Assinatura manuscrita só na palavra "Mylenna", sempre com o coração ♡ ao lado, no logo e no rodapé.
- Cada lista entra como lista: cascata curta por `--i`, nunca um fade do bloco inteiro.
- Fundo que responde sem prometer nada: a teia acende sob o mouse e não guarda estado.
- A primeira tela responde às quatro perguntas do recrutador: quem é, que vaga busca, quando pode começar e onde está o currículo.

## Colors

Um rosa neon único, escalonado em quatro tons, sobre um preto-ameixa quase sem cor; o verde aparece apenas como sinal de "vivo".

### Primary
- **Rosa Neon** (`pink`): a cor do dado e da ação. Preenche barras (em gradiente com `pink-deep`), sublinha o link ativo do menu e a aba de página ativa do visualizador, contorna o hexágono, pinta os ícones inline, os pontos das órbitas e o anel de foco. É a cor da assinatura no coração, a base dos fios da teia de fundo e a cor para onde o número do KPI e o valor da barra migram sob o cursor.
- **Rosa Claro** (`pink-2`): a cor dos números e dos links de texto. Valor do KPI, valor da barra, coluna h/mês, contagem da matriz, resultado do painel, ano na tabela de cursos, data no cartão de trajetória, ícone dentro do hexágono e das peças flutuantes, cargo-alvo, assinatura manuscrita, links "Ver as telas dos projetos", "Ver no GitHub" e de certificado. No modo claro é substituída por `light-pink-2`, um vinho, para manter contraste sobre o papel.
- **Rosa Pálido** (`pink-3`): só aparece em gradientes: fim da barra de progresso de rolagem e segundo passo da moldura cônica da foto. Nunca sozinho em texto ou fundo.
- **Rosa Profundo** (`pink-deep`): o rosa de superfície. Fundo do segmentador ativo e da aba de projeto selecionada, barra do Gantt, chip em hover, link de certificado em hover, botões da janela de ampliação em hover, seleção de texto, polegar da barra de rolagem, "voltar ao topo" em hover. Quando texto branco precisa ficar sobre rosa, é este rosa.
- **Rosa Botão** (`pink-btn`): início do gradiente do botão primário e estado quente da barra do Gantt. Não é usado plano em outro lugar.
- **Brilho** (`glow`): o mesmo rosa a 55% de opacidade, só como sombra difusa (botão primário, hexágono, assinatura, visual orbital do perfil). No modo claro cai para 30%.

### Tertiary
- **Verde Ativo** (`status-live`): sinal de estado vivo. Ponto de "disponível para início imediato" e de "conclusão em dez. 2026", ícone de "medido em produção", pílula "Em produção" na tabela de projetos (com ponto verde de 6px), ponto no fim da barra "atual" do Gantt, que pulsa um halo de `rgba(61, 220, 132, 0.25)` a cada 2.4s. Nas pílulas de estado ele vira contorno (`status-live-line`, 45%) e lavagem (`status-live-wash`, 8%) em volta de texto em `text`: o verde marca a pílula, o texto continua na tinta do tema.

### Neutral
- **Preto Ameixa** (`bg`, `bg-2`, `bg-3`): fundo da página em três passos, usados em gradiente diagonal e como fundo do fallback da foto; `bg-2` a 85% é o vidro translúcido das peças flutuantes do perfil. Sobre o corpo, dois blooms radiais de rosa a 22% e 14%.
- **Casco** (`surface`): ameixa a 96% (branco a 96% no modo claro), o chão quase opaco de todo cartão, barra, bloco e botão fantasma. Ele é escuro o bastante para ler como fundo e fechado o bastante para barrar a teia, os circuitos e os blooms: por baixo de um número, nada se mexe.
- **Degrau** (`surface-2`): branco a 7% sobre o casco no modo escuro; no modo claro, rosa a 6% (`rgba(199, 21, 111, 0.06)`), porque branco sobre branco sumiria. É trilha de barra, mini-barra, chip, campo de formulário, descrição aberta da matriz e o fundo de hover de linha de tabela e de gráfico.
- **Borda Rosada** (`border`, `border-strong`): rosa claro a 18% é a borda de repouso de todo cartão, chip, divisor e trilho de abas de página; rosa a 45% marca cabeçalhos de tabela e de visual, eixo do Gantt, botão fantasma, link de certificado, cartão de graduação, a órbita interna tracejada e o contorno das peças flutuantes, e é o estado hover dos cartões de KPI e de competências.
- **Tinta** (`text`, `text-2`, `text-3`): branco quente para títulos, valores de tabela principais, o nível e a contratação no perfil, o texto das pílulas de estado e a voz de abertura da prosa; cinza-rosado médio para corpo, células e parágrafos longos; cinza-rosado escuro para rótulos, carimbos, notas, abas de página inativas e cabeçalhos de coluna.
- **Branco sobre rosa** (`on-pink`): texto dentro de botão primário, segmentador ativo, aba de projeto selecionada, chip e link de certificado em hover, barra do Gantt e botões da janela de ampliação.
- **Branco de captura** (`#ffffff`, literal): o chão das imagens de painel e de certificado, no visualizador e na janela de ampliação. Os prints são claros por natureza; o branco evita bordas escuras vazando durante o carregamento.
- **Modo claro** (`light-*`): papel rosa-pálido, casco branco a 96%, degrau rosado a 6%, bordas vinho a 15% e 40%, tinta vinho em três passos. A estrutura e os rosas de ação não mudam.

### Janela de ampliação (tema fixo)
A janela de ampliação é sempre escura, nos dois temas, porque fica sobre um véu de `rgba(8, 3, 10, 0.9)` com `blur(4px)`. Por isso suas cores são literais e não seguem o tema: legenda em `#e9dce4`, contador em `#a891a0`, botões em branco a 8% com borda `rgba(255, 111, 183, 0.35)`.

### Cores da teia de fundo (canvas)
A teia é desenhada em canvas, então suas três cores são escolhidas em JavaScript e trocadas junto com o tema, espelhando os mesmos tokens: ponto em repouso `rgba(255, 111, 183, 0.7)` no escuro e `rgba(199, 21, 111, 0.5)` no claro; ponto aceso (acima de 0.35 de brilho) em `pink-2` no escuro e `pink-deep` no claro; fio construído sobre `255, 45, 149` no escuro ou `199, 21, 111` no claro, com alfa somado — a base cai com a distância até no máximo 0.28, e a parte acesa vale até mais 0.55. A linha que o ponteiro puxa usa a mesma base com alfa `brilho × 0.8`.

### Named Rules
**Regra do Rosa como Dado.** O rosa aparece onde há dado ou ação: número, barra, botão, filtro ativo, link, ícone. Texto corrido, títulos de seção e nomes de cartão ficam em `text`; um parágrafo rosa é erro.

**Regra do Verde Vivo.** `status-live` só existe como ponto, ícone ou pílula de estado que significa "em produção", "disponível", "atual" ou "em conclusão". Na pílula ele é contorno a 45% e lavagem a 8%; nunca é cor de texto, botão ou superfície sólida.

**Regra do Branco sobre Rosa Profundo.** Texto branco sobre rosa só acontece sobre `pink-deep` ou sobre o gradiente `pink-btn` para `pink-deep`. `pink` e `pink-2` nunca são fundo de texto.

**Regra do Canvas que Segue o Token.** Cor desenhada em canvas não inventa valor: ela é lida do mesmo par de tokens do tema e trocada quando `[data-theme="light"]` entra. Um rosa que só existe dentro do `<canvas>` é erro.

**Regra do Degrau Visível.** `surface-2` precisa aparecer sobre `surface` nos dois temas. Por isso ele é branco no escuro e rosa no claro: trilho, chip ou hover que some sobre o cartão é erro.

## Typography

**Display Font:** Poppins (fallback system-ui, Segoe UI, Roboto)
**Body Font:** Poppins (mesma família, pesos 300 a 800 carregados; 400 a 800 usados)
**Label/Mono Font:** JetBrains Mono (fallback Consolas), pesos 400 e 500
**Signature Font:** Great Vibes (fallback Brush Script MT), só para a palavra "Mylenna"

**Character:** Poppins geométrica em pesos altos faz os números parecerem visuais de painel; JetBrains Mono carimba datas e medidas como um sistema que registrou; Great Vibes assina a página como uma pessoa. Três vozes, cada uma com um único papel.

### Hierarchy
- **Display** (800, `clamp(1.9rem, 2.6vw, 2.5rem)`, line-height 1, tracking -0.02em, `tabular-nums`): só o número do KPI, em `pink-2`. O sufixo ("+", "anos") é um `small` de 1.1rem, peso 700, em `pink`. Fica em 1.9rem abaixo de 600px.
- **Signature** (Great Vibes 400, 2.2rem, line-height 1): a palavra "Mylenna" em `pink-2` com `text-shadow` de brilho, no logo do cabeçalho e no rodapé; 1.9rem abaixo de 600px. O coração ♡ vem em Poppins, tamanho menor, em `pink`. A mesma fonte desenha o "M" de 4.6rem do fallback da foto.
- **Headline** (700, `clamp(1.7rem, 3.4vw, 2.4rem)`, line-height 1.15, `text-wrap: balance`): título de seção ("Sobre mim", "Projetos", "Trajetória 2022–2026"). O nome no cartão de perfil é o `h1` da página, em 1.45rem, peso 700.
- **Title** (600, 1rem a 1.15rem conforme o cartão, line-height 1.3): título do gráfico (1.15rem), título do painel no visualizador (`h4`, 1.1rem), cartão de trajetória (1.08rem), cartão de graduação (1.1rem), título das recomendações (1.15rem), trecho em destaque da recomendação (1.05rem), grupo de competências (0.98rem), cabeçalho da matriz e do visualizador (1rem), título da barra de relatório (0.95rem). Cargo-alvo no perfil em 1.05rem/600 `pink-2`. Rótulo do KPI (0.9rem) e itens de contato (0.95rem).
- **Lead** (500, 1.12rem, line-height 1.6, em `text`): a voz de abertura da prosa. Existe uma única vez, no primeiro parágrafo de "Sobre mim", e cai para 1.02rem abaixo de 600px. É o único texto corrido em tinta plena; tudo que vem depois volta para `text-2`.
- **Body** (400, 0.92rem, line-height 1.6 no corpo, 1.4 dentro de tabelas): células, descrição de trajetória, texto do painel (0.9rem/1.6), linha expandida da matriz. Descrição de seção em 1rem, `text-2`, máximo 62ch. Parágrafo da matriz máximo 72ch. Prosa longa de "Sobre mim" em 0.95rem com line-height 1.75 e medida de 70ch — a leitura mais arejada da página, porque é a única que pede leitura contínua. O resumo do perfil (`ctx__lead`) é corpo de 0.88rem/1.55 contido pela largura do próprio cartão.
- **Label** (600, 0.72rem, tracking 0.08em, caixa alta, `text-3`): cabeçalho de coluna, rótulo de grupo de segmentador ("Categoria", "Ferramenta"), rótulo do item de contato, rótulo de bloco em "Sobre mim" ("Como eu trabalho", "O que busco"), rótulo "Comportamentais", rótulo flutuante do campo em foco (0.7rem, 0.06em, `pink-2`), rótulo de célula na matriz empilhada (0.66rem). O par rótulo-sobre-valor de "O que busco" é a variante minúscula: `span` de 0.74rem em `text-3` sobre `strong` de 0.88rem peso 600.
- **Mono** (JetBrains Mono 400 a 500, 0.7rem a 0.85rem, `tabular-nums`): carimbo "Atualizado em", delta de produtividade, eixo de anos do Gantt (0.76rem), texto dentro da barra do Gantt (0.7rem), data do cartão de trajetória (0.78rem, `pink-2`), coluna Ano da tabela de cursos (em `pink-2`, com o cabeçalho de volta em Poppins), contador da janela de ampliação ("1 / 2", 0.8rem), valor "100%" da linha do DBO no gráfico e travessão "—" da matriz para projeto sem medição em horas (0.85rem, `text-3`), período ao lado da empresa no Gantt do celular (0.72rem, `pink-2`).

### Named Rules
**Regra do Mono Só em Medida.** JetBrains Mono aparece apenas em datas, anos, carimbos, deltas, eixos, contadores e nos valores sem hora (o "100%" do DBO e o travessão da matriz). A sigla "n/m" saiu do site em 2026-09-21: recrutador não a entende. Nome de projeto, cargo, cabeçalho e corpo nunca vão para mono.

**Regra da Assinatura.** Great Vibes escreve uma única palavra, "Mylenna", sempre acompanhada do coração ♡ em Poppins, e só no logo do cabeçalho e no rodapé (além do "M" do fallback da foto). Não vai para título, slogan, botão nem cartão.

**Regra do Número Tabular.** Todo número que compete com outro (KPI, valor de barra, coluna h/mês, ano, contagem "7 de 7", resultado de painel) usa `font-variant-numeric: tabular-nums` e alinha à direita quando está em coluna.

**Regra da Medida que Segue a Leitura.** Quanto mais longo o texto, mais larga a entrelinha e mais curta a medida: nota de rodapé e descrição de seção param em 62ch, parágrafo de matriz em 72ch, prosa de "Sobre mim" em 70ch com 1.75 de entrelinha. Texto corrido sem teto de medida só é aceitável dentro de um cartão estreito que já faz esse papel.

**Regra da Quebra Escolhida.** Onde a quebra de linha muda o sentido, ela é decidida no texto, não pelo navegador: o título da barra de relatório usa espaços inseparáveis para quebrar no celular como "Relatório de carreira ·" / "Mylenna Duarte", sem `text-wrap: balance`.

## Layout

Contêiner central de `min(1180px, 100% - 2.5rem)`; a página inteira é uma coluna de seções com 5.5rem de respiro vertical (4rem abaixo de 600px). A barra de navegação é fixa, 76px de altura, e encolhe para 66px com vidro fosco (`blur(14px)`, fundo a 82%) após 30px de rolagem; o `scroll-padding-top` do documento acompanha.

A primeira dobra é um relatório. No topo, a barra de relatório (`bar-strip`) só com título e o carimbo "Atualizado em" (preenchido pelo script a partir de `document.lastModified`, que é a data de publicação da página ou, sem ela, a data de hoje; o carimbo nasce com `hidden` e só aparece preenchido), 1.2rem acima do resto; abaixo de 600px ela centraliza. Depois, a grade `minmax(300px, 1fr) 2fr` com 1.2rem de vão e alinhamento ao topo: à esquerda o cartão de perfil (`.ctx`), à direita a coluna principal (`.report__main`), uma grade de 1.2rem com a faixa de KPIs em cima e o gráfico de barras embaixo. A ordem do perfil é deliberada: visual orbital, nome, cargo-alvo, nível e contratação, pílula de disponibilidade, as cinco ações (currículo em linha própria; LinkedIn, WhatsApp, E-mail e GitHub em grade 2 × 2), e só então, abaixo de uma régua tracejada, o resumo e a lista de metadados. Nome, vaga-alvo, disponibilidade e currículo precisam caber na primeira tela de um notebook de 1366×768 e de um celular de 390×844 — isso foi verificado no build e é a razão da ordem. Abaixo de 600px o perfil se divide em dois cartões (`.ctx__id`, identidade e ações; `.ctx__more`, resumo e metadados) e os indicadores entram entre eles, antes do gráfico: `.ctx` e `.report__main` viram `display: contents` (o perfil perde fundo, borda e padding) e os quatro blocos são ordenados na grade do relatório. No desktop e no tablet continua um cartão só, com a régua tracejada entre as partes.

Cada seção abre com um cabeçalho em `flex` alinhado pela base: título e descrição à esquerda, 2.2rem de margem abaixo. A ordem das seções, repetida na navegação, alterna fundo liso e `section--alt` (gradiente vertical de `bg-3` a 50% no meio, sem borda): Visão geral → Sobre (alt) → Trajetória → Projetos (alt) → Competências → Formação (alt) → Contato. Dentro de Projetos, o visualizador de painéis vem primeiro, 2.6rem acima dos segmentadores e da matriz.

Grades internas observadas: KPIs em `repeat(4, 1fr)` com 0.9rem de vão (0.7rem abaixo de 600px); gráfico com colunas compartilhadas por `subgrid` (`minmax(0, 1.05fr) minmax(0, 2fr) auto fit-content(15rem)`, 0.9rem entre colunas); "Sobre mim" em `1.55fr 1fr` com 1.2rem de vão, prosa à esquerda e ficha à direita, a ficha grudada ao rolar (`position: sticky; top: nav + 1rem`) acima de 1024px; painel do visualizador em `minmax(0, 2fr) minmax(0, 1fr)` com 1.5rem de vão; trajetória em `repeat(2, 1fr)` com o cartão do cargo atual ocupando a linha inteira (seus tópicos em 2 × 2 acima de 900px) e os outros quatro fechando duas linhas de dois; competências em `repeat(3, 1fr)`; contato em `1fr 1.25fr`. Vãos internos: 1rem entre cartões, 1.1rem na grade de competências, 1.6rem entre os blocos da ficha, 0.8rem entre capturas empilhadas, 0.45rem entre chips e abas, 0.55rem entre botões de ação.

Pontos de quebra, todos `max-width` salvo a faixa intermediária:
- **1025px a 1200px**: a coluna principal fica estreita para quatro indicadores — KPIs em 2 colunas e o gráfico empilhado (nome na linha inteira, barra e valor lado a lado, variação na linha inteira).
- **1100px**: o botão de currículo sai da navbar; competências em 2 colunas.
- **1024px**: KPIs em 2 colunas; relatório em uma coluna (perfil em cima); a ficha de "Sobre mim" deixa de grudar; as quatro ações do perfil viram uma linha de quatro; metadados em 2 colunas.
- **900px**: menu vira gaveta lateral de `min(320px, 85vw)` com vidro `blur(18px)`; contato, trajetória, "Sobre mim" e o painel do visualizador em uma coluna; gráfico empilhado como na faixa intermediária; Gantt empilha rótulo sobre trilha; botões de navegação da ampliação descem para o centro da base; traços de circuito menores.
- **720px**: matriz vira pilha de fichas com rótulo de célula via `data-label`.
- **600px**: seções a 4rem; KPIs 2×2 apertados; competências e metadados em uma coluna; ações do perfil voltam a 1 + 3; visual orbital a 256px de altura; cartões de "Sobre mim" em `1.4rem 1.3rem`; pílula de conclusão desce para baixo do título da graduação; abas de página mais justas; texto da barra do Gantt escondido.

O fundo é uma pilha fixa de três camadas atrás do conteúdo, nenhuma delas rolando: os dois blooms radiais de rosa mais o gradiente diagonal, no `body::before` (`z-index: -4`); a teia em `#network`, um canvas do tamanho do viewport (`z-index: -3`, `pointer-events: none`); e os dois traços de circuito de 480×480px a 75% de opacidade (300×300px a 55% abaixo de 900px), um no canto superior esquerdo e outro girado 180° no inferior direito, apagados por máscara radial de 35% a 80% do raio (`z-index: -2`). O traço de cima recebe uma segunda máscara vertical que o esconde atrás da navbar e o faz surgir logo abaixo dela (de 60px a 120px; 40px a 80px abaixo de 900px). As três camadas só aparecem nas calhas: os cascos quase opacos de cada visual as cobrem. Acima do conteúdo ficam a navbar (`z-index: 1000`), a barra de progresso de rolagem (`1001`) e, quando aberta, a janela de ampliação na camada superior nativa do `<dialog>`.

### Named Rules
**Regra da Primeira Tela.** Nome, vaga-alvo, disponibilidade e o botão de currículo cabem no primeiro viewport em 1366×768 e em 390×844. Qualquer adição ao cartão de perfil acima das ações precisa provar que não empurra o currículo para baixo da dobra.

**Regra do Hidden que Sempre Vence.** O reset declara `[hidden] { display: none !important; }`. Nenhuma classe com `display` próprio (linha de matriz, painel do visualizador, captura) pode anular o atributo; esconder e mostrar é sempre trocar `hidden`, nunca brigar por especificidade.

## Elevation & Depth

Sistema de camadas tonais com sombra ambiente. A profundidade vem do casco: `surface` (ameixa a 96%) destacado do preto-ameixa do fundo, `surface-2` para o que está dentro do cartão ou em hover, e a borda rosa em duas opacidades marcando o contorno. Os cascos são quase opacos de propósito: o fundo tem movimento e cor, e o dado precisa de chão parado. Sombras existem, mas são pretas, difusas e sem deslocamento lateral; elas separam o cartão do fundo sem criar relevo. O brilho rosa é a única "luz" do sistema e está reservado ao que a marca assina: botão primário, hexágono, assinatura, campo em foco e o visual orbital do perfil.

### Shadow Vocabulary
- **Ambiente do cartão** (`box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35)`): KPI, perfil, gráfico, matriz, visualizador, capturas de painel e os dois cartões de "Sobre mim" em repouso; também o estado hover de botão fantasma, cartão de trajetória, item de contato e barra do Gantt.
- **Ambiente profundo** (`box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45)`): definido como `--shadow`, reservado a superfícies flutuantes; não é usado em repouso por nenhum componente do build atual.
- **Sombra da ampliação** (`box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6)`): só a imagem aberta na janela de ampliação.
- **Brilho do botão** (`box-shadow: 0 10px 30px -8px var(--glow), inset 0 1px 0 rgba(255,255,255,0.2)`): botão primário; em hover cresce para `0 18px 40px -8px var(--glow)`.
- **Brilho do hexágono** (`filter: drop-shadow(0 0 4px var(--glow))`): contorno do hexágono.
- **Brilho da assinatura** (`text-shadow: 0 0 18px var(--glow)`): logo e rodapé.
- **Brilho orbital** (`box-shadow: 0 0 40px var(--glow), 0 0 0 10px rgba(255, 45, 149, 0.06)` na moldura da foto; `0 0 12px var(--pink)` nos pontos das órbitas; `0 10px 26px -10px var(--glow)` nas peças flutuantes): só o visual do cartão de perfil.
- **Anel de foco do campo** (`box-shadow: 0 0 0 4px rgba(255, 45, 149, 0.15)` com borda em `pink`).
- **Halo de estado vivo** (`box-shadow: 0 0 0 4px rgba(61, 220, 132, 0.25)`, no meio do ciclo `nowPulse` de 2.4s): só o ponto verde da barra "atual" do Gantt.
- **Modo claro**: as sombras pretas viram vinho a 12% e 10%, o brilho cai para 30%.

### Named Rules
**Regra do Canvas Opaco.** Nenhum efeito de fundo atravessa uma superfície de dado. Teia, traços de circuito e blooms vivem só nas calhas entre os cascos; `surface` fica em 96% nos dois temas justamente para isso. Se a teia ou um circuito aparecem por trás de um KPI, de um gráfico, do perfil ou de qualquer cartão, o casco está transparente demais.

**Regra da Sombra Ambiente.** Toda sombra é preta, difusa e vertical (`0 Ypx Bpx`), nunca dura nem deslocada para o lado. O rosa só vira sombra como brilho difuso em elemento assinado pela marca.

**Regra do Hover que Sobe.** O estado hover de cartão e botão é `translateY(-3px)` (KPI: -4px; item de contato: `translateX(6px)`) mais borda em `pink` ou `border-strong`, com a transição do sistema `0.35s cubic-bezier(0.22, 1, 0.36, 1)`. Capturas de painel não sobem: a imagem cresce `scale(1.015)` dentro da moldura. O fundo só muda no hover em chip, linha de tabela e de gráfico, e nos controles pequenos que enchem de `pink-deep` (link de certificado, botões da ampliação, "voltar ao topo").

**Regra do Clique que Afunda.** Ação pressionada encolhe no lugar: `scale(0.98)` no botão (junto do `translateY(-1px)`) e `scale(0.95)` no segmentador. O retorno é imediato e tátil, sem troca de cor.

**Regra da Lista que Entra como Lista.** Conjunto de itens entra em cascata curta pelo índice `--i` (35 a 80ms por item, nunca mais que isso), com a curva de entrada `cubic-bezier(0.16, 1, 0.3, 1)` e duração entre 0.4s e 0.6s. O bloco inteiro não faz fade: quem entra são os filhos.

**Regra do Escondido Só com JS.** O estado inicial invisível de uma entrada, e qualquer painel ou página inativa do visualizador, existe apenas com JavaScript: `html.js` e `[data-reveal]:not(.in)` para as entradas, o atributo `hidden` aplicado pelo script para os painéis. Sem JavaScript, ou sob `prefers-reduced-motion`, todo conteúdo nasce visível — no visualizador, todos os painéis e páginas aparecem empilhados.

## Shapes

Quatro famílias de canto, cada uma com um papel. Pílula (999px) é ação, filtro e estado: botão, segmentador, aba de projeto, link do menu, link de certificado, pílula de disponibilidade e de conclusão, selo de nível. Cartão (18px) é contêiner: KPI, perfil, gráfico, visualizador, matriz, Gantt, cartão de trajetória, grupo de competências, os dois cartões de "Sobre mim", cartões de formação, item de contato, formulário. Cartão pequeno (12px) é barra ou bloco utilitário: barra do relatório, faixa de segmentadores, linha de comportamentais, campo de formulário, peças flutuantes do perfil, "voltar ao topo". Captura (10px) é a moldura das imagens de painel e da imagem ampliada. Abaixo disso, 8px para chip, para o ícone de atalho da matriz e para a linha do gráfico em hover; 6px para barra de dado (trilha do gráfico, barra do Gantt); 4px para a mini-barra da matriz; 2px para o sublinhado do menu, a borda da aba de página e o traço do hambúrguer.

Círculos completos aparecem no botão de tema, no botão de menu, nos botões da janela de ampliação (46px), no selo de lupa das capturas (34px), na moldura da foto (150px com anel cônico de 4px em `pink`, `pink-3`, `pink-deep`, `pink`, girando em 18s lineares), nas duas órbitas (205px tracejada em `border-strong` e 262px sólida em `border`; 195px e 246px abaixo de 600px), nos pontos das órbitas (9px) e nos pontos de estado (7 a 8px). Na teia de fundo tudo é círculo: pontos de 1.1 a 2.5px de raio que crescem até +1.8px quando acesos pelo ponteiro.

Bordas são sempre de 1px em `border` ou `border-strong`; 1.5px apenas no botão fantasma e na barra de formação do Gantt (contorno em `pink-2`, fundo transparente); as pílulas de estado usam 1px em `status-live-line`. A aba de página ativa marca-se só por uma borda inferior de 2px em `pink` sobre o trilho de 1px. Na teia, o fio de proximidade tem 1px e engrossa para 1.4px quando os dois pontos estão acesos; a linha do ponteiro tem 1.2px. Divisores internos de linha são tracejados (`1px dashed var(--border)`) no gráfico, no Gantt, entre o bloco de ação e o bloco de detalhes do perfil, e entre painéis empilhados sem JavaScript; sólidos na tabela. A linha expandida da matriz abre com uma régua vertical de 1px em `border-strong` à esquerda do parágrafo.

O hexágono é o símbolo geométrico da marca: um `<symbol id="hex">` de 100×100 com o caminho `M50 4 L90 27 V73 L50 96 L10 73 V27 Z`, ponta para cima, traço de 2.5 em `pink` com brilho, e um ícone centralizado dentro em `pink-2`. Ele aparece em três tamanhos, sempre com a mesma geometria: 32px na lista "Como eu trabalho", 46px no padrão (competências, contato, iniciais de quem recomenda) e 64px no cartão de graduação. Os traços de circuito seguem a mesma gramática: linhas de 1.5px em ângulo reto, terminando em nós circulares de 4px e 2.5px, todos em `pink`.

## Components

### Buttons
Confiantes e compactos: pílula, peso 600, ícone à esquerda com 0.6rem de vão, sem caixa alta.
- **Shape:** pílula (999px); padding `0.85rem 1.5rem`, fonte 0.95rem; variante pequena `0.55rem 1.1rem` a 0.85rem.
- **Primary:** texto branco sobre gradiente diagonal `pink-btn` para `pink-deep`, com brilho rosa e uma linha interna de 1px a 20% de branco. Um só por bloco: "Baixar currículo" no cartão de perfil, "Currículo" na navbar, "Enviar pelo WhatsApp" no formulário (ao lado, "Enviar por e-mail" em fantasma; os dois dividem a linha com `flex: 1 1 13rem` e empilham quando falta espaço e sempre abaixo de 600px).
- **Hover / Focus:** sobe 3px, o brilho cresce e uma faixa de luz atravessa o botão da esquerda para a direita (`::after` de 40% da largura, gradiente branco a 28%, inclinado -18°, em 0.7s com a curva de entrada); o botão tem `overflow: hidden` para conter a faixa. Foco visível é `outline: 2px solid var(--pink)` com 3px de offset (global).
- **Active:** qualquer `.btn` pressionado faz `translateY(-1px) scale(0.98)`.
- **Ghost:** texto em `text`, fundo `surface`, borda de 1.5px em `border-strong`. Hover: borda `pink`, texto `pink-2`, sobe 3px, ganha sombra ambiente. É o botão das outras três portas de contato.
- **Icon buttons:** círculo de 42px (`icon-button`) para tema e menu, borda `border`, ícone em `pink-2`; o de tema gira 20° em hover. "Voltar ao topo" é o mesmo tamanho com 12px de raio e borda forte; em hover enche de `pink-deep`.
- **Links de texto:** "Ver as telas dos projetos" no gráfico, "Ver no GitHub" no painel e o link do rodapé da matriz são texto em `pink-2` peso 600 (0.88rem) com ícone; em hover viram `pink`, e a seta do link do gráfico desce 3px, apontando para onde ele leva.

### Chips
Três peças que não se confundem: o segmentador filtra, a aba de projeto escolhe o painel, o chip só nomeia.
- **Slicer (filtro):** pílula, `0.42rem 0.95rem`, 0.85rem peso 500, borda `border`, texto `text-2`, fundo transparente. Hover: borda e texto rosa. Ativo (`aria-pressed="true"`): fundo `pink-deep`, texto branco, borda transparente. Pressionado: `scale(0.95)`. Vivem dentro do cartão da tabela que filtram, numa faixa entre o cabeçalho "Todos os projetos" e o cabeçalho de colunas: fundo `surface-2`, régua `border` embaixo, `0.9rem 1.3rem`, rótulo em caixa alta antes de cada grupo. Nunca ficam soltos entre dois cartões, onde não se sabe o que filtram (ajuste pedido pela usuária em 2026-09-21).
- **Chip (ferramenta):** 8px de raio, `0.35rem 0.8rem`, 0.82rem peso 500, fundo `surface-2`, borda `border`, texto `text-2`. Hover: fundo e borda `pink-deep`, texto branco. Não é clicável; o hover é só resposta. Na entrada da seção de competências, cada chip estoura (`popIn`, 0.4s) com atraso composto pelo grupo e pela posição: `--i × 60ms + --j × 35ms + 120ms`.
- **Selo de nível** (`chip__lvl`): quando há nível declarado (Power BI, SQL e Python "intermediário", Power Platform "avançado"), ele entra dentro do chip como uma mini-pílula de 0.72rem/600 em `pink-2` sobre rosa a 12%; no hover do chip vira branco sobre branco a 18%. Só aparece onde o nível existe; nunca é barra ou porcentagem.
- **Pílula de estado** (`status-tag`): "Disponível para início imediato" no perfil e "Conclusão em dez. 2026" na graduação — ponto verde de 8px, contorno `status-live-line`, lavagem `status-live-wash`, 0.8rem/600 em `text`, `0.35rem 0.85rem`. Na graduação ela é empurrada para a direita do cartão e desce para baixo do título abaixo de 600px.

### Cards / Containers
Casco escuro quase opaco que se distingue do fundo por borda e por ser o único lugar sem movimento.
- **Corner Style:** 18px (`md`); barras e faixas em 12px (`sm`).
- **Background:** `surface` (ameixa a 96%; branco a 96% no claro). Nunca abaixo disso: o casco é o que barra a teia e os circuitos (ver Regra do Canvas Opaco).
- **Shadow Strategy:** KPI, perfil, gráfico, visualizador, matriz e os cartões de "Sobre mim" carregam a sombra ambiente em repouso; cartão de trajetória, grupo de competências, Gantt, item de contato e formulário só a ganham em hover ou nunca.
- **Border:** 1px `border`; o cartão de graduação e os cabeçalhos da matriz e do visualizador usam `border-strong`.
- **Internal Padding:** `1.1rem 1.15rem 1rem` (KPI), `1.4rem 1.6rem` (trajetória), `1.4rem` (competências), `1.6rem 1.7rem` (gráfico), `1.8rem 1.6rem` (perfil), `1.3rem` (painel do visualizador), `1.8rem 2rem` (prosa de "Sobre mim"), `1.6rem 1.5rem` (ficha de "Sobre mim"), `1.3rem 1.5rem` (graduação), `1.5rem 1.6rem` (recomendação), `2rem` (formulário), `0.9rem 1.2rem` (item de contato). Abaixo de 600px o KPI cai para `1rem 1rem 0.9rem`, o gráfico para `1.3rem 1.2rem`, o painel para 1rem, os cartões de "Sobre mim" para `1.4rem 1.3rem` e o formulário para 1.4rem.
- **KPI:** número display em `pink-2`, rótulo 0.9rem peso 600 abaixo (0.5rem), subtítulo 0.8rem em `text-3`. Hover sobe 4px, a borda vira forte e o número migra para `pink` numa transição de cor de 0.25s. Ao entrar na tela, os quatro fazem `fadeUp` de 0.7s na curva de entrada do sistema (`cubic-bezier(0.16, 1, 0.3, 1)`), com atraso de 0.08s cada, e o número conta de zero em 1.4s com ease-out cúbico.
- **Entradas:** cartões de trajetória sobem em `fadeUp` de 0.55s com 70ms de cascata; grupos de competências em `fadeUp` de 0.5s com 60ms; cada cartão de formação faz um `fadeUp` único de 0.5s; linhas da tabela de cursos e itens de contato deslizam em `rowIn`; o formulário sobe em `fadeUp` de 0.6s com 150ms de atraso fixo.

### Cartão de perfil (`.ctx`)
O cartão que responde, na primeira tela, quem é, o que busca e como chamar. Centrado, `1.8rem 1.6rem`, com a ordem fixa descrita em Layout.
- **Visual orbital** (`.ctx__visual`): área de 272px de altura (256px abaixo de 600px) e até 330px de largura, o mesmo motivo do hero do site de clientes. No centro, a moldura de 150px com anel cônico girando em 18s e brilho orbital, flutuando 10px para cima e para baixo em 6s (`floaty`). Dentro dela, a foto em `object-fit: cover` com `object-position: center 10%`: a foto é em pé, e centralizar deixaria o rosto alto demais no círculo. Se a imagem falhar, entra no lugar o "M" manuscrito sobre `bg-3`. Em volta, duas órbitas: a interna tracejada gira em 30s, a externa sólida em 50s no sentido contrário, cada uma com um ponto rosa de 9px que brilha. Quatro peças flutuantes (`float-icon`, 42px, 12px de raio, vidro `bg-2` a 85% com `blur(8px)`, borda `border-strong`, ícone em `pink-2`) ocupam os cantos e flutuam em 5s com atrasos de 0, 1.2, 2.4 e 3.4s; abaixo de 600px elas encolhem para 38px. Esta é a única moldura de ícone que não é hexágono: as peças são decoração de órbita, não ícone de conteúdo. O movimento fica contido dentro do casco do perfil, que continua opaco por trás dele.
- **Identidade:** nome (`h1`, 1.45rem/700), cargo-alvo "Busca vaga de Analista de Dados / BI" (1.05rem/600 `pink-2`, `text-wrap: balance`), nível e contratação (0.88rem/500 em `text`) e a pílula de disponibilidade.
- **Ações:** o currículo na linha inteira (`0.8rem 1rem`, 0.92rem) e as quatro portas (LinkedIn, WhatsApp, E-mail, GitHub) em `0.7rem 0.5rem`/0.84rem, numa grade de duas colunas; de 1024px a 601px, onde o perfil tem a largura toda, as quatro portas ficam numa linha só.
- **Detalhes:** abaixo de uma régua tracejada (`padding-top: 1.1rem`), o resumo em 0.88rem/1.55 `text-2` e a lista de metadados com ícones em `pink` (0.85rem `text-2`): cargo atual prefixado por "Hoje:", local e formato de trabalho, formação com a data de conclusão, idiomas e, por último, o atalho sublinhado em `pink-2` "2 recomendações de gestores", que leva a `#recomendacoes`.

### Visualizador de painéis (`.viewer`, `#paineis`)
A prova mais forte do ofício: prints reais dos relatórios em Power BI, lidos como no próprio Power BI.
- **Casco:** o mesmo da matriz — 18px, `surface`, borda `border`, sombra ambiente. Cabeçalho com título "Painéis e aplicações" (1rem/600, ícone `pink`) e as abas de projeto à direita, sobre régua `border-strong`.
- **Abas de projeto** (`role="tablist"`): pílulas iguais ao segmentador (`0.42rem 0.95rem`, 0.85rem/500, borda `border`, texto `text-2`); a selecionada (`aria-selected="true"`) enche de `pink-deep` com texto branco. Setas esquerda e direita percorrem as abas e movem o foco.
- **Painel** (`role="tabpanel"`): grade `minmax(0, 2fr) minmax(0, 1fr)` com 1.5rem de vão e 1.3rem de padding; uma coluna abaixo de 900px. À esquerda, o palco; à direita, a ficha.
- **Captura** (`.viewer__shot`): link para a imagem inteira, moldura de 10px sobre fundo branco, borda `border`, sombra ambiente e cursor `zoom-in`. Em hover a imagem cresce `scale(1.015)` em 0.6s e um selo circular de 34px com lupa (`rgba(13, 5, 16, 0.72)`, ícone branco) aparece no canto inferior direito; o selo é injetado pelo script.
- **Abas de página** (`.viewer__pages`): logo abaixo da imagem, como no rodapé do Power BI. Botões de texto 0.84rem/500 em `text-3`, `0.55rem 0.9rem`, sobre um trilho de 1px em `border` que rola na horizontal sem barra visível; a ativa (`aria-pressed="true"`) fica em `text` com borda inferior de 2px em `pink`. Abaixo de 600px, 0.8rem com `0.55rem 0.6rem`.
- **Ficha** (`.viewer__info`): título `h4` 1.1rem/600, natureza do projeto em 0.8rem `text-3`, descrição 0.9rem/1.6 `text-2`, resultado em `pink-2` peso 600 tabular com ícone `pink`, chips de ferramenta e o link "Ver no GitHub".
- **Rodapé:** dica "Clique na imagem para ver em tamanho real", 0.8rem `text-3` com ícone `pink`.
- **Conteúdo e ordem:** Comprovantes · App (2 telas do aplicativo em Power Apps), Ações e planos (2 páginas), Segurança pública (2) e Big Data para marketing (3), em WebP em `img/paineis/`. A ordem é por peso para quem contrata: o projeto de maior resultado em produção abre primeiro e os acadêmicos ficam por último; só a primeira imagem do painel inicial carrega sem `loading="lazy"`. As capturas não têm proporção fixa: painéis em Power BI são panorâmicos (1280 × ~715), as telas do aplicativo são menores (1019 × 572 e 1186 × 668), e a moldura branca acomoda as duas.
- **Sem JavaScript:** todos os painéis e páginas aparecem empilhados, separados por régua tracejada; o script esconde os inativos com `hidden`.

### Janela de ampliação (`.lightbox`)
Um `<dialog>` nativo de tela inteira, transparente, com o conteúdo centrado em grade.
- **Véu:** `rgba(8, 3, 10, 0.9)` com `blur(4px)`; enquanto aberta, a rolagem da página trava por `html:has(.lightbox[open])`.
- **Imagem:** até 80vh de altura (70vh abaixo de 900px) e `min(1400px, 92vw)` de largura, 10px de raio, fundo branco, sombra da ampliação; entra com `lbIn` (0.35s, `scale(0.97)` e opacidade, curva de entrada).
- **Legenda:** 0.9rem em `#e9dce4`, com o contador mono "1 / 2" em `#a891a0`.
- **Botões:** círculos de 46px em branco a 8% com borda `rgba(255, 111, 183, 0.35)`, fixos — fechar no canto superior direito, anterior e próximo na meia altura das laterais (no centro da base abaixo de 900px); em hover enchem de `pink-deep`. Grupos de uma imagem só escondem navegação e contador.
- **Uso:** qualquer link `[data-lightbox]` abre a janela, agrupado pelo valor do atributo; Esc fecha, setas navegam, clique no véu fecha. Serve às capturas de painel e aos dois certificados em imagem (as páginas seguintes do mesmo certificado entram no grupo como links com `hidden`).

### Sobre mim (`.about`)
O único bloco de prosa longa do site, e a prova de que a voz cabe dentro do relatório sem virar outra página. Dois cascos lado a lado (`1.55fr 1fr`, 1.2rem de vão, alinhados ao topo), que empilham abaixo de 900px.
- **Cartão de prosa** (`.about__main`): quatro parágrafos em primeira pessoa, 0.95rem com line-height 1.75 em `text-2`, medida travada em 70ch e 1.1rem entre parágrafos. O primeiro parágrafo é a voz de abertura (`.about__lead`): 1.12rem, line-height 1.6, peso 500, em `text` pleno — um único degrau acima, sem virar título.
- **Ficha lateral** (`.about__side`): dois blocos empilhados com 1.6rem de vão, cada um aberto por um rótulo de dado em caixa alta (0.72rem, tracking 0.08em, `text-3`, peso 600). Acima de 1024px ela gruda (`position: sticky; top: calc(var(--nav-h) + 1rem)`) enquanto a prosa rola.
- **Como eu trabalho** (`.about__how`): três linhas de 0.88rem em `text-2`, cada uma com o hexágono de 32px (`hexi--sm`, ícone a 0.72rem) à esquerda e 0.7rem de vão; 0.85rem entre linhas. É o método em três frases, não uma lista de qualidades.
- **O que busco** (`.about__facts`): cinco pares rótulo-sobre-valor — Vaga, Nível, Contratação, Formato, Início — com 0.7rem entre itens: `span` de 0.74rem em `text-3` acima de `strong` de 0.88rem peso 600, quase colados (0.1rem). Lê-se como ficha técnica, não como frase.
- **Entrada:** a seção carrega `[data-reveal]`; com `.in`, a prosa sobe em `fadeUp` de 0.6s e a ficha repete o mesmo movimento 120ms depois. Os dois cartões entram na lista de estado escondido guardada por `html.js`.

### Recomendações (`.recs`, `#recomendacoes`)
A prova de terceiros sobre o trabalho, dentro da seção Trajetória, 2.6rem abaixo dos cartões de trajetória.
- **Cabeçalho:** "Recomendações dos gestores" (1.15rem/600, aspas em `pink`) à esquerda; à direita, "Ver no LinkedIn" em 0.85rem/600 `pink-2`, com ícone de link externo.
- **Cartão** (`.rec`): duas colunas de mesma largura com 1rem de vão (uma abaixo de 900px), `surface`, borda `border` (forte em hover), 18px, `1.5rem 1.6rem`. De cima para baixo: o trecho em destaque (`.rec__lead`, 1.05rem/600 em `text`, `text-wrap: balance`, entre aspas e com reticências, `aria-hidden` porque se repete no texto), o texto integral (`blockquote`, 0.9rem/1.65 em `text-2`, 0.7rem entre parágrafos) e, preso ao fundo por `margin-top: auto`, a assinatura sobre régua tracejada: hexágono de 46px com as iniciais, nome em 0.95rem/600 e duas linhas de 0.8rem em `text-3` (cargo e relação; "Recomendação no LinkedIn" e o mês).
- **Regra:** o texto é o do LinkedIn, sem edição. Nada de foto de terceiros; as iniciais no hexágono fazem esse papel.
- **Entrada:** `fadeUp` de 0.55s com 90ms de cascata, pela mesma guarda `html.js` + `[data-reveal]:not(.in)`.

### Linha de comportamentais (`.soft-line`)
As competências comportamentais numa única linha, para passar os olhos: bloco de 12px em `surface` com borda `border`, `0.9rem 1.3rem`, 1.1rem abaixo da grade de competências. Abre com o rótulo "Comportamentais" em caixa alta (0.72rem/600, 0.08em, `text-3`) e segue com os itens separados por ponto médio, 0.9rem/1.6 em `text-2`. Sem ícones, sem caixas, sem entrada animada.

### Formação e cursos
- **Cartão de graduação** (`.edu`): 18px, `surface`, borda `border-strong`, `1.3rem 1.5rem`, hexágono de 64px à esquerda, título 1.1rem/600, linha de instituição e datas 0.9rem `text-2`, e a pílula de estado "Conclusão em dez. 2026" empurrada para a direita.
- **Tabela de cursos:** três colunas, células centradas na vertical. **Curso**: nome em `strong` (`text`, 500) com uma segunda linha em `small` (0.8rem `text-3`) com instituição e carga horária. **Ano** (`.table__year`, 5rem): mono tabular em `pink-2` alinhado à direita, com o cabeçalho em Poppins `text-3`. **Certificado** (`.table__cert`, 8rem, sem quebra): o link de certificado ou um travessão em `text-3` quando não há certificado. Hover pinta a linha com `surface-2`; abaixo de 600px, 0.84rem e `0.65rem 0.7rem`.
- **Link de certificado** (`.cert-link`): pílula de 999px com borda `border-strong`, `0.3rem 0.75rem`, 0.8rem/600 em `pink-2`, ícone de certificado à esquerda; em hover enche de `pink-deep` com texto branco. Certificados externos (Udemy) levam um ícone de link externo de 0.65rem e abrem em nova aba; os certificados em imagem (Senac, ElasNaTech, WebP em `img/certificados/`) abrem na janela de ampliação com as duas páginas.

### Inputs / Fields
- **Style:** fundo `surface-2`, borda 1px `border`, 12px de raio, padding `1.1rem 1rem 0.6rem`, fonte 0.95rem em `text`. Rótulo flutuante posicionado a `1rem / 0.9rem` em `text-3`, 0.92rem; `caret-color` e `accent-color` em `pink`.
- **Focus:** borda `pink` e anel de 4px de rosa a 15%; o rótulo sobe para 0.35rem, encolhe para 0.7rem, vira caixa alta com tracking 0.06em em `pink-2`. O mesmo acontece quando o campo tem conteúdo (`:not(:placeholder-shown)`).
- **Error / Disabled:** não definidos no build; o formulário só usa `required` nativo.

### Navigation
- **Style:** barra fixa de 76px, transparente no topo; após 30px de rolagem vira vidro fosco de 66px com borda inferior. Esquerda: assinatura "Mylenna" + ♡. Centro: sete links em pílula, 0.9rem peso 500, `text-2` — "Visão geral", "Sobre", "Trajetória", "Projetos", "Competências", "Formação", "Contato", na mesma ordem das seções. Direita: botão primário pequeno "Currículo" (some abaixo de 1100px), botão de tema circular, hambúrguer (aparece abaixo de 900px).
- **Hover / Active:** texto vira `text` e um sublinhado de 2px em `pink`, com 55% da largura, escala de 0 a 1 em 0.3s a partir do centro. O link ativo é definido por rolagem (seção a 140px do topo).
- **Mobile:** gaveta à direita de `min(320px, 85vw)`, vidro a 92% com `blur(18px)` e borda esquerda; links em 1.05rem com padding `0.8rem 1rem`; desliza em 0.4s com a curva do sistema; fecha com Escape ou clique num link. O hambúrguer de três traços de 20×2px vira X.
- **Progresso:** linha de 3px no topo da página em gradiente `pink-deep`, `pink`, `pink-3`, escalada pela rolagem.

### Visuais de dado (assinatura do sistema)
- **Barra de relatório:** bloco de 12px em `surface`, `0.7rem 1.1rem`, título em 0.95rem/600 com ícone `pink` à esquerda e carimbo mono à direita; o título usa espaços inseparáveis para quebrar no celular como "Relatório de carreira ·" / "Mylenna Duarte".
- **Linha de barra horizontal:** as linhas compartilham as colunas do gráfico por `subgrid` — rótulo (`text-2`, 0.9rem), trilha de 22px em `surface-2` com 6px de raio, valor em `pink-2` peso 700 tabular com `min-width: 6ch` alinhado à direita, delta em mono `text-3` (0.76rem/1.45) numa coluna de até 15rem —, para que tudo alinhe entre linhas. O preenchimento é gradiente `pink-deep` para `pink`, cresce por `scaleX` em 1.2s com atraso escalonado de 0.12s por linha. Em hover a linha inteira recebe fundo `surface-2` com 8px de raio e o valor migra para `pink` (transição de cor de 0.25s). A linha sem medição em horas (DBO) troca a trilha por um pontilhado de `border` e o valor por "100%" em mono `text-3`, com a variação "do processo legado digitalizado". Divisor tracejado entre linhas. Empilhado (de 1025px a 1200px e abaixo de 900px): colunas `1fr auto`, rótulo e delta na linha inteira, 0.4rem entre as linhas internas. Abaixo do gráfico, a nota de rodapé (0.82rem `text-3`, 62ch), o link "Ver os painéis em Power BI" e a pilha de chips "Ferramentas por trás dos números".
- **Matriz de projetos:** cabeçalho "Todos os projetos" com a nota viva à direita ("7 de 7 · ordenado por horas/mês", 0.8rem `text-3` tabular, a contagem em `pink-2` peso 700, atualizada pelos filtros). Logo abaixo, a faixa de segmentadores, dentro do mesmo cartão. Cabeçalho de coluna em label caixa alta, células `0.9rem 1.3rem`, coluna numérica alinhada à direita em `pink-2` peso 700 com mini-barra de 72×8px (4px de raio) antes do número. Nos três projetos com painel, o nome vem seguido de dois atalhos quadrados de 26px (8px de raio, borda `border`, ícone `text-3`, hover `pink-2`/`pink`): o de painel seleciona a aba do projeto no visualizador e a âncora rola até `#paineis`; o outro leva ao GitHub. Linha em hover ou aberta pinta as células com `surface-2`; o botão do nome tem chevron em `pink` que gira 180°. A linha de descrição abre abaixo com fundo `surface-2` e régua vertical forte, e o parágrafo entra com `descIn` (0.35s: sobe 6px enquanto o `clip-path` abre de cima para baixo). Quando a matriz entra na tela, as linhas deslizam em `rowIn` de 0.5s com 55ms de cascata por `--i`, e as mini-barras crescem de `scaleX(0)` em 0.9s com 80ms por linha mais 200ms de espera. Filtrar pelos segmentadores reindexa `--i` e reexecuta a entrada, como um visual que acabou de atualizar. Projeto sem medição em horas mostra um travessão em mono `text-3` (com "sem medição em horas" só para leitor de tela, via `.sr-only`). Rodapé com a nota que explica o travessão e o link "Todos os repositórios no GitHub". Embaixo da categoria, uma pílula de contexto (`.matrix__ctx`, 0.7rem/600, 999px): "Em produção" com ponto verde, contorno e lavagem de `status-live`, ou "Acadêmico" com contorno `border-strong` em `text-3`. Abaixo de 720px, o `thead` some, cada linha vira uma grade 2 colunas e cada célula mostra seu `data-label` em 0.66rem caixa alta.
- **Gantt:** eixo de cinco anos em mono `text-3` sobre régua forte; trilha de 28px com linhas verticais de 1px a cada 20%; barra em `pink-deep` com texto mono branco de 0.7rem, 6px de raio, posicionada por `--s` e `--w`. Hover ou `is-hot` (espelhado do cartão de detalhe): fundo `pink-btn`, `scaleY(1.15)`, sombra ambiente. Formação é contorno em `pink-2` sem fundo; o cargo atual leva um ponto verde no fim que pulsa um halo verde a cada 2.4s (`nowPulse`). Cresce por `growX` de 0.9s com atraso de 0.08s por linha ao entrar na tela. Abaixo de 600px o texto da barra some e o período aparece ao lado da empresa, no rótulo (`.gantt__when`, `aria-hidden`, porque o leitor de tela já lê a barra). Clicar na barra rola até o cartão de detalhe.
- **Cartões de trajetória** (`.tl-card`): título, linha de data mono e local, e tópicos (`.tl-points`) em 0.92rem/1.55 `text-2`, cada um com um losango de 6px em `pink` (quadrado girado 45°, sem raio). O primeiro tópico do cargo atual abre com o resultado em `strong` `text`. O cartão da graduação não repete o projeto de Big Data: aponta para ele com um link sublinhado em `pink-2` que abre a aba do painel.

### Teia de fundo (`#network`)
O motivo de circuito da marca em movimento: uma teia de pontos que reage à passagem do mouse e não guarda nada.
- **Superfície:** canvas fixo cobrindo o viewport em `z-index: -3`, com `pointer-events: none` — quem escuta o ponteiro é a `window`, então a teia nunca rouba clique nem atrapalha a rolagem. Ela só é vista nas calhas entre os cascos. A densidade é `min(70, (largura × altura) / 20000)` pontos, com `devicePixelRatio` limitado a 2; ao redimensionar, a malha só ganha pontos, nunca reinicia.
- **Repouso:** cada ponto tem raio de 1.1 a 2.5px, deriva a até 0.28px por quadro e inverte a velocidade ao tocar a borda do viewport. Dois pontos a menos de 130px ficam ligados por um fio de 1px cujo alfa cai com a distância, no máximo 0.28.
- **Resposta ao mouse:** o ponteiro tem alcance de 190px. Cada ponto dentro dele ganha um valor de brilho (1 no ponteiro, 0 na borda do alcance) que persegue o alvo a 0.18 por quadro, de modo que acende e apaga de forma suave. O ponteiro puxa uma linha de 1.2px até cada ponto ao alcance, com alfa `brilho × 0.8`; o fio entre dois pontos acesos soma até mais `0.55` de alfa e engrossa para 1.4px; e o ponto aceso cresce até +1.8px e troca de `pink-2` para a cor quente do tema acima de 0.35 de brilho.
- **Nada persiste:** não há ligação criada, pulso, anel de confirmação nem contador. A teia volta ao repouso assim que o cursor se afasta.
- **Só mouse:** apenas `pointerType === "mouse"` move o ponteiro, que é desligado em `pointerleave` do documento e no `blur` da janela. Em toque, a teia é só a deriva com os fios de proximidade.
- **Economia:** o laço para quando a aba fica oculta e recomeça quando ela reaparece. Sob `prefers-reduced-motion`, os pontos não derivam, mas as linhas do ponteiro continuam respondendo.

### Hexágono com ícone
Moldura com o `<symbol id="hex">` em contorno `pink` de 2.5 e brilho de 4px, com o ícone centralizado dentro em `pink-2`. Três tamanhos: 32px com ícone de 0.72rem (`hexi--sm`, nas três linhas de "Como eu trabalho"), 46px com ícone de 1rem (padrão: título de cada grupo de competências, os cinco itens de contato e as iniciais de quem assina uma recomendação, em 0.78rem/700 no lugar do ícone) e 64px com ícone de 1.4rem (`hexi--lg`, cartão de graduação). Fora do hexágono, ícones inline aparecem em `pink` ao lado de texto (metadados do perfil, títulos de visual, resultado do painel, rodapé do visualizador) ou em `text-3` (carimbo, nota, local, atalhos da matriz). As peças flutuantes do visual orbital são a exceção documentada em "Cartão de perfil".

### Superfícies do navegador
Seleção de texto em `pink-deep` com texto branco; barra de rolagem fina com polegar `pink-deep` de 8px de raio e trilho `bg-2`; anel de foco global de 2px em `pink` com 3px de offset e 6px de raio; `caret-color` e `accent-color` em `pink`. Rodapé em `bg` a 70% com borda superior, assinatura, slogan em `text-3` e coração em `pink`.

## Do's and Don'ts

### Do:
- **Do** construir todo contêiner de dado novo sobre o casco: `background: var(--surface)`, `border: 1px solid var(--border)`, raio 18px; use `surface-2` para o que fica dentro dele.
- **Do** manter os efeitos de fundo (teia, circuitos, blooms) nas calhas e os cascos em 96%, para que nada se mova por trás de um dado.
- **Do** escrever o valor de qualquer visual de dado em `pink-2`, peso 700, `tabular-nums`, alinhado à direita, com a unidade ou o delta em mono `text-3` ao lado.
- **Do** usar pílula (999px) para tudo que se clica como ação, filtro ou aba de projeto e 8px para chips que só nomeiam.
- **Do** emoldurar ícones de conteúdo com o hexágono via `<svg><use href="#hex"/></svg>` e deixar o ícone em `pink-2` dentro, escolhendo entre 32, 46 e 64px conforme a densidade da linha.
- **Do** manter nome, vaga-alvo, disponibilidade e o botão de currículo na primeira tela em 1366×768 e 390×844.
- **Do** mostrar prova visual real — painéis e certificados — como captura sobre fundo branco, com moldura de 10px, abrindo na janela de ampliação agrupada por `data-lightbox`.
- **Do** apresentar relatórios com várias páginas com abas de página sob a imagem, no padrão do próprio Power BI.
- **Do** responder ao hover com `translateY(-3px)` e borda `pink` ou `border-strong`, na transição `0.35s cubic-bezier(0.22, 1, 0.36, 1)`; respeitar `prefers-reduced-motion` zerando animação, transição e atrasos.
- **Do** dar retorno tátil ao clique: `scale(0.98)` no botão, `scale(0.95)` no segmentador.
- **Do** rotular cabeçalhos de coluna, grupos de filtro e blocos de ficha com a label de 0.72rem, caixa alta, tracking 0.08em, em `text-3`.
- **Do** travar a medida de todo texto corrido (62ch, 70ch ou 72ch conforme o bloco) e abrir a entrelinha para 1.75 quando o parágrafo pedir leitura contínua.
- **Do** definir cada cor nova nos dois temas: token em `:root` e sobrescrita em `[data-theme="light"]`; cor desenhada em canvas lê o mesmo par, e `surface-2` precisa aparecer sobre `surface` em ambos.
- **Do** indexar os filhos de uma lista com `--i` (e `--j` quando houver segundo nível) e animar a entrada com `cubic-bezier(0.16, 1, 0.3, 1)` entre 0.4s e 0.6s, com 35 a 80ms de cascata.
- **Do** esconder e mostrar sempre pelo atributo `hidden`, que o reset faz vencer qualquer `display` de classe.
- **Do** manter o estado inicial escondido de qualquer entrada sob `html.js` e `[data-reveal]:not(.in)`, para que sem JavaScript nada desapareça.
- **Do** reexecutar a entrada de uma lista quando um filtro a reescreve, como um visual que atualizou.
- **Do** manter a camada de fundo em `pointer-events: none`, com o ponteiro escutado na `window` e desligado em `pointerleave` e `blur`.
- **Do** tratar resposta de fundo como efeito de passagem: ela acende e volta ao repouso, sem criar estado que o visitante precise entender ou desfazer.

### Don't:
- **Don't** usar rosa em texto corrido, título de seção ou nome de cartão; rosa é dado e ação.
- **Don't** usar JetBrains Mono fora de data, ano, carimbo, delta, eixo, contador e valor sem hora.
- **Don't** escrever nada além de "Mylenna" em Great Vibes, nem separar a assinatura do coração ♡, nem levá-la para além do logo e do rodapé.
- **Don't** usar sombra dura, deslocada ou colorida; sombra é preta, difusa e vertical, e o brilho rosa fica restrito a botão primário, hexágono, assinatura, campo em foco e visual orbital do perfil.
- **Don't** colocar texto branco sobre `pink` ou `pink-2`; só sobre `pink-deep` ou o gradiente do botão.
- **Don't** baixar a opacidade de `surface` nem deixar teia, circuito ou bloom aparecerem através de KPI, gráfico, perfil ou qualquer superfície de dado; a hierarquia vem da borda, e o casco existe para dar chão parado ao número.
- **Don't** abrir mais de uma voz de abertura em tinta plena por bloco de prosa: o lead é o primeiro parágrafo e o resto volta para `text-2`.
- **Don't** mostrar nível de competência como barra ou porcentagem; quando existir, ele é o selo de texto dentro do chip.
- **Don't** fazer a seção inteira aparecer de uma vez: quem entra são os filhos, em cascata curta. Fade por seção e holofote de cursor seguem fora.
- **Don't** pedir gesto ao fundo: a camada de trás reage à passagem do mouse e nada mais; nenhuma instrução na tela, nenhum estado que o visitante crie ou perca.
- **Don't** deixar a camada de fundo capturar clique, atrapalhar a rolagem ou depender do toque para fazer sentido — sem mouse, ela é só a teia à deriva.
- **Don't** esconder informação atrás de animação ou de script: sob `prefers-reduced-motion` ou sem JavaScript, todo conteúdo revelado nasce visível, as mini-barras já cheias e todos os painéis empilhados.
- **Don't** usar o verde `status-live` como cor de texto, botão ou superfície sólida; na pílula de estado ele é só contorno e lavagem.
