import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';
import { TituloPrincipalComponent } from './componentes/titulo-principal/titulo-principal.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { SmallCardComponent } from './componentes/small-card/small-card.component';
import { HomeComponent } from './paginas/home/home.component';
import { ConteudoComponent } from './paginas/conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    TituloPrincipalComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
