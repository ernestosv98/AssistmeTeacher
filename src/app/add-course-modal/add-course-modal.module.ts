import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCourseModalPageRoutingModule } from './add-course-modal-routing.module';

import { AddCourseModalPage } from './add-course-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddCourseModalPageRoutingModule
  ],
  declarations: [AddCourseModalPage]
})
export class AddCourseModalPageModule {}
