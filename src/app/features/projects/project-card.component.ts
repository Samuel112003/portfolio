import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="card">
      <div class="card-header">
        <h2>{{ project.title }}</h2>

        @if (project.gitRepoUrl) {
          <a
            class="git-btn"
            [href]="project.gitRepoUrl"
            target="_blank"
            rel="noopener"
            aria-label="GitHub repository"
          >
            <span class="icon">↗</span>
            Code
          </a>
        }
      </div>

      <p class="context">{{ project.context }}</p>
      <p>{{ project.description }}</p>

      <h4>Technologies</h4>
      <ul>
        @for (tech of project.technologies; track tech) {
          <li>{{ tech }}</li>
        }
      </ul>

      <h4>Highlights</h4>
      <ul>
        @for (item of project.highlights; track item) {
          <li>{{ item }}</li>
        }
      </ul>

      @if (project.hasDetails) {
        <a
          class="details-link"
          [routerLink]="['/projects', project.id]"
        >
          View case study →
        </a>
      }
    </article>
  `,
  styles: [
    `
    .card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
      border: 1px solid #e0e0e0;
    }

    h2 {
      margin-top: 0;
    }

    .context {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #777;
      margin-bottom: 1rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .git-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;

      font-size: 0.75rem;
      font-weight: 600;

      padding: 0.45rem 0.7rem;
      border-radius: 999px;

      background: #111;
      color: white;
      text-decoration: none;

      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .git-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .icon {
      font-size: 0.8rem;
      opacity: 0.9;
    }

    .details-link {
      display: inline-block;
      margin-top: 1rem;
      color: #007bff;
      text-decoration: none;
    }

    .details-link:hover {
      text-decoration: underline;
    }
    `
  ]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
