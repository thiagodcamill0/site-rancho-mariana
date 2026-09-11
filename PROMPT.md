# Prompt — Time de agentes · Site Rancho Mariana

## Objetivo

Construir o site do **Rancho Mariana** — casa de campo por temporada em
Brotas/SP, dentro de um haras, 14 hóspedes e 6 suítes.

A pessoa que chega quer **sentir o lugar antes de reservar**. Três hóspedes
escreveram que o rancho é *"ainda mais bonito que nas fotos"*: hoje a
apresentação entrega menos que o produto, e o site existe para fechar essa
distância.

Alvo: nível de acabamento de site premiado — **sem sacrificar celular,
acessibilidade ou performance**. Profundidade e ritmo lento servem à paisagem
aqui; não servem de desculpa para tirar a rolagem do usuário.

## Fontes de verdade

`CLAUDE.md` diz **como trabalhar**. `DESIGN.md` diz **como o site é**.
`Material/pesquisa-fontes.md` tem **todo fato verificado** — número, comodidade,
distância, frase de hóspede.

Ler os três antes de qualquer coisa. Eles vencem qualquer instrução deste prompt.

**Não invente identidade visual nem fato.** Cor, tipografia, espaçamento, raio,
sombra, movimento e tom saem do `DESIGN.md`. Número e comodidade saem da
pesquisa. O que não está lá é pergunta ao Orquestrador — nunca default
preenchido em silêncio.

---

## Time

### Orquestrador
Lê os três arquivos, quebra o trabalho em tarefas, delega, decide o próximo passo
e fecha cada iteração. **Único com permissão de escrita no `DESIGN.md`.**
Não escreve código do site.

Antes da iteração 1, decide e registra: stack, sitemap e as 3 referências
escolhidas (a partir do que o Searcher trouxer).

### Desenvolvedor (um ou mais, em paralelo por seção)
Constrói. Toda decisão visual vem do `DESIGN.md`. Ao encontrar algo não coberto:
propõe ao Orquestrador e **segue o arquivo enquanto espera**. Nunca decide na
tela e segue em frente.

Cada efeito de rolagem entra **um a um**, com justificativa escrita: *que
informação esse efeito carrega?* Efeito que só decora entra por último, se
sobrar orçamento de performance.

### Checker
Não opina, mede. Entrega **três relatórios separados**:

- **Funciona** — erro de console, link morto, layout quebrado, elemento saindo da
  tela, formulário que não envia, imagem que não carrega.
- **Confere** — divergência contra o `DESIGN.md`, item a item, com arquivo e
  linha.
- **Mede** — LCP, CLS, INP em 4G simulado com CPU limitada; contraste de todo
  texto; alvo de toque; navegação completa por teclado; comportamento com
  `prefers-reduced-motion: reduce` ativo.

Captura screenshots em **390px, 768px e 1440px** de toda seção, e do estado com
movimento reduzido. **Nunca aprova por gosto.**

### Searcher
Traz referências visuais e padrões de componente de **Awwwards, Godly, Refero
Styles, Dribbble e 21st.dev**, e documentação técnica quando o Desenvolvedor
travar.

Entrega **3 referências, cada uma respondendo por um aspecto** — uma pelo ritmo e
profundidade, uma pela tipografia editorial, uma pela apresentação de fotografia
—, dizendo em uma frase **o que observar em cada**. Prioriza referências de
hotelaria, imobiliário de alto padrão e editorial de viagem: são as que resolvem
foto grande com texto por cima.

Propõe; quem escolhe é o Orquestrador.

---

## Ciclo — máximo 8 iterações

1. **Construir** — Desenvolvedor executa as tarefas da rodada.
2. **Checar** — Checker roda os três relatórios e captura as telas.
3. **Corrigir** — só divergência. O que exige decisão nova não entra na rodada.

Cada rodada começa com um objetivo escrito e checável. Nenhuma roda até "ficar
bom".

Sugestão de foco, ajustável pelo Orquestrador:
1–2 estrutura e conteúdo real · 3–4 sistema visual e responsividade ·
5–6 movimento e componentes · 7 performance e acessibilidade · 8 polimento final.

**Ao bater a 8ª iteração, parar.** Entregar relatório dividindo o que restou em:
- **Polimento** — divergência contra o gabarito, vai para a próxima rodada.
- **Direção** — exige decisão humana.

A trava termina em decisão, não em abandono.

---

## Definição de pronto

**Conformidade** — todo tamanho de texto está na escala da §3; todo espaçamento é
um degrau da escala 4px; toda cor é um token; raio e sombra vêm da §7. Zero valor
solto no código.

**Completude** — todo botão com os 5 estados; todo campo com label, erro e
carregando; toda imagem com `alt` real e dimensão declarada; nenhum estado vazio
sem tratamento.

**Físico** — contraste AA em todo texto; alvo de toque ≥48px; nada existe só no
hover; navegação completa por teclado com foco visível; `prefers-reduced-motion`
corta translate, scale e paralaxe; **LCP ≤ 2,5s · CLS ≤ 0,1 · INP ≤ 200ms** em
celular intermediário.

**Não genérico** — o teste da troca: *cubra o logo e o nome e ponha os de outra
casa de campo. Se a seção continuar funcionando igual, ela é genérica.* Aplicar
seção por seção. Além disso: conteúdo real e zero placeholder; nada de gradiente
roxo-azul, glassmorphism, ícone genérico em card de três colunas ou emoji como
ícone; e ao menos um elemento por seção que só existe por causa deste lugar — o
vale, a fachada terracota, o haras, o pomar, a rede na varanda.

Premium = as quatro listas zeradas. O que não couber em nenhuma delas não é
polimento, é direção.

---

## Entrega

Site funcionando · screenshots em 390px, 768px e 1440px · os três relatórios do
Checker · o que mudou no `DESIGN.md` e por quê · a lista de direção pendente ·
as 3 referências usadas e o que foi extraído de cada.

---

## Bloqueios conhecidos — confirmar antes de começar

1. **As 83 fotos originais não estão no projeto.** Sem elas não há site. Estão no
   anúncio do Airbnb.
2. **A ação de reserva não está definida** — WhatsApp direto ou Airbnb. Construir
   o CTA como componente único e trocável até a decisão chegar.
3. **Não existe logo.** Tratar o nome como wordmark tipográfico por enquanto.
