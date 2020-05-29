import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(private route: Router) { }
  public login()
  {
    this.route.navigate(['/login']);
  }

  public register()
  {
    this.route.navigate(['/candidate-register']);
  }
  ngOnInit(): void {
  }

}
