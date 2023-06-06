import { TestBed } from '@angular/core/testing';

import { AggiungiAlCarrrello } from './aggiungi-al-carrello.service';

describe('AggiungiAlCarrelloService', () => {
  let service: AggiungiAlCarrrello;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggiungiAlCarrrello);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
