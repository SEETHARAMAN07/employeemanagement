import { Component } from '@angular/core';
import { AddempService } from '../services/addemp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  formdata ={ name:"",pn:"",id:"",salary:"",designation:"",doj:""};

  constructor (
    private addempservice:AddempService,private router:Router
  ){}

  onSubmit()
  {
    console.log(this.formdata);
    this.addempservice.addEmp(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => console.error(err),
    });


    

     }

}
