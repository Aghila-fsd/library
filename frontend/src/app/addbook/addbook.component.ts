import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  constructor(private bookService: BookService,private router: Router){  }
  
  
  bookItem= {
     bookid :'',
     title:'',
     author:'',
     genre:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddBook()
  {    
    this.bookService.addBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}


