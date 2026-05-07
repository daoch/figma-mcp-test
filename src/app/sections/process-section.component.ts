import { Component } from '@angular/core';

@Component({
  selector: 'app-process-section',
  standalone: true,
  template: `
    <section class="process section-space">
      <div class="container process__grid">
        <div class="process__visual">
          <div class="process__image"></div>
          <div class="process__note">
            <p>At Mi Mauris Vestibulum Eu Tellus Tristique Sapien</p>
            <a href="#">Learn more <span>→</span></a>
          </div>
        </div>

        <div class="process__copy">
          <p class="section-pretitle section-pretitle--icon">Stay protected</p>
          <h2 class="section-title">Tech Services For Your Business Ideas</h2>
          <p class="section-body">
            Donec suscipit ante ipsum. Donec convallis quam at tortor hendrerit, ut elementum augue suscipit. Morbi tincidunt risus vel neque convallis pretium non nec justo.
          </p>

          @for (item of bullets; track item.title) {
            <div class="process__bullet">
              <span class="process__check">✓</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.body }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .process__grid {
      align-items: center;
      display: grid;
      gap: 96px;
      grid-template-columns: minmax(0, 500px) minmax(0, 1fr);
    }

    .process__visual {
      min-height: 426px;
      position: relative;
    }

    .process__image {
      background-image: url('https://www.figma.com/api/mcp/asset/88a744f8-c6cd-4617-be6c-0a5969a416da');
      background-position: center;
      background-size: cover;
      height: 100%;
      min-height: 426px;
    }

    .process__note {
      background: var(--color-primary);
      color: #fff;
      padding: 34px 34px 30px;
      position: absolute;
      right: -42px;
      top: 50%;
      transform: translateY(-50%);
      width: 206px;
    }

    .process__note p {
      font-size: 1.8rem;
      line-height: 1.35;
      margin: 0 0 24px;
    }

    .process__note a {
      color: #fff;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .process__bullet {
      align-items: start;
      display: flex;
      gap: 14px;
      margin-top: 22px;
    }

    .process__check {
      align-items: center;
      border: 4px solid var(--color-primary);
      border-radius: 50%;
      color: var(--color-primary);
      display: inline-flex;
      flex: 0 0 auto;
      font-size: 1.2rem;
      font-weight: 800;
      height: 46px;
      justify-content: center;
      width: 46px;
    }

    h3 {
      font-size: 1.55rem;
      margin: 0 0 8px;
    }

    .process__bullet p {
      color: var(--color-muted);
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 960px) {
      .process__grid {
        grid-template-columns: 1fr;
      }

      .process__note {
        position: relative;
        right: auto;
        top: auto;
        transform: none;
        width: min(100%, 360px);
      }
    }
  `]
})
export class ProcessSectionComponent {
  protected readonly bullets = [
    {
      title: 'We deliver perfect solutions',
      body: 'Lorem Ipsum nibh vel velit auctor aliqu aenean sollic.'
    },
    {
      title: 'We work with global brands',
      body: 'Lorem Ipsum nibh vel velit auctor aliqu aenean sollic'
    }
  ];
}
