import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public mockAllURL = "https://restcountries.eu/rest/v2/all";
  public mockIndividualURL = "https://restcountries.eu/rest/v2/alpha/AFG"
  constructor(private http: HttpClient) { }

  getAllCountriesDetails(): Observable<any> {
    return this.http.get<any>(`https://restcountries.eu/rest/v2/all`);
  }

  getIndividualCountry(alphaCode) {
    return this.http.get<any>(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
  }
}
