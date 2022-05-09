import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditresturantPage } from './editresturant.page';

const routes: Routes = [
  {
    path: '',
    component: EditresturantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditresturantPageRoutingModule {}
