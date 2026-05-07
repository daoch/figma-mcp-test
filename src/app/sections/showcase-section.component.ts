import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-section',
  standalone: true,
  template: `
    <section class="showcase section-space">
      <div class="container">
        <div class="testimonial">
          <div class="testimonial__avatar"></div>
          <div class="testimonial__body">
            <p class="testimonial__quote">
              “Notero gave us a practical path through messy technology problems. The result felt senior, reliable and unusually fast from kickoff to delivery.”
            </p>
            <div class="testimonial__footer">
              <div>
                <h3>John Smith</h3>
                <p>Client of notech company</p>
              </div>
              <button type="button" aria-label="Next testimonial">→</button>
            </div>
          </div>
        </div>

        <div class="showcase__divider"></div>

        <div class="showcase__projects">
          <div class="showcase__header">
            <p class="section-pretitle">Recently completed work</p>
            <h2 class="section-title">Improve &amp; Enhance The Tech Projects</h2>
          </div>
          <div class="project-grid">
            @for (project of projects; track project.title) {
              <article class="project-card">
                <div class="project-card__image" [style.background-image]="project.image"></div>
                <div class="project-card__body">
                  <p>{{ project.category }}</p>
                  <h3>{{ project.title }}</h3>
                </div>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonial {
      display: grid;
      gap: 48px;
      grid-template-columns: 170px minmax(0, 1fr);
    }

    .testimonial__avatar {
      background-image: url('https://www.figma.com/api/mcp/asset/c7a5a52e-e64c-4ce3-bb2c-d359f12e935c');
      background-position: center;
      background-size: cover;
      border-radius: 999px;
      height: 170px;
      width: 170px;
    }

    .testimonial__quote {
      font-size: clamp(1.6rem, 3vw, 3rem);
      letter-spacing: -0.03em;
      line-height: 1.3;
      margin: 0;
    }

    .testimonial__footer {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-top: 28px;
    }

    .testimonial__footer h3 {
      margin: 0 0 4px;
    }

    .testimonial__footer p {
      color: var(--color-muted);
      margin: 0;
    }

    .testimonial__footer button {
      background: var(--color-panel);
      border: 0;
      color: #fff;
      cursor: pointer;
      font-size: 1.4rem;
      height: 68px;
      width: 72px;
    }

    .showcase__divider {
      background: rgba(15, 11, 22, 0.12);
      height: 1px;
      margin: 56px 0 72px;
    }

    .showcase__header {
      margin-bottom: 30px;
      text-align: center;
    }

    .project-grid {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .project-card {
      background: #fff;
      box-shadow: 0 24px 70px rgba(15, 11, 22, 0.08);
    }

    .project-card__image {
      background-position: center;
      background-size: cover;
      min-height: 390px;
    }

    .project-card__body {
      padding: 22px 24px 28px;
    }

    .project-card__body p {
      color: var(--color-primary);
      margin: 0 0 8px;
      text-transform: uppercase;
    }

    .project-card__body h3 {
      margin: 0;
    }

    @media (max-width: 960px) {
      .testimonial,
      .project-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ShowcaseSectionComponent {
  protected readonly projects = [
    {
      category: 'UI Strategy',
      title: 'Managed support for enterprise cloud products',
      image: "url('https://www.figma.com/api/mcp/asset/53f3ade2-dbec-432f-83d2-7e769d28e6db')"
    },
    {
      category: 'Security',
      title: 'Technology resilience planning for finance teams',
      image: "url('https://www.figma.com/api/mcp/asset/88a744f8-c6cd-4617-be6c-0a5969a416da')"
    },
    {
      category: 'Operations',
      title: 'Unified tooling across distributed delivery teams',
      image: "url('https://www.figma.com/api/mcp/asset/e8b3de02-2ef9-4b34-99a2-77ee2939829e')"
    }
  ];
}
