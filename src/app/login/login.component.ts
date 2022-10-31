import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execute

  //properties
  aim="your perfect banking partner"
  //user defined function - 4th execute

database:any={//objects of objects
  1000: {acno:1000,username:"sarath",password:1000,balance:1000},
  1001: {acno:1001,username:"abi",password:1006,balance:1000},
  1002: {acno:1002,username:"anzil",password:1007,balance:1000}

}



  constructor() { } //1st execute
  //spl member function,automatically involks when an obj created

  ngOnInit(): void {//2nd execute - life cycle hooks of angular-
    //initial process of component initialization
    
  }

acno="";
pswd="";

acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);

}
pswdChange(event:any){
  this.pswd=event.target.value
console.log(this.pswd);

}

login(){
  var acno=this.acno;
  var pswd=this.pswd;
  var userDetails=this.database;

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert("login successfully")
    }
    else{
      alert("invalid password");
    }
  }else{
    alert("invalid user details")
  }
}




}

