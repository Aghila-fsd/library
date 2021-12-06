import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UserService , private router:Router) { }

  ngOnInit(): void {
  }
  user={username:'',
  password:'',Rptpassword:''}
  userverify(){
    this.userservice.newuser(this.user);
    console.log(this.user);  
       
    alert("Success");
    this.router.navigate(['/login']);
  }
}