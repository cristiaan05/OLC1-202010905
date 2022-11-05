import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  guardarArchivo(json:any){
    return this.http.post(`${this.URL}/api/garchivo`,json)
  }

  download(){
    return this.http.get(`${this.URL}/api/down`,
      {responseType:'blob'}
    )
  }

  downloadA(){
    return this.http.get(`${this.URL}/api/downA`,
      {responseType:'blob'}
    )
  }

  // upload(file:any):Observable<any> {
  
  //   // Create form data
  //   const formData = new FormData(); 
      
  //   // Store form name as "file" with file data
  //   formData.append("file", file, file.name);
  //     console.log(file)
  //   // Make http post request over api
  //   // with formData as req
  //   return "hola";
  //   //return this.http.post(this.URL, formData)
  // }
}
