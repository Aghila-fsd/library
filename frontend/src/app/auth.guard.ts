import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate,Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/books'])
      return false

    }
  }
  
  
}
