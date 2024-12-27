import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'label[appInputLabel]',
  template: '<ng-content/>',
  styleUrl: './input-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-input-label',
  },
})
export class InputLabelComponent {}
