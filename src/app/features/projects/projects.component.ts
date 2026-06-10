import { Component, computed, signal } from '@angular/core';
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

      <nav class="tabs">
        @for (s of semesters; track s) {
          <button
            class="tab"
            [class.active]="activeSemester() === s"
            (click)="activeSemester.set(s)">
            Semester {{ s }}
          </button>
        }
      </nav>

      <div class="projects-list">
        @for (project of visibleProjects(); track project.id) {
          <app-project-card [project]="project" />
        }
      </div>
    </section>
  `,
  styles: [`
    .projects {
      max-width: 900px;
      margin: auto;
      padding: 2rem;
    }

    .tabs {
      display: flex;
      gap: 0.5rem;
      border-bottom: 2px solid #e0e0e0;
      margin-bottom: 2rem;
    }

    .tab {
      padding: 0.6rem 1.2rem;
      border: none;
      border-bottom: 3px solid transparent;
      background: none;
      font-size: 0.95rem;
      font-weight: 500;
      color: #555;
      cursor: pointer;
      margin-bottom: -2px;
      transition: color 0.15s, border-color 0.15s;
    }

    .tab:hover {
      color: #111;
    }

    .tab.active {
      color: #111;
      border-bottom-color: #111;
    }
  `]
})
export class ProjectsComponent {
  readonly semesters: number[] = [...new Set(PROJECTS.map(p => p.semester))].sort((a, b) => a - b);

  activeSemester = signal<number>(this.semesters[0]);

  visibleProjects = computed<Project[]>(() =>
    PROJECTS.filter(p => p.semester === this.activeSemester())
  );
}
