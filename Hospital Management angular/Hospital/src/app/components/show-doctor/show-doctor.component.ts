import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor-service.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }

  doctors:Doctor[] = [];

  doctorDetails:Doctor = new Doctor();

  doctorNames:String[] = [];
  dataPresent:boolean = false;
  doctorName:String = "";

  errMsg = "";

  ngOnInit(): void {
    this.doctorService.getDoctorsName().subscribe(data => {
      this.doctorNames=data;
      
    },error=> console.log(error));

    this.doctorService.getAllDoctors().subscribe(data => {
      this.doctors=data;
    },error=> console.log(error));

  }

  showDoctorInfo(showDoctorForm: any) {
  
    var docName = showDoctorForm.value.doctorName;

    if (docName !== "") {
      for (var i in this.doctorNames) {
        if (this.doctorNames[i]=== docName)
          this.doctorDetails = this.doctors[i];
         
      }
      this.dataPresent = true;
      this.errMsg = "";
    }else
        this.errMsg = "Please select a doctor";
  }

}
