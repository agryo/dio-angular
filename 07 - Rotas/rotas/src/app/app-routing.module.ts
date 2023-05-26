import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TituloComponent } from './paginas/index/titulo/titulo.component';
import { CardComponent } from './paginas/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TituloComponent, pathMatch: 'full'},
  /*
    Caminhos filhos
    /portfolio
    /portfolio/1
    /portfolio/1/abc
  */
  {path:'portfolio', component: CardComponent, children:[
    {path:':id', component: CardComponent},
    {path:':id/:token', component: CardComponent}
  ]},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
