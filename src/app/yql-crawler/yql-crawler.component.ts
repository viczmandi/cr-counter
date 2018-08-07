import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { YqlApiService } from '../yql-api.service';

@Component({
  selector: 'app-yql-crawler',
  templateUrl: './yql-crawler.component.html',
  styleUrls: ['./yql-crawler.component.css']
})
export class YqlCrawlerComponent implements OnInit {

  private url:string = 'https://www.deckshop.pro/card/detail/Skellies';
  private YQL_API:string = 'http://query.yahooapis.com/v1/public/yql?q=';

  constructor(private yql: YqlApiService) { }

  ngOnInit() {
    this.yql.getDOM(this.YQL_API, this.url);
  }

}
