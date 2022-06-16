import { Component,Input } from "@angular/core";

@Component({
    templateUrl:"./label.component.html",
    selector: "label-component"
})
export class LabelComponent{

    @Input()
    message:string=""

    //state
    messagePrefix="Label Message: "
}