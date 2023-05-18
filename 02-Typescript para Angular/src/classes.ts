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
    // A interrogação na frente do nome da variável serve para dizer que ela pode ser omitida, não obrigatória.
    protected nome?: string;
    readonly forca: number;
    habilidade: number;
  
    constructor(nome: string, forca: number, habilidade: number) {
      this.nome = nome;
      this.forca = forca;
      this.habilidade = habilidade;
    }
  
    attack(): void {
      console.log(`Ataque com ${this.forca} pontos.`);
    }
  }
  
  /* 
     Personagem: A classe personagem é uma Superclass (Classe pai).
     Magico: A classe Magico é uma Subclass (Classe filha).
     Tudo de Personagem é herdado para Magico (extends).
  */
  class Magico extends Personagem {
    pontosMagia: number;

    constructor(nome: string, forca: number, habilidade: number, pontosMagia: number) {
      // O método super(), puxar tudo da classe pai.
      super(nome, forca, habilidade);
      this.pontosMagia = pontosMagia;
    }
  }
  
  const p1 = new Personagem("Ryu", 10, 98);
  const p2 = new Magico("Mago", 9, 30, 100);
  p1.habilidade = 12;

  console.log(p2);