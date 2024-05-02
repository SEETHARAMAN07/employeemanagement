import { Component,OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit {

data:any;

constructor(private userservice:UsersService) {}

ngOnInit(): void {
  this.userservice.getUsers().subscribe({
    next:(response)=>
      {
        this.data=response.data;
      }
      ,error:(error)=>{
        console.log(error);
      }
  });



}
}


 
  




