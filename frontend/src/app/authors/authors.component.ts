import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService} from '../authorservice.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  pageTitle: string = 'AuthorsList';
  // imageWidth: number = 50;
  // imageMargin: number = 2;
  // : boolean = false;
  authors=[{
    authorid:'',
    author:'',
    title:'',
    genre:'',
    imageUrl:''}]

 
  constructor(private router:Router,private authorservice: AuthorService) { }

  ngOnInit(): void {
    this.authorservice.getAuthors().subscribe((data: any)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  
  }
}


