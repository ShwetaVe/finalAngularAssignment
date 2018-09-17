import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { match } from '../models/match';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getmatches() {
   return this.http.get<any>('http://localhost:54112/api/matches');
  }
 matchScheduled(matchdata){
      return  this.http.post<any>('http://localhost:54112/api/matches', matchdata);
 }
}
