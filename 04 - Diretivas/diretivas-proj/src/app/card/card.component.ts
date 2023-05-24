import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = "diretor"

  constructor(){
    this.produtos = [
      "Mouse",
      "Teclado",
      "Cabo de Rede",
      "Fonte de Alimentação",
      "Monitor"
    ]
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.pop()
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }

}
