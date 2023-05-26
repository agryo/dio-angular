import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  id:string = "0"
  @Input()
  fotoSmallCard:string = ""
  @Input()
  descricaoSmallCard:string = ""
}
