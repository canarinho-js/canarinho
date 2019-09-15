# Canarinho JS

Linguagem de programação em português baseada no JavaScript

## Manual do transpilador

```
Comando:

  canarinho [opções] caminho_relativo

Opções:

  -i    tradução inversa, ou seja, do javascript ao canarinho
  -r    tradução recursiva (necessário se o caminho for uma pasta)

Exemplos:

  canarinho arquivo.cnr         gera um arquivo em javascript equivalente ao arquivo.cnr
  canarinho -i arquivo.js       gera um arquivo em canarinho equivalente ao arquivo.js
  canarinho -r pasta/           gera arquivos javascript equivalentes aos arquivos canarinho da pasta
  canarinho -i -r pasta/        gera arquivos canarinho equivalentes aos arquivos javascript da pasta
```
