import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-suffix',
  template: '<ng-content/>',
  styles: [':host { display: block }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'suffix',
  },
})
export class InputSuffixComponent {}
