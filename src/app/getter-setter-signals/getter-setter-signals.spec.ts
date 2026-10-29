import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetterSetterSignals } from './getter-setter-signals';

describe('GetterSetterSignals', () => {
  let component: GetterSetterSignals;
  let fixture: ComponentFixture<GetterSetterSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterSetterSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(GetterSetterSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
