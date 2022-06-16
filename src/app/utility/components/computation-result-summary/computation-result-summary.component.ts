import { Component, OnInit,Input } from '@angular/core';
import { ComputationResultModel } from '../../models/computationResult.model';

@Component({
  selector: 'computation-result-summary-component',
  templateUrl: './computation-result-summary.component.html',
  styleUrls: ['./computation-result-summary.component.css']
})
export class ComputationResultSummaryComponent implements OnInit {

  @Input()
  resultSummary:ComputationResultModel=<ComputationResultModel>{};
  constructor() { }

  ngOnInit(): void {
  }

}
