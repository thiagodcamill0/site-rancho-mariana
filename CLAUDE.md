# CLAUDE.md — Site Rancho Mariana

Regras de trabalho para todo agente deste projeto. Valem para código, design,
revisão e qualquer tarefa que toque a interface.

---

## Contexto do projeto

**Marca:** Rancho Mariana — casa de campo por temporada em Brotas/SP
· @rancho_mariana · Airbnb 39741558

- **Negócio:** casa inteira de alto padrão dentro de um haras em atividade.
  14 hóspedes, 6 suítes, 7 camas, 6 banheiros. Piscina climatizada, beach tennis
  com ducha, campinho, playground, casa de boneca, churrasqueira com forno de
  pizza, fogueira, pomar liberado, cavalos. Pet friendly. 4,5 km do centro.

- **Consumidor final:** quem organiza a viagem do grupo — normalmente família
  ampliada (das avaliações: de avós a bebês) ou grupo de amigos. Decide por
  todos e responde por ter escolhido bem. Chega do Instagram (17,8 mil
  seguidores) ou do Airbnb, quase sempre no celular.

- **Dor:** achar um lugar que caiba o grupo inteiro sem abrir mão de conforto, e
  ter certeza de que é mesmo o que as fotos mostram. Três avaliações dizem *"é
  ainda mais bonito que nas fotos"* — hoje a apresentação entrega menos que o
  produto, e é esse buraco que o site fecha.

- **Promessa:** a casa inteira, cuidada em cada detalhe, com privacidade absoluta
  e vista para o vale — e uma anfitriã que responde em uma hora.

- **Prova social (usar, é real):** **5,0 em 74 avaliações** · Superhost há 7 anos
  · top 5% das acomodações · taxa de resposta 100%. Hospitalidade é o item mais
  citado, com 49 menções.

- **Experiência:** **imersiva e contemplativa.** Aqui a profundidade e o ritmo
  lento servem ao produto — a pessoa quer sentir o lugar antes de reservar.
  Isso **não** autoriza sequestrar a rolagem nem sacrificar celular.

- **Ação principal:** **NÃO DETERMINADA** — reserva direta via WhatsApp
  (14) 99623-7904 ou encaminhar para o Airbnb. Ver §12.1 do `DESIGN.md`.
  Até decidir, construir o CTA como componente único e trocável, usado em um só
  lugar no código.

- **Onde fica:** Brotas/SP, 17380-000. 1,5 km do Parque Campana, 6 km da
  Cachoeira do Martelo, no caminho do autódromo Raceville. Destino de ecoturismo
  — "como chegar" e "o que fazer na região" são conteúdo, não rodapé.

- **Ainda NÃO DETERMINADO:** preço e mínimo de noites, logo, domínio, se o haras
  vira seção própria. Ver §12 do `DESIGN.md`.

Toda decisão de tela serve a essa pessoa. Na dúvida entre duas opções, ganha a
que serve melhor a ela — não a mais bonita.

---

## Fonte de verdade: `DESIGN.md`

O `DESIGN.md` na raiz define tom, tipografia, cores, espaçamento, ritmo,
densidade, bordas, botões, movimento e tratamento de imagem.

**Nenhuma decisão visual acontece fora dele.** Quando uma tela pedir algo que ele
não cobre ou que contraria o que está lá, existem duas saídas — e só duas:

1. **Seguir o arquivo.** A tela se adapta.
2. **Atualizar o arquivo.** Se a exceção é boa, vira regra do projeto inteiro.

A terceira saída — decidir na tela, seguir em frente e deixar o `DESIGN.md`
desatualizado — é proibida. É assim que o arquivo morre: uma exceção por vez.

**Só o Orquestrador escreve no `DESIGN.md`.** Os demais propõem.

**Guarda contra inchaço:** só vira regra o que vai se repetir. Decisão de uma
tela só fica naquela tela.

**Critério de completude:** uma tela nova deve poder ser construída inteiramente
a partir do `DESIGN.md`, sem perguntar nada. Se foi preciso perguntar, a resposta
vira a próxima linha do arquivo.

---

## Ordem de trabalho

1. **Entender a marca** — feito. `DESIGN.md` §1 e `Material/pesquisa-fontes.md`.
2. **Diretrizes** — feito. `DESIGN.md`.
3. **Referências** — escolher 3, cada uma por um aspecto, contra este contexto.
4. **Interações de rolagem** — decidir quais entram, uma a uma.
5. **Componentes** — acabamento, dentro do sistema visual.
6. **Mobile** — restrição desde o passo 1; verificação no fim.
7. **Polimento** — revisão final, objetivo verificável e teto de iterações.

---

## Regras invioláveis

**Mobile é condição, não etapa.** Telas pequenas entram em toda decisão desde o
início. Se muita coisa quebrar na verificação final, a restrição não foi
respeitada antes.

**A rolagem é do usuário.** Paralaxe e profundidade sim; scroll-jacking, rolagem
invertida e seção que prende, não. Deslocamento de paralaxe ≤12% da altura do
elemento.

**Nada depende só de hover.** Todo componente com estado de mouse decide junto o
comportamento no toque: estado permanente, outro gesto, ou não entra no mobile.
Degradar em silêncio não é opção.

**`prefers-reduced-motion` corta translate, scale e paralaxe.** Sem exceção,
sem "mas aí perde a graça".

**Efeito precisa carregar informação.** Revela hierarquia, mostra progresso,
sinaliza estado ou orienta o olhar. Se sair e só se perder o charme, é enfeite —
e enfeite entra por último, se sobrar orçamento de performance.

**Performance é critério de aceite, não consequência.** Alvo em celular
intermediário: **LCP ≤ 2,5s · CLS ≤ 0,1 · INP ≤ 200ms** em 4G simulado. Toda
imagem com dimensão declarada. Sem vídeo de fundo no mobile.

**Imagem é o produto.** AVIF/WebP com fallback, `srcset` por breakpoint, lazy
fora da primeira dobra, `alt` real. Nenhum filtro ou tinta de marca sobre foto.

**O código é nosso.** Componentes de biblioteca são adaptados e incorporados ao
projeto, não consumidos como caixa-preta. Preferir o que dá para editar e manter.

**Componente entra no sistema.** Tipografia, cores, espaçamento, bordas e
movimento do `DESIGN.md` valem para tudo que chega de fora. Não pode parecer
colado depois.

---

## Quando faltar informação

Não preencha com default seguro. Escreva `NÃO DETERMINADO` e faça a pergunta.

Um verde genérico, uma sans neutra e um grid de 8px inventados para tapar buraco
são o que produz "cara de IA" — e depois viram padrão por inércia.

**Não invente fato.** Preço, número de avaliações, distância, comodidade: sai de
`Material/pesquisa-fontes.md` ou não entra. Nada de "mais de 100 famílias
felizes" se o número real é 74 avaliações.

---

## Ao revisar

**Reporte divergência, não opinião.** O gabarito é o `DESIGN.md` mais os padrões
que o próprio site já estabeleceu. Cite arquivo e trecho.

**Separe as duas coisas:**

- **Polimento** — corrige divergência contra o gabarito. Correção, não decisão.
- **Direção** — exige decisão nova (cor fora do sistema, componente novo,
  mudança de hierarquia). Não é polimento; vira escopo da próxima rodada.

**Toda rodada tem objetivo verificável e teto de iterações**, definidos antes de
começar. **Teto deste projeto: 8 iterações.** Nenhuma roda até "ficar bom".

---

## Teste final

Abrir em celular real — não é reduzir a janela do navegador — e navegar como
usuário:

> Consigo entender o lugar, me imaginar lá e iniciar a reserva sem esforço?

Se não, ainda não está pronto.
