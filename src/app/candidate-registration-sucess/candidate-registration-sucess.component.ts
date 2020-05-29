import { Router } from '@angular/router';


import { Component, Input, EventEmitter, Output } from '@angular/core'; 
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RepositoryService } from '../repository.service';

 
@Component({
  selector: 'app-candidate-registration-sucess',
  templateUrl: './candidate-registration-sucess.component.html' 
})
export class CandidateRegistrationSucessComponent  {
  @Input() public LoginID: string
  @Output() regsubmitted = new EventEmitter<any>();
  constructor( 
     private repository: RepositoryService ,private router:Router,
     public activeModal: NgbActiveModal) {
       
    }

  
  onNoClick(): void {
   
  }
  onLogin()
  {
  
   this.router.navigate(['/login']);
  }
}