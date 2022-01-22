import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './api-call.service';
import { TestingComponent } from './testing/testing.component';
import { Problem1Component } from './problem1/problem1.component';
import { ArrayService } from './array.service';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { GreenBackgroundDirective } from './green-background.directive';
import { PearComponent } from './pear/pear.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    TestingComponent,
    Problem1Component,
    TitleCasePipe,
    GreenBackgroundDirective,
    PearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiCallService, ArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
