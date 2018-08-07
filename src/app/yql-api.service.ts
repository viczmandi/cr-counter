import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YqlApiService {

  constructor(private http: HttpClient) { }

  getDOM(api:string, url:string){
    const encodedUrl = encodeURIComponent(`select * from html where url=${url}`);
    return this.http.get(`${api}${encodedUrl}`);
  }
}
