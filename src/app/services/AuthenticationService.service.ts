import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, config, Observable } from "rxjs";
import { userModel } from "../sign-up/user.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  // private currentUserSubject: BehaviorSubject<userModel>;
  // public currentUser: Observable<userModel>

  // constructor(private http: HttpClient){
  //   this.currentUserSubject = new BehaviorSubject<userModel>(JSON.parse(localStorage.getItem('currentUser')));
  //   this.currentUser = this.currentUserSubject.asObservable();
  // }

  // public get currentUserValue(): userModel{
  //   return this.currentUserSubject.value;
  // }

  // login(email: any, passWord: any){
  //   return this.http.post<any>(`${config.}/users`, {email, passWord})
  //   .pipe(map(user => {
  //     localStorage.setItem('currentUser', JSON.stringify(user));
  //     this.currentUserSubject.next(user);
  //     return user;
  //   }))
  // }
}


