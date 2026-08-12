import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatMigrationStatus, routesRemaining, MigrationStatus, RouteStatus } from '../lib/migration';

@Component({
  selector: 'app-migration-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="status">
      <p>{{ formatted() }}</p>
      <p>Remaining: {{ remainingLabel() }}</p>
    </div>
  `,
})
export class MigrationStatusComponent {
  @Input() status: MigrationStatus | null = null;
  @Input() routes: RouteStatus[] = [];

  formatted(): string {
    return this.status ? formatMigrationStatus(this.status) : '';
  }

  remainingLabel(): string {
    const remaining = routesRemaining(this.routes);
    return remaining.length ? remaining.map((r) => r.path).join(', ') : 'none';
  }
}
