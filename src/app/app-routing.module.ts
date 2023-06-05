import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';
import { PrimaPaginaComponent } from './prima-pagina/prima-pagina.component';
import { PaginaUomoComponent } from './pagina-uomo/pagina-uomo.component';
import { PaginaDonnaComponent } from './pagina-donna/pagina-donna.component';
import { CarrelloComponent } from './carrello/carrello.component';


const routes: Routes = [
  { path: '', component: PrimaPaginaComponent },
  { path: 'paginaUomo', component: PaginaUomoComponent },
  { path: 'paginaDonna', component: PaginaDonnaComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
