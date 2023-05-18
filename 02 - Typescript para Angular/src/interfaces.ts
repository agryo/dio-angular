/* 
   Interfaces (type x interface)
*/

// O Type é mais utilizado para tipar objetos em geral, mas é praticamente idêntico a Interface.
type robot = {
    // O "readonly" torna o campo imutável, somente leitura, não deixa modificar.
    // E ainda permite escolher dois tipos como no exemplo number ou string.
    readonly id: number | string;
    name: string;
  };

// Já a Interface é mais utilizado para Classes (class), mas igualmente quase idêntico ao Type.
  interface robot2 {
    readonly id: number | string;
    name: string;
    // Posso incluir na Interface também funções no "contrato" da interface. Será obrigado criar a função.
    sayHello(): string;
  }
  
  // Aqui é o exemplo de uso do Type, que ele já obrigado a usar os parametros do Type criado acima.
  const bot1: robot = {
    id: "1",
    name: "megaman",
  };
  
  // Aqui é um exemplo do "contrato" do qual é obrigatório implementar tudo da interface.
  const bot2: robot2 = {
    id: "1",
    name: "megaman",
    sayHello: function (): string {
      throw new Error("Function not implemented.");
    },
  };
  
  // Aqui é o exemplo da Classe (class) que implementa a Interface acima que obriga o "contrato" da interface.
  class Pessoa implements robot2 {
    id: string | number;
    name: string;
  
    constructor(id: string | number, name: string) {
      this.id = id;
      this.name = name;
    }
    sayHello(): string {
      return `Olá, eu sou ${this.name}.`;
    }
  }
  
  const p = new Pessoa(1, "Stallion");
  console.log(p.sayHello());