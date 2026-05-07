import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-strip',
  standalone: true,
  template: `
    <section class="brands-strip">
      <div class="container brands-strip__inner">
        <p>Stop wasting time and money on technology. Explore notech and get best solutions.</p>
      </div>
    </section>
  `,
  styles: [`
    .brands-strip {
      background: #fff;
      padding: 44px 0;
    }

    .brands-strip__inner {
      display: flex;
      justify-content: center;
    }

    p {
      color: var(--color-ink);
      font-size: clamp(1.3rem, 2vw, 1.9rem);
      letter-spacing: -0.03em;
      margin: 0;
      max-width: 760px;
      text-align: center;
    }
  `]
})
export class BrandsStripComponent {}
