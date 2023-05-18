/* 
   Funções usando TypeScript.
*/

// Essa função especifica tanto as entradas (Tipo number) quanto a saída (Também number).
function somarNumero(x: number, y: number): number {
    return x + y;
  }

/* 
   Essa função especifica tanto as entradas (Tipo string) quanto a saída (Também string) 
   e retorna o "Hello (com o nome string).
*/
  function addToHello(nome: string): string {
    return `Olá ${nome}`;
  }

/* 
   Essa função especifica mais de uma entrada e mais de uma saída, que também é possível no TypeScript.
*/
  function CallToPhone(phone: number | string): number | string {
    return phone;
  }

/* 
   Essa é uma função assincrona (async), mais comum para banco de dados, na qual ela tem com "promessa"
   (Promise) algum retorno, nesse caso a entrada é um number e foi especificado como retorno uma string.
*/
  async function getDatabase(id: number): Promise<string> {
    return "agryo";
  }
  
  let soma: number = somarNumero(4, 7);
  
  console.log(soma);