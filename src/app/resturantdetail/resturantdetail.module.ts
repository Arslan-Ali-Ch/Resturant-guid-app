import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResturantdetailPageRoutingModule } from './resturantdetail-routing.module';

import { ResturantdetailPage } from './resturantdetail.page';
import {NgxStarsModule} from 'ngx-stars';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule,
    NgxStarsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ResturantdetailPageRoutingModule
  ],
  declarations: [ResturantdetailPage]
})
export class ResturantdetailPageModule {}
