import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson5Parent } from './handson5-parent';

describe('Handson5Parent', () => {
  let component: Handson5Parent;
  let fixture: ComponentFixture<Handson5Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson5Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson5Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
