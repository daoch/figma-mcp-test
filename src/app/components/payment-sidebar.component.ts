import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-sidebar',
  standalone: true,
  template: `
    <aside class="payment-card">
      <div class="payment-card__block">
        <p><strong class="green">Envío gratis</strong> a todo el país</p>
        <span>Conocé los tiempos y las formas de envío.</span>
        <a class="meli-link" href="#">Calcular cuándo llega</a>
      </div>

      <div class="payment-card__block">
        <p>Vendido por <a class="meli-link" href="#">PAPIRONLINE</a></p>
        <span>+100 ventas</span>
        <small>Hace Factura A</small>
      </div>

      <div class="payment-card__block">
        <p><strong>Stock disponible</strong></p>
        <span>Almacenado y enviado por <em>FULL</em></span>
      </div>

      <div class="payment-card__block payment-card__qty">
        <p>Cantidad: <strong>1 unidad</strong> <span>(10 disponibles)</span></p>
      </div>

      <div class="payment-card__actions">
        <button class="buy-btn" type="button">Comprar ahora</button>
        <button class="cart-btn" type="button">Agregar al carrito</button>
      </div>

      <div class="payment-card__perks">
        @for (perk of perks; track perk.title) {
          <div class="perk">
            <span class="perk__icon">{{ perk.icon }}</span>
            <div>
              <p>
                <a class="meli-link" href="#">{{ perk.title }}</a>
                @if (perk.suffix) {
                  <span>{{ perk.suffix }}</span>
                }
              </p>
              @if (perk.body) {
                <small>{{ perk.body }}</small>
              }
            </div>
          </div>
        }
      </div>
    </aside>
  `,
  styles: [`
    .payment-card {
      background: #fff;
      border: 1px solid var(--meli-border);
      border-radius: 8px;
      display: grid;
      gap: 30px;
      padding: 26px 22px;
    }

    .payment-card__block {
      display: grid;
      gap: 7px;
    }

    .payment-card__block p,
    .payment-card__block span,
    .payment-card__block small {
      margin: 0;
    }

    .payment-card__block p {
      color: #363636;
      font-size: 1rem;
    }

    .payment-card__block span,
    .payment-card__block small {
      color: var(--meli-text-muted);
      font-size: 0.875rem;
    }

    .green {
      color: #00a650;
    }

    em {
      color: #00a650;
      font-style: italic;
      font-weight: 700;
    }

    .payment-card__qty span {
      color: var(--meli-text-muted);
    }

    .payment-card__actions {
      display: grid;
      gap: 15px;
    }

    .buy-btn,
    .cart-btn {
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      font: inherit;
      min-height: 48px;
      padding: 12px 16px;
    }

    .buy-btn {
      background: #3483fa;
      color: #fff;
      font-weight: 600;
    }

    .cart-btn {
      background: rgba(52, 131, 250, 0.12);
      color: #3483fa;
      font-weight: 600;
    }

    .payment-card__perks {
      display: grid;
      gap: 22px;
    }

    .perk {
      display: flex;
      gap: 8px;
    }

    .perk__icon {
      color: #666;
      flex: 0 0 auto;
      font-size: 1rem;
      line-height: 1.4;
      width: 18px;
    }

    .perk p,
    .perk small {
      margin: 0;
    }

    .perk p {
      color: #666;
      font-size: 0.875rem;
      line-height: 1.3;
    }

    .perk small {
      color: #666;
      display: block;
      font-size: 0.875rem;
      margin-top: 4px;
    }
  `]
})
export class PaymentSidebarComponent {
  protected readonly perks = [
    { icon: '↩', title: 'Calcular cuándo llega', body: 'Tenés 30 días desde que lo recibís' },
    { icon: '🏆', title: 'Calcular cuándo llega', suffix: ', recibí el producto que esperabas o te devolvemos tu dinero.' },
    { icon: '🛡', title: 'Mercado Puntos', suffix: ' Sumás 605 puntos.' },
    { icon: '⌂', title: '6 meses de garantía de fábrica.' }
  ];
}
