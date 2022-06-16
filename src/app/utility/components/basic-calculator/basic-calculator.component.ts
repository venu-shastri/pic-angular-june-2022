import { Component, Inject, OnInit ,ViewChild} from '@angular/core';
import { ApiLoggerService } from 'src/app/services/apiLogger.service';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
import { ILogger } from 'src/app/services/iLogger.contract';
import { ComputationResultModel } from '../../models/computationResult.model';
import { ComputationResultSummaryComponent } from '../computation-result-summary/computation-result-summary.component';

@Component({
  selector: 'basic-calculator-component',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.css'],
  //providers:[
    //{provide:"loggerService",useClass:ApiLoggerService},
    //{provide:"apiAddress",useValue:"http://pic.com/log/v2"}
  //]
})
export class BasicCalculatorComponent implements OnInit {

  
  result:ComputationResultModel=<ComputationResultModel>{};

  @ViewChild(ComputationResultSummaryComponent)
  computationChild!:ComputationResultSummaryComponent

  constructor(@Inject("loggerService") public logger:ILogger) { 

   
  }

  ngOnInit(): void {
  }
  
  //Subscriber- Observer

  onResultComputedHandler(data:ComputationResultModel):void{

  //this.result=data;
 this.logger.write(data.toString());
 this.computationChild.resultSummary=data;
  }
  
  
}
