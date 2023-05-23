import {Component,
        OnInit,
        DoCheck,
        AfterContentChecked,
        AfterContentInit,
        AfterViewChecked,
        AfterViewInit,
        OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-exemplo-check',
  templateUrl: './exemplo-check.component.html',
  styleUrls: ['./exemplo-check.component.css']
})
export class ExemploCheckComponent 
implements OnInit,
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit,
           OnDestroy
{
  constructor(){  }

  quantidade:number = 0;

  adicionar(){
    this.quantidade ++;
  }

  decrementar(){
    this.quantidade --;
  }

  //Executa quando o componente é inicializado.
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  //Executa quando alguma coisa é modificada.
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  //Sequencia - checked, content, init

  //Quando o primeiro conteúdo é iniciado.
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  //Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  //Após alguma alteração na tela, verifica o conteúdo.
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  //Após alguma alteração na tela, verifica a view.
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  //Executa quando é destruído o componente, finalizado.
  ngOnDestroy(): void {
    console.log("Autodestrução do componente!!!")
  }
  
}
