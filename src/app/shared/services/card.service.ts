import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../model/offer';
import { OfferResult } from '../model/OfferResult';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(public http: HttpClient) { }

  public getCard(): Book[] {
    return JSON.parse(window.sessionStorage.getItem("cart"));
  }

  public setCard(cart: Book[]): void {
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  getCommercialOffers(): Observable<OfferResult> {
    let url = 'http://henri-potier.xebia.fr/books/';
    url = url + this.getParamsUrl() + '/commercialOffers'
    return this.http.get<OfferResult>(url);
  }

  getParamsUrl() {
    const items = JSON.parse(window.sessionStorage.getItem("cart"));
    let param = [];
    items.forEach(item => {
      param.push(item.isbn);
    });
    return param.join(',');
  }


}
