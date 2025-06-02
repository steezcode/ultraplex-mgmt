import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaCardComponent } from './cinema-card.component';

describe('CinemaCardComponent', () => {
  let component: CinemaCardComponent;
  let fixture: ComponentFixture<CinemaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
