import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargesComponent } from './components/charges/charges.component';
import { MealsComponent } from './components/meals/meals.component';

const routes: Routes = [
  { path: '', component: MealsComponent},
  { path: 'charges', component: ChargesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MealsComponent, ChargesComponent] 
