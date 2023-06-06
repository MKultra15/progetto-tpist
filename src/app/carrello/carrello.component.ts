import { Component, OnInit } from '@angular/core';
import { AggiungiAlCarrrello } from '../servivi/aggiungi-al-carrello.service';

@Component({
  selector: 'app-carrello',
  template: `
    <app-navbar></app-navbar>
    <h1>I tuoi Ordini</h1>
    <div *ngFor="let prodotto of nome; let i = index">
      <p>Nome: {{ prodotto }}</p>
      <p>Prezzo: {{ prezzi[i] }}</p>
    </div>
  `,
})
export class CarrelloComponent implements OnInit {
  public nome: string[] = [];
  public prezzi: number[] = [];

  constructor(private aggiungi: AggiungiAlCarrrello) {}

  ngOnInit() {
    this.nome = this.aggiungi.getNomi();
    this.prezzi = this.aggiungi.getPrezzi();
  }
}
