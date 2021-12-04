import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book-service.service';
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  bookItem= {
    bookid :'',
    title:'',
    author:'',
    genre:'',
    imageUrl:''}
 
 
  constructor(private router:Router,private bookservice:BookService) { }

  ngOnInit(): void {
    let bookid = localStorage.getItem("editBookId");
    this.bookservice.getBook(bookid).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookservice.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}


