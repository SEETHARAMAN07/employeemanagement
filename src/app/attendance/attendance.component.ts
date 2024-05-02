import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

  constructor (
    private attendanceservice:AttendanceService,private router:Router
  ){}

  formdata ={ id:"",name:"",designation:"",attendance:""};

  onSubmit()
  {
    this.attendanceservice.addAttendance(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => console.error(err),
    });

  }

  

}
