import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-hint',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'supporting-text',
  },
})
export class InputHintComponent {}
