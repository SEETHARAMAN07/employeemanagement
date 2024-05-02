import { Component, OnInit } from '@angular/core';
import { CalempService } from '../services/calemp.service';
import { CaldepartService } from '../services/caldepart.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

 
  count: number | undefined;
  c:number| undefined;
  constructor(private calempService: CalempService, private caldepartservice:CaldepartService) {}

  ngOnInit(): void {
    this.calempService.fetchData().subscribe(data => {
      this.count = data.count;
      
    }, error => {
      console.error('Error fetching document count:', error);
      this.count = undefined; // Handle error case
    });

    this.caldepart();

  }


   caldepart():void {
    this.caldepartservice.fetchDepart().subscribe(d => {
      this.c = d.c;
      
    }, error => {
      console.error('Error fetching document count:', error);
      this.c = undefined; // Handle error case
    });


    
  }



}
