import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  registerUser(data:any){
    return this.http.post<any>('http://localhost:8000/signup',data)
  }
}
