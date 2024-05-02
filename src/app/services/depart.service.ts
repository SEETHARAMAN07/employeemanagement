import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartService {

  

  constructor(private http:HttpClient) { }

  addDepart(data:any){
    return this.http.post<any>('http://localhost:8000/dept',data)
  }
}
