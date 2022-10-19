import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiList } from './apiList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl ;
 

  constructor(private http:HttpClient) {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getRequest(endPoint : string ) {
    return this.http.get(this.baseUrl + apiList[endPoint])
  }

  postRequest(endPoint: any, reqBody: any) {
    return this.http.post(this.baseUrl + apiList[endPoint], reqBody)
  }

  deleteRequestWithID(endPoint: string, id: string) {
    return this.http.delete(this.baseUrl + apiList[endPoint] + '/' + id);

  }
}
