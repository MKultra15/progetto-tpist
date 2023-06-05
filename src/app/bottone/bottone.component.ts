import { Component, OnInit } from '@angular/core';
import { CarrelloComponent } from '../carrello/carrello.component';

@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.scss'],
})
export class BottoneComponent  implements OnInit {

  constructor(private carrello: CarrelloComponent) { }

  ngOnInit() {}

  aggiungiAlCarrello() {
    const oggetto = {
      nome: 'Oggetto da acquistare',
      prezzo: 10.99
    };
    this.carrello.aggiungiOggetto(oggetto);
  }
}
