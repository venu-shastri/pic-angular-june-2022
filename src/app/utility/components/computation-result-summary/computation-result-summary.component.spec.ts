import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputationResultSummaryComponent } from './computation-result-summary.component';

describe('ComputationResultSummaryComponent', () => {
  let component: ComputationResultSummaryComponent;
  let fixture: ComponentFixture<ComputationResultSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputationResultSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputationResultSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
