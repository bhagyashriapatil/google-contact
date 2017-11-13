import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-template-driven-login',
  templateUrl: './template-driven-login.component.html',
  styleUrls: ['./template-driven-login.component.css']
})
export class TemplateDrivenLoginComponent implements OnInit {

  data: object;

  // If you don't mention access specifier by default it is public
  // When a member is marked private, it cannot be accessed from outside of its containing class
  constructor(private router: Router, private loginService: LoginService) {
    
    //set default data object
    this.data = {
      "email": "",
      "pwd": ""
    };

  }

  login(data){
    this.loginService.validateUser(data)
    .subscribe(res=>{
      // set localstorage using "currentUser" token
      localStorage.setItem('currentUser',JSON.stringify(res.data));
      
      // check token is exist or not
      if(this.loginService.getUserLoggedIn()){
        this.router.navigate(['home']);
      }

    },err=>{
      alert("Hey unauthorized user, Please enter valid credentials");
      return Observable.throw(err);
    })
  };
  
  ngOnInit() {
  };

}
