import { Component } from '@angular/core';
import { LeaveService } from '../services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {

  constructor (
    private leaveservice:LeaveService,private router:Router
  ){}

  formdata ={ name:"",department:"",rollno:"",reason:"",da:"",lf:"",lt:""};

  onSubmit()
  {
    this.leaveservice.addAttendance(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => console.error(err),
    });

  }

}
