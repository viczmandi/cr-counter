import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class YqlApiService {

  private YQL_API:string = 'https://query.yahooapis.com/v1/public/yql?q=';

  constructor(private http: HttpClient) { }

  getDOM(url:string){
    const encodedUrl = encodeURIComponent(`select * from html where url=${url}`);
    return this.http.get(`${this.YQL_API}${encodedUrl}&format=json`);
  }
}
