import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  server_address:string='api';

  authoritem={
    authorid:'',
    author:'',
    title:'',
    genre:'',
    imageUrl:''}
    constructor( private http:HttpClient) { }

  getAuthor(id:any){
    return this.http.get<any>(`${this.server_address}/+id`);
  }
  getAuthors(){
    return this.http.get<any>(`${this.server_address}/authors`);
  }

  addAuthor(item:any)
  {   
    return this.http.post<any>(`${this.server_address}/insertauthor`,{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete<any>(`${this.server_address}/remove/`+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put<any>(`${this.server_address}/update`,author)
    .subscribe(data =>{console.log(data)})
  }

}

