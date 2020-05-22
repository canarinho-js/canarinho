#!/usr/bin/env node

var transpilar = require('./codigo_fonte/transpilador_arquivos').transpilar;
var transpilar_inversamente = require('./codigo_fonte/transpilador_arquivos').transpilar_inversamente;
var transpilar_recursivamente = require('./codigo_fonte/transpilador_arquivos').transpilar_recursivamente;
var transpilar_inversamente_recursivamente = require('./codigo_fonte/transpilador_arquivos').transpilar_inversamente_recursivamente;

var argumentos = process.argv.slice(2);
var caminho_relativo = argumentos[argumentos.length - 1];

var traducao_deve_ser_inversa = argumentos.indexOf("-i") >= 0;
var traducao_deve_ser_recursiva = argumentos.indexOf("-r") >= 0;

if (traducao_deve_ser_inversa) {
  if (traducao_deve_ser_recursiva) {
    transpilar_inversamente_recursivamente(caminho_relativo)
  } else {
    transpilar_inversamente(caminho_relativo)
  }
} else {
  if (traducao_deve_ser_recursiva) {
    transpilar_recursivamente(caminho_relativo);
  } else {
    transpilar(caminho_relativo);
  }
}

