import {
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  inject,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CoreActions from '../../../../_core/store/core.actions';
import { Actions, ofType } from '@ngrx/effects';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-add-movie-modal',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-movie-modal.component.html',
  styleUrl: './add-movie-modal.component.scss',
})
export class AddMovieModalComponent {
  movieForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    runtime: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{1,3}$/),
    ]),
  });

  destroyRef: DestroyRef = inject(DestroyRef);

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  constructor(private store: Store, private actions$: Actions) {}

  onSubmit() {
    this.store.dispatch(
      CoreActions.addMovie({
        name: this.movieForm.value.name,
        runtime: this.movieForm.value.runtime,
      })
    );
    this.actions$
      .pipe(
        ofType(CoreActions.addMovieSuccess),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.onClose();
        this.closeModal.emit();
      });
  }

  onClose() {
    this.closeModal.emit();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.onClose();
    }
  }
}
