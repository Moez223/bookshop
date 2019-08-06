import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';


@NgModule({
  declarations: [BooksComponent, FilterPipe],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule { }
