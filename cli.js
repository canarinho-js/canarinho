#!/usr/bin/env node

var transpilar = require('./codigo_fonte/transpilador').transpilar;
var transpilar_recursivamente = require('./codigo_fonte/transpilador').transpilar_recursivamente;

var argumentos = process.argv.slice(2);
var caminho_relativo = argumentos[argumentos.length - 1];

var traducao_deve_ser_recursiva = argumentos.indexOf("-r") >= 0;

if (traducao_deve_ser_recursiva) {
  transpilar_recursivamente(caminho_relativo);
} else {
  transpilar(caminho_relativo);
}