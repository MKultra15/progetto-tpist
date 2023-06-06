
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-uomo',
  templateUrl: './pagina-uomo.component.html',
  styleUrls: ['./pagina-uomo.component.scss'],

})
export class PaginaUomoComponent  implements OnInit {
  @Input() pantaloniUomo: string = "cargo uomo";
  @Input() prezzoPantaloniUomo: number = 40;

  @Input() magliettaUomo: string = "maglietta";
  @Input() prezzoMagliettaUomo: number = 25;

  @Input() felpaUomo: string = "felpa y2k uomo";
  @Input() prezzoFelpaUomo: number = 60;

  @Input() scarpeUomo: string = "adidas samba";
  @Input() prezzoScarpeUomo: number = 120;
  constructor() { }

  ngOnInit() {
   }
}
