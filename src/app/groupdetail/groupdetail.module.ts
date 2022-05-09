import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupdetailPageRoutingModule } from './groupdetail-routing.module';

import { GroupdetailPage } from './groupdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupdetailPageRoutingModule
  ],
  declarations: [GroupdetailPage]
})
export class GroupdetailPageModule {}
