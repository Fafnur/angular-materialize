import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from '../input-field/input/input.component';
import { InputCharacterCounterComponent } from '../input-field/input-character-counter/input-character-counter.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { InputHintComponent } from '../input-field/input-hint/input-hint.component';
import { InputLabelComponent } from '../input-field/input-label/input-label.component';
import { InputPrefixComponent } from '../input-field/input-prefix/input-prefix.component';
import { InputSuffixComponent } from '../input-field/input-suffix/input-suffix.component';

@Component({
  selector: 'app-home-code',
  imports: [
    ReactiveFormsModule,
    InputFieldComponent,
    InputLabelComponent,
    InputComponent,
    InputHintComponent,
    InputCharacterCounterComponent,
    InputSuffixComponent,
    InputPrefixComponent,
  ],
  templateUrl: './home-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCodeComponent {
  readonly control = input.required<FormControl<string>>();
}
