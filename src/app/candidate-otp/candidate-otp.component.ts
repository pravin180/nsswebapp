import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CandidateRegistrationSucessComponent } from '../candidate-registration-sucess/candidate-registration-sucess.component';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RepositoryService } from '../repository.service';
import { OtpVerification } from '../otpVerification';
@Component({
  selector: 'app-candidate-otp',
  templateUrl: './candidate-otp.component.html',
  styleUrls: ['./candidate-otp.component.css']
})
export class CandidateOtpComponent implements OnInit {
  form: FormGroup;
  tempUserID: number;
  otpVerification : OtpVerification;
  @Input() public CandidateID:number;
  constructor(private formBuilder: FormBuilder,public activeModal:NgbActiveModal,
    private repository: RepositoryService ,private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {this.form = new FormGroup({
    'otp1':new FormControl(null,[Validators.required , Validators.minLength(1)]),
    'otp2':new FormControl(null,[Validators.required , Validators.minLength(1)]),
    'otp3':new FormControl(null,[Validators.required , Validators.minLength(1)]) ,
    'otp4': new FormControl(null,[Validators.required, Validators.minLength(1)]),
    'candidateID' : new FormControl(null,[Validators.nullValidator])
});
this.fval.candidateID.setValue(this.CandidateID); 
}

get fval() { return this.form.controls; }

ConcatOTP(otp :any, otpver : OtpVerification)
{
otpver.MobileOTPCode  = Number(otp.otp1 + otp.otp2 +otp.otp3 + otp.otp4);
otpver.candidateID =  Number(otp.candidateID);
return otpver;
}

onsave()
{
if (this.form.invalid) {
  return;
  
    
}

let otpver  = new OtpVerification();
 var otp =  this.form.getRawValue();
 this.otpVerification = this.ConcatOTP(otp,otpver);
 let apiUrl = 'api/Login/VerifyOTP';
this.repository.create(apiUrl, this.otpVerification).subscribe(
  (data)=>{
    if(data != null)
    {
      this.form.reset();
      this.activeModal.dismiss();
      this.openDialogRegistrationSucess(data["LoginID"]);
      
  }
 },
  (error)=>{
     console.log(error);
     alert(error);
  }
)
}
openDialogRegistrationSucess(LoginID:string): void {
const regSucessDilogbox = this.modalService.open(CandidateRegistrationSucessComponent);
regSucessDilogbox.componentInstance.LoginID = LoginID;
}
verify(){
  this.router.navigate(['/candidate-registration-success']);
  

}

  }


