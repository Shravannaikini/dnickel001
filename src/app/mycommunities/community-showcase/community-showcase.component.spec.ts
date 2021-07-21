import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityShowcaseComponent } from './community-showcase.component';

describe('CommunityShowcaseComponent', () => {
  let component: CommunityShowcaseComponent;
  let fixture: ComponentFixture<CommunityShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
