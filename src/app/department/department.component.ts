import { Component } from '@angular/core';
import { DepartService } from '../services/depart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  constructor (
    private departservice:DepartService,private router:Router
  ){}

  formdata ={ name:"",department:"",des:""};

  onSubmit()
  {
    this.departservice.addDepart(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => console.error(err),
    });

  }

}
