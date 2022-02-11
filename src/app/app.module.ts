import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { DatingusersComponent } from './datingusers/datingusers.component';

import { UserListComponent } from './datingusers/user-list/user-list.component';
import { UserComponent } from './datingusers/user/user.component';
import { UsersService } from './shared/users.service';
import { AuthGuard } from './shared/auth.guard';
import { ReportComponent } from './admin/report/report.component';

import { AuthInterceptor } from '../app/shared/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DatingusersComponent,
   
    UserListComponent,
    UserComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,
    UsersService, 
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, 
      useClass:AuthInterceptor,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
