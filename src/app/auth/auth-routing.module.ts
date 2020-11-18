import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing components
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './../shared/guard/auth.guard';

const routes: Routes = [
  {path: '', component: AuthComponent, pathMatch: 'full'},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
