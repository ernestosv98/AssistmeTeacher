import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCourseModalPage } from './update-course-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCourseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCourseModalPageRoutingModule {}
