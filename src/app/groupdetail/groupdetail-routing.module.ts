import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupdetailPage } from './groupdetail.page';

const routes: Routes = [
  {
    path: '',
    component: GroupdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupdetailPageRoutingModule {}
