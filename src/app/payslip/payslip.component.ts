import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent {
  formdata ={ name:"",id:"",designation:"",salary:""};
  generatePDF() {
    alert("hi");

    const doc = new jsPDF();
    doc.text(`                                        Employee PaySlip`,10,10);
    let yPos = 10+20;
   // this.selectedSeats.forEach((seat, index) => {
      //doc.text(`Ticket ${index + 1}`, 10, yPos);
      //doc.text(`Row: ${seat.charAt(0)}, Seat: ${seat.substring(1)}`, 10, yPos + 10);
     

// Draw a rectangle without filling

      doc.text(`employee name         :   ${this.formdata.name}`,10,yPos);
      doc.text(`employee id           :   ${this.formdata.id}`,10,yPos+10)
      doc.text(`employee designation  :   ${this.formdata.designation}`,10,yPos+20);
      doc.text(`salary                :   ${this.formdata.salary}`,10,yPos+30);
      yPos += 40; // Adjust position for next ticket
   // });
    doc.save('salary.pdf');
  }

}
