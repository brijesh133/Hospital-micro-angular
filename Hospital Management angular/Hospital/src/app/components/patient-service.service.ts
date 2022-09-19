import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private baseurl="http://localhost:9090/patient";
  private baseurlByid="http://localhost:9090/patient/GetpatientById"
  constructor(private httpclient: HttpClient) { }

  getPatientList(): Observable<Patient[]>{
    return this.httpclient.get<Patient[]>(`${this.baseurl}/Getpatient`);

  }

  getPatientById(id:any): Observable<Patient>{
    return this.httpclient.get<Patient>(`${this.baseurlByid}/${id}`);

  }

  addPatient(patient:Patient):Observable<Object>{
    console.log(patient);
    return  this.httpclient.post<Object>(`${this.baseurl}/Createpatient`,patient);
  }
}
