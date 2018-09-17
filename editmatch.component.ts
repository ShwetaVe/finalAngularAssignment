import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CricketService } from '../services/cricket.service';

@Component({
  selector: 'app-editmatch',
  templateUrl: './editmatch.component.html',
  styleUrls: ['./editmatch.component.css']
})
export class EditmatchComponent implements OnInit {
  @Input() matchobj;
  // @ViewChild('name') name: ElementRef;
 
  constructor(private cricketService: CricketService) {
    // console.log(matchobj)
   }

   rescheduleBtnClick(data){

   }

  ngOnInit() {
  }

}
