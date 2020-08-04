import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { FullComponent } from './modules/layouts/full/full.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',
    pathMatch: 'full', 
    redirectTo: 'login' 
  },
  { path: 'register', 
    component: RegisterComponent 
  },
  { path: 'login', 
    component: LoginComponent 
  },
  { path: '', 
    component: FullComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuardService]
    }] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
