// Ação principal AINDA NÃO DETERMINADA — WhatsApp direto ou Airbnb
// (CLAUDE.md "Ação principal", DESIGN.md §12.1). Enquanto não decide,
// todo o site consome só esta constante: trocar o canal é editar aqui,
// nunca em cada botão espalhado pelas seções.

const TELEFONE = '5514996237904'; // (14) 99623-7904, formato E.164

const MENSAGEM_PADRAO =
  'Olá! Vi o site do Rancho Mariana e gostaria de saber mais sobre disponibilidade para reservar a casa inteira.';

export const BOOKING_CHANNEL = {
  tipo: 'whatsapp' as const,
  href: `https://wa.me/${TELEFONE}?text=${encodeURIComponent(MENSAGEM_PADRAO)}`,
  rotuloPadrao: 'Reservar pelo WhatsApp',
};
