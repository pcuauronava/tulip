import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactComponent } from './contact/contact.component';
import { DbdiagComponent } from './dbdiag/dbdiag.component';
import { DevOpsPresComponent } from './dev-ops-pres/dev-ops-pres.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'project-list',
    component: ProjectListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'dbdiag',
    component: DbdiagComponent
  },
  {
    path: 'dev-ops-pres',
    component: DevOpsPresComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
