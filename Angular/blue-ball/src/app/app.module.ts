import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';
import { WelcomeTemplateComponent } from './welcome-template/welcome-template.component';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    WelcomeTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
