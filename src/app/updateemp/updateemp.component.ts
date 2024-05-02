import { Component } from '@angular/core';
import { UpdateempService } from '../services/updateemp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent {
  formdata ={ name:"",pn:"",id:"",salary:"",designation:"",doj:""};

  constructor(private updateempservice:UpdateempService,private router:Router){}



  onSubmit()
  {
    console.log(this.formdata);
    this.updateempservice.updateemp(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => console.error(err),
    });


    

     }

}
