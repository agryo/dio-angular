"use strict";
/*
 Classes no TypeScript.
*/
/*
  As permissões das Classes são as mesmas. (Data Modifiers)
  public - Todos podem usar.
  private - Apenas a Classe original pode usar.
  protected - A Classe original pode usar e as Subclasses (filhas) também podem usar.
*/
class Personagem {
    constructor(nome, forca, habilidade) {
        this.nome = nome;
        this.forca = forca;
        this.habilidade = habilidade;
    }
    attack() {
        console.log(`Ataque com ${this.forca} pontos.`);
    }
}
/*
   Personagem: A classe personagem é uma Superclass (Classe pai).
   Magico: A classe Magico é uma Subclass (Classe filha).
   Tudo de Personagem é herdado para Magico (extends).
*/
class Magico extends Personagem {
    constructor(nome, forca, habilidade, pontosMagia) {
        // O método super(), puxar tudo da classe pai.
        super(nome, forca, habilidade);
        this.pontosMagia = pontosMagia;
    }
}
const p1 = new Personagem("Ryu", 10, 98);
const p2 = new Magico("Mago", 9, 30, 100);
p1.habilidade = 12;
console.log(p2);
