import { Component } from '@angular/core';

@Component({
  selector: 'app-meli-header',
  standalone: true,
  templateUrl: './meli-header.component.html',
  styleUrl: './meli-header.component.css',
})
export class MeliHeaderComponent {
  protected readonly leftLinks = [
    { label: 'Categorías', trailingIcon: true },
    { label: 'Ofertas' },
    { label: 'Historial' },
    { label: 'Supermercado' },
    { label: 'Moda' },
    { label: 'Vender' },
    { label: 'Ayuda' },
  ];

  protected readonly rightLinks = ['Creá tu cuenta', 'Ingresá', 'Mis compras'];
}
