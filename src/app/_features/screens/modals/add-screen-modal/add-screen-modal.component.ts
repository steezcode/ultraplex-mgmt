import {
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  input,
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
import { CinemaData } from '../../../../_core/models/core.models';

@Component({
  selector: 'app-add-screen-modal',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-screen-modal.component.html',
  styleUrl: './add-screen-modal.component.scss',
})
export class AddScreenModalComponent {
  @Input() cinemas: CinemaData[] = [];

  screenForm: FormGroup = new FormGroup({
    cinema: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  destroyRef: DestroyRef = inject(DestroyRef);

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  constructor(private store: Store, private actions$: Actions) {}

  onSubmit() {
    this.store.dispatch(
      CoreActions.addScreen({
        cinemaId: this.screenForm.value.cinema,
        name: this.screenForm.value.name,
      })
    );

    this.actions$
      .pipe(
        ofType(CoreActions.addScreenSuccess),
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
