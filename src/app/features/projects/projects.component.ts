import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project.model';
import { ProjectCardComponent } from './project-card.component';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="projects">
      <h1>Projects</h1>

      @for (project of projects(); track project.id) {
        <app-project-card [project]="project" />
      }
    </section>
  `,
  styles: [`
    .projects {
      max-width: 900px;
      margin: auto;
      padding: 2rem;
    }
  `]
})
export class ProjectsComponent {
  projects = signal<Project[]>(PROJECTS);
}
