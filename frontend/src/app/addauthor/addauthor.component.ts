import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authorservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private auhthorservice: AuthorService,private router: Router){  }
  
  
  authorItem= {
    authorid :'',
    author:'',
     title:'',
     genre:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddAuthor()
  {    
    this.auhthorservice.addAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}


