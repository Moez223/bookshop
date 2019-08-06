import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BookService,
    CardService
  ]
})
export class SharedModule { }
