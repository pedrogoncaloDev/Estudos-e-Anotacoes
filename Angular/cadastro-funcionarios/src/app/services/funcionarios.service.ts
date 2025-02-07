import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add this import
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FuncionariosService {
  // private apiUrl = '/funcionarios.json';

  // constructor(private client: HttpClient) {}

  // getFuncionarios(): Observable<any> {
  //   return this.client.get(this.apiUrl);
  // }
}
