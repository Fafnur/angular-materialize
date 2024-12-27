import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

import { HomeCodeComponent } from './home-code/home-code.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeCodeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly form = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    code: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  ngOnInit(): void {
    this.form.valueChanges.pipe(tap(console.log), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
