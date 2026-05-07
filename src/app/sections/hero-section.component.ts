import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero__topbar">
        <div class="topline container-wide">
          <div class="topline__left">
            <span>Welcome to notech agency</span>
            <span>needhelp@company.com</span>
          </div>
          <div class="topline__right">
            <span>Mon - Sat: 8.00 to 6.00</span>
            <span>12 route, New York</span>
          </div>
        </div>
      </div>

      <div class="hero__nav container-wide">
        <a class="brand" href="#" aria-label="notech home">
          <span class="brand__glow"></span>
          <span class="brand__text">notech</span>
        </a>

        <nav class="hero__menu" aria-label="Primary">
          @for (item of menu; track item) {
            <a href="#">{{ item }}</a>
          }
        </nav>

        <div class="hero__actions">
          <div class="hero__contact">
            <span class="hero__contact-label">Call any time</span>
            <strong>+98 (000) - 9630</strong>
          </div>
          <button class="hero__search" type="button" aria-label="Search"></button>
        </div>
      </div>

      <div class="hero__stage">
        <div class="hero__overlay"></div>
        <div class="hero__content container">
          <p class="hero__eyebrow">IT SOFTWARE SOLUTION &amp;</p>
          <h1>technology</h1>
          <div class="hero__buttons">
            <a class="primary-button" href="#">Discover more</a>
            <a class="primary-button primary-button--ghost" href="#">Discover more</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .hero {
      background: #1b1525;
      color: #fff;
    }

    .hero__topbar {
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      color: rgba(255, 255, 255, 0.82);
      font-size: 0.9rem;
      letter-spacing: 0.02em;
    }

    .topline,
    .hero__nav {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    .topline {
      gap: 24px;
      min-height: 42px;
    }

    .topline__left,
    .topline__right {
      display: flex;
      gap: 40px;
    }

    .hero__nav {
      min-height: 122px;
    }

    .brand {
      align-items: center;
      display: inline-flex;
      gap: 10px;
      position: relative;
    }

    .brand__glow {
      background:
        radial-gradient(circle at 30% 30%, #42e5ad 0, transparent 34%),
        radial-gradient(circle at 65% 40%, #6952e5 0, transparent 42%),
        #0d0a12;
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
      display: block;
      height: 38px;
      width: 38px;
    }

    .brand__text {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.04em;
    }

    .hero__menu {
      display: flex;
      gap: 30px;
    }

    .hero__menu a {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
    }

    .hero__actions {
      align-items: center;
      display: flex;
      gap: 28px;
    }

    .hero__contact {
      display: grid;
      gap: 3px;
      text-align: right;
    }

    .hero__contact-label {
      color: var(--text-soft);
      font-size: 0.78rem;
      text-transform: uppercase;
    }

    .hero__contact strong {
      font-size: 1rem;
    }

    .hero__search {
      background: transparent;
      border: 0;
      border-radius: 999px;
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.65);
      cursor: pointer;
      height: 42px;
      position: relative;
      width: 42px;
    }

    .hero__search::before,
    .hero__search::after {
      content: '';
      position: absolute;
    }

    .hero__search::before {
      border: 2px solid #fff;
      border-radius: 50%;
      height: 12px;
      left: 11px;
      top: 10px;
      width: 12px;
    }

    .hero__search::after {
      background: #fff;
      border-radius: 3px;
      height: 2px;
      right: 10px;
      top: 24px;
      transform: rotate(45deg);
      width: 8px;
    }

    .hero__stage {
      background-image: url('https://www.figma.com/api/mcp/asset/8915ef04-52f9-4e35-b6c5-d122e54b0922');
      background-position: center;
      background-size: cover;
      min-height: 777px;
      position: relative;
    }

    .hero__overlay {
      background: rgba(27, 21, 37, 0.78);
      inset: 0;
      position: absolute;
    }

    .hero__content {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 777px;
      position: relative;
      text-align: center;
      z-index: 1;
    }

    .hero__eyebrow {
      font-size: clamp(1.5rem, 2vw, 2.25rem);
      margin: 0 0 8px;
    }

    h1 {
      font-size: clamp(4rem, 11vw, 9.4rem);
      letter-spacing: -0.06em;
      line-height: 0.92;
      margin: 0;
      text-transform: lowercase;
    }

    .hero__buttons {
      display: flex;
      gap: 14px;
      margin-top: 34px;
    }

    @media (max-width: 1100px) {
      .hero__menu,
      .topline__right,
      .hero__contact {
        display: none;
      }
    }

    @media (max-width: 720px) {
      .topline,
      .topline__left,
      .hero__nav,
      .hero__buttons {
        flex-direction: column;
      }

      .hero__nav,
      .topline {
        padding-block: 14px;
      }

      .hero__stage,
      .hero__content {
        min-height: 560px;
      }
    }
  `]
})
export class HeroSectionComponent {
  protected readonly menu = ['Home', 'Company', 'Services', 'Pages', 'Blog', 'Contact'];
}
