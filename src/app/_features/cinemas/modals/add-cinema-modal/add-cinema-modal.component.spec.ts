import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCinemaModalComponent } from './add-cinema-modal.component';

describe('AddCinemaModalComponent', () => {
  let component: AddCinemaModalComponent;
  let fixture: ComponentFixture<AddCinemaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCinemaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCinemaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
