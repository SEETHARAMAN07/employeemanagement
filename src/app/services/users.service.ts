import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
 
  
  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<any>('http://localhost:8000/users')
  }
  

  
  
}
