import { Component } from '@angular/core';
import { MeliFooterComponent } from './components/meli-footer.component';
import { MeliHeaderComponent } from './components/header/meli-header.component';
import { ProductPageShellComponent } from './sections/product-page-shell/product-page-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MeliHeaderComponent, ProductPageShellComponent, MeliFooterComponent],
  template: `
    <div class="meli-app-shell">
      <app-meli-header />
      <app-product-page-shell />
      <app-meli-footer />
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .meli-app-shell {
      background: var(--meli-page-bg);
      min-height: 100vh;
    }
  `]
})
export class App {}
