import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandsOnPractice } from './hands-on-practice';

describe('HandsOnPractice', () => {
  let component: HandsOnPractice;
  let fixture: ComponentFixture<HandsOnPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandsOnPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(HandsOnPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
