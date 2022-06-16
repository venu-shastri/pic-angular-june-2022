import { Inject, Injectable } from '@angular/core';
import { ILogger } from './iLogger.contract';

@Injectable({
  providedIn:'root'
})
export class SearchService {

  private searchResult:string="";
  constructor(@Inject("loggerService") public logger:ILogger) { }

  search(key:string):void{
    this.searchResult=`Search successfull....key:${key}`
    this.logger.write(this.searchResult);
  }
  getResult():string{
    return this.searchResult;
  }
}
