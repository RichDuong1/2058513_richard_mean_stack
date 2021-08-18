import { Component } from '@angular/core';
import { taskdata } from './taskdata';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialtask: taskdata [] = [];
  tasktable = new datamanagement(this.initialtask);
  column = ['id', 'name', 'task', 'date'];
  
  addtask(loginRef:NgForm){
    let task = loginRef.value;
    let taskinfo = new taskdata(task.id, task.name, task.task, task.deadline.toString().slice(0,15));
    this.initialtask.push(taskinfo);
    this.tasktable.setData(this.initialtask);
  }
}

class datamanagement extends DataSource<taskdata>{
  private _dataStream = new ReplaySubject<taskdata[]>();

  constructor(initialData: taskdata[]){
    super();
    this.setData(initialData);
  }

  connect(): Observable<taskdata[]>{
    return this._dataStream;
  }

  disconnect(){}

  setData(data:taskdata[]){
    this._dataStream.next(data);
  }
}