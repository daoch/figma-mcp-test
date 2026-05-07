import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  standalone: true,
  template: `
    <section class="product-info">
      <div class="product-info__meta">
        <span>Nuevo | +5mil vendidos</span>
        <button type="button" aria-label="Guardar">♡</button>
      </div>

      <h1>Xiaomi Redmi Note 11 (Snapdragon) Dual SIM 128 GB gris grafito 4 GB RAM</h1>
      <p class="product-info__submeta">Nuevo | +5mil vendidos</p>

      <div class="product-info__rating">
        <span>4.6</span>
        <div class="stars">★★★★☆</div>
        <small>(3400)</small>
      </div>

      <div class="product-info__badge-line">
        <span class="recomended-badge">RECOMENDADO</span>
        <span>en Celulares</span>
      </div>

      <div class="product-info__price">
        <strong>$ 181.700</strong>
        <span>en 12x 34159<sup>60</sup></span>
      </div>

      <a class="meli-link" href="#">Ver los medios de pago</a>

      <div class="selector-group">
        <p>Memoria interna: <strong>64 GB</strong></p>
        <div class="chip-row">
          <button class="chip chip--selected" type="button">64 GB</button>
          <button class="chip" type="button">128 GB</button>
        </div>
      </div>

      <div class="selector-group">
        <p>Memoria RAM: <strong>4 GB</strong></p>
        <div class="chip-row">
          <button class="chip chip--selected" type="button">4 GB</button>
          <button class="chip" type="button">6 GB</button>
        </div>
      </div>

      <div class="selector-group">
        <p>Color: <strong>Gris grafito</strong></p>
        <div class="chip-row chip-row--wrap">
          @for (color of colors; track color.label) {
            <button class="chip" [class.chip--selected]="color.selected" type="button">{{ color.label }}</button>
          }
        </div>
      </div>

      <div class="know-box">
        <h2>Lo que tenés que saber de este producto</h2>
        <ul>
          @for (item of highlights; track item) {
            <li>{{ item }}</li>
          }
        </ul>
        <a class="meli-link" href="#">Ver características</a>
      </div>
    </section>
  `,
  styles: [`
    .product-info {
      border-bottom: 1px solid var(--meli-border);
      display: grid;
      gap: 12px;
      padding-bottom: 10px;
    }

    .product-info__meta {
      align-items: center;
      color: var(--meli-text-muted);
      display: flex;
      font-size: 0.875rem;
      justify-content: space-between;
    }

    .product-info__meta button {
      background: transparent;
      border: 0;
      color: #3483fa;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 0;
    }

    h1 {
      font-size: 2.25rem;
      font-weight: 600;
      letter-spacing: -0.03em;
      line-height: 1.05;
      margin: 0;
      max-width: 18ch;
    }

    .product-info__submeta,
    .product-info__rating small,
    .product-info__badge-line span:last-child,
    .product-info__price span {
      color: var(--meli-text-muted);
      font-size: 0.875rem;
    }

    .product-info__rating,
    .product-info__badge-line,
    .chip-row {
      align-items: center;
      display: flex;
      gap: 12px;
    }

    .stars {
      color: #3483fa;
      font-size: 1.5rem;
      letter-spacing: 0.08em;
    }

    .recomended-badge {
      background: #000;
      border-radius: 2px;
      color: #fff;
      display: inline-flex;
      font-size: 0.875rem;
      padding: 3px 8px;
    }

    .product-info__price {
      display: grid;
      gap: 5px;
    }

    .product-info__price strong {
      font-size: 3.4rem;
      font-weight: 300;
      letter-spacing: -0.05em;
    }

    .meli-link {
      color: #3483fa;
      font-size: 1rem;
      text-decoration: none;
    }

    .selector-group {
      display: grid;
      gap: 12px;
    }

    .selector-group p {
      color: #363636;
      margin: 0;
    }

    .chip-row--wrap {
      flex-wrap: wrap;
    }

    .chip {
      background: #fff;
      border: 1px dashed #707070;
      border-radius: 4px;
      color: #363636;
      cursor: pointer;
      min-height: 36px;
      padding: 8px 12px;
    }

    .chip--selected {
      border: 2px solid #3483fa;
      color: #111;
      padding: 7px 11px;
    }

    .know-box {
      display: grid;
      gap: 12px;
      max-width: 347px;
      padding: 16px 0;
    }

    .know-box h2 {
      font-size: 0.95rem;
      margin: 0;
    }

    .know-box ul {
      margin: 0;
      padding-left: 22px;
    }

    .know-box li {
      line-height: 1.54;
      margin-bottom: 6px;
    }

    @media (max-width: 720px) {
      h1 {
        font-size: 1.9rem;
      }

      .product-info__price strong {
        font-size: 2.6rem;
      }
    }
  `]
})
export class ProductInfoComponent {
  protected readonly colors = [
    { label: 'Azul estelar', selected: false },
    { label: 'Azul ocaso', selected: false },
    { label: 'Azul ocaso Special edition', selected: false },
    { label: 'Gris', selected: false },
    { label: 'Gris grafito', selected: true },
    { label: 'Twilight blue', selected: false }
  ];

  protected readonly highlights = [
    'Dispositivo liberado para que elijas la compañía telefónica que prefieras.',
    'Pantalla AMOLED de 6.43".',
    'Tiene 4 cámaras traseras de 50Mpx/8Mpx/2Mpx/2Mpx.',
    'Cámara delantera de 13Mpx.',
    'Procesador Snapdragon 680 Octa-Core de 2.4GHz con 4GB de RAM.',
    'Batería de 5000mAh.',
    'Memoria interna de 64GB.',
    'Resistente al agua.',
    'Con reconocimiento facial y sensor de huella dactilar.',
    'Resistente al polvo.'
  ];
}
