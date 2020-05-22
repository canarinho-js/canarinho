var fs = require('fs');
var traduzir_para_js = require('./transpilador').traduzir_para_js;

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

module.exports = {
  transpilar,
  transpilar_recursivamente,
}
