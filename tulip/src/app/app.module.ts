import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsDialogComponent } from './project-details-dialog/project-details-dialog.component';
import { ContactComponent } from './contact/contact.component';
import { DbdiagComponent } from './dbdiag/dbdiag.component';
import { DevOpsPresComponent } from './dev-ops-pres/dev-ops-pres.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectListComponent,
    ProjectDetailsDialogComponent,
    ContactComponent,
    DbdiagComponent,
    DevOpsPresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
