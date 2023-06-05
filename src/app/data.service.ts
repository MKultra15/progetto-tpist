import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  
  getProducts(): Observable<any> {
    return this.http.get<any>('backend.php?action=getProducts');
  }

  
  // Aggiungi altre funzioni per l'invio dei dati al backend
}

