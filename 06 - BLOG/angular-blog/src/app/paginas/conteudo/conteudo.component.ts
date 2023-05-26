import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit{
  private id:string | null = "0"
  fotoNoticia:string = ""
  tituloConteudo:string = ""
  descricaoConteudo:string = ""

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponente(this.id)
  }

  setValuesToComponente(id:string | null){
    const resultado = dataFake.filter(artigo => artigo.id == id)[0]
    
    this.fotoNoticia = resultado.foto
    this.tituloConteudo = resultado.titulo
    this.descricaoConteudo = resultado.descricao
  }
}
