import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'search-result-component',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchServiceRef:SearchService;
  constructor(searchService:SearchService) {

this.searchServiceRef=searchService;
   }

  ngOnInit(): void {
  }

}
