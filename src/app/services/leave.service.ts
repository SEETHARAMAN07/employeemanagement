import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }

  addAttendance(data:any){
    return this.http.post<any>('http://localhost:8000/leave',data)
  }
}
