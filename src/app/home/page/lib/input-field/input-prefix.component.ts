import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-prefix',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'prefix',
  },
})
export class InputPrefixComponent {}
