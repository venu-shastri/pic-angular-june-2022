import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { ComputationResultModel } from '../../models/computationResult.model';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'calculator-component',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  operand1:string;
  operand2:string;
  result:number;
  //Dependency
  calculatorService!:CalculatorService;
  @Output()
  onResultComputed=new EventEmitter<ComputationResultModel>();

  //Constructor Injection
  constructor(service:CalculatorService) { 

    this.operand1="";
    this.operand2="";
    this.result=0;
    this.calculatorService=service;
  }
//lifecycle hook 
  ngOnInit(): void {
  }
  add():void{
    //deleagtion on Dependency
    this.result=this.calculatorService.add(parseInt( this.operand1),parseInt (this.operand2));
    this.onResultComputed.emit(new ComputationResultModel("ADD",this.operand1,this.operand2,this.result.toString()));
  }

  sub():void{
    this.result=parseInt (this.operand1)- parseInt(this.operand2);
    this.result=this.calculatorService.sub(parseInt( this.operand1),parseInt (this.operand2));
  }
  clear(){
    this.operand1="";
    this.operand2="";
    this.result=0;
  }


}
