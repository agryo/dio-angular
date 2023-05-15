/* Aqui é um modelo de componente usado no HTML como uma Tag HTML.
   Nesse caso, a própria Tag é criada aqui, uma Tag Customizada, Personalizada. 
   A Tag funciona mais ou menos como um Objeto, na qual criamos um modelo a ser
   usado varias vezes onde quiser com esse "molde" criado aqui. */

/* De início é criado uma class e extends o HTMLElement, pois aqui será um Element do HTML. */
class MeuComponent extends HTMLElement {
    constructor() {
        /* O constructor já chama o super() para "puxar" o HTMLElement. */
        super();
        /* Em seguida cria a variável shadow (Shadow D.O.M.) que "attacha", cria o shadow e
           passa como parâmero um Objeto (mode: open) que indica que a shadow vai ser aberta,
           aceita ser modificada por fora, outro JS.
           (Poder ser fechada (mode: closed) que não aceita ser modificada por fora.) */
        const shadow = this.attachShadow({ mode: "open" });
    
        /* Aqui é a base do componente, o que irá entrar no meu HTML na página. 
           - document = É a página em si, a "raiz" da página, tudo está dentro de document.
           - createElement = É o elemento do HTML, a Tag a ser usada. 
           - textContent = É o que fica dentro da Tag (Nesse caso a Tag "h1"). */
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = "Agryo - Modelo criado no JS";
    
        /* Aqui é o estilo (CSS), que vai ser modificado apenas no componente que estou usando.
           Ele já vai no formato exato de como ele foi programado, estilizado e entra em qualquer
           parte do HTML sem bagunçar o estilo do próprio site. Diminuindo assim o CSS do site. */
        const style = document.createElement("style");
        /* O textContent é o próprio texto do arquivo CSS, literalmente.
           Repare que ele fica dentro das aspas como se fosse uma String. */
        style.textContent = `
            h1{
                color: red
            }
        `;    
        /* Aqui ele adiciona na shadow o "componentRoot" e o "style" criado acima. 
           Adiciona como filhas (child) do pai (parent) que é shadow. */
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
  }
  /* E aqui ele define, envia o componente para ser usado no HTML como Tag. 
     É a Tag a ser usada lá dentro do HTML. (Nesse caso a Tag "meu-componente")
     Especificando o nome da Tag (sempre com um "-" (hifen) para diferenciar das Tags originais) 
     caso contrário vai dar problema. */
  customElements.define("meu-componente", MeuComponent);
  /*                           ^                ^
                          Nome da Tag     Classe da Tag  */