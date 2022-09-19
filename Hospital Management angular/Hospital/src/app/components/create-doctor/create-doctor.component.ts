import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor-service.service';
import  spec  from './specialist.json'
@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  jsonList:{specialist:String[]}[]=spec;
  specialist:String[] = [];
  
  constructor(private doctorService:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.specialist=this.jsonList[0].specialist;
  }

  addDoctor(doctor:Doctor){
    this.doctorService.addDoctor(doctor).subscribe(data=>{
      console.log(data)
    },error=>console.log(error)
    );
  }
  submit(doctor:any){
 
   this.addDoctor(this.doctor);
   alert("Successfully Doctor Created")
   this.router.navigate(['Home'])

  }

}
