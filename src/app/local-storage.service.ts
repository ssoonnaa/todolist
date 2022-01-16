import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http :HttpClient) { }
  public setItem(key:string,value:string){
    localStorage.setItem(key,value);
  }
  public getItem(key:string){
    return localStorage.getItem(key);
  }
  url:string="http://localhost:5002/api/todo/rollno";
  getUsers(){
    return this.http.get(this.url);
  }
}
