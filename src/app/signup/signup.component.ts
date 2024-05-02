import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, FormsModule, NgModel,ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[ReactiveFormsModule,FormsModule,HttpClientModule,NgFor],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signForm!:FormGroup

  formdata ={ name:"",email:"",password:"",cpassword:""};

  name:any;
  email:any;
  password:any;
  cpassword:any;

  constructor (
    private signupservice:SignupService,private router:Router
  ){}

    ngOnInit():void{


    }

    
  
  onSubmit()
  {
    this.signupservice.registerUser(this.formdata).subscribe({
      next: (res) => {
        //this.handleResponse(res);
        console.log(res);
        this.router.navigateByUrl('');
      },
      error: (err) => console.error(err),
    });


    

     }

    



}
