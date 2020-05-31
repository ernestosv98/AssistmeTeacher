import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCourseModalPageRoutingModule } from './update-course-modal-routing.module';

import { UpdateCourseModalPage } from './update-course-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCourseModalPageRoutingModule
  ],
  declarations: [UpdateCourseModalPage]
})
export class UpdateCourseModalPageModule {}
