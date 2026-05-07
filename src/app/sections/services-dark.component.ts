import { Component } from '@angular/core';

@Component({
  selector: 'app-services-dark',
  standalone: true,
  template: `
    <section class="services-dark section-space">
      <div class="services-dark__bg"></div>
      <div class="container services-dark__content">
        <div class="services-dark__heading">
          <div>
            <p class="section-pretitle section-pretitle--icon">What we’re offering</p>
            <h2 class="section-title section-title--light">Services We’re Providing To Our Customers</h2>
          </div>
          <p class="section-body section-body--light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        <div class="services-dark__grid">
          @for (service of services; track service.title) {
            <article class="service-card" [class.service-card--active]="service.active">
              <div class="service-card__icon">→</div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.body }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-dark {
      overflow: hidden;
      position: relative;
    }

    .services-dark__bg {
      background:
        radial-gradient(circle at 8% 10%, rgba(105, 82, 229, 0.25), transparent 20%),
        radial-gradient(circle at 26% 12%, rgba(66, 229, 173, 0.08), transparent 18%),
        var(--color-panel);
      inset: 0;
      position: absolute;
    }

    .services-dark__content {
      position: relative;
      z-index: 1;
    }

    .services-dark__heading {
      align-items: start;
      display: grid;
      gap: 60px;
      grid-template-columns: minmax(0, 1fr) minmax(320px, 470px);
      margin-bottom: 48px;
    }

    .services-dark__grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    .service-card {
      border: 1px solid rgba(247, 247, 249, 0.16);
      color: #fff;
      min-height: 273px;
      padding: 36px 18px 24px;
      text-align: center;
    }

    .service-card--active {
      background: #fff;
      color: var(--color-ink);
    }

    .service-card__icon {
      color: var(--color-primary);
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 28px;
    }

    h3 {
      font-size: 1.15rem;
      margin: 0 0 12px;
    }

    p {
      color: inherit;
      line-height: 1.55;
      margin: 0;
      opacity: 0.82;
    }

    @media (max-width: 1200px) {
      .services-dark__grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 900px) {
      .services-dark__heading,
      .services-dark__grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesDarkComponent {
  protected readonly services = [
    { title: 'Manage IT Service', body: 'There are many lipsum of in pass sages of available some.', active: false },
    { title: 'Cloud Migration', body: 'Reliable transition plans with zero-downtime thinking built in.', active: false },
    { title: 'Manage IT Service', body: 'There are many lipsum of in pass sages of available some.', active: true },
    { title: 'Security Audits', body: 'Practical reviews that help your team fix the right issues first.', active: false },
    { title: 'Support Desk', body: 'Fast, human support coverage across your core business systems.', active: false }
  ];
}
