import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, contentChild, input } from '@angular/core';

import type { CoerceBoolean, InputMode } from '@amz/core';

import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-input-field',
  template: '<ng-content/>',
  styleUrl: './input-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-input-field',
    '[class.is-inline]': `inline()`,
    '[class.is-outlined]': `mode() === 'outlined'`,
    '[class.is-error]': 'input().ngControl.touched && input().ngControl.errors',
  },
})
export class InputFieldComponent {
  readonly inline = input<CoerceBoolean, CoerceBoolean>(false, { transform: coerceBooleanProperty });

  readonly mode = input<InputMode>('default');

  readonly input = contentChild.required<InputComponent>(InputComponent);
}
