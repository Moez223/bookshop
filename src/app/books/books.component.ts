import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/book.service';
import { Book } from '../shared/model/book';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  public books: Book[];
  public cart: Book[];
  public searchBook: string;

  constructor(private bookSevice: BookService, private cardService: CardService) { }

  ngOnInit() {
    this.cart = this.cardService.getCard();

    this.bookSevice.getBooks().subscribe(
      (result) => {
        this.books = result;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public addInCart(item: Book): void {
    if (this.cart == null) {
      this.cart = [];
    }
    this.cart.push(item);
    this.cardService.setCard(this.cart);
  }

}
