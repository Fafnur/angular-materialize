import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-suffix',
  template: '<ng-content/>',
  styleUrl: './input-suffix.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'suffix',
  },
})
export class InputSuffixComponent {}
