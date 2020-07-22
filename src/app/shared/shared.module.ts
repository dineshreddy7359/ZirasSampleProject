import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CardSpinnerComponent } from './card-spinner.component';
import { LoaderService } from './loader/loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    CardSpinnerComponent
  ],
  providers: [
    LoaderService
  ],
  exports: [
    LoaderComponent,
    CardSpinnerComponent
  ]
})
export class SharedModule { }
