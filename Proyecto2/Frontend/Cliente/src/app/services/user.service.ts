import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL='http://localhost:3000'
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get(`${this.URL}/api/prueba`)
  }

  setdata(json:any){
    return this.http.post(`${this.URL}/api/parsear`,json)
  }

  getDot(){
    return this.http.get(`${this.URL}/api/ast`)
  }
}
