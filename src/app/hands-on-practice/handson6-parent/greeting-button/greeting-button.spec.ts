import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingButton } from './greeting-button';

describe('GreetingButton', () => {
  let component: GreetingButton;
  let fixture: ComponentFixture<GreetingButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingButton],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
