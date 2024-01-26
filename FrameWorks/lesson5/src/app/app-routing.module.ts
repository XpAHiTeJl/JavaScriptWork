import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgersComponent } from './burgers/burgers.component';
import { PizzaComponent } from './pizza/pizza.component';
import { TacoComponent } from './taco/taco.component';
import { FullitemComponent } from './fullitem/fullitem.component';

const routes: Routes = [
  {
    path: 'products',
    component: FullitemComponent,
  },
  {
    path: 'products/burgers',
    component: BurgersComponent,
  },
  {
    path: 'products/pizza',
    component: PizzaComponent,
  },

  {
    path: 'products/tacos',
    component: TacoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
