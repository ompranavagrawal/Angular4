import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { EventsComponent } from './events/events.component';
import { ResourcesComponent } from './resources/resources.component';

const appRoutes: Routes = [
  { path: 'features', component: FeaturesComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'events', component: EventsComponent },
  { path: '',   redirectTo: '/features', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    EventsComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
