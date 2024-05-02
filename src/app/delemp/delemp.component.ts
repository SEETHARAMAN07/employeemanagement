import { Component } from '@angular/core';
import { DelempService } from '../services/delemp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delemp',
  templateUrl: './delemp.component.html',
  styleUrls: ['./delemp.component.css']
})
export class DelempComponent {
  formdata ={ name:""};

  constructor (
    private delempservice:DelempService,private router:Router
  ){}

  onSubmit()
  {
    this.delempservice.DelEmp(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => console.error(err),
    });


    

     }

}
