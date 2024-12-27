import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-suffix',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'suffix',
  },
})
export class InputSuffixComponent {}
