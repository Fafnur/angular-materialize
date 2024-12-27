import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-prefix',
  template: '<ng-content/>',
  styleUrl: './input-prefix.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'prefix',
  },
})
export class InputPrefixComponent {}
