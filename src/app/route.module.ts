import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'books', loadChildren: './books/books.module#BooksModule' },
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModule {
}
