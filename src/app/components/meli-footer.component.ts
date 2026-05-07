import { Component } from '@angular/core';

@Component({
  selector: 'app-meli-footer',
  standalone: true,
  template: `
    <footer class="meli-footer">
      <div class="meli-footer__more">
        <button type="button">Más información ˅</button>
      </div>

      <div class="app-container meli-footer__links">
        @for (link of links; track link) {
          <a href="#">{{ link }}</a>
        }
      </div>

      <div class="app-container meli-footer__copy">
        <p>Copyright © 1999-2023 MercadoLibre S.R.L.</p>
        <p>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
      </div>
    </footer>
  `,
  styles: [`
    .meli-footer {
      background: #f5f5f5;
      margin-top: 24px;
      padding-bottom: 30px;
    }

    .meli-footer__more {
      display: flex;
      justify-content: center;
      transform: translateY(-18px);
    }

    .meli-footer__more button {
      background: #fff;
      border: 1px solid var(--meli-border);
      border-radius: 28px;
      cursor: pointer;
      font: inherit;
      min-height: 56px;
      padding: 12px 24px;
    }

    .meli-footer__links {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 20px;
      margin-top: 8px;
    }

    .meli-footer__links a,
    .meli-footer__copy p {
      color: #666;
      font-size: 0.875rem;
      margin: 0;
      text-decoration: none;
    }

    .meli-footer__copy {
      display: grid;
      gap: 8px;
      margin-top: 24px;
    }
  `]
})
export class MeliFooterComponent {
  protected readonly links = [
    'Trabajá con nosotros',
    'Términos y condiciones',
    'Cómo cuidamos tu privacidad',
    'Accesibilidad',
    'Información al usuario financiero',
    'Ayuda',
    'Defensa del Consumidor',
    'Información sobre seguros'
  ];
}
