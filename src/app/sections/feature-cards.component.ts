import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  template: `
    <section class="section-space">
      <div class="container feature-grid">
        @for (card of cards; track card.title) {
          <article class="feature-card">
            <div class="feature-card__image" [style.background-image]="card.image"></div>
            <div class="feature-card__body">
              <p class="section-pretitle">{{ card.pretitle }}</p>
              <h2>{{ card.title }}</h2>
              <p>{{ card.body }}</p>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .feature-grid {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .feature-card {
      background: #fff;
      box-shadow: 0 30px 80px rgba(15, 11, 22, 0.08);
    }

    .feature-card__image {
      background-position: center;
      background-size: cover;
      min-height: 346px;
    }

    .feature-card__body {
      padding: 28px 26px 30px;
    }

    h2 {
      font-size: 1.55rem;
      line-height: 1.15;
      margin: 12px 0 10px;
    }

    p:last-child {
      color: var(--color-muted);
      line-height: 1.7;
      margin: 0;
    }

    @media (max-width: 900px) {
      .feature-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FeatureCardsComponent {
  protected readonly cards = [
    {
      pretitle: 'Cloud services',
      title: 'Flexible infrastructure for growing teams',
      body: 'Deploy dependable systems and scale with a modern cloud stack that stays easy to manage.',
      image: "url('https://www.figma.com/api/mcp/asset/53f3ade2-dbec-432f-83d2-7e769d28e6db')"
    },
    {
      pretitle: 'Security first',
      title: 'Better control for business-critical platforms',
      body: 'Strengthen visibility, automate checks and keep every workflow protected by default.',
      image: "url('https://www.figma.com/api/mcp/asset/88a744f8-c6cd-4617-be6c-0a5969a416da')"
    },
    {
      pretitle: 'Optimization',
      title: 'Fast support for complex technology operations',
      body: 'We connect planning, support and performance tuning into one streamlined delivery model.',
      image: "url('https://www.figma.com/api/mcp/asset/e8b3de02-2ef9-4b34-99a2-77ee2939829e')"
    }
  ];
}
