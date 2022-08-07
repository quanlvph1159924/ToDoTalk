import { ApiUserService } from './../shared/apiUser.service';
import { userModel } from './user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  formValue !: FormGroup;
  isSubmitted = false;
  userModelObj: userModel = new userModel();
  constructor(private formBuilder: FormBuilder, private api: ApiUserService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }

  get f(){
    return this.formValue.controls;
  }

  postUserDetail() {
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.passWord = this.formValue.value.passWord;

    this.api.postUsers(this.userModelObj)
    .subscribe(res=>{
      alert("Sign Up Success");
      this.formValue.reset();
    })
  }
}
