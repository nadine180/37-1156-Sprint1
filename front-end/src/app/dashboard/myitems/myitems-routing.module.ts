import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyItemsComponent } from './myitems.component';

const routes: Routes = [
  { path: '', component: MyItemsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToysRoutingModule {}
