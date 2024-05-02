import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DelempService {

  
  constructor(private http:HttpClient) { }

  DelEmp(data:any){
    return this.http.post<any>('http://localhost:8000/delemp',data)
  }
}
