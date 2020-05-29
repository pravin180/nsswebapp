import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

 
@Injectable()
export class EnvironmentUrlService {
 
  public urlAddress:string = environment. serverUrl;
 
  constructor() { }
 
}