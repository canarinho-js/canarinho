var dicionario = require('./dicionario');

function traduzir(codigo_fonte, dicionario_base) {
  var codigo_traduzido = codigo_fonte;

  Object.keys(dicionario_base).forEach(function (palavra_chave) {
    var traducao = dicionario_base[palavra_chave];
    var ocorrencias_da_palavra = new RegExp('\\b' + palavra_chave + '\\b', 'g');

    codigo_traduzido = codigo_traduzido.replace(ocorrencias_da_palavra, traducao);
  })

  return codigo_traduzido;
}

function traduzir_para_js(codigo_em_canarinho) {
  return traduzir(codigo_em_canarinho, dicionario);
}

function traduzir_para_canarinho(codigo_em_js) {
  var dicionario_inverso = Object.keys(dicionario).reduce(function(inverso, palavra_chave) {
    if (dicionario[palavra_chave] != "") {
      inverso[dicionario[palavra_chave]] = palavra_chave;
    }

    return inverso
  }, {})

  console.log(dicionario_inverso)

  return traduzir(codigo_em_js, dicionario_inverso);
}

module.exports = {
  traduzir_para_js,
  traduzir_para_canarinho
};
