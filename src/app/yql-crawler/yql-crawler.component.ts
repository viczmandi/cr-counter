import { Component, OnInit } from '@angular/core';
import { YqlApiService } from '../yql-api.service';

@Component({
  selector: 'app-yql-crawler',
  templateUrl: './yql-crawler.component.html',
  styleUrls: ['./yql-crawler.component.css']
})
export class YqlCrawlerComponent implements OnInit {

  private url:string = 'https://www.deckshop.pro/card/detail/Skellies';
  dom:any;

  constructor(private yql: YqlApiService) { }

  ngOnInit() {
    this.dom = this.yql.getDOM(this.url)
    console.log(this.dom);
  }

}
