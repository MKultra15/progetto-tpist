import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { PrimaPaginaComponent } from './prima-pagina/prima-pagina.component';
import { PaginaUomoComponent } from './pagina-uomo/pagina-uomo.component';
import { PaginaDonnaComponent } from './pagina-donna/pagina-donna.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { BottoneComponent } from './bottone/bottone.component';


@NgModule({
  
  declarations: [
    AppComponent,
    NavBarComponent,
    PrimaPaginaComponent,
    PaginaUomoComponent,
    PaginaDonnaComponent,
    CarrelloComponent,
    BottoneComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})

export class AppModule {}
