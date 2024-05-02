import { Component,OnInit } from '@angular/core';
import { DispempService } from '../services/dispemp.service';

@Component({
  selector: 'app-dispemp',
  templateUrl: './dispemp.component.html',
  styleUrls: ['./dispemp.component.css']
})
export class DispempComponent  implements OnInit{
  data:any;

constructor(private dispempservice:DispempService) {}

ngOnInit(): void {
  this.dispempservice.getUsers().subscribe({
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
