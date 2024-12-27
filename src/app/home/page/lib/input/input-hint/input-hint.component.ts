import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-hint',
  template: '<ng-content />',
  styleUrl: './input-hint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-input-hint',
  },
})
export class InputHintComponent {}
