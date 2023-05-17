"use strict";
/*
   Interfaces (type x interface)
*/
// Aqui é o exemplo de uso do Type, que ele já obrigado a usar os parametros do Type criado acima.
const bot1 = {
    id: "1",
    name: "megaman",
};
// Aqui é um exemplo do "contrato" do qual é obrigatório implementar tudo da interface.
const bot2 = {
    id: "1",
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
// Aqui é o exemplo da Classe (class) que implementa a Interface acima que obriga o "contrato" da interface.
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Olá, eu sou ${this.name}.`;
    }
}
const p = new Pessoa(1, "Stallion");
console.log(p.sayHello());
