import { Injectable, } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeTellerService {
  private httpOptions = {
    headers: new HttpHeaders({
      Accept:  'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  // get a dad joke
  public tellJoke(): Observable<any> {

    return this.http.get<any>('https://icanhazdadjoke.com/', this.httpOptions);
}
}
