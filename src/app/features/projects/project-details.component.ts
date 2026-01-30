import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../core/models/project.model';
import { PROJECTS } from './projects.data';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section
      class="details"
      [class.professional]="project()?.context === 'professional'"
      [class.academic]="project()?.context === 'academic'"
      *ngIf="project() as p"
    >
      <a routerLink="/projects" class="back">
        ← Back to projects
      </a>

      <div class="hero">
        <p class="tag">
            {{ p.context === 'professional'
            ? 'Professional Case Study'
            : 'Academic Project' }}
        </p>
        <h1>{{ p.title }}</h1>
      </div>

      

      <p class="description">{{ p.description }}</p>

      @if (p.companyUrl) {
        <a
          class="company-btn"
          [href]="p.companyUrl"
          target="_blank"
          rel="noopener"
        >
          Company website
        </a>
      }

      @if (p.detailedSections) {
        <section class="sections">
          @for (section of p.detailedSections; track section.title) {
            <div class="block">
              <h2>
                @if (section.icon) {
                  <span class="icon">{{ section.icon }}</span>
                }
                {{ section.title }}
              </h2>
              @for (line of section.content; track line) {
                <p>{{ line }}</p>
              }
            </div>
          }
        </section>
      }
    </section>
  `,
  styles: [`
    .details {
      max-width: 900px;
      margin: auto;
      padding-left: 1.5rem;
      border-left: 4px solid transparent;
    }

    .details.professional {
      border-left-color: #1f2937;
    }

    .details.academic {
      border-left-color: #2563eb;
    }

    .back {
      display: inline-block;
      margin-bottom: 2rem;
      color: #007bff;
      text-decoration: none;
    }

    .back:hover {
      text-decoration: underline;
    }

    .hero {
      margin-bottom: 3rem;
    }

    .tag {
      display: inline-block;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      background: #e5e7eb;
      margin-bottom: 0.5rem;
    }

    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }

    .company-btn {
      display: inline-block;
      margin: 2rem 0;
      padding: 0.75rem 1.4rem;
      border-radius: 8px;
      background: #111;
      color: white;
      text-decoration: none;
      font-weight: 500;
    }

    .company-btn:hover {
      background: #333;
    }

    .sections {
      margin-top: 2rem;
    }

    .block {
      background: #fafafa;
      padding: 1.5rem 1.8rem;
      border-radius: 10px;
      margin-bottom: 2.5rem;
    }

    .block h2 {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .icon {
      font-size: 1.1rem;
    }

    .block p {
      margin-bottom: 0.6rem;
      color: #333;
      line-height: 1.6;
    }
  `]
})
export class ProjectDetailsComponent {
  project = computed<Project | undefined>(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return PROJECTS.find(p => String(p.id) === String(id));
  });

  constructor(private route: ActivatedRoute) {}
}