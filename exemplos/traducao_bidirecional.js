var dicionario = require('../codigo_fonte/dicionario');
var tradutor = require('../codigo_fonte/tradutor');

var console = require('../codigo_fonte/modulos_essenciais/console');

var codigo_em_canarinho_original = `
função verificar_idade(idade) {
  se (idade >= 18) {
    retornar "Maior de idade";
  }

  retornar "Menor de idade";
}
`;

var codigo_em_js = tradutor.traduzir_para_js(codigo_em_canarinho_original, dicionario);
var codigo_em_canarinho = tradutor.traduzir_para_canarinho(codigo_em_js, dicionario);

console.imprimir("// Canarinho para JavaScript\n\n" + codigo_em_js);
console.imprimir("// JavaScript para Canarinho\n\n" + codigo_em_canarinho);