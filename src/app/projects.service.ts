/**
 * Title:
 * Author: Patrick Cuauro
 * Modified by: Patrick Cuauro
 * Date:
 * Description: 
 */
import { Injectable } from '@angular/core';
import { IProject } from './projects.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Array<IProject>;
  constructor() {
    this.projects = [
      {
      title: 'WEB 231',
      description: 'Landing Page - Enterprise JavaScript I',
      },
      {
        title: 'WEB 330',
        description: 'Landing Page - Enterprise JavaScript II',
      },
      {
        title: 'WEB 420',
        description: 'Capstone Project Page - API Unit Testing',
      },
      {
        title: 'WEB 425',
        description: 'Composer App - Angular with TypeScript',
      },
      {
        title: 'WEB 425',
        description: 'GPA Calculator App - Angular with TypeScript',
      },
      {
        title: 'WEB 425',
        description: 'In-N-Out Books App - Angular with TypeScript',
      },
      {
        title: 'WEB 450',
        description: 'Node Bucket App Project',
      },
      {
        title: 'WEB 450',
        description: 'Bob\'s Computer Repair Shop Project',
      }
    ];
   }
   getProjects(): Observable<IProject[]> {
    return of(this.projects);
  }
  getProject(title: string): IProject {
    for (let Project of this.projects) {
      if (Project.title === title) {
        return Project;
      }
    }
    return {} as IProject;
  }
}
