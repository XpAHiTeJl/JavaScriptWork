import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { CarsComponent } from './cars/cars.component';
import { MotocikleComponent } from './motocikle/motocikle.component';

const routes: Routes = [
  {
    path: 'vehicles/cars',
    component: CarsComponent,
  },
  {
    path: 'vehicles/motocikle',
    component: MotocikleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
>>>>>>> 6cb6f53 (lesson)
