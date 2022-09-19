import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ShowDoctorComponent } from './components/show-doctor/show-doctor.component';
import { ShowPatientComponent } from './components/show-patient/show-patient.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowPatientComponent,
    ShowDoctorComponent,
    HomeComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
