import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasListingComponent } from './cinemas-listing.component';

describe('CinemasListingComponent', () => {
  let component: CinemasListingComponent;
  let fixture: ComponentFixture<CinemasListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemasListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemasListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
