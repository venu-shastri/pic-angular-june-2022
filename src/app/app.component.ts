import { Component, Inject } from "@angular/core";
import { ConsoleLoggerService } from "./services/consoleLogger.service";
import { ILogger } from "./services/iLogger.contract";

@Component({
  templateUrl:'./app.component.html',
  //css selector , <app-component></app-component>
  selector: "app-component"
})
export class AppComponent{

  //Logic, state , event handlers
 // constructor(@Inject("loggerService") logger:ILogger){
   //constructor(@Inject("loggerService")  logger:ILogger){
   
    //logger.write("AppComponent....");
    
 // }
}