import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__cta">
          <div class="site-footer__cta-copy">
            <div class="site-footer__cta-icon"></div>
            <p>Helping you overcome your technology challenges</p>
          </div>
          <a class="primary-button" href="#">Contact us now</a>
        </div>

        <div class="site-footer__main">
          <div class="site-footer__brand">
            <a class="brand" href="#" aria-label="notech home">
              <span class="brand__glow"></span>
              <span class="brand__text">notech</span>
            </a>
            <p>
              Subscribe for our upcoming latest articles and news resources
            </p>
            <label class="site-footer__input">
              <input type="email" placeholder="Email address" />
              <button type="button" aria-label="Submit">➜</button>
            </label>
          </div>

          <div class="site-footer__links">
            <h3>Links</h3>
            <a href="#">About us</a>
            <a href="#">Meet our team</a>
            <a href="#">News &amp; media</a>
            <a href="#">Our projects</a>
            <a href="#">Contacts</a>
          </div>

          <div class="site-footer__contact">
            <h3>Contact</h3>
            <p>+98 (000)-9850</p>
            <p>needhelp@company.com</p>
            <p>66 broklyn golden street line new york</p>
          </div>

          <div class="site-footer__social">
            <a href="#" aria-label="Twitter">t</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Pinterest">p</a>
            <a href="#" aria-label="Instagram">i</a>
          </div>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>© All Copyright 2022 by Layerdrops.com</p>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: var(--color-panel);
      color: #fff;
      padding-top: 120px;
    }

    .site-footer__cta {
      align-items: center;
      border: 1px solid rgba(247, 247, 249, 0.4);
      display: flex;
      justify-content: space-between;
      margin-bottom: 80px;
      padding: 36px 40px;
    }

    .site-footer__cta-copy {
      align-items: center;
      display: flex;
      gap: 24px;
    }

    .site-footer__cta-copy p {
      font-size: 1.6rem;
      margin: 0;
    }

    .site-footer__cta-icon {
      background:
        radial-gradient(circle at 30% 30%, #42e5ad 0, transparent 34%),
        radial-gradient(circle at 65% 40%, #6952e5 0, transparent 42%),
        #0d0a12;
      border-radius: 14px;
      height: 65px;
      width: 65px;
    }

    .site-footer__main {
      display: grid;
      gap: 48px;
      grid-template-columns: minmax(280px, 370px) repeat(3, minmax(0, 1fr));
      padding-bottom: 80px;
    }

    .site-footer__brand p,
    .site-footer__contact p,
    .site-footer__links a {
      color: rgba(255, 255, 255, 0.76);
      line-height: 1.7;
    }

    .site-footer__brand p {
      margin: 24px 0 22px;
      max-width: 320px;
    }

    .site-footer__input {
      align-items: center;
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding: 12px 14px 12px 24px;
    }

    input {
      background: transparent;
      border: 0;
      color: var(--color-ink);
      flex: 1;
      outline: none;
    }

    .site-footer__input button {
      background: var(--color-panel);
      border: 0;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      height: 36px;
      width: 36px;
    }

    .site-footer__links,
    .site-footer__contact {
      display: grid;
      gap: 10px;
      align-content: start;
    }

    .site-footer__links h3,
    .site-footer__contact h3 {
      margin: 0 0 12px;
    }

    .site-footer__social {
      align-items: start;
      display: flex;
      gap: 16px;
      justify-content: end;
    }

    .site-footer__social a {
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 999px;
      color: #fff;
      display: inline-flex;
      height: 36px;
      justify-content: center;
      text-transform: uppercase;
      width: 36px;
    }

    .site-footer__bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.65);
      padding: 28px 16px;
      text-align: center;
    }

    .site-footer__bottom p {
      margin: 0;
    }

    @media (max-width: 960px) {
      .site-footer__cta,
      .site-footer__main {
        grid-template-columns: 1fr;
      }

      .site-footer__cta {
        align-items: start;
        flex-direction: column;
        gap: 18px;
      }

      .site-footer__social {
        justify-content: start;
      }
    }
  `]
})
export class SiteFooterComponent {}
