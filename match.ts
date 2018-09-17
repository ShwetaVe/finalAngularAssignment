
export class match{
    matchid:number;
    country:string;
    date: Date;
    result: string;
    team1: number;
    team2: number;
    team1name:string;
    team2name:string;
    
   
    constructor(matchid:number,country:string,date: Date,result: string,team1: number, team2: number,team1name:string,team2name:string)  {
        this.matchid=matchid;
        this.country=country;
        this.date = date;
        this.result = result;
        this.team1 = team1;
        this.team2 = team2;
        this.team1name=team1name;
        this.team2name=team2name
    }
    
}