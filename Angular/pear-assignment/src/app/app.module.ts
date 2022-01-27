import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClassifyEmployeeComponent } from './components/classify-employee/classify-employee.component';
import { DisplayEmployeesComponent } from './components/display-employees/display-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    ClassifyEmployeeComponent,
    DisplayEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
