import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  template: `
    <div class="gallery">
      <div class="gallery__thumbs">
        @for (thumb of thumbs; let i = $index; track thumb) {
          <button class="gallery__thumb" [class.gallery__thumb--active]="i === 0" type="button">
            <span [style.background-image]="thumb"></span>
          </button>
        }
      </div>

      <div class="gallery__main">
        <div class="gallery__main-image"></div>
      </div>
    </div>
  `,
  styles: [`
    .gallery {
      display: grid;
      gap: 18px;
      grid-template-columns: 48px minmax(240px, 320px);
    }

    .gallery__thumbs {
      display: grid;
      gap: 16px;
      align-content: start;
    }

    .gallery__thumb {
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: pointer;
      height: 48px;
      padding: 1px;
      width: 48px;
    }

    .gallery__thumb--active {
      border-color: #3483fa;
      box-shadow: inset 0 0 0 1px #3483fa;
    }

    .gallery__thumb span,
    .gallery__main-image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      display: block;
      height: 100%;
      width: 100%;
    }

    .gallery__main {
      border-radius: 4px;
      display: flex;
      justify-content: center;
      min-height: 642px;
    }

    .gallery__main-image {
      background-image: url('https://www.figma.com/api/mcp/asset/92b7c097-f0e4-4991-9a28-80250744b400');
      min-height: 642px;
    }

    @media (max-width: 720px) {
      .gallery {
        grid-template-columns: 1fr;
      }

      .gallery__thumbs {
        grid-auto-flow: column;
        grid-template-columns: repeat(8, 48px);
        overflow: auto;
      }

      .gallery__main,
      .gallery__main-image {
        min-height: 420px;
      }
    }
  `]
})
export class ProductGalleryComponent {
  protected readonly thumbs = Array.from({ length: 8 }, () => "url('https://www.figma.com/api/mcp/asset/92b7c097-f0e4-4991-9a28-80250744b400')");
}
