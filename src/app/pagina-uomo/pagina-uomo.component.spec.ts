import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaUomoComponent } from './pagina-uomo.component';
import { CarrelloComponent } from '../carrello/carrello.component';
import { NavBarComponent } from '../navbar/navbar.component';

describe('PaginaUomoComponent', () => {
  let component: PaginaUomoComponent;
  let fixture: ComponentFixture<PaginaUomoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaUomoComponent, CarrelloComponent, NavBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaUomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
