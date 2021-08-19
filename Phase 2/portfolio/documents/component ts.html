import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { registerform } from './register';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  regarray:registerform [] = [];

  show1:boolean = true;
  show2:boolean = false;
  show3:boolean = false;
  welcome:string=""

  loginRef = new FormGroup ({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  
  signRef = new FormGroup ({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    signuser:new FormControl("",[Validators.required]),
    signpass:new FormControl("",[Validators.required])
  })

  portRef = new FormGroup ({
    contact:new FormControl("",[Validators.required]),
    number:new FormControl("",[Validators.required])
  })

  verify(){
    let login = this.loginRef.value;
    for (let i of this.regarray){
      if (i.sign == login.username && i.pass == login.password){
        this.welcome = login.username;
        this.showportfolio();
        break;
      }
    }
    document.getElementById("loginfail").innerHTML = "Login Failed";
  }

  register(){
    let reg = this.signRef.value;
    let regform = new registerform(reg.fname, reg.lname, reg.signuser, reg.signpass);
    this.regarray.push(regform);
    document.getElementById("regsuccess").innerHTML = "Registration Success";
  }
  
  save(){
    let portinfo = this.portRef.value;
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    let name = portinfo.contact;
    let phone = portinfo.number;

    let namedata = document.createTextNode(name);
    let phonedata = document.createTextNode(phone.toString());

    cell1.appendChild(namedata);
    cell2.appendChild(phonedata);
    row.appendChild(cell1);
    row.appendChild(cell2);

    document.getElementById("table")!.appendChild(row);
  }

  showlogin(){
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
  }

  showsignup(){
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
  }

  showportfolio(){
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
  }
}
