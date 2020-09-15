import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';

export const DashboardRoutes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  }
];
