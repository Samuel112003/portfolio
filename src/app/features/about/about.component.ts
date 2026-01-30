import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about">
      <h1>About Me</h1>

      <p>
        I am a Computer Engineering student currently studying in France,
        with nearly two years of professional experience through internships
        and an apprenticeship.
      </p>

      <p>
        My background combines software development, game development, embedded systems, and
        software quality, with a strong focus on clean code, collaboration
        and real-world impact.
      </p>

      <h2>How I Work</h2>
      <ul>
        <li>Clean and maintainable code (SOLID principles)</li>
        <li>Code reviews and collaborative workflows</li>
        <li>Autonomous but team-oriented mindset</li>
        <li>Strong interest in product and user experience</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>
        I am particularly interested in international opportunities,
        discovering new cultures and working in diverse professional
        environments.
      </p>
    </section>
  `,
  styles: [`
    .about {
      max-width: 900px;
      margin: auto;
    }

    h2 {
      margin-top: 2rem;
    }

    ul {
      padding-left: 1.2rem;
    }
  `]
})
export class AboutComponent {}
