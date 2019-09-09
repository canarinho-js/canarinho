var dicionario = require('./codigo_fonte/dicionario');
var tradutor = require('./codigo_fonte/tradutor');
var fs = require('fs');
var path = require('path');

var endereco_do_arquivo = process.argv[2];

fs.readFile(endereco_do_arquivo, {encoding: 'utf-8'}, function(_, codigo_em_canarinho) {
  var codigo_em_js = tradutor.traduzir_para_js(codigo_em_canarinho, dicionario);

  var diretorio_original = path.parse(endereco_do_arquivo).dir;
  var nome_original = path.parse(endereco_do_arquivo).base;

  var endereco_arquivo_traduzido = diretorio_original + '/' + nome_original + '.js';

  fs.writeFile(endereco_arquivo_traduzido, codigo_em_js, function() {
    console.log('Traduzido com sucesso.');
  });
});
