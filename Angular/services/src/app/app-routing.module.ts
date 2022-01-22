import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { Problem1Component } from './problem1/problem1.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: 'testing', component: TestingComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'problem', component: Problem1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
