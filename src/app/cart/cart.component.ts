import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/services/card.service';
import { Book } from '../shared/model/book';
import { Offer } from '../shared/model/offer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Map<string, number> = new Map<string, number>();
  public offers: Offer[];
  public totalWithOffers: number;
  public totalWithoutOffers: number;

  constructor(private cartService: CardService) { }

  ngOnInit() {
    const cart = this.cartService.getCard();
    cart.forEach(item => {
      console.log(cart);
      if (this.items.has(item.isbn)) {
        this.items.set(item.isbn, this.items.get(item.isbn) + 1);
      } else {
        this.items.set(item.isbn, 1);
      }
    });
    this.cartService.getCommercialOffers().subscribe(
      (result) => {
        this.offers = result.offers;
        this.getTotalAfterPromos();
      },
      (err) => {
        console.error(err);
      }
    );

  }
  getBook(id): Book {
    const cart = this.cartService.getCard();
    let book: Book;
    cart.forEach(item => {
      if (item.isbn == id) {
        book = item;
      }
    });
    return book;
  }

  getTotalAfterPromos() {
    let totalCart = 0;
    const cart = this.cartService.getCard();
    let book: Book;
    cart.forEach(item => {
      totalCart += item.price;
    });
    this.totalWithoutOffers = totalCart;
    this.offers.forEach(offer => {
      if (offer.type == 'percentage') {
        totalCart = totalCart - (totalCart * offer.value / 100);
      }
      if (offer.type == 'minus') {
        totalCart = totalCart - offer.value;
      }
      if (offer.type == 'slice' && totalCart >= offer.sliceValue) {
        totalCart = totalCart - offer.value;
      }
    })

    this.totalWithOffers = totalCart;
  }

}
