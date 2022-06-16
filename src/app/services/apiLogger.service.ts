import { Injectable ,Inject} from "@angular/core";
import { ILogger } from "./iLogger.contract";

@Injectable()
export class ApiLoggerService implements ILogger{

    //url:string="http://pic.com/logs";
    constructor (@Inject("apiAddress") public url:string){

        console.log("ApiLogger Instantiated");


    }
 write(message:string):void{
     
    console.log(`ApiLogger ....logging.....${message}....address...${this.url}`);
 }

}