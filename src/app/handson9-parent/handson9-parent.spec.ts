import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson9Parent } from './handson9-parent';

describe('Handson9Parent', () => {
  let component: Handson9Parent;
  let fixture: ComponentFixture<Handson9Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson9Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson9Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
