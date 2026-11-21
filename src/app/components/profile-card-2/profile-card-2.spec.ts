import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCard2 } from './profile-card-2';

describe('ProfileCard2', () => {
  let component: ProfileCard2;
  let fixture: ComponentFixture<ProfileCard2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCard2],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCard2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
