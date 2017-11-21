import { Injectable } from '@angular/core';
import { Http, Response, HttpModule, JsonpModule, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  isValidToken: any;
  isToggle: boolean;
  stateArray : Array<any> = [];
  districtArray : Array<any> = [];
  talukasArray : Array<object> = [];

  constructor(private http: Http) { }

  //toggle sidebar
  setToggle(data){
    this.isToggle = data;
  }

  getToggle(){
    return this.isToggle;
  }

  setState(data) {
    this.stateArray.push({
      state : data
    });
    return this.stateArray;
  }

  setDistrict(recvstate, recvdist) {
     this.stateArray.forEach((obj)=>{
      if(recvstate===obj.state){
        this.districtArray.push({
          state : recvstate,
          district : recvdist
         })
      }
    });
    return this.districtArray;
  };

  setTaluka(recvstate, recvdist, recvtaluka) {
    this.stateArray.forEach((obj)=>{
      this.districtArray.forEach((distobj)=>{
      if(recvstate===obj.state&&recvdist===distobj.district){
        this.talukasArray.push({
          state : recvstate,
          district : recvdist,
          taluka : recvtaluka
        });
      }
    });
    })
    return this.talukasArray;
  };

  // add new signUp users
  setEmpList(data):Observable<any>{
    let headers = new Headers({'Content-type':'application/json'});  // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers});  // Create a request option
    return this.http.post('http://localhost:3003/signUp', data, options)
    .map((res:Response)=>{res.json()})
    .catch((error: any)=> Observable.throw(error.json().error||'Server error'))
  };

  // check for authenticated user
  validateUser(data): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3003/login', data, options)
    .map((res: Response)=> res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  };

  // check locally stored token
  getUserLoggedIn(): boolean {
    this.isValidToken = JSON.parse(localStorage.getItem('currentUser'));
    console.log("isValidToken",this.isValidToken)
    return (this.isValidToken) ? true : false;
  };


  getUsers(): Observable<any>{
  // url,body,headers
  // 1st way which is not working
  //  return this.http.get('http://localhost:3002/userList')
  //  .map((res:Response) => {
  //    return res.json();
  //  })
  //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  // 2nd updated way which is woarking now
  return Observable.create(observer => {
    // this.http.get('http://localhost:3002/userList')
    // .map(res => res.json())
    // .subscribe((data) => {
    // // i am passing data.users means only array to component which render on html5
    // // observer.next means it defer.resolve() like method where we send data to the controller
    // observer.next(data.users);
    // //observer.complete means we return promise at the end in angular1
    // observer.complete();
    // });
    });
  }

  

}
