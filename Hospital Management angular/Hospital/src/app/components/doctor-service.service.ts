import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorUrl = "http://localhost:9090/doctor";

  constructor(private http:HttpClient) { }

  getAllDoctors():Observable<Doctor[]>{
      return this.http.get<Doctor[]>(`${this.doctorUrl}/Getdoctor`);
  }

  getDoctorsName():Observable<String[]>{
    return this.http.get<String[]>(`${this.doctorUrl}/GetDocName`);
}


addDoctor(doctor:Doctor):Observable<Object>{
  console.log(doctor);
  return  this.http.post<Object>(`${this.doctorUrl}/Createdoctor`,doctor);
}
  
}
