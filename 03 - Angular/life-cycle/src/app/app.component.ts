import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveExemploCheck: boolean = true

  ativarExemploCheck(){
    this.isAliveExemploCheck = true
  }

  discartarExemploCheck(){
    this.isAliveExemploCheck = false
  }
}
