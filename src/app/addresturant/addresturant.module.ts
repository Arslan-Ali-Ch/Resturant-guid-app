import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddresturantPageRoutingModule } from './addresturant-routing.module';

import { AddresturantPage } from './addresturant.page';
@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddresturantPageRoutingModule
  ],
  declarations: [AddresturantPage]
})
export class AddresturantPageModule {}
