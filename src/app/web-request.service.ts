import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {  };

  getData(){
    return this.http.get('http://localhost:1337/api/users');
  }
  
}
