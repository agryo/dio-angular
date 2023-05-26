import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ConteudoComponent } from './paginas/conteudo/conteudo.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'conteudo/:id',
    component:ConteudoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
