import { MatDialogModule } from '@angular/material/dialog';
/**
 * Title: project-list.component.ts
 * Author: Patrick Cuauro
 * Modified by: Patrick Cuauro
 * Date: 09/14/2023
 * Description: Project List Component
 */
import { Component } from '@angular/core';
import { IProject } from '../projects.interface';
import { ProjectsService } from '../projects.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProjectDetailsDialogComponent } from '../project-details-dialog/project-details-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects: Observable<IProject[]>;

  header: Array<string> = ['title', 'description'];
  project: IProject;

  constructor(private ProjectsService: ProjectsService, private dialog: MatDialog) {
    this.projects = this.ProjectsService.getProjects();
   }

  ngOnInit(): void {
  }

  showProjectDetails(isbn: string) {
    this.project = this.ProjectsService.getProject(isbn);

    const dialogRef = this.dialog.open(ProjectDetailsDialogComponent, {
      data: {
        project: this.project
      },
      disableClose: true,
      width: '800px'
    });
    console.log(this.project);  
      
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm'){
          this.project = null;
        }
      });
  }
}