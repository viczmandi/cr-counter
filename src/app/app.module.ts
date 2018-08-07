import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { YqlCrawlerComponent } from './yql-crawler/yql-crawler.component';
import { YqlApiService } from './yql-api.service';


@NgModule({
  declarations: [
    AppComponent,
    YqlCrawlerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [YqlApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
