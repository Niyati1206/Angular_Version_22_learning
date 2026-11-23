import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsPractice } from './events-practice';

describe('EventsPractice', () => {
  let component: EventsPractice;
  let fixture: ComponentFixture<EventsPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
