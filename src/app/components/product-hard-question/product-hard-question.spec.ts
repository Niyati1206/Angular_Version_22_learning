import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductHardQuestion } from './product-hard-question';

describe('ProductHardQuestion', () => {
  let component: ProductHardQuestion;
  let fixture: ComponentFixture<ProductHardQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHardQuestion],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHardQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
