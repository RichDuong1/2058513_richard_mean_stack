import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { ExamService } from './exam.service';
import { FormControl, FormGroup } from '@angular/forms';
import { question } from './question';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  questionarray:question[];
  flag:boolean = false;
  output:any;
  constructor(public exam:ExamService, public router:Router){
  }

  ngOnInit(): void{
    this.exam.getquestions().subscribe(q => {
      this.questionarray = q;
    })
  }

  checkanswers(formRef:NgForm){
    let form=formRef.value;
    this.output=form;
    let correct:number = 0
    for (let i = 0; i<this.questionarray.length; i++){
      if (form[i+1]==this.questionarray[i].answer){
        correct++;
      }
    }
    this.router.navigate(["answers",correct]);
    this.flag=true;
  }
}
