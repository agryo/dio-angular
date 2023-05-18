"use strict";
/*
   Funções usando TypeScript.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Essa função especifica tanto as entradas (Tipo number) quanto a saída (Também number).
function somarNumero(x, y) {
    return x + y;
}
/*
   Essa função especifica tanto as entradas (Tipo string) quanto a saída (Também string)
   e retorna o "Hello (com o nome string).
*/
function addToHello(nome) {
    return `Olá ${nome}`;
}
/*
   Essa função especifica mais de uma entrada e mais de uma saída, que também é possível no TypeScript.
*/
function CallToPhone(phone) {
    return phone;
}
/*
   Essa é uma função assincrona (async), mais comum para banco de dados, na qual ela tem com "promessa"
   (Promise) algum retorno, nesse caso a entrada é um number e foi especificado como retorno uma string.
*/
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "agryo";
    });
}
let soma = somarNumero(4, 7);
console.log(soma);
