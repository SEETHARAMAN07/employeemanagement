import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { DashComponent } from './dash/dash.component';
import { DepartmentComponent } from './department/department.component';
import { AddempComponent } from './addemp/addemp.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { DispempComponent } from './dispemp/dispemp.component';
import { DispleaveComponent } from './displeave/displeave.component';
import { DelempComponent } from './delemp/delemp.component';
import { PayslipComponent } from './payslip/payslip.component';




const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'dashboard',component:DashComponent},
  {path:'department',component:DepartmentComponent},
  {path:'addemp',component:AddempComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'leave',component:LeaveComponent},
  {path:'Users',component:UsersComponent},
  {path:'update',component:UpdateempComponent},
  {path:'dispemp',component:DispempComponent},
  {path:'displeave',component:DispleaveComponent},
  {path:'delemp',component:DelempComponent},
  {path:'Payslip',component:PayslipComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    DashComponent,
    DepartmentComponent,
    AddempComponent,
    AttendanceComponent,
    LeaveComponent,
    UsersComponent,
    UpdateempComponent,
    DispempComponent,
    DispleaveComponent,
    DelempComponent,
    PayslipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
