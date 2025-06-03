import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreenModalComponent } from './add-screen-modal.component';

describe('AddCinemaModalComponent', () => {
  let component: AddScreenModalComponent;
  let fixture: ComponentFixture<AddScreenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScreenModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddScreenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
