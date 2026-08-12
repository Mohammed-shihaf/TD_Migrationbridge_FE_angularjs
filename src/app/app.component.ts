import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetService } from './services/widget.service';
import { Widget, getFallbackWidgets } from './lib/widgets';
import { MigrationStatus, RouteStatus } from './lib/migration';
import { WidgetListComponent } from './components/widget-list.component';
import { MigrationStatusComponent } from './components/migration-status.component';

// Migration Bridge: this is the LEGACY app, served at /legacy by the
// connected repo's route-split backend, alongside the new React app
// at /app.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WidgetListComponent, MigrationStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Legacy App (Angular) — served at /legacy';
  widgets: Widget[] = getFallbackWidgets();
  status: MigrationStatus | null = null;
  routes: RouteStatus[] = [];

  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.widgetService.getWidgets().subscribe({
      next: (data) => (this.widgets = data.widgets),
      error: () => {},
    });
    this.widgetService.getMigrationStatus().subscribe({
      next: (data) => (this.status = data),
      error: () => {},
    });
    this.widgetService.getMigrationRoutes().subscribe({
      next: (data) => (this.routes = data.routes),
      error: () => {},
    });
  }
}
