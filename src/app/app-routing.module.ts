import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path : "", component:CarComponent},
  {path : "cars/filters/brand/:brandid", component:CarComponent},
  {path : "cars/filters/color/:colorid", component:CarComponent},
  {path : "cars/filters/colorandbrand/:fcolorid/:fbrandid", component:CarComponent},
  {path : "cars/getcardetails/:carid", component:CarDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
