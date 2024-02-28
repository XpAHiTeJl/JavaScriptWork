import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotocikleComponent } from './motocikle/motocikle.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  {
    path: 'vehicles/moto',
    component: MotocikleComponent,
  },
  {
    path: 'vehicles/cars',
    component: CarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
