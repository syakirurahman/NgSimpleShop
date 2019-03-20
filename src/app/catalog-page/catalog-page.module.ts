import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogPageRoutingModule } from './catalog-page-routing.module';
import { CatalogPageComponent } from './catalog-page.component';

@NgModule({
  declarations: [CatalogPageComponent],
  imports: [
    CommonModule,
    CatalogPageRoutingModule
  ]
})
export class CatalogPageModule { }
