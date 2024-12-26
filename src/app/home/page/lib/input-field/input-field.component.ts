import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, contentChild, input } from '@angular/core';

import { InputComponent } from './input.component';

type InputMode = 'default' | 'outlined';

type CoerceBoolean = boolean | string | undefined | null;

@Component({
  selector: 'app-input-field',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'input-field',
    '[class.inline]': `inline()`,
    '[class.outlined]': `mode() === 'outlined'`,
    '[class.error]': 'input().ngControl.touched && input().ngControl.errors',
  },
})
export class InputFieldComponent {
  readonly inline = input<CoerceBoolean, CoerceBoolean>(false, { transform: coerceBooleanProperty });
  readonly mode = input<InputMode>('default');
  readonly input = contentChild.required<InputComponent>(InputComponent);
}
