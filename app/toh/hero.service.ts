import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
  constructor (private http: Http) {}

  private heroesUrl = 'https://i7fea98uib.execute-api.us-east-1.amazonaws.com/prod/Dev_Random_ListData?limit=2000&total=2000'; // URL to web api

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl).map(this.extractData).catch(this.handleError);
  }

  addHero(name: string): Observable<Hero> {
    let body = JSON.stringify({name});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.heroesUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

     console.error(errMsg);
     return Observable.throw(errMsg);
  }
}
