var dicionario = require('./dicionario');

function traduzir_para_js(codigo_em_canarinho) {
  var codigo_traduzido = codigo_em_canarinho;

  Object.keys(dicionario).forEach(function (palavra_chave) {
    var traducao = dicionario[palavra_chave];
    var ocorrencias_da_palavra = new RegExp('\\b' + palavra_chave + '\\b', 'g');

    codigo_traduzido = codigo_traduzido.replace(ocorrencias_da_palavra, traducao);
  })

  return codigo_traduzido;
}

function traduzir_para_canarinho(codigo_em_js) {
  return "";
}

module.exports = {
  traduzir_para_js
};
