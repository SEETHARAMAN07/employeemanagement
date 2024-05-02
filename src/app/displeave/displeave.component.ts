import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';
import { DispleaveService } from '../services/displeave.service';

@Component({
  selector: 'app-displeave',
  templateUrl: './displeave.component.html',
  styleUrls: ['./displeave.component.css']
})
export class DispleaveComponent implements OnInit{

  data:any;

constructor(private leaveservice:DispleaveService) {}

ngOnInit(): void {
  this.leaveservice.getLeave().subscribe({
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
