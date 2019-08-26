import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [];
const appRoutes: Routes = [
  { path: 'features', component: FeaturesComponent },
  { path: 'resources',        component: ResourcesComponent },
  { path: 'events',        component: EventsComponent },
  { path: '',   redirectTo: '/features', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
