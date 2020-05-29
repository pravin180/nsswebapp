import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Candidate } from './candidate';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: "root"
})


export class CandidateService {
  path = environment.serverUrl + "candidate";
  constructor(private http: HttpClient) {}

  registerCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.path + "/create", candidate);
  }

  loginCandidate(candidate) {
    // debugger;
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      observe: "response" as "response"
    };
    return this.http.post<any>(this.path + "/auth", candidate, httpOptions);
  }
}