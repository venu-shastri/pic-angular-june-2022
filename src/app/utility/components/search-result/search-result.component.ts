import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'search-result-component',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent
 implements OnInit , OnDestroy{

  searchServiceRef:SearchService;
  subscritionRef!:Subscription;
  result:string="";
  constructor(searchService:SearchService) {

this.searchServiceRef=searchService;

   }

  ngOnInit(): void {
    //let _this=this;//component instance
   this.subscritionRef= this.searchServiceRef.searchResultObseravbleStream.subscribe(
     (result:string)=>{
                      this.result=result;
                    }
      );

  }

   ngOnDestroy(): void {
     
       this.subscritionRef.unsubscribe();
   }

}
