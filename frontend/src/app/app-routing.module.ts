import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [

  {
    
    path: 'Home',
    component:AppComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  
  {
    path:'books',
    component:BooksComponent
  },
  
  {
  path:'authors',
  component:AuthorsComponent
  },
  {
    path:'Addbook',
    canActivate:[AuthGuard],
    component:AddbookComponent
  },
  {
    path:'Addauthor',
    canActivate:[AuthGuard],
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
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
