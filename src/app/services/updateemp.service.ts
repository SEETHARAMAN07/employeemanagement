import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateempService {


  constructor(private http:HttpClient) { }

  updateemp(data:any){
    return this.http.patch<any>('http://localhost:8000/updateemp',data)
  }
  
}
