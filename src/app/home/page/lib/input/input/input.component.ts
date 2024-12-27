import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector:
    // eslint-disable-next-line @angular-eslint/component-selector
    'input[appInput][formControl],input[appInput][formControlName],textarea[appInput][formControl],textarea[appInput][formControlName]',
  template: '<ng-content/>',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-input',
    '[class.app-textarea]': 'isTextarea()',
  },
})
export class InputComponent {
  private readonly elementRef = inject<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(ElementRef);
  readonly ngControl = inject(NgControl);

  readonly isTextarea = signal<boolean>(this.elementRef.nativeElement.tagName.toLowerCase() === 'textarea');
}
