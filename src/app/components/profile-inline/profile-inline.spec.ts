import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileInline } from './profile-inline';

describe('ProfileInline', () => {
  let component: ProfileInline;
  let fixture: ComponentFixture<ProfileInline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInline],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileInline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
