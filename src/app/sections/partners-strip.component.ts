import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-strip',
  standalone: true,
  template: `
    <section class="partners">
      <div class="container">
        <div class="partners__title">
          <span></span>
          <p>The business partners</p>
          <span></span>
        </div>
        <div class="partners__logos">
          @for (logo of logos; track logo) {
            <div class="partners__logo">{{ logo }}</div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .partners {
      padding: 0 0 120px;
    }

    .partners__title {
      align-items: center;
      display: grid;
      gap: 30px;
      grid-template-columns: 1fr auto 1fr;
      margin-bottom: 80px;
    }

    .partners__title span {
      background: rgba(15, 11, 22, 0.14);
      display: block;
      height: 1px;
    }

    .partners__title p {
      font-size: 1.85rem;
      margin: 0;
    }

    .partners__logos {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    .partners__logo {
      border: 1px solid rgba(15, 11, 22, 0.12);
      color: var(--color-muted);
      font-size: 1.15rem;
      font-weight: 700;
      padding: 24px 12px;
      text-align: center;
    }

    @media (max-width: 900px) {
      .partners__logos {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `]
})
export class PartnersStripComponent {
  protected readonly logos = ['Envato', 'Behance', 'Codecanyon', 'Dribbble', 'Awwwards'];
}
