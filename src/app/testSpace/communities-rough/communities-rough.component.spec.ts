import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesRoughComponent } from './communities-rough.component';

describe('CommunitiesRoughComponent', () => {
  let component: CommunitiesRoughComponent;
  let fixture: ComponentFixture<CommunitiesRoughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitiesRoughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesRoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
