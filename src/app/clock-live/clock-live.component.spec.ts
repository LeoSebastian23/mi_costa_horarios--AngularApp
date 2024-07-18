import { ComponentFixture, TestBed } from '@angular/core/testing';

import { clockLiveComponent } from './clock-live.component';

describe('ClockLiveComponent', () => {
  let component: clockLiveComponent;
  let fixture: ComponentFixture<clockLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [clockLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(clockLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
