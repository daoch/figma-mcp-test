import { Component } from '@angular/core';
import { AboutOverviewComponent } from './sections/about-overview.component';
import { BlogCardsComponent } from './sections/blog-cards.component';
import { BrandsStripComponent } from './sections/brands-strip.component';
import { FeatureCardsComponent } from './sections/feature-cards.component';
import { HeroSectionComponent } from './sections/hero-section.component';
import { PartnersStripComponent } from './sections/partners-strip.component';
import { ProcessSectionComponent } from './sections/process-section.component';
import { ServicesDarkComponent } from './sections/services-dark.component';
import { ShowcaseSectionComponent } from './sections/showcase-section.component';
import { SiteFooterComponent } from './sections/site-footer.component';
import { TechnologySolutionComponent } from './sections/technology-solution.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroSectionComponent,
    BrandsStripComponent,
    FeatureCardsComponent,
    AboutOverviewComponent,
    ServicesDarkComponent,
    ProcessSectionComponent,
    ShowcaseSectionComponent,
    TechnologySolutionComponent,
    BlogCardsComponent,
    PartnersStripComponent,
    SiteFooterComponent
  ],
  template: `
    <main class="landing-page">
      <app-hero-section />
      <app-brands-strip />
      <app-feature-cards />
      <app-about-overview />
      <app-services-dark />
      <app-process-section />
      <app-showcase-section />
      <app-technology-solution />
      <app-blog-cards />
      <app-partners-strip />
      <app-site-footer />
    </main>
  `,
  styles: [`
    :host {
      display: block;
    }

    .landing-page {
      background:
        radial-gradient(circle at top left, rgba(105, 82, 229, 0.05), transparent 18%),
        linear-gradient(180deg, #ffffff 0%, #faf8ff 100%);
      min-height: 100vh;
      overflow-x: clip;
    }
  `]
})
export class App {}
