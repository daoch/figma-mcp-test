import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BonusCard } from './loyalty-dashboard.interfaces';

@Component({
  selector: 'app-bonus-card',
  standalone: true,
  templateUrl: './bonus-card.component.html',
  styleUrl: './bonus-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BonusCardComponent {
  readonly card = input.required<BonusCard>();
}
