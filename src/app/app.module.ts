import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbActiveModal, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { CandidateRegistrationSucessComponent } from './candidate-registration-sucess/candidate-registration-sucess.component';
import { CandidateOtpComponent } from './candidate-otp/candidate-otp.component';
// import { CandidateOtpComponent } from './candidate-otp/candidate-otp.component';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepositoryService } from './repository.service';
import { EnvironmentUrlService } from './environment-url.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CandidateRegisterComponent,
    CandidateRegistrationSucessComponent,
    CandidateOtpComponent
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    
 
    
   
    
    
    
   

   
    
  ],
  providers: [ NgbActiveModal,
    DatePipe,
    NgbActiveModal,
    RepositoryService,
    EnvironmentUrlService
    ],
  bootstrap: [AppComponent],
  exports: [RouterModule,
  ]
})
export class AppModule { }
