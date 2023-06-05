import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss'],
})
export class CarrelloComponent  implements OnInit {
  oggetti: any[] = [];

  aggiungiOggetto(oggetto: any) {
    this.oggetti.push(oggetto);
  }

  rimuoviOggetto(index: number) {
    this.oggetti.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {}

}
