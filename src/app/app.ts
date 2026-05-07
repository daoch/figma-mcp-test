import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoyaltyDashboardComponent } from './dashboard/loyalty-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoyaltyDashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
