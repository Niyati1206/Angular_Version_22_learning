import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson2Parent } from './handson2-parent';

describe('Handson2Parent', () => {
  let component: Handson2Parent;
  let fixture: ComponentFixture<Handson2Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson2Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson2Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
