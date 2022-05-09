import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddresturantPage } from './addresturant.page';

const routes: Routes = [
  {
    path: '',
    component: AddresturantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddresturantPageRoutingModule {}
