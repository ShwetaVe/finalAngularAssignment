import { Component, OnInit } from '@angular/core';
import { CricketService } from '../services/cricket.service';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-schedulematch',
  templateUrl: './schedulematch.component.html',
  styleUrls: ['./schedulematch.component.css']
})
export class SchedulematchComponent implements OnInit {

  scheduleBtnClick(addmatchForm:NgForm)
  {
     this.cricketService.matchScheduled(addmatchForm.value.countryName,addmatchForm.value.team1Name,addmatchForm.value.team2Name,addmatchForm.value.matchDate)
   }
  constructor( private cricketService:CricketService) { }

  ngOnInit() {
  }

}
