import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    const url = 'http://henri-potier.xebia.fr/books';
    return this.http.get<Book[]>(url);
  }

}
