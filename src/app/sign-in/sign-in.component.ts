import { HttpClient } from '@angular/common/http';
import { ApiUserService } from './../shared/apiUser.service';
import { userModel } from './../sign-up/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  formValue !: FormGroup;
  isSubmitted = false;
  userModelObj: userModel = new userModel();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiUserService,
    private http : HttpClient
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email: ['',(Validators.required, Validators.email)],
      passWord: ['',Validators.required],
    });
  }

  get f(){
    return this.formValue.controls;
  }

  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.formValue.value.email && a.passWord === this.formValue.value.passWord
      });
      if(user){
        alert("Login Success!");
        this.formValue.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("User not found!!");
      }
    }
    // ,err=>{
    //   alert("Something went wrong!!");
    // }
    )
  }
}
