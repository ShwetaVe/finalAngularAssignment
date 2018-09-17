import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { CricketService } from '../services/cricket.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() matchobj: EventEmitter<{country:string,team1name:string,team2name:string,date:Date}> = new EventEmitter();
  cricketServices:CricketService;

  constructor(private router: Router, private route: ActivatedRoute, private cricketService: CricketService) {
    this.cricketServices = cricketService;
  }

  // editMatch(i,match){
  //   this.matchobj.emit(match);
  //   this.router.navigate(['/editmatch', i]);
  // }

  ngOnInit() {
  }

}
