import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson7Parent } from './handson7-parent';

describe('Handson7Parent', () => {
  let component: Handson7Parent;
  let fixture: ComponentFixture<Handson7Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson7Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson7Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
