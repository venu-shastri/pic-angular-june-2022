import { Component, OnInit ,ViewChild} from '@angular/core';
import { ComputationResultModel } from '../../models/computationResult.model';
import { ComputationResultSummaryComponent } from '../computation-result-summary/computation-result-summary.component';

@Component({
  selector: 'basic-calculator-component',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.css']
})
export class BasicCalculatorComponent implements OnInit {

  
  result:ComputationResultModel=<ComputationResultModel>{};

  @ViewChild(ComputationResultSummaryComponent)
  computationChild!:ComputationResultSummaryComponent

  constructor() { 

   
  }

  ngOnInit(): void {
  }
  
  //Subscriber- Observer

  onResultComputedHandler(data:ComputationResultModel):void{

  //this.result=data;
 // console.log(this.result);
 this.computationChild.resultSummary=data;
  }
  
  
}
