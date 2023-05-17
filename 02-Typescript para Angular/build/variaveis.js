"use strict";
/**
 * Variaveis básicas em TypeScript
 */
// Tipos primitivos: boolean, number, string
let ligado = false;
let nome = "agryo";
let idade = 36;
let altura = 1.87;
// Tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any, void
let retorno;
let retornoView = false;
// Objeto - Sem previsibilidade
let produto = {
    name: "agryo",
    cidade: "RN",
    idade: 36,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
/**
 * Arrays em TypeScript
 */
let dados = ["felipe", "ana", "adriana"];
let dados2 = ["felipe", "ana", "adriana"];
let infos = [322, "felipe"];
/**
 * Tuplas - Um tipo Array que segue uma sequencia especifica e exata.
 */
let boleto = ["Conta de Luz", 169.9, 347327];
/**
 * Arrays Métodos (são os mesmos do Javascript)
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2019-11-23 18:45");
console.log(aniversario.toString());
