import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-solution',
  standalone: true,
  template: `
    <section class="tech-band">
      <div class="tech-band__cta container">
        <div>
          <p class="tech-band__mini">Trusted source in IT services</p>
        </div>
        <div class="tech-band__phone">
          <span>Have any question?</span>
          <strong>Free +98 (000)-9850</strong>
        </div>
      </div>

      <div class="tech-band__body">
        <div class="tech-band__media"></div>
        <div class="tech-band__copy">
          <p class="section-pretitle section-pretitle--icon">Technology solution</p>
          <h2 class="section-title section-title--light">Helping Businesses Around The World</h2>
          <p class="tech-band__lead">
            Lorem ipsum is simply free text dolor sit am adipi we help you ensure everyone.
          </p>

          <div class="tech-band__features">
            @for (feature of features; track feature.title) {
              <article class="tech-band__feature">
                <div class="tech-band__arrow">→</div>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.body }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tech-band {
      background: var(--color-panel);
      color: #fff;
      margin-top: 90px;
      position: relative;
    }

    .tech-band__cta {
      align-items: center;
      background: #fff;
      color: var(--color-ink);
      display: flex;
      justify-content: space-between;
      margin-top: -88px;
      padding: 36px 48px;
      position: relative;
      z-index: 2;
    }

    .tech-band__mini {
      font-size: 2rem;
      margin: 0;
    }

    .tech-band__phone {
      display: grid;
      gap: 2px;
      text-align: right;
    }

    .tech-band__phone span {
      color: var(--color-muted);
      font-size: 0.95rem;
    }

    .tech-band__phone strong {
      font-size: 1.9rem;
    }

    .tech-band__body {
      display: grid;
      grid-template-columns: minmax(320px, 46%) minmax(0, 1fr);
    }

    .tech-band__media {
      background-image: url('https://www.figma.com/api/mcp/asset/e8b3de02-2ef9-4b34-99a2-77ee2939829e');
      background-position: center;
      background-size: cover;
      min-height: 813px;
    }

    .tech-band__copy {
      padding: 200px 9vw 120px 7vw;
    }

    .tech-band__lead {
      color: var(--color-accent);
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.7;
      margin: 26px 0 38px;
      max-width: 520px;
    }

    .tech-band__features {
      display: grid;
      gap: 48px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 560px;
    }

    .tech-band__feature {
      border-top: 1px solid rgba(255, 255, 255, 0.22);
      padding-top: 16px;
    }

    .tech-band__arrow {
      color: var(--color-primary);
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 18px;
    }

    .tech-band__feature h3 {
      font-size: 1.55rem;
      margin: 0 0 10px;
    }

    .tech-band__feature p {
      color: rgba(255, 255, 255, 0.74);
      line-height: 1.7;
      margin: 0;
    }

    @media (max-width: 960px) {
      .tech-band__cta,
      .tech-band__body,
      .tech-band__features {
        grid-template-columns: 1fr;
      }

      .tech-band__cta {
        display: grid;
        gap: 16px;
      }

      .tech-band__phone {
        text-align: left;
      }

      .tech-band__copy {
        padding: 60px 24px;
      }
    }
  `]
})
export class TechnologySolutionComponent {
  protected readonly features = [
    {
      title: 'Data protection',
      body: 'Lorem ipsum dolor sit amet consectetur notted.'
    },
    {
      title: 'Optimize IT system',
      body: 'Lorem ipsum dolor sit amet consectetur notted.'
    }
  ];
}
