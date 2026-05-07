import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  template: `
    <section class="reviews">
      <h2>Opiniones del producto</h2>

      <div class="reviews__grid">
        <div class="reviews__summary">
          <div class="reviews__score">
            <strong>4.6</strong>
            <div>
              <div class="stars">★★★★☆</div>
              <small>3,543 clasificaciones</small>
            </div>
          </div>

          <div class="reviews__bars">
            @for (bar of bars; track bar.label) {
              <div class="bar-row">
                <div class="bar-track"><span [style.width.%]="bar.value"></span></div>
                <label>{{ bar.label }} ★</label>
              </div>
            }
          </div>

          <h3>Calificación de características</h3>
          <div class="feature-ratings">
            @for (feature of featureRatings; track feature) {
              <div class="feature-rating">
                <p>{{ feature }}</p>
                <span class="stars">★★★★☆</span>
              </div>
            }
          </div>
        </div>

        <div class="reviews__content">
          <div class="reviews__photos">
            <h3>Opiniones con fotos</h3>
            <div class="photo-strip">
              @for (photo of photos; let i = $index; track photo) {
                <div class="photo-card" [style.background-image]="photo">
                  <span>{{ i === 0 ? '1' : '5' }} ★</span>
                  @if (i === 3) {
                    <button type="button" aria-label="Más fotos">›</button>
                  }
                </div>
              }
            </div>

            <div class="pill-actions">
              <button type="button">Ordenar ˅</button>
              <button type="button">Clasificación ˅</button>
            </div>
          </div>

          <div class="review-list">
            @for (review of reviews; track review.date + review.likes) {
              <article class="review-item">
                <div class="review-item__header">
                  <span class="stars">★★★★☆</span>
                  <small>{{ review.date }}</small>
                </div>
                <p>{{ review.body }}</p>
                <div class="review-item__actions">
                  <button type="button">Es útil 👍 {{ review.likes }}</button>
                  <button type="button">👎</button>
                  <button type="button" class="more">⋮</button>
                </div>
              </article>
            }
          </div>

          <a class="meli-link reviews__more" href="#">Mostrar todas las opiniones</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .reviews {
      display: grid;
      gap: 22px;
      padding: 22px 0;
    }

    .reviews h2 {
      font-size: 2rem;
      font-weight: 400;
      margin: 0;
    }

    .reviews__grid {
      display: grid;
      gap: 56px;
      grid-template-columns: 289px minmax(0, 473px);
    }

    .reviews__summary {
      display: grid;
      gap: 22px;
    }

    .reviews__score {
      align-items: center;
      display: flex;
      gap: 17px;
    }

    .reviews__score strong {
      font-size: 4rem;
      font-weight: 600;
      letter-spacing: -0.05em;
    }

    .stars {
      color: #3483fa;
      letter-spacing: 0.15em;
    }

    .reviews__score small,
    .feature-rating p,
    .review-item small {
      color: var(--meli-text-muted);
    }

    .reviews__bars,
    .feature-ratings,
    .review-list {
      display: grid;
      gap: 10px;
    }

    .bar-row {
      align-items: center;
      display: grid;
      gap: 16px;
      grid-template-columns: 1fr auto;
    }

    .bar-track {
      background: #bfbfbf;
      border-radius: 8px;
      height: 4px;
      overflow: hidden;
    }

    .bar-track span {
      background: #363636;
      display: block;
      height: 100%;
    }

    .reviews__content {
      display: grid;
      gap: 47px;
    }

    .reviews__photos h3 {
      font-size: 1.1rem;
      margin: 0 0 20px;
    }

    .photo-strip {
      display: grid;
      gap: 11px;
      grid-template-columns: repeat(4, 110px);
    }

    .photo-card {
      align-items: end;
      background-position: center;
      background-size: cover;
      border-radius: 4px;
      display: flex;
      height: 168px;
      justify-content: space-between;
      padding: 7px;
      position: relative;
      color: #fff;
    }

    .photo-card button {
      align-items: center;
      background: #fff;
      border: 0;
      border-radius: 999px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
      color: #3483fa;
      cursor: pointer;
      display: inline-flex;
      font-size: 1.3rem;
      height: 40px;
      justify-content: center;
      position: absolute;
      right: -20px;
      top: 64px;
      width: 40px;
    }

    .pill-actions {
      display: flex;
      gap: 21px;
      margin-top: 30px;
    }

    .pill-actions button,
    .review-item__actions button {
      background: #fff;
      border: 1px solid var(--meli-border);
      border-radius: 999px;
      color: #3483fa;
      cursor: pointer;
      font: inherit;
      padding: 9px 20px;
    }

    .review-item {
      border-bottom: 1px solid var(--meli-border);
      display: grid;
      gap: 22px;
      padding: 8px 0;
    }

    .review-item__header,
    .review-item__actions {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    .review-item p {
      margin: 0;
      max-width: 39ch;
    }

    .review-item__actions {
      justify-content: flex-start;
      gap: 10px;
    }

    .review-item__actions .more {
      border: 0;
      color: #a6a6a6;
      margin-left: auto;
      padding-inline: 6px;
    }

    .reviews__more {
      margin-top: 10px;
    }

    @media (max-width: 1100px) {
      .reviews__grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 720px) {
      .photo-strip {
        grid-template-columns: repeat(2, 110px);
      }

      .pill-actions {
        flex-direction: column;
      }
    }
  `]
})
export class ReviewsSectionComponent {
  protected readonly bars = [
    { label: '5', value: 88 },
    { label: '4', value: 16 },
    { label: '3', value: 6 },
    { label: '2', value: 3 },
    { label: '1', value: 2 }
  ];

  protected readonly featureRatings = [
    'Relación precio-calidad',
    'Duración de la batería',
    'Calidad de la cámara',
    'Velocidad al usarlo',
    'Calidad de la pantalla'
  ];

  protected readonly photos = [
    "url('https://www.figma.com/api/mcp/asset/ed81a059-d1da-41bd-859e-4ee60020c66c')",
    "url('https://www.figma.com/api/mcp/asset/72767db2-99ca-4614-a056-fd1d01274cc6')",
    "url('https://www.figma.com/api/mcp/asset/8208f3d9-d912-4c8e-a898-acb92ac7005d')",
    "url('https://www.figma.com/api/mcp/asset/2d24691d-51f9-4f02-9f7f-fc125a5eac6b')"
  ];

  protected readonly reviews = Array.from({ length: 3 }, () => ({
    date: '15 jul. 2022',
    likes: 311,
    body: 'Que paliza le da al iphone! por favor. Xiaomi es como tener a babangida y roberto carlos de delantero en winning eleven. Compren, no se van arrepentir. La batería es un espectáculo, la cámara parece que es la misma del telescopio james webb, gracias xiaomi por tanto y perdon por tan poco.'
  }));
}
