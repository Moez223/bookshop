import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchBook: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchBook) {
      return items;
    }
    searchBook = searchBook.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchBook);
    });
  }

}
