import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReportComponent } from './admin/report/report.component';
import { DatingusersComponent } from './datingusers/datingusers.component';
import { UserListComponent } from './datingusers/user-list/user-list.component';
import { UserComponent } from './datingusers/user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  
  
 
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,canActivate: [AuthGuard],data: { Name: 'sreehari'}},
  {path: 'datingusers', component: DatingusersComponent},
  {path: 'users-list', component: UserListComponent,canActivate: [AuthGuard],data: {Name: 'sumeet'}},

  {path: 'user', component: UserComponent},
  {path: 'user/:uID', component: UserComponent},
  {path: 'reports', component:ReportComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
