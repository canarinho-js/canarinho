function traduzir_para_js(codigo_em_canarinho, dicionario) {
  return __traduzir(codigo_em_canarinho, dicionario);
}

function traduzir_para_canarinho(codigo_em_js, dicionario) {
  return 'ainda não implementada';
}

function __traduzir(codigo_fonte, dicionario) {
  var codigo_traduzido = codigo_fonte;

  for (palavra_chave in dicionario) {
    var traducao = dicionario[palavra_chave];
    var ocorrencias_da_palavra = new RegExp('\\b' + palavra_chave + '\\b', 'g');

    codigo_traduzido = codigo_traduzido.replace(ocorrencias_da_palavra, traducao);
  }

  return codigo_traduzido;
}

module.exports = { traduzir_para_js, traduzir_para_canarinho };