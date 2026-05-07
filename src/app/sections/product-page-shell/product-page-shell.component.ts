import { Component } from '@angular/core';
import { PaymentSidebarComponent } from '../../components/payment-sidebar.component';
import { ProductGalleryComponent } from '../../components/product-gallery.component';
import { ProductInfoComponent } from '../../components/product-info.component';
import { ReviewsSectionComponent } from '../../components/reviews-section.component';

@Component({
  selector: 'app-product-page-shell',
  standalone: true,
  imports: [
    ProductGalleryComponent,
    ProductInfoComponent,
    PaymentSidebarComponent,
    ReviewsSectionComponent,
  ],
  templateUrl: './product-page-shell.component.html',
  styleUrl: './product-page-shell.component.css',
})
export class ProductPageShellComponent {
  protected readonly interestLinks = [
    'xiaomi redmi note 11',
    'motorola g52',
    'samsung a23',
    'xiaomi note 12',
    'redmi note 11 pro',
  ];

  protected readonly cards = Array.from({ length: 3 }, (_, i) => ({
    title: `Producto relacionado ${i + 1}`,
    price: '$ 129.999',
  }));

  protected readonly sellerCards = Array.from({ length: 2 }, (_, i) => ({
    title: `Publicación destacada ${i + 1}`,
    body: 'Oferta destacada del mismo vendedor con envío rápido y buenas cuotas.',
  }));

  protected readonly specs = [
    { label: 'Tamaño de la pantalla', value: '6.43" (159.87 mm x 73.87 mm x 8.09 mm)' },
    { label: 'Memoria interna', value: '64GB' },
    { label: 'Desbloqueo', value: 'Huella dactilar y reconocimiento facial' },
    { label: 'Cámara trasera principal', value: '50Mpx' },
    { label: 'Cámara frontal principal', value: '13Mpx' },
  ];

  protected readonly questions = [
    'Costo y tiempo de envío',
    'Devoluciones gratis',
    'Medios de pago',
    'Garantía',
  ];

  protected readonly fiveCards = Array.from({ length: 5 }, (_, i) => ({
    title: `Sugerencia ${i + 1}`,
    price: '$ 89.999',
  }));
}
