import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { PROJECTSComponent } from './projects/projects.component';
import { SERVICESComponent } from './services/services.component';
import { CONTACTComponent } from './contact/contact.component';
import { NoneComponent } from './none/none.component';


const routes: Routes = [];
const appRoutes: Routes = [
  { path: 'home', component: HOMEComponent },
  { path: 'projects', component: PROJECTSComponent },
  { path: 'services', component: SERVICESComponent },
  { path: 'contact', component: CONTACTComponent },
  { path: 'none', component: NoneComponent},
  { path: '',   redirectTo: '/none', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
