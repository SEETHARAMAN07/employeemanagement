import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddempService {


  constructor(private http:HttpClient) { }

  addEmp(data:any){
    return this.http.post<any>('http://localhost:8000/addemp',data)
  }
}
