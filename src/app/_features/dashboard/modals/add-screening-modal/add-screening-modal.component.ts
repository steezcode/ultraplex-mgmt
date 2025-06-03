import {
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
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
import {
  CinemaData,
  MovieData,
  ScreenData,
} from '../../../../_core/models/core.models';
import { ScreeningPayload } from '../../../../_api/models/api.interface';

@Component({
  selector: 'app-add-screening-modal',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-screening-modal.component.html',
  styleUrl: './add-screening-modal.component.scss',
})
export class AddScreeningModalComponent {
  @Input() cinemas: CinemaData[] = [];
  @Input() movies: MovieData[] = [];

  screeningForm: FormGroup = new FormGroup({
    cinema: new FormControl('', Validators.required),
    screen: new FormControl({ value: '', disabled: true }, Validators.required),
    movie: new FormControl('', Validators.required),
    startTime: new FormControl('', [Validators.required]),
  });

  screensForSelectedCinema?: ScreenData[];

  destroyRef: DestroyRef = inject(DestroyRef);

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  constructor(private store: Store, private actions$: Actions) {}

  cinemaSelected(ev: any) {
    const cinemaId = ev.target.value;

    this.screensForSelectedCinema = this.cinemas.find(
      (cinema) => cinema.id.toString() === cinemaId
    )?.screens;

    this.screeningForm.get('screen')?.enable();
  }

  onSubmit() {
    const cinemaId: string = this.screeningForm.value.cinema;
    const screenId: string = this.screeningForm.value.screen;

    const payload: ScreeningPayload = {
      movieId: this.screeningForm.value.movie,
      startTime: this.timeStringToDate(this.screeningForm.value.startTime),
    };

    this.store.dispatch(
      CoreActions.addScreening({ cinemaId, screenId, payload })
    );

    this.actions$
      .pipe(
        ofType(CoreActions.addScreeningSuccess),
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

  timeStringToDate(timeStr: string): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    return date;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.onClose();
    }
  }
}
