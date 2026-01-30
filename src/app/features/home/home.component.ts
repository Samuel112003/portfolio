import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="home">
      <p class="name">Samuel Praconté</p>

      <h1>Computer Engineering Student</h1>

      <p class="subtitle">
        Software, game and embedded systems development — from low-level
        programming to user-facing applications.
    </p>


      <div class="cta">
        <a routerLink="/projects" class="primary">View Projects</a>
        <a routerLink="/about" class="secondary">About Me</a>
      </div>

      <div class="highlights">
        <div class="card">
            <h3>Software Engineering</h3>
            <p>Clean architecture, APIs, maintainable and scalable code.</p>
        </div>

        <div class="card">
            <h3>Game Development</h3>
            <p>2D games with Flutter & Flame, interactive systems.</p>
        </div>

        <div class="card">
            <h3>Embedded Systems</h3>
            <p>Low-level programming, sensors, microcontrollers (STM32).</p>
        </div>

        <div class="card">
            <h3>Software Quality</h3>
            <p>Automated testing, code reviews and engineering best practices.</p>
        </div>
      </div>

    </section>
  `,
  styles: [`
    .home {
      max-width: 1000px;
      margin: auto;
      padding-top: 3rem;
    }

    .subtitle {
      font-size: 1.15rem;
      color: #555;
      max-width: 700px;
    }

    .cta {
      margin: 2.5rem 0;
      display: flex;
      gap: 1rem;
    }

    .cta a {
      padding: 0.8rem 1.4rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
    }

    .primary {
      background: #111;
      color: white;
    }

    .secondary {
      border: 1px solid #111;
      color: #111;
    }

    .highlights {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
    }

    .card {
      padding: 1.8rem;
      border-radius: 10px;
      background: white;
      border: 1px solid #e0e0e0;
    }

    .name {
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-size: 0.9rem;
        color: #777;
        margin-bottom: 0.5rem;
        font-weight: 400;
    }

  `]
})
export class HomeComponent {}
