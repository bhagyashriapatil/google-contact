import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isActive: boolean;

  title:string = 'Angular 4 Demo';

  constructor(private router: Router, private loginService : LoginService){}

  toggle(){
    this.isActive = !this.isActive;
    this.loginService.setToggle(this.isActive);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // 1. set object and on logout check if removed
  // 2. route navigate properly or not on login

  ngOnInit(){
    
  }

}


