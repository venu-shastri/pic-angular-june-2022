import { Component, OnInit ,Inject} from '@angular/core';


import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKey:string=""
  constructor(public searchService:SearchService) { }

  ngOnInit(): void {
  }

  onSearch(){

       this.searchService.search(this.searchKey);
     
  }
}
