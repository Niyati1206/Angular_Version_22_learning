import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsHardQuestion } from './events-hard-question';

describe('EventsHardQuestion', () => {
  let component: EventsHardQuestion;
  let fixture: ComponentFixture<EventsHardQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsHardQuestion],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsHardQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
