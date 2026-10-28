import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LearningComputedSignals } from './learning-computed-signals';

describe('LearningComputedSignals', () => {
  let component: LearningComputedSignals;
  let fixture: ComponentFixture<LearningComputedSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningComputedSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningComputedSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
