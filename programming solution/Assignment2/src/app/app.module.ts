import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { PROJECTSComponent } from './projects/projects.component';
import { SERVICESComponent } from './services/services.component';
import { CONTACTComponent } from './contact/contact.component';
import { NoneComponent } from './none/none.component';

const appRoutes: Routes = [
  { path: 'home', component: HOMEComponent },
  { path: 'projects', component: PROJECTSComponent },
  { path: 'services', component: SERVICESComponent },
  { path: 'contact', component: CONTACTComponent },
  { path: 'none', component: NoneComponent},
  { path: '',   redirectTo: '/none', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    PROJECTSComponent,
    SERVICESComponent,
    CONTACTComponent,
    NoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
