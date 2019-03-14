import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';

const routes: Routes = [
  { path:'', component:HomePageComponent },
  { path:'catalog', component:CatalogPageComponent },
  { path:'cart', component:CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
