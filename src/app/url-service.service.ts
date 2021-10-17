import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlData } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  urldata:Array<urlData>=[];

  constructor(private http:HttpClient) { }

  saveUrl(data:urlData){
    return this.http.post(`https://615f3a6af7254d0017068067.mockapi.io/url`,data);
  }

  getAll(){
    return this.http.get<Array<urlData>>(`https://615f3a6af7254d0017068067.mockapi.io/url`);
  }

  update(data:urlData,id:number|undefined){
    return this.http.put(`https://615f3a6af7254d0017068067.mockapi.io/url/${id}`,data);
  }
}
