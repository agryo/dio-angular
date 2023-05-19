/* 
   Decorators no TypeScript ainda é experimental, deve ser habilitado no "tsconfig.json".
*/

// Class Decorator
function versaoApi(versao: string) {
    return (target: any) => {
      Object.assign(target.prototype, { __version: versao, __nome: "agryo" });
    };
  }
  
// Attribute decorator
function tamanhoMinimo(tamanho: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        // Sobrescrevendo as funções Get e Set
        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
        if (value.length < tamanho) {
            throw new Error(`Tamanho menor do que ${tamanho}`);
        } else {
            _value = value;
        }
        };

        // Definindo a nova função Get e Set
        Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        });
    };
  }

/*
   O decoretor é chamado aqui através do "@" (arroba), que chamou a função la de cima com o valor "1.10".
   Essa forma de decorator em cima da class, chama a função para a classe, é um decorator da classe.
   E chama a função "versaoApi()" para a classe.
*/
  @versaoApi("1.10")
  class Api1 {}

/* 
   Agora o decorator é chamado aqui em cima de um atributo, que chama a função la de cima também.
   Essa forma de decorator em cima do atributo, chama a função para o atributo, que faz o teste do tamanho.
   Nesse caso chama a função "tamanhoMinimo()".
*/
  class Api {
    @tamanhoMinimo(10)
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  }
  
  const api1 = new Api1();
  // Fica mostrando erro por que o decorator ainda é experimental
  console.log(api1.__version, api1.__nome);

  const api = new Api("Teste tamanho");
  console.log(api.nome);