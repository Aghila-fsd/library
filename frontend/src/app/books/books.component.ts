import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  pageTitle: string = 'BooksList';
  // imageWidth: number = 50;
  // imageMargin: number = 2;
  // : boolean = false;
  books=[{
    bookid:'',
    title:'',
    author:'',
    genre:'',
    imageUrl:''}]

 
  constructor(private router:Router,private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
 
  }
}



