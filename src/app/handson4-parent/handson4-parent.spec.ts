import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson4Parent } from './handson4-parent';

describe('Handson4Parent', () => {
  let component: Handson4Parent;
  let fixture: ComponentFixture<Handson4Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson4Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson4Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
