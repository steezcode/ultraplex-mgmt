import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensListingComponent } from './screens-listing.component';

describe('ScreensListingComponent', () => {
  let component: ScreensListingComponent;
  let fixture: ComponentFixture<ScreensListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreensListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreensListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
