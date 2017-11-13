import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { LoginService } from '../service/login.service';


@Injectable()
export class ListResolver implements Resolve<any> {
    constructor(private router: Router, private loginService:LoginService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.loginService.getUsers();
    }

    userList(){
        let data = this.loginService.getUsers();
        console.log("data",data);
        return data;
    }
}