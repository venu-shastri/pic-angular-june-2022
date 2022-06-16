import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCalculatorComponent } from './components/basic-calculator/basic-calculator.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ComputationResultSummaryComponent } from './components/computation-result-summary/computation-result-summary.component';
import { CalculatorService } from './services/calculator.service';



@NgModule({
  declarations: [
    BasicCalculatorComponent,
    CalculatorComponent,
    ComputationResultSummaryComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    FormsModule
  ],
  exports:[BasicCalculatorComponent],
  providers:[
    {provide:CalculatorService,useClass:CalculatorService} //Service Registeration
  ]
})
export class UtilityModule { }
