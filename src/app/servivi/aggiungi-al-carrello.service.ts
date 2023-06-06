import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AggiungiAlCarrrello {
  public numItems: number = 0;
  public nome: string[] = [];
  public prezzi: number[] = [];

  constructor() { }

  getNumItems(): number {
    return this.numItems;
  }

  addItem(nomi: any, prezzo: any): void {
    this.numItems++;
    this.nome.push(nomi);
    this.prezzi.push(prezzo);
    console.log(nomi);
    console.log(prezzo);
  }

  getNomi(): string[] {
    return this.nome;
  }

  getPrezzi(): number[] {
    return this.prezzi;
  }
}