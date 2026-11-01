import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson1Parent } from './handson1-parent';

describe('Handson1Parent', () => {
  let component: Handson1Parent;
  let fixture: ComponentFixture<Handson1Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson1Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson1Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
