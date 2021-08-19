import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(public http:HttpClient){}

    getquestions():Observable<question[]>{
        return this.http.get<question[]>("/assets/question.json");
    }
}
