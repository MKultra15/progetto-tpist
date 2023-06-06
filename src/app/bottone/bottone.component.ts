import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AggiungiAlCarrrello } from '../servivi/aggiungi-al-carrello.service';
import { PaginaUomoComponent } from '../pagina-uomo/pagina-uomo.component';

@Component({
  selector: 'app-bottone',
  template: `
    <button (click)="addItemToCart()" class="btn btn-dark">Acquista</button>
  `
})
export class BottoneComponent {
  @Input() bottoneNome: string = "";
  @Input() bottonePrezzo: number = 0;
  constructor(private aggiungialcarrello: AggiungiAlCarrrello) { }
  
  addItemToCart(): void {
    const nome = this.bottoneNome;
    const prezzo = this.bottonePrezzo;
    this.aggiungialcarrello.addItem(nome, prezzo);
  }
}  