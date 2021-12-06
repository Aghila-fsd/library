import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user= {
    uname :'',
    password:''
  }

  constructor(private http:HttpClient) { }

  api="http://localhost:2017";

  newuser(user:any)
  {   
    return this.http.post(this.api+"/signup/adduser",{"user":user})
    .subscribe(data =>{console.log("Signed up Sucessfully. Login Now")})
  }
}