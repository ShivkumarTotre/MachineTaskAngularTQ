import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private apiUrl = 'http://localhost:8080/';
  api : any;
  private httpOption = {
  headers : new HttpHeaders({
      'content-Type' : 'application/JSON'
    })
  }

  constructor(private http : HttpClient) { 

  }

  postRequest(url : string, param : {}){
    this.api = this.apiUrl + url;

    return this.http.post(this.api, param, this.httpOption)
  }










  apiUrL = 'https://localhost:8080/';

}
