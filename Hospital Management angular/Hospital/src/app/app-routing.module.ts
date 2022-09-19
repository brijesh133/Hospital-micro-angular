import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { HomeComponent } from './components/home/home.component';
import { ShowDoctorComponent } from './components/show-doctor/show-doctor.component';
import { ShowPatientComponent } from './components/show-patient/show-patient.component';
const routes: Routes = [
  {path: 'showPatient',component: ShowPatientComponent},
  {path: 'showDoctor',component: ShowDoctorComponent},
  {path: 'Home',component: HomeComponent},
  {path: 'addDoctor',component: CreateDoctorComponent},
  {path: 'addPatient',component: CreatePatientComponent},
   {path: '', redirectTo: 'Home',pathMatch: 'full'},
   {path: 'about',component: AboutComponent},
   {path: 'contactUs',component: ContactComponent},
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
