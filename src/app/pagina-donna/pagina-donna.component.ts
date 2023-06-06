import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-donna',
  templateUrl: './pagina-donna.component.html',
  styleUrls: ['./pagina-donna.component.scss'],
})
export class PaginaDonnaComponent  implements OnInit {
  @Input() pantaloniDonna: string = "parachutes donna";
  @Input() prezzoPantaloniDonna: number = 30;

  @Input() magliettaDonna: string = "maglietta palm angels";
  @Input() prezzoMagliettaDonna: number = 30;

  @Input() felpaDonna: string = "felpa y2k donna";
  @Input() prezzoFelpaDonna: number = 50;

  @Input() scarpeDonna: string = "nike dunk";
  @Input() prezzoScarpeDonna: number = 150;
  constructor() { }

  ngOnInit() {}
}
