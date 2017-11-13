import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  langs: Array<string>;
  myform: FormGroup;     //myform is an instance of FormGroup and represents the form itself
  
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  rating: FormControl;

  constructor(public loginService : LoginService, private router: Router) {
    this.langs = [
        "English",
        "French",
        "German"
      ];
   }

  createFormControls() {
      this.firstName = new FormControl('', Validators.required);
      this.lastName = new FormControl('', [Validators.required, this.lastNameValidator]);
      this.email = new FormControl('', [
       Validators.required,
       Validators.pattern("[^ @]*@[^ @]*"),
       this.emailDomainValidator
      ]);
      this.rating = new FormControl('', Validators.required);
      this.password = new FormControl('', [
       Validators.required,
       Validators.minLength(4),
       Validators.maxLength(10)
      ]);
      this.language = new FormControl('', Validators.required);
  };

  lastNameValidator(control) { 
    let lastName = control.value; 
    if (lastName && !lastName.includes("patil")) { 
    return {
      lastNameValid: {
        parsedDomain: lastName
      }
     }
    }
    return null; 
  };

  emailDomainValidator(control: FormControl) { 
    let email = control.value; 
    if (email && email.indexOf("@") != -1) { 
      let [_, domain] = email.split("@"); 
      if (domain !== "zymr.com") { 
        return {
          emailDomain: {
            parsedDom: domain
          }
        }
      }
    }
    return null; 
  };

  createForm() {
      this.myform = new FormGroup({
      //   name: new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      //   }),
      email: this.email,
      rating: this.rating,
      password: this.password,
      language: this.language
      });
  };


  onSubmit() {
    if (this.myform.valid) {
    this.loginService.setEmpList(this.myform.value)
    .subscribe(res =>{
      alert("Hey User added successfully");
      this.router.navigate(['login']);
    }, err =>{
      alert("User Already exist");
      return Observable.throw(err);
    });
    this.myform.reset();  //inbuilt function by angular4
    }
  };

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

}
