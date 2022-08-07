import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceTitle {

  constructor(private http : HttpClient) { }

  postTitle(data : any){
    return this.http.post<any>("http://localhost:3000/titles", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getTitle(){
    return this.http.get<any>("http://localhost:3000/titles")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateTitle(data : any, id:number){
    return this.http.put<any>("http://localhost:3000/titles"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteTitle(id: number){
    return this.http.delete<any>("http://localhost:3000/titles"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  // getDetail(json : any){
  //   return this.http.get<any>("http://localhost:3000/users", {observe: 'response'});
  // }
}
