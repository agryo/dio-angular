import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit, OnChanges{

  @Input() nome:string = ''

  constructor(){
    console.log(`Costructor ${this.nome}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChanges ${this.nome}`)
  }

  ngOnInit(): void {
    this.nome = this.nome + " x"
    console.log(`OnInit ${this.nome}`)
    this.nome = `Olá, ${this.nome}, esse é o Novo Componente.`
  }

}
