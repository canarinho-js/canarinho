var fs = require('fs');
var dicionario = require('./dicionario');

function transpilar(arquivo_canarinho) {
  var conteudo = fs.readFileSync(arquivo_canarinho, "utf8");
  var conteudo_traduzido = traduzir_para_js(conteudo);

  var arquivo_destino = arquivo_canarinho + ".js";

  fs.writeFileSync(arquivo_destino, conteudo_traduzido);
}

function transpilar_recursivamente(pasta_de_arquivos_canarinho) {
  var pasta = fs.readdirSync(pasta_de_arquivos_canarinho);

  pasta.forEach(function (arquivo) {
    if (arquivo.indexOf(".cnr") > -1) {
      transpilar(pasta_de_arquivos_canarinho + '/' + arquivo);
    }
  })
}

function traduzir_para_js(codigo_em_canarinho) {
  var codigo_traduzido = codigo_em_canarinho;

  for (palavra_chave in dicionario) {
    var traducao = dicionario[palavra_chave];
    var ocorrencias_da_palavra = new RegExp('\\b' + palavra_chave + '\\b', 'g');

    codigo_traduzido = codigo_traduzido.replace(ocorrencias_da_palavra, traducao);
  }

  return codigo_traduzido;
}

module.exports = {
  transpilar,
  transpilar_recursivamente,
  traduzir_para_js
};