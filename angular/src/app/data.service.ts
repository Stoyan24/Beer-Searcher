import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  fetchData(){
     return this.http.get('https://bs-angular.firebaseio.com/.json').pipe(map((res) => res))
  }


}
