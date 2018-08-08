import { Component, OnInit } from '@angular/core';
import { YqlApiService } from '../yql-api.service';

@Component({
  selector: 'app-yql-crawler',
  templateUrl: './yql-crawler.component.html',
  styleUrls: ['./yql-crawler.component.css']
})
export class YqlCrawlerComponent implements OnInit {

  private url:string = 'https://www.deckshop.pro/card/detail/Skellies';

  constructor(private yql: YqlApiService) { }

  ngOnInit() {
    this.yql.getDOM(this.url).subscribe((res) => {console.log(res)});
  }

}
