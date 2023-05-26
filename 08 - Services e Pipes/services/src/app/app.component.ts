import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //Foi removido o arquivo HTML e está sendo diretamente adicionar aqui
  template: `
    <h1>Aula sobre Services Angular</h1>
    <app-card></app-card>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
}
