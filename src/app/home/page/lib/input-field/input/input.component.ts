import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: '<ng-content/>',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  readonly ngControl = inject(NgControl);
}
