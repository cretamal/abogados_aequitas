import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url   = 'http://206.189.223.228/';
  constructor( private http: HttpClient ) { }

  public getBigBanner(): Observable<any[]> {
    const url = `${this.url}big-banners`;
    return this.http.get<any[]>( url );
  }

  public getTypeServices(): Observable<any[]> {
    const url = `${this.url}services?_sort=order:ASC`;
    return this.http.get<any[]>( url );
  }

  public getPost(params): Observable<any[]> {
    const url = `${this.url}posts?Type=${params}`;
    return this.http.get<any[]>( url );
  }


  public postEmail(data): Observable<any[]> {
    const url = `${this.url}email`;
    return this.http.post<any[]>( url, data );
  }





}
