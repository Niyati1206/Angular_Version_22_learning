import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson6Parent } from './handson6-parent';

describe('Handson6Parent', () => {
  let component: Handson6Parent;
  let fixture: ComponentFixture<Handson6Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson6Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson6Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
