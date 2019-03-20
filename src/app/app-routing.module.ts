import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: './home-page/home-page.module#HomePageModule',
    pathMatch: 'full'
  },
  {
    path:'catalog',
    loadChildren: './catalog-page/catalog-page.module#CatalogPageModule'
  },
  {
    path:'cart',
    loadChildren: './cart-page/cart-page.module#CartPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
