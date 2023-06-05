import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimaPaginaComponent } from './prima-pagina.component';

describe('PrimaPaginaComponent', () => {
  let component: PrimaPaginaComponent;
  let fixture: ComponentFixture<PrimaPaginaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaPaginaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export * from './prima-pagina.component';