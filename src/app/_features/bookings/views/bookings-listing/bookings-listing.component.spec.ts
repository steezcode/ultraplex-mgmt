import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsListingComponent } from './bookings-listing.component';

describe('BookingsListingComponent', () => {
  let component: BookingsListingComponent;
  let fixture: ComponentFixture<BookingsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
