import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonebookComponent } from './pages/phonebook/phonebook.component';
import { PhonebooksComponent } from './pages/phonebooks/phonebooks.component';

const routes: Routes = [
  { path: 'phone-books', component: PhonebooksComponent },
  { path: 'phone-book/:id', component: PhonebookComponent },
  { path: '', redirectTo: '/phone-books', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
