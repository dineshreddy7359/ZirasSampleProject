import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from './loader/loader.module';
import { CardSpinnerComponent } from './card-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [
    CardSpinnerComponent
  ],
  providers: [],
  exports: [
    CardSpinnerComponent
  ]
})
export class SharedModule { }
