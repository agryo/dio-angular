import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit{

  nome:string = 'Agryo'

  constructor(){ }

  ngOnInit(): void {
    this.nome = `Olá, ${this.nome}, esse é o Novo Componente.`
  }

}
