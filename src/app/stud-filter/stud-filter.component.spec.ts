import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudFilterComponent } from './stud-filter.component';

describe('StudFilterComponent', () => {
  let component: StudFilterComponent;
  let fixture: ComponentFixture<StudFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
