import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditresturantPageRoutingModule } from './editresturant-routing.module';

import { EditresturantPage } from './editresturant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditresturantPageRoutingModule
  ],
  declarations: [EditresturantPage]
})
export class EditresturantPageModule {}
