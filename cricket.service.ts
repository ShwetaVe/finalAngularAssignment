import { Injectable } from '@angular/core';
import { match } from '../models/match';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  matches: match[] = [];

  constructor(private apiservice: ApiService) { 
   
   // For Get All MAtch
    this.apiservice.getmatches().subscribe(
      (response) => {
        response.forEach((element) => {
          var tt = element['dateofmatch'];
          var dt = new Date(tt);
          this.addNewMatch(element['matchid'], element['country'],dt,element['result'],element['team1'] ,element['team2'],element['team1name'],element['team2name']);
        });
      },
      (error) => console.log(error)
    );
  }
  addNewMatch(matchid:number,country:string,dateofmatch:Date,result:string,team1:number,team2:number,team1name:string,team2name:string) {
    this.matches.push(
      new match(matchid,country,dateofmatch,result,team1,team2,team1name,team2name)
    );
  }
  // Methods for getall matches ends here
  // ** */
  
  // Method foe Add Match--POST call begins
        matchScheduled(countryName:string,team1Name:string,team2Name:string,matchDate:Date){
          var  matchdata  = {
                
          };
        
          this.apiservice.matchScheduled({matchid: 1,country: countryName, dateofmatch : matchDate,result: "Awaited",team1: 1,team2:2, team1name: team1Name, team2name: team2Name}).subscribe(
            (response) => {
              console.log(response);
            },
            (error) => console.log(error)
        );
          }; 
}
