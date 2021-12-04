import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {


  authorItem= {
    authorid :'',
    author:'',
    title:'',
    genre:'',
    imageUrl:''}
 
    constructor(private router:Router,private authorservice:AuthorService) { }


  ngOnInit(): void {
    let authorid = localStorage.getItem("editAuthorId");
    this.authorservice.getAuthor(authorid).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorservice.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  } 



}