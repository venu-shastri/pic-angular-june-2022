import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ILogger } from './iLogger.contract';

@Injectable({
  providedIn:'root'
})
export class SearchService {

  //private searchResult:string="";
  private searchResultStreamSubject=new Subject<string>();
  public searchResultObseravbleStream:Observable<string>= this.searchResultStreamSubject.asObservable();
  constructor(@Inject("loggerService") public logger:ILogger) { }

  search(key:string):void{
    //this.searchResult=`Search successfull....key:${key}`
    let result=`Search Successful.....key:${key}`;
    this.searchResultStreamSubject.next(result)//update stream.....
    this.logger.write(result);
  }
  
}
