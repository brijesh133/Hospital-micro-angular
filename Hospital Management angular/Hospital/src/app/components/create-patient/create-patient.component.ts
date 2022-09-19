import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor-service.service';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctors: Doctor[]=[];
  names:String[]=[];
  doctorName:string="";
  constructor(private patientService:PatientServiceService,private doctorService:DoctorService,private router:Router) { }

  ngOnInit(): void {

    this.doctorService.getDoctorsName().subscribe(data => {
      this.names=data;
    },error=> console.log(error));
  }

  addPatient(patient:Patient){
    this.patientService.addPatient(patient).subscribe(data=>{
      console.log(data)
    },error=>console.log(error)
    );
  }
  submit(patient:any){
    
    this.addPatient(this.patient);
    alert("Successfully Created Patient");
    this.router.navigate(['Home'])
  }

}
