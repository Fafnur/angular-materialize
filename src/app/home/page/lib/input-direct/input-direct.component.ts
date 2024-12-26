import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { UntypedFormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

type InputMode = 'default' | 'outlined';

@Component({
  selector: 'app-input-direct',
  imports: [ReactiveFormsModule],
  templateUrl: './input-direct.component.html',
  styleUrl: './input-direct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDirectComponent {
  readonly control = input.required<UntypedFormControl>();
  readonly mode = input<InputMode>('default');
}
