import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(private activeRoute: ActivatedRoute) {
    //http://localhost:4200/portfolio/{1} (Pega o ID)
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
    //http://localhost:4200/portfolio/1?{name=agryo&token=123} (Pega os parametros querys)
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
  }
}
