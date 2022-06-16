import { Component,Inject,Input } from "@angular/core";
import { ApiLoggerService } from "src/app/services/apiLogger.service";

@Component({
    templateUrl:"./label.component.html",
    selector: "label-component"
})
export class LabelComponent{

    @Input()
    message:string=""

    //state
    messagePrefix="Label Message: "

    constructor(@Inject("loggerService")logger:ApiLoggerService){
        logger.write("Label Component....");
    }
}