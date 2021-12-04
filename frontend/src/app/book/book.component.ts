import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book-service.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  pageTitle: string = 'BookList';
  book=[{
    bookid:'',
    title:'',
    author:'',
    genre:'',
    imageUrl:''}]

 
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe((data: any)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
}

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['Updatebook']);
  }

  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data: any) => {
        this.book = this.book.filter((p: any) => p !== book);
      })
  

  }

  }



  

