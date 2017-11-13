import { Injectable } from '@angular/core';
import { Http, Response, HttpModule, JsonpModule, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  updateList(data):Observable<any>{
    let headers = new Headers({'Content-type':'application/json'});  // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers});  // Create a request option
    return this.http.put('http://localhost:3002/updateuserlist', data, options)
    .map((res:Response)=>{
      return res.json();
    })
    .catch((error: any)=> Observable.throw(error.json().error||'Server error'))
  };

  deleteUser(index): Observable<any>{
    return this.http.delete('http://localhost:3002/delete/'+ index )
    .map((res:Response)=>{return res.json()})
    .catch((error: any)=> Observable.throw(error.json().error||'Server error'));
  }

}
