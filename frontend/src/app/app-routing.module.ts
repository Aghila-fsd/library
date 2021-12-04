import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component:AppComponent
  },
  {
    path:'Books',
    component:BooksComponent
  },
  {
  path:'Authors',
  component:AuthorsComponent
  },
  {
    path:'Addbook',
    component:AddbookComponent
  },
  {
    path:'Addauthor',
    component:AddauthorComponent
  },
  {
    path:'Updatebook',
    component:UpdatebookComponent,
  },
  {
    path:'Updateauthor',
    component:UpdateauthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
