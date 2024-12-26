import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector:
    // eslint-disable-next-line @angular-eslint/component-selector
    'input[appInput][formControl],input[appInput][formControlName],textarea[appInput][formControl],textarea[appInput][formControlName]',
  template: '<ng-content/>',
  styles: [':host { display: block }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  readonly ngControl = inject(NgControl);
}
