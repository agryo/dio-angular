"use strict";
/*
   Generics no TypeScript.
   O generics é usando através do <T> (sinais de maior e menor com o T entre eles).
   Ao criar a função como generics, ela pode ser especificada no momento de usar
   qual o tipo será usado nela.
*/
/*
   A função foi utilizada com generics (<T>) e no lugar de escolha dos tipos, foi adicionado
   o "T" também, que significa que a função é genérica (generics).

   OBS.: Os 3 pontos antes de "itens" é o operador Spread (...), ele serve para permitir
   que expressões expandam o conteúdo de arrays em locais onde múltiplos elementos são esperados.
   Ele espalha os itens dentro do Array.
*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
/*
   Aqui você especifica o tipo que você quer entre os sinais <> (maior e menor), ao criar a variável.
   O primeiro um array number e o segundo um array string, usando única função genérica (gererics).
*/
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["agryo", "goku"], ["vegeta"]);
console.log(numArray);
console.log(stgArray);
