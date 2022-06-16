import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { ApiLoggerService } from "./services/apiLogger.service";
import { UtilityModule } from "./utility/utility.module";
import { WidgetsModule } from "./widgets/widgets.module";


@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule, LayoutModule,UtilityModule,WidgetsModule],
  bootstrap:[AppComponent],
 // providers:[
  //{provide:"loggerService",useClass:ApiLoggerService},
   // {provide:"apiAddress",useValue:"http://pic.com/log/v3"}
  //]
})
export class AppModule{

}