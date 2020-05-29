import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CandidateService } from '../candidate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css']
})
export class CandidateRegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private reg: CandidateService, private route: Router) {}

  frm: FormGroup;

  
  ngOnInit() {
    this.frm = this.fb.group({
      fullname: ["", Validators.required],
      addressline1: ["", Validators.required],
      addresslin2: ["", Validators.required],
      mobile: ["", Validators.compose([Validators.pattern[0 - 9]])],
      email: ["", Validators.required],
      password: ["", Validators.required]
      // confirmpassword: ["", Validators.required]
    });
  }
  submit() {
    this.reg.registerCandidate(this.frm.value).subscribe(
      data => {
        console.log("candidate:" + JSON.stringify(data));
        if (data) {
          alert("register sucessfully");
        } else {
          alert("could not register");
        }
        {
          this.route.navigate(['/login']);
        }
      },
      err => {
        console.log("candidate Error" + JSON.stringify(err));
        alert("could not register ! server problem");
      }
      
    );
  }
  
}