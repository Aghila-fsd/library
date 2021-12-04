import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../authorservice.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  pageTitle: string = 'AuthorList';
  author=[{
    authorid:'',
    author:'',
    title:'',
    genre:'',
    imageUrl:''}]
  constructor(private router:Router,private authorservice:AuthorService) { }

  ngOnInit(): void {
    this.authorservice.getAuthors().subscribe((data: any)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
}
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['Updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.authorservice.deleteAuthor(author._id)
      .subscribe((data: any) => {
        this.author = this.author.filter((p: any) => p !== author);
      })
  

  }

  }


  


