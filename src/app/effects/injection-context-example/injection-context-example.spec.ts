import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InjectionContextExample } from './injection-context-example';

describe('InjectionContextExample', () => {
  let component: InjectionContextExample;
  let fixture: ComponentFixture<InjectionContextExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectionContextExample],
    }).compileComponents();

    fixture = TestBed.createComponent(InjectionContextExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
