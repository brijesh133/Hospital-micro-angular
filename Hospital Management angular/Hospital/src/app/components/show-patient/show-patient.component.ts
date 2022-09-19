import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  patients: Patient;
  pid: string;
  status: boolean;
  errMsg :string;
  active :boolean;
  pageActiv :boolean

  notFound: boolean;

  constructor(private patientService: PatientServiceService) { }

  ngOnInit(): void {
    this.notFound = true
    this.status = true;
   this.errMsg=""
   this.active=true;
   this.pageActiv=true;
   

  }



  // private patientList(){
  //   this.patientService.getPatientList().subscribe(data => { 
  //     this.patients=data;
  //     console.log(this.patients)

  //   });
  //   }

  onSubmit(showPatient: any) {

    if (this.pid !=null) {
      this.patientService.getPatientById(this.pid).subscribe(data => {
        this.patients = data;
        this.status = false;
        this.notFound = true;
        this.errMsg = "";
        this.active=true;

        this.pageActiv=false;

       
      }, error => {
        this.status = true;
        this.notFound = false;
        this.errMsg = "";
        this.active=true;
        this.pageActiv=false;

        

      })
    }
    else{
     
      this.status = true;
      this.notFound = true;
    
      this.errMsg = "Please Enter Patient Id";
      this.active=false;
      this.pageActiv=false;

      
    }
  }

  




}
