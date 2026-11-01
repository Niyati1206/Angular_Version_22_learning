import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handson8Parent } from './handson8-parent';

describe('Handson8Parent', () => {
  let component: Handson8Parent;
  let fixture: ComponentFixture<Handson8Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handson8Parent],
    }).compileComponents();

    fixture = TestBed.createComponent(Handson8Parent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
