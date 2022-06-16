import { NgModule } from "@angular/core";
import { ApiLoggerService } from "../services/apiLogger.service";
import { LabelComponent } from "./components/label/label.component";

@NgModule({
    declarations:[LabelComponent],
    exports:[LabelComponent],
    providers:[
        {provide:"loggerService",useClass:ApiLoggerService},
    {provide:"apiAddress",useValue:"http://pic.com/log/v4"}
    ]
})
export class WidgetsModule{

    //clean 
}