import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { CandidateOtpComponent } from './candidate-otp/candidate-otp.component';
import { CandidateRegistrationSucessComponent } from './candidate-registration-sucess/candidate-registration-sucess.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent },
  { path:'candidate-register', component:CandidateRegisterComponent },
  { path:'candidate-registration-success', component:CandidateRegistrationSucessComponent },
  { path:'candidate-otp', component:CandidateOtpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
