import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispleaveService {



  constructor(private http: HttpClient) {}

  getLeave(){
    return this.http.get<any>('http://localhost:8000/displeave')
  }
}
