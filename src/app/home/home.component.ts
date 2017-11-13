import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  isToggle = false; 


  constructor() {}

  

  ngOnInit() {
  }

}
