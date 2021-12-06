import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  server_address:string='api';
  item= {
    bookid:'',
    title:'',
    author:'',
    genre:'',
    imageUrl:''
   }
  constructor( private http:HttpClient) { }
  getBook(id:any){
    return this.http.get<any>(`${this.server_address}+id`);
  }
  getBooks(){
    return this.http.get<any>(`${this.server_address}/books`);
  }

  addBook(item:any)
  {   
    return this.http.post<any>(`${this.server_address}/insertbook`,{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete<any>(`${this.server_address}/remove/+id`)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put<any>(`${this.server_address}/Updatebook`,book)
    .subscribe(data =>{console.log(data)})
  }

}
