import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CardItemComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  exports: [
    CardItemComponent
  ]
})
export class CardItemModule { }
