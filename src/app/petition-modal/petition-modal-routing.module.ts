import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetitionModalPage } from './petition-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PetitionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetitionModalPageRoutingModule {}
