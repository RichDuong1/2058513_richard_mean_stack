import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  flag:boolean=false;
  correct?:number=0;
  constructor(public activeroute:ActivatedRoute, public router:Router) {
    this.activeroute.params.subscribe(data=>this.correct=data.correct)
   }

  ngOnInit(): void {
    if(this.correct>7){
      this.flag=true;
    }
  }


}
