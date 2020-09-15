import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { DashboardRoutes } from 'src/app/modules/dashboard/dashboard-routing';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LoaderModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  providers: []
})
export class DashboardModule { }
