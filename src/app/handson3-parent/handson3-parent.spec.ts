import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson3Parent } from './handson3-parent';

describe('Handson3Parent', () => {
  let component: Handson3Parent;
  let fixture: ComponentFixture<Handson3Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson3Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson3Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
