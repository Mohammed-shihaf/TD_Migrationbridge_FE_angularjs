import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Widget } from '../lib/widgets';
import { MigrationStatus, RouteStatus } from '../lib/migration';

@Injectable({ providedIn: 'root' })
export class WidgetService {
  constructor(private http: HttpClient) {}

  getWidgets(): Observable<{ widgets: Widget[] }> {
    return this.http.get<{ widgets: Widget[] }>('/api/widgets');
  }

  getMigrationStatus(): Observable<MigrationStatus> {
    return this.http.get<MigrationStatus>('/api/migration/status');
  }

  getMigrationRoutes(): Observable<{ routes: RouteStatus[] }> {
    return this.http.get<{ routes: RouteStatus[] }>('/api/migration/routes');
  }
}
