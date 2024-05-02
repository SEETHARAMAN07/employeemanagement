import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formdata ={ name:"",password:""};

  constructor (
    private loginservice:LoginService,private router:Router
  ){}


  onSubmit()
  {
    this.loginservice.loginUser(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('admin');
      },
      error: (err) => console.error(err),
    });


    

     }
}
