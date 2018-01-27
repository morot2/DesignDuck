import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Design} from "../design";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class RetrieveAllDesignService {

  private url = "http://172.30.1.57:8080/designs?index=";

  constructor(private http:HttpClient) { }

  getDesigns (idx:number): Observable<string> {
    debugger;
    return this.http.get<string>(this.url + "1");
  }

  /*
  getDesigns(idx : number) : Observable<any>{
    debugger;
    return this.http.get<any>(this.url + idx)
      .pipe(
        tap(designs => this.log(`fetched heroes`)),
        catchError(this.handleError('retrieveDesigns', []))
      );
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message : string){

  }
}
