import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetitionModalPageRoutingModule } from './petition-modal-routing.module';

import { PetitionModalPage } from './petition-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetitionModalPageRoutingModule
  ],
  declarations: [PetitionModalPage]
})
export class PetitionModalPageModule {}
