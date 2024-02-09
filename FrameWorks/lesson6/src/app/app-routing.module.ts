import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: 'species',
    component: SpeciesComponent,
  },
  {
    path: 'starships',
    component: StarshipsComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  },

  {
    path: 'films',
    component: FilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
