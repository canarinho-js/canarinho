function velocidade(velocidade_inicial, aceleracao, tempo) {
  return velocidade_inicial + (aceleracao * tempo);
}

function velocidade_media(espaco, tempo) {
  return espaco / tempo;
}

function posicao_final(posicao_inicial, velocidade, tempo) {
  return posicao_inicial + (velocidade * tempo);
}

module.exports = {
  velocidade,
  velocidade_media,
  posicao_final
};
