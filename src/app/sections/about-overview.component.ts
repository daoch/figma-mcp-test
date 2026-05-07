import { Component } from '@angular/core';

@Component({
  selector: 'app-about-overview',
  standalone: true,
  template: `
    <section class="section-space">
      <div class="container split">
        <div class="split__media">
          <div class="split__stat">
            <strong>6860+</strong>
            <span>Worldwide Clients</span>
          </div>
          <div class="split__image split__image--main"></div>
          <div class="split__image split__image--small"></div>
        </div>

        <div class="split__copy">
          <p class="section-pretitle section-pretitle--icon">Get to know us</p>
          <h2 class="section-title">Easy Solutions For Your IT Problems</h2>
          <p class="section-body">
            Lorem ipsum dolor sit amet, consectetur nod adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.
          </p>
          <ul class="checks">
            <li>Donec scelerisque egestas purus eget fringilla</li>
            <li>Mauris imperdiet non ligula et lobortis.</li>
          </ul>
          <p class="split__quote">Stop worrying, we take care of your technology problems.</p>
          <a class="primary-button" href="#">Discover more</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .split {
      align-items: center;
      display: grid;
      gap: 72px;
      grid-template-columns: minmax(0, 570px) minmax(0, 1fr);
    }

    .split__media {
      min-height: 560px;
      position: relative;
    }

    .split__image {
      background-position: center;
      background-size: cover;
      position: absolute;
    }

    .split__image--main {
      background-image: url('https://www.figma.com/api/mcp/asset/53f3ade2-dbec-432f-83d2-7e769d28e6db');
      height: 466px;
      left: 0;
      top: 0;
      width: 470px;
    }

    .split__image--small {
      background-image: url('https://www.figma.com/api/mcp/asset/c7a5a52e-e64c-4ce3-bb2c-d359f12e935c');
      bottom: 0;
      height: 279px;
      right: 0;
      width: 412px;
    }

    .split__stat {
      background: var(--color-primary);
      color: #fff;
      left: -70px;
      padding: 26px 40px;
      position: absolute;
      top: 74px;
      z-index: 1;
    }

    .split__stat strong {
      display: block;
      font-size: 2rem;
      margin-bottom: 6px;
    }

    .split__copy {
      max-width: 620px;
    }

    .checks {
      color: var(--color-muted);
      display: grid;
      gap: 14px;
      list-style: none;
      margin: 26px 0 34px;
      padding: 0;
    }

    .checks li::before {
      color: var(--color-primary);
      content: '◉';
      margin-right: 10px;
    }

    .split__quote {
      color: var(--color-ink);
      font-size: 1.7rem;
      font-weight: 800;
      line-height: 1.2;
      margin: 0 0 30px;
      max-width: 540px;
    }

    @media (max-width: 960px) {
      .split {
        grid-template-columns: 1fr;
      }

      .split__stat {
        left: 0;
      }
    }

    @media (max-width: 720px) {
      .split__media {
        min-height: 620px;
      }

      .split__image--main,
      .split__image--small {
        width: 100%;
      }

      .split__image--small {
        left: 0;
      }
    }
  `]
})
export class AboutOverviewComponent {}
