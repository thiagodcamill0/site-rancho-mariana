# DESIGN.md — Rancho Mariana

Documento de extração. Fonte: anúncio Airbnb 39741558 (83 fotos, texto e 74
avaliações) e Instagram @rancho_mariana. Bruto em `Material/pesquisa-fontes.md`.

Cada regra marca **[OBSERVADO]** (visto na fonte) ou **[INFERIDO]** (derivado por
consistência). Nada foi criado por gosto.

---

## 0. Estado das fontes

| Fonte | Status | O que sustenta |
|---|---|---|
| Airbnb — texto, comodidades, 74 avaliações | completo | contexto, prova social, copy real, estrutura |
| Airbnb — 83 fotos | **vistas, não baixadas** | direção visual, luz, paleta, enquadramento |
| Instagram — bio, destaques, legendas | parcial | tom de voz, temas |
| Logo / manual de marca | **ausente** | — |
| Fotos em arquivo original | **ausentes do projeto** | — |

**Consequência:** os valores de cor da §4 foram amostrados de **captura de tela
em baixa resolução**, com desvio de compressão. São direção correta e valor
aproximado — **reamostrar dos arquivos originais** antes de fechar. A tipografia
é escolha nossa: a marca não tem nenhuma. Registrado em §11.

---

## 1. Contexto

- **Negócio:** casa de campo de alto padrão para aluguel por temporada, dentro de
  um **haras em atividade**, em Brotas/SP. 14 hóspedes, 6 suítes. [OBSERVADO]
- **Não é hotel nem pousada.** É uma casa inteira, com privacidade total —
  invisível da estrada, atrás da casa do caseiro. [OBSERVADO]
- **Consumidor final:** quem organiza a viagem do grupo. Na prática: mãe ou pai
  planejando fim de semana de família ampliada (avós a bebês aparecem nas
  avaliações), grupo de amigos, ou alguém marcando aniversário. Decide por
  todos e responde por ter escolhido bem. [INFERIDO das 74 avaliações]
- **Dor:** encontrar um lugar que caiba o grupo inteiro sem sacrificar conforto,
  e ter certeza de que o lugar é mesmo o que as fotos mostram. O medo é chegar e
  ser menor, mais sujo ou mais barulhento do que parecia. [INFERIDO]
- **Promessa:** a casa inteira, cuidada nos detalhes, com privacidade absoluta e
  vista para o vale — e alguém atrás disso que responde em uma hora. [OBSERVADO]
- **Diferencial que a concorrência não tem:** haras em volta, piscina
  climatizada, beach tennis, pomar liberado. [OBSERVADO]
- **Prova social:** **5,0 em 74 avaliações**, Superhost há 7 anos, top 5% das
  acomodações. [OBSERVADO]
- **Experiência que faz sentido: imersiva e contemplativa.**
  O produto *é* a paisagem, o silêncio e o detalhe. Ao contrário de um serviço
  com prazo, aqui a pessoa quer sentir o lugar antes de reservar — e três
  avaliações independentes dizem *"é ainda mais bonito que nas fotos"*, ou seja,
  o gargalo atual é a apresentação, não o produto. O site existe para fechar essa
  distância. [INFERIDO, com evidência forte]

---

## 2. Tom de voz

Fonte: legendas do Instagram e texto do anfitrião no Airbnb.

**A marca fala baixo.** Frase curta, contemplativa, sem venda:

> "Tem lugares que fazem a gente lembrar que não precisa de muito para viver dias
> especiais." [OBSERVADO]

### Como escrever

- **Uma ideia por frase, e frases curtas.** O Instagram nunca empilha argumento.
- **Convite, não oferta.** "Venha ver o vale", não "reserve agora e ganhe".
- **Concreto onde importa.** Número quando dá segurança: 6 suítes, 14 hóspedes,
  piscina climatizada, 4,5 km do centro. O conforto se prova com fato.
- **Primeira pessoa do plural**, com a anfitriã presente. Ana Camila é parte do
  produto — 49 avaliações citam hospitalidade, o item mais mencionado de todos.
  [OBSERVADO]
- **Palavras que os hóspedes usam**, devolvidas a eles: *sossego, privacidade,
  vista, vale, se sentir em casa, cada detalhe, voltar*. Sai da fonte, não da
  imaginação. [OBSERVADO]
- **Gratidão é parte do vocabulário** da marca — há um destaque inteiro chamado
  assim. Não soe corporativo.

### O que a marca não faz

- Urgência, contagem regressiva, "últimas datas", desconto empilhado.
- Caixa alta em frase. Emoji em rajada — no máximo um, e raramente.
- Linguagem de resort ou de luxo importado ("experiência exclusiva",
  "lifestyle"). É campo brasileiro, casa de família, não hotel-butique.
- Adjetivo sem prova. Se não dá para mostrar em foto ou número, corta.

**Frase-síntese para o herói** (derivada da marca, ajustar com a anfitriã):
*Uma casa inteira, um vale inteiro, e o resto do mundo longe.* [INFERIDO]

---

## 3. Tipografia

**A marca não tem tipografia.** Nenhuma fonte é herdada — esta é uma escolha
nossa, registrada em §11.

- **Display e títulos:** serifa de texto com contraste moderado, ligeiramente
  editorial. Ex.: **Fraunces** (300–500, optical size grande) ou **Newsreader**.
  Motivo: a casa é feita de madeira, ferro trabalhado e detalhe acumulado —
  geométrica pura mentiria sobre o lugar.
- **Corpo e interface:** sans humanista neutra, 400/600. Ex.: **Inter**,
  **Source Sans 3**.
- Máximo 2 famílias. Nada de terceira fonte decorativa.

### Escala — mobile é a condição

| Papel | Mobile | ≥768px | Peso | Entrelinha | Tracking |
|---|---|---|---|---|---|
| Display (herói) | 38px | 68px | 400 | 1.05 | −0.02em |
| H1 de seção | 29px | 44px | 400 | 1.15 | −0.01em |
| H2 | 22px | 28px | 500 | 1.25 | 0 |
| H3 / título de card | 18px | 20px | 600 | 1.3 | 0 |
| Corpo | **17px** | 18px | 400 | **1.6** | 0 |
| Corpo secundário | 15px | 15px | 400 | 1.5 | 0 |
| Eyebrow / rótulo | 12px | 12px | 600 | 1.2 | **0.16em**, uppercase |
| Botão | 17px | 17px | 600 | 1 | 0.01em |
| Número de destaque | 40px | 64px | 300 | 1 | −0.02em |

- Piso absoluto: **15px**. Nunca 13 ou 14 em corpo.
- Uppercase **só** em eyebrow e tag.
- Medida de linha: máx. **66ch**.
- Display em serifa com peso leve pede texto curto — **máx. 7 palavras** por
  título de herói.

---

## 4. Cores

Extraídas das 83 fotos. **Valores aproximados** — ver §0.

### 4.1 Base — o chrome (~70% da tela)

Neutra quente, de terra e cal. Nunca cinza-azulado. [OBSERVADO]

| Token | Valor | Papel |
|---|---|---|
| `--paper` | `#FAF7F2` | fundo geral |
| `--paper-alt` | `#F0EAE0` | seção alternada, campo de input |
| `--surface` | `#FFFFFF` | card, sheet, barra |
| `--line` | `#E0D6C8` | borda 1px, divisor |
| `--ink` | `#2A2520` | texto principal — 13.6:1 sobre `--paper` |
| `--ink-2` | `#6B6157` | texto secundário — 5.4:1 sobre `--paper` |

### 4.2 Marca — terracota (~10% da tela)

Da fachada da casa, que é o elemento mais reconhecível da propriedade.
[OBSERVADO — foto 1 e externas]

| Token | Valor | Papel |
|---|---|---|
| `--terra` | `#9C3B28` | **ação primária**, link, foco — 6.6:1 com branco |
| `--terra-deep` | `#7A2C1D` | hover/active do primário |
| `--terra-soft` | `#D9A38F` | faixa, fundo de chip, moldura |

### 4.3 Campo — apoio (~18%)

| Token | Valor | Origem |
|---|---|---|
| `--pasto` | `#5A7A3F` | gramado e copa das árvores |
| `--pasto-deep` | `#3B5429` | estado de sucesso, ícone sobre claro |
| `--ceu` | `#8FB4CC` | céu de Brotas — **decorativo, nunca texto** |
| `--flor` | `#B4587E` | bougainville — acento pontual, máx. 1 por tela |
| `--madeira` | `#8A6740` | rattan e madeira — faixa, ícone |
| `--danger` | `#A32017` | erro de formulário |

**Regra dura:** `--ceu`, `--terra-soft` e `--flor` não atingem 4.5:1 com branco.
São preenchimento de forma, faixa e moldura — **nunca cor de texto, nunca fundo
de botão, nunca único indicador de estado.**

`--terra` e `--danger` são vizinhos: diferencie sempre por ícone + texto.

### 4.4 Proporção

Por tela: ~70% base + foto · ~18% campo · ~10% terracota · ~2% acento.
Mais de um bloco terracota grande na mesma dobra está errado.

### 4.5 Modo escuro

A casa à noite é quente e pontual — luz baixa no jardim, lanterna na varanda.
Se houver modo escuro, o fundo é **marrom-tinta** (`#1C1814`), não preto, e a
terracota clareia para `#C9563C` para manter contraste. Nunca invertido em
cinza neutro. [INFERIDO das fotos noturnas]

---

## 5. Espaçamento

Escala base 4px: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128**.

Densidade: **respira muito**. A propriedade é feita de espaço vazio — gramado
plano, vale aberto. Aperto contradiz o produto.

| Uso | Mobile | ≥768px |
|---|---|---|
| Gutter lateral | 20px | 6vw (conteúdo máx. 1240px) |
| Entre seções | 64px | 128px |
| Título → conteúdo | 16px | 24px |
| Entre cards | 16px | 24px |
| Padding de card | 20px | 28px |
| Padding de botão | 16px 28px | 16px 32px |
| Entre parágrafos | 14px | 14px |

`max-width` de conteúdo de texto: **66ch**. Faixas de foto podem sangrar.

---

## 6. Ritmo e densidade

Governado pela decisão "imersiva e contemplativa" da §1.

- **Uma ideia por tela.** Foto grande, um título curto, no máximo três linhas.
- **Foto primeiro, sempre.** Três avaliações dizem que o lugar é melhor que as
  fotos — o site precisa ser o mais próximo possível de estar lá.
- **Respiro entre blocos é conteúdo**, não desperdício.
- **Prova social cedo.** 5,0 em 74 avaliações e Superhost há 7 anos aparecem
  antes da metade da página. É o que remove o medo da §1.
- **Ordem narrativa:** chegada (vista e casa) → a casa por dentro → o que fazer
  (piscina, beach tennis, haras, pomar, fogueira) → quem recebe (Ana Camila e as
  caseiras) → o que dizem (avaliações) → onde fica e como chegar → reservar.
- Grid: 1 coluna até 760px; 2 acima. Nunca 3 cards com foto lado a lado.
- Texto corrido: nunca mais de 4 linhas no celular sem foto ou respiro.

---

## 7. Bordas, raios e sombras

A arquitetura é **reta com telhado inclinado**; a decoração é curva (ferro
trabalhado, rattan, rede). O sistema fica **quase reto**, com raio pequeno.

| Elemento | Raio |
|---|---|
| Botão, chip, tag | `999px` (pílula) |
| Card, painel | `4px` |
| Imagem, media block | `4px` |
| Input, select | `6px` |
| Avatar | `50%` |

- Contraste proposital: **superfícies retas, controles em pílula.**
- Bordas: `1px solid var(--line)` em branco sobre `--paper`. Sem borda colorida
  grossa, sem acento lateral.
- **Sombras** — baixas e quentes, tingidas de marrom, nunca preto puro:
  - `--shadow-1: 0 2px 10px rgba(42,37,32,.06)`
  - `--shadow-2: 0 16px 40px rgba(42,37,32,.10)`
  - `--shadow-3: 0 20px 50px rgba(42,37,32,.16)`
- Sem sombra interna, sem glow, sem sombra em texto.
- **Degradê:** proibido em superfície e botão. Permitido só como véu sobre foto,
  vertical e monocromático (`rgba(28,24,20,0..70%)`), para assentar texto.

---

## 8. Botões

Altura mínima de área tocável: **48px**, sempre. Largura total no mobile quando
é a ação da seção. Nunca dois primários lado a lado.

**Primário** — fundo `--terra`, texto branco, pílula, padding `16px 28px`, peso
600, `--shadow-1`.
- Hover: `--terra-deep`. · Focus: contorno `3px solid var(--ink)` com
  `outline-offset: 3px`, visível no teclado **e** mantido no toque, nunca
  `outline:none`. · Active: `--terra-deep` + `scale(.98)`, sem sombra.
- Desabilitado: fundo `--line`, texto `--ink-2`, **sempre com texto dizendo por
  quê**.
- Carregando: rótulo vira "Enviando…" + spinner, botão inerte. Nunca só spinner.

**Secundário** — fundo `--surface`, texto `--ink`, borda `1.5px solid var(--ink)`.
Hover `--paper-alt`; active `--line` + `scale(.98)`.

**Terciário** — só texto `--ink`, peso 600, **sublinhado permanente** com
`text-underline-offset: 4px`. Hover muda para `--terra`. Área tocável ainda 48px.

**Sobre foto** — botão vai dentro de bloco `--surface` sólido ou sobre véu
`rgba(28,24,20,.55)`. Nunca botão fantasma direto sobre fotografia.

---

## 9. Interações e movimento

O lugar é **calmo e amplo**. O movimento imita isso: lento, longo, contínuo.
Nada quica, nada pisca, nada gira.

- **Caráter:** deriva. Coisas entram devagar e param. Paralaxe sutil é permitida
  e desejada — o produto é profundidade de paisagem. [INFERIDO das fotos de vale]
- Duração: **200ms** para controle · **600ms** para entrada de bloco ·
  **1200ms+** para transição de paisagem em tela cheia.
- Easing: `cubic-bezier(.16,1,.3,1)`.
- Entrada ao rolar: `translateY(24px)` → `0` + opacidade. Uma vez, sem repetir.
- **Paralaxe:** deslocamento máximo de **12% da altura do elemento**. Foto de
  fundo move mais devagar que o texto, nunca o contrário.
- **Rolagem nunca é sequestrada.** Sem scroll-jacking, sem rolagem invertida, sem
  prender o usuário numa seção. O usuário controla a velocidade — sempre.
- **Regra dura: nenhuma informação existe só no hover.** Preço, nome do ambiente,
  ação de card — tudo visível em repouso. No celular não há hover.
- Card clicável inteiro é `<a>`/`<button>` real com `:focus-visible`.
- `prefers-reduced-motion: reduce` corta translate, scale e paralaxe; mantém
  opacidade e cor. **Sem exceção.**
- Vídeo de fundo, se houver: mudo, `playsinline`, com pôster, **nunca no
  mobile**, e com controle de pausa visível.

---

## 10. Imagens

O ativo central. 83 fotos disponíveis e três avaliações dizendo que o lugar é
melhor que elas — o trabalho do site é reduzir essa diferença.

**Tratamento observado:** luz natural forte de campo, sombras marcadas ao meio-dia,
verde saturado, céu azul intenso; à noite, luz quente pontual. Sem filtro, sem
pós-produção pesada. [OBSERVADO]

**Regras**
- **Nada de filtro, duotone, preto e branco ou tinta de marca sobre foto.** Véu
  escuro só quando há texto por cima.
- Enquadramento: **horizontal para faixa e herói; vertical para card e ambiente.**
- **Hierarquia de assunto:** vista do vale > casa e fachada > área externa de
  lazer > ambientes internos > detalhe decorativo. A vista abre a página.
- No mobile, herói em `aspect-ratio` entre `4/5` e `1/1`, com `object-position`
  no horizonte. **Nunca** cortar paisagem para 16/9 no celular.
- Foto sangrada só no herói e nas faixas de paisagem.
- Toda imagem com `alt` descritivo real. Toda imagem com `width`/`height` ou
  `aspect-ratio` declarado — CLS é critério de aceite.
- Formato: AVIF/WebP com fallback, `srcset` por breakpoint, `loading="lazy"`
  fora da primeira dobra, `fetchpriority="high"` no herói.
- **Lacunas a produzir:** nenhuma foto de drone do conjunto com o vale; nenhuma
  foto noturna da fachada iluminada; nenhum retrato da Ana Camila — e
  hospitalidade é o item nº 1 das avaliações, com 49 menções.

---

## 11. Decisões

**1. Experiência imersiva — mantida, ao contrário do padrão.**
O método favorece experiência direta. Aqui não: o produto é contemplação, o
gargalo declarado pelos hóspedes é a apresentação, e a decisão é de desejo antes
de ser de logística. *Descartado: página curta e direta ao formulário.*

**2. Tipografia com serifa — escolha nossa, não da marca.**
A marca não tem tipografia. Serifa editorial foi escolhida porque a casa é feita
de detalhe acumulado, madeira e ferro trabalhado. **Revisável sem custo** — não
há marca instalada sendo contrariada. *Descartado: sans geométrica.*

**3. Terracota como cor de ação.**
Vinda da fachada, o elemento mais reconhecível da propriedade, e com 6.6:1 sobre
branco. *Descartado: verde do gramado como primária — some no meio das fotos, que
são majoritariamente verdes.*

**4. Raio pequeno (4px) em superfície, pílula em controle.**
A arquitetura é reta; a decoração é curva. Cantos muito arredondados dariam ar de
app, não de casa de campo. *Descartado: raio 16–24px generalizado.*

**5. Paralaxe sim, scroll-jacking não.**
Profundidade serve à paisagem. Tirar o controle da rolagem contradiz "sossego" e
quebra em celular intermediário, que é a maior parte do tráfego.
*Descartado: rolagem conduzida e seções presas.*

**6. Cores são aproximadas.** Amostradas de captura de tela comprimida.
Reamostrar dos originais antes de considerar definitivo.

---

## 12. Perguntas em aberto

Em ordem de impacto:

1. **A reserva deve ser direta ou continuar pelo Airbnb?** Hoje o Instagram
   manda para o Airbnb, que cobra comissão. O site pode captar direto no
   WhatsApp (14) 99623-7904. **Muda o CTA de toda a página** e é a decisão mais
   cara deste projeto.
2. **Fotos em arquivo original** — as 83 estão no Airbnb; o projeto não tem
   nenhuma. Sem elas não há site.
3. **Preço aparece?** Diária, mínimo de noites, política de pets, taxa da
   caseira. Define se existe tabela ou só consulta.
4. **Existe logo?** Hoje não há nenhum ativo de marca.
5. **Domínio e hospedagem.**
6. **O haras entra como atração ou só como cenário?** Há cavalos com pedigree e
   um destaque inteiro sobre eles no Instagram — pode ser seção própria.
7. **Idioma:** só pt-BR? Há avaliação de hóspede de Nova York.
8. **Detector de fumaça e de monóxido** aparecem como "não informados" no
   Airbnb. Se existirem, é conteúdo de confiança; se não, é questão de operação.

---

## 13. Stack, sitemap e referências

Decidido pelo Orquestrador antes da iteração 1, conforme `PROMPT.md`.

### 13.1 Stack

**Astro (saída estática) + CSS próprio com os tokens desta página como custom
properties + JS vanilla mínimo** para revelação ao rolar e paralaxe.

Motivo: os alvos de performance (§ "Regras invioláveis" do `CLAUDE.md` — LCP
≤2,5s, CLS ≤0,1, INP ≤200ms) descartam framework de UI com hidratação. O
pipeline de imagem nativo do Astro (`astro:assets`) gera AVIF/WebP, `srcset` e
dimensão declarada sem depender de biblioteca fechada — atende a §10 direto.
Sem React/Vue: a única interatividade do site (revelar ao rolar, menu mobile,
CTA trocável, formulário) não paga o custo de JS de um framework de
componentes. *Descartado: Next.js — pipeline de imagem equivalente, mas traz
runtime React que este site não precisa.*

### 13.2 Sitemap

Site de **página única**, rolagem narrativa — a §6 já define a ordem; multi-
página fragmentaria a experiência contemplativa. Prova social entra **duas
vezes**: uma faixa compacta logo após o herói (cumpre "prova social cedo" da
§6) e a seção completa de avaliações mais adiante, na posição narrativa.

1. Header — wordmark tipográfico + CTA (componente único, trocável — §12.1)
2. Herói — foto de abertura + frase-síntese (§2)
3. Faixa de prova social — 5,0★/74, Superhost 7 anos, top 5%
4. A casa — promessa, 14 hóspedes/6 suítes, privacidade
5. Por dentro — ambientes internos
6. O que fazer — piscina, beach tennis, pomar, haras, fogueira, gourmet
7. Quem recebe — Ana Camila e as caseiras (hospitalidade é a nº1 das menções)
8. O que dizem — avaliações completas, com citação real
9. Onde fica / como chegar
10. Reservar — CTA final
11. Footer — contato, Instagram, endereço

### 13.3 Referências

Trazidas pelo Searcher, escolhidas pelo Orquestrador — todas de hotelaria ou
imobiliário de alto padrão, por resolverem "foto grande com texto por cima":

- **Ritmo e profundidade — Esperanza (Auberge Resorts),** auberge.com/esperanza.
  Observar: seções empilham com respiro generoso entre acomodação, gastronomia
  e bem-estar, sem scroll-jacking — o avanço é lento e natural.
- **Tipografia editorial — The Modern House,** themodernhouse.com.
  Observar: título serifado de peso sobre corpo sans discreto, informação
  secundária reduzida, grid curado com bastante espaço em branco entre itens —
  referência de *peso* tipográfico, não de sobreposição de texto (lá o texto
  fica abaixo da imagem).
- **Apresentação de fotografia — Aman Resorts,** aman.com.
  Observar: fotografia full-bleed em resolução muito alta, com texto assentado
  sobre a imagem por véu de opacidade/gradiente sutil, sem sujar a foto — molde
  direto para o problema central deste site.

### 13.4 Fotos disponíveis nesta rodada

`fotos/` tem **15 fotos reais** (não as 83 do anúncio), baixadas em resolução
original pelo usuário. Cobrem: fachada, jardim, piscina (dia e pôr do sol),
varanda com vista e com rede, área gourmet, sala de estar e de jantar,
cozinha, duas suítes, banheiro, área externa. Suficiente para construir a
iteração 1 com conteúdo real — sem placeholder.

**Sem foto de vale/drone limpa** entre as 15 — lacuna já registrada em §10.
Herói da iteração 1 usa `01-fachada-principal-perspectiva.jpg` (prioridade 2
da curadoria, sky livre à esquerda para o texto) como escolha interina.

**`15-area-externa-familia-e-pets.jpg` retirada de uso** até confirmação de
consentimento das pessoas identificáveis na foto — pendente de resposta do
usuário. Ver lista de Direção.

---

*Este arquivo é suficiente para construir telas consistentes hoje. Cor e
tipografia devem ser revisitadas quando os arquivos originais de foto e uma
eventual identidade de marca chegarem.*
