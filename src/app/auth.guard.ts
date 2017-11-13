import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './service/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(public router: Router, private loginService: LoginService) { }

  canActivate(): boolean{
    if(this.loginService.getUserLoggedIn()){
     return true;
    }
    else{
      alert("You are not authorized user");
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

}
