import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add this import
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HelloWorldService {
  private apiUrl = 'https://cat-fact.herokuapp.com/facts';

  constructor(private client: HttpClient) {}

  getHelloWorld(): Observable<any> {
    return this.client.get(this.apiUrl);
  }
}