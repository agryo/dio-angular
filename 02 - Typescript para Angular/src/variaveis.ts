/**
 * Variaveis básicas em TypeScript
 */

// Tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "agryo";
let idade: number = 36;
let altura: number = 1.87;

// Tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

// Objeto - Sem previsibilidade
let produto: object = {
  name: "agryo",
  cidade: "RN",
  idade: 36,
};

//Objeto Tipado - Com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

/**
 * Arrays em TypeScript
 */
let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[] = [322, "felipe"];

/**
 * Tuplas - Um tipo Array que segue uma sequencia especifica e exata.
 */
let boleto: [string, number, number] = ["Conta de Luz", 169.9, 347327];

/**
 * Arrays Métodos (são os mesmos do Javascript)
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2019-11-23 18:45");
console.log(aniversario.toString());