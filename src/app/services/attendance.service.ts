import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  
  constructor(private http:HttpClient) { }

  addAttendance(data:any){
    return this.http.post<any>('http://localhost:8000/attendance',data)
  }
}
