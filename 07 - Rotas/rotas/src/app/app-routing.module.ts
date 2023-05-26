import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TituloComponent } from './paginas/index/titulo/titulo.component';
import { CardComponent } from './paginas/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TituloComponent, pathMatch: 'full'},
  {path:'portfolio', component: CardComponent, pathMatch: 'prefix'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
