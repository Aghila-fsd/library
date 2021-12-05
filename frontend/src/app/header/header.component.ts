import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'CREATE YOUR FUTURE WITH US';
  constructor(public _auth:AuthService,private _router:Router){

  }
  
  ngOnInit(): void {
  }

}
