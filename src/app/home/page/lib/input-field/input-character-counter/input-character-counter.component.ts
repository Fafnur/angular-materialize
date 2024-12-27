import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-character-counter',
  template: '<ng-content/>',
  styleUrl: './input-character-counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'character-counter',
  },
})
export class InputCharacterCounterComponent {}
