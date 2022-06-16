import { ILogger } from "./iLogger.contract";

export class ConsoleLoggerService implements ILogger{

    write(message:string){
        console.log(message);
    }

}