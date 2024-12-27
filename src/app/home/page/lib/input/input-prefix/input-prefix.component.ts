import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-prefix',
  template: '<ng-content/>',
  styleUrl: './input-prefix.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-input-prefix',
  },
})
export class InputPrefixComponent {}
