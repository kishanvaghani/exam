import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    this.http.post('url', data);
  }

  signUp(data: any): Observable<unknown> {
    return this.http.post('https://reqres.in/api/register', data, {observe: 'response'});
  }

}
