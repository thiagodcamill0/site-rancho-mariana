// Movimento da página — DESIGN.md §9. Dois efeitos cross-cutting:
//
// 1) Revelação ao rolar — translateY(24px)->0 + opacidade, uma vez,
//    nos blocos de conteúdo marcados [data-reveal] em cada uma das 12
//    seções do sitemap. Justificativa (§9): revela hierarquia, reforça
//    o ritmo "uma ideia por tela" da §6 — cada seção se afirma quando
//    o usuário chega nela, em vez da página inteira competir de uma
//    vez pela atenção.
//
// 2) Paralaxe em faixa de foto full-bleed — a foto (marcada
//    [data-parallax]) se move mais devagar que o texto por cima dela,
//    deslocamento nunca maior que 12% da altura do elemento.
//    Justificativa (§9): "o produto é profundidade de paisagem" — o
//    produto real é a paisagem e a distância, e o movimento comunica
//    essa camada, não decora por decorar.
//
// O efeito 3 (vídeo de contexto ligado à rolagem) tem lógica própria
// em src/components/VideoContexto.astro — específico demais para
// morar aqui, e mais fácil de revisar isolado.
//
// prefers-reduced-motion corta o efeito 2 inteiro (nenhum transform é
// aplicado) e corta o deslocamento do efeito 1 via CSS global
// (transform:none!important já existe desde a iteração 2) — aqui só
// evitamos ligar o listener de paralaxe à toa quando a preferência
// está ativa.
//
// Nota de implementação: a primeira versão deste efeito usava só
// IntersectionObserver pra revelação. Em teste com Playwright, um
// scroll instantâneo até o fim da página (equivalente a um "fling"
// rápido de trackpad ou tecla End) deixou várias seções PARA SEMPRE
// em opacity:0 — o elemento nunca chegou a ser pintado como
// intersectante em nenhum frame, então o observer nunca disparou. Por
// isso a checagem abaixo usa getBoundingClientRect a cada frame de
// scroll (já tínhamos esse loop pro paralaxe): mais barato que parece
// com só 12 elementos, e imune a rolagem rápida.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

function initReveal() {
  let pending = Array.from(document.querySelectorAll('[data-reveal]'));

  function check() {
    if (pending.length === 0) return;
    const vh = window.innerHeight;
    pending = pending.filter((el) => {
      const rect = el.getBoundingClientRect();
      const entered = rect.top < vh * 0.9; // já começou a entrar por baixo,
      // ou já foi ultrapassado (rolagem rápida pulou por cima dele)
      if (entered) {
        el.classList.add('is-visible');
        return false;
      }
      return true;
    });
  }

  return check;
}

function initParallax() {
  if (reduceMotion) return null; // corta paralaxe inteiramente — §9 "sem exceção"

  const layers = Array.from(document.querySelectorAll('[data-parallax]'));
  if (layers.length === 0) return null;

  return function update() {
    layers.forEach((layer) => {
      const container = layer.closest('[data-parallax-container]') || layer.parentElement;
      const rect = container.getBoundingClientRect();
      const maxShift = rect.height * 0.12; // teto duro — §9
      const raw = -rect.top * 0.15;
      const shift = Math.max(-maxShift, Math.min(maxShift, raw));
      layer.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    });
  };
}

function start() {
  const checkReveal = initReveal();
  const updateParallax = initParallax();

  let ticking = false;
  function frame() {
    checkReveal();
    if (updateParallax) updateParallax();
    ticking = false;
  }
  function onScrollOrResize() {
    if (!ticking) {
      requestAnimationFrame(frame);
      ticking = true;
    }
  }

  frame(); // estado inicial — revela o que já está visível no load
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
