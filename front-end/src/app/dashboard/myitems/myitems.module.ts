import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsComponent } from './myitems.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MyItemsService } from './myitems.service';

@NgModule({
  imports: [
    CommonModule, Ng2SmartTableModule

  ],
  declarations: [MyItemsComponent],
  entryComponents: [],
  providers: [MyItemsService]
})
export class MyItemsModule { }
