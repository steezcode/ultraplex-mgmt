import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreeningModalComponent } from './add-screening-modal.component';

describe('AddScreeningModalComponent', () => {
  let component: AddScreeningModalComponent;
  let fixture: ComponentFixture<AddScreeningModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScreeningModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddScreeningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
