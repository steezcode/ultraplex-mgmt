import {
  Component,
  DestroyRef,
  EventEmitter,
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
  selector: 'app-add-cinema-modal',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-cinema-modal.component.html',
  styleUrl: './add-cinema-modal.component.scss',
})
export class AddCinemaModalComponent {
  cinemaForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  destroyRef: DestroyRef = inject(DestroyRef);

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  constructor(private store: Store, private actions$: Actions) {}

  onSubmit() {
    this.store.dispatch(
      CoreActions.addCinema({ name: this.cinemaForm.value.name })
    );

    this.actions$
      .pipe(
        ofType(CoreActions.addCinemaSuccess),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.onClose();
        console.log('Cinema added successfully');
        this.closeModal.emit();
      });
  }

  onClose() {
    this.closeModal.emit();
  }
}
