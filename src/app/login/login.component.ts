import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CandidateService } from "../candidate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  candidate: any;
  errmsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private candidateService:CandidateService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  
  login() {
    console.log(this.loginForm.value);
    this.candidateService.loginCandidate(this.loginForm.value).subscribe(data => {
      const token = data.headers.get("X-token");
      this.candidate = data.body;
      // console.log("res body: " + JSON.stringify(this.student));

      // console.log("tokkk " + token);

      if (token) {
        sessionStorage.setItem("token", token);
        alert("Login Succesfull");
        this.router.navigate([" "]);
      } else {
        alert("invalid email or password!");
      }
      
    });
   
  }
  submit(){
    this.router.navigate(['/candidate-register']);
  }
}