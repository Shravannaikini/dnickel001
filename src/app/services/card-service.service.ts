import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  url:any="https://stg2.dailynickel.com/api";
  constructor( private http:HttpClient) { }

  getProducts():Observable<any>
  {
    let body=new FormData();
    body.append("server_key","9f1c90293f914071950e63cc6be50e75");
    body.append("access_token","eb1eb1350b8a3c13faf4b469b2269cee4eea51101879cdbfafc0da2396ac875ca7fa1c442670753829301521774ff3cbd26652b2d5c95996")

    return this.http.post(this.url+"/get-products",body)
  }

  getComunities():Observable<any>
  {
    let body=new FormData();
    body.append("server_key","9f1c90293f914071950e63cc6be50e75");
    body.append("access_token","eb1eb1350b8a3c13faf4b469b2269cee4eea51101879cdbfafc0da2396ac875ca7fa1c442670753829301521774ff3cbd26652b2d5c95996")
    return this.http.post(this.url+"/get-my-communities", body)
  }
}
