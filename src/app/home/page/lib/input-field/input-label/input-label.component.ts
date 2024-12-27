import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-label',
  template: '<ng-content/>',
  styleUrl: './input-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLabelComponent {}
