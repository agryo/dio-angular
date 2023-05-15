/* Agora esse componente cria propriedades para serem adicionadas direto na Tag.
   São os parametros das Tags que você também pode personalizar. */
class TituloDinamico extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
  
      /* Seleciona qual Tag vai ser usada. 
         Exemplo HTML = <h1></h1> (Isso que faz). */
      const componentRoot = document.createElement("h1");
      /* Atribuindo um nome ao parametro da Tag.
         Exemplo HTML = */
      componentRoot.textContent = this.getAttribute("titulo");
  
      // Criando o Style CSS do componente.
      const style = document.createElement("style");
      style.textContent = `
        h1{
          color: Indigo;
        }
      `;
  
      // Enviar para o Shadow
      shadow.appendChild(componentRoot);
      shadow.appendChild(style);
    }
  }
  // Definindo a Tag
  customElements.define("titulo-dinamico", TituloDinamico);