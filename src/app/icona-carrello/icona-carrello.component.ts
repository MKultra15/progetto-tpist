import { Component } from '@angular/core';
import { AggiungiAlCarrrello } from '../servivi/aggiungi-al-carrello.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icona-carrello',
  template: `
   <a [routerLink]="['/carrello']">
    <span class="icona-carrello">
      <i class="fas fa-shopping-cart"></i>
    <span class="numero-oggetti">{{ this.cartService.getNumItems() }}</span>
    </span>
    </a>
  `,
  styles: [`
    .icona-carrello {
      position: relative;
      cursor: pointer;
      height:70px;
      width:70px;
      color:white;
    }

    .numero-oggetti {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: red;
      color: white;
      border-radius: 50%;
      padding: 2px 5px;
      font-size: 12px;
    }
  `]
})
export class IconaCarrelloComponent {
  numItems: number = 0;

  constructor(public cartService: AggiungiAlCarrrello) { }

  ngOnInit(): void {
  }

}
