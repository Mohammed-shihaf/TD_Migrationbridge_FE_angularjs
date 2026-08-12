import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget } from '../lib/widgets';

@Component({
  selector: 'app-widget-list',
  standalone: true,
  imports: [CommonModule],
  template: `<ul><li *ngFor="let w of widgets">{{ w.label }}</li></ul>`,
})
export class WidgetListComponent {
  @Input() widgets: Widget[] = [];
}
