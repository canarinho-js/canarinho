var fs = require('fs');
var traduzir_para_js = require('./transpilador').traduzir_para_js;
var traduzir_para_canarinho = require('./transpilador').traduzir_para_canarinho;

function transpilar(arquivo_canarinho) {
  var conteudo = fs.readFileSync(arquivo_canarinho, "utf8");
  var conteudo_traduzido = traduzir_para_js(conteudo);

  var arquivo_destino = arquivo_canarinho + ".js";

  fs.writeFileSync(arquivo_destino, conteudo_traduzido);
}

function transpilar_inversamente(arquivo_javascript) {
  var conteudo = fs.readFileSync(arquivo_javascript, "utf8");
  var conteudo_traduzido = traduzir_para_canarinho(conteudo);

  var arquivo_destino = arquivo_javascript + ".cnr";

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

function transpilar_inversamente_recursivamente(pasta_de_arquivos_javascript) {
  var pasta = fs.readdirSync(pasta_de_arquivos_javascript);

  pasta.forEach(function (arquivo) {
    if (arquivo.indexOf(".js") > -1) {
      transpilar_inversamente(pasta_de_arquivos_javascript + '/' + arquivo);
    }
  })
}

module.exports = {
  transpilar,
  transpilar_inversamente,
  transpilar_recursivamente,
  transpilar_inversamente_recursivamente
}
