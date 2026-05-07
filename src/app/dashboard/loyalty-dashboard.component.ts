import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BonusCardComponent } from './bonus-card.component';
import {
  BonusCard,
  LoyaltyTier,
  OrderRow,
  SidebarSection,
  TopNavItem,
} from './loyalty-dashboard.interfaces';

@Component({
  selector: 'app-loyalty-dashboard',
  standalone: true,
  imports: [BonusCardComponent],
  templateUrl: './loyalty-dashboard.component.html',
  styleUrl: './loyalty-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoyaltyDashboardComponent {
  protected readonly topNavItems: readonly TopNavItem[] = [
    { label: 'Bestsellers' },
    { label: 'Shop all', expandable: true },
    { label: '% Sales', expandable: true, active: true },
    { label: 'Loyalty rewards' },
  ];

  protected readonly sidebarSections: readonly SidebarSection[] = [
    {
      highlighted: true,
      links: [{ label: 'Personal info', active: true }],
    },
    {
      links: [
        { label: 'Discounts' },
        { label: 'My coupons' },
        { label: 'Promotions', badge: 'New', badgeVariant: 'status' },
      ],
    },
    {
      links: [
        { label: 'Refer a friend' },
        { label: 'Loyalty rewards', active: true },
        { label: 'levels', indented: true },
        { label: 'Available rewards', indented: true },
        { label: 'Activity history', indented: true, badge: '4', badgeVariant: 'count' },
        { label: 'Terms & Conditions', indented: true },
      ],
    },
    {
      links: [
        { label: 'Order history' },
        { label: 'Payment info' },
        { label: 'Change password' },
      ],
    },
  ];

  protected readonly tiers: readonly LoyaltyTier[] = [
    { name: 'Bronze', threshold: '300€', discount: '10%' },
    { name: 'Silver', threshold: '500€', discount: '15%' },
    { name: 'Gold', threshold: '800€', discount: '25%', accent: true },
  ];

  protected readonly bonusCards: readonly BonusCard[] = [
    {
      tier: 'Bronze',
      summary: 'Lorem ipsum dolor sit amet consectetur Metus id massa risus',
      total: 120,
      footnote: 'members joined last 12 days',
      cta: 'View analytics',
      featured: true,
    },
    {
      tier: 'Silver',
      summary: 'Lorem ipsum dolor sit amet consectetur Metus id massa risus',
      total: 180,
      footnote: 'members joined last 24 days',
      cta: 'View details',
    },
    {
      tier: 'Gold',
      summary: 'Lorem ipsum dolor sit amet consectetur Metus id massa risus',
      total: 240,
      footnote: 'members joined last 60 days',
      cta: 'View details',
    },
  ];

  protected readonly orders: readonly OrderRow[] = [
    {
      id: '#1',
      product: 'Nubuck Hiking Sandals',
      address: 'Buy online',
      price: '87.54 €',
      originalPrice: '156.00',
      action: 'Go to product',
      hasPreview: true,
    },
    { id: '#2', product: 'Winter jacket', address: 'Kyiv, Semaforniy, 4', price: '24.54 €', originalPrice: '156.00', action: 'Go to product' },
    { id: '#3', product: 'Loafers Camper Walden', address: 'Kyiv, Semaforniy, 4', price: '156.00 €', action: 'Go to product' },
    { id: '#4', product: 'Old Skool Trek Backpack', address: 'Buy online', price: '34.54 €', originalPrice: '56.00', action: 'Go to product' },
    { id: '#5', product: 'Classic high socks (3 pairs)', address: 'Buy online', price: '26.00 €', action: 'Go to product' },
    { id: '#6', product: 'Hydra pro glow', address: 'SLU Calle Goya 22', price: '20.99 €', originalPrice: '56.00', action: 'Go to product' },
  ];
}
