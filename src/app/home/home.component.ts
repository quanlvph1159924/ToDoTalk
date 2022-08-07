import { columnModel } from './../model/column.model';
import { ApiServiceTitle } from './../shared/apiTitle.service';
import { ApiService } from './../shared/api.service';
import { contentModel } from './content.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { projectModel } from '../model/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formValue !: FormGroup;
  tasks : contentModel [] = [];
  inprogress : contentModel[] = [];
  done: contentModel [] = [];
  titleData : any;
  contentModelObj : contentModel = new contentModel();
  titleModelObj : columnModel = new columnModel();
  nameProjectObj : projectModel = new projectModel();
  constructor(
    private formBuilder: FormBuilder,
    private api : ApiServiceTitle,
    private api1 : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title : [''],
      content : ['']
    })
    this.getAllContent();
    this.getAllTitle();
  }
  getAllTitle(){
    this.api.getTitle()
    .subscribe(res=>{
      this.titleData = res;
    })
  }
  postTitleDetail(){

    this.titleModelObj.title = this.formValue.value.title;

    this.api.postTitle(this.titleModelObj)
    .subscribe(res=>{
      alert("Title Added Successfully");
      // this.formValue.reset();
    })
  }
  postContentDetail(){

    this.contentModelObj.content = this.formValue.value.content;

    this.api1.postContent(this.contentModelObj)
    .subscribe(res=>{
      alert("Content Added Successfully");
      this.formValue.reset();
      this.getAllContent();
    })
  }

  getAllContent(){
    this.api1.getContent()
    .subscribe(res=>{
      this.tasks = res;
    })
  }

  myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  myFunction1(){
    var element1 = document.getElementById("myDIV");
    element1?.classList.toggle("mystyle");
  }
  drop(event: CdkDragDrop<contentModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  deleteContent(id : any){
    let deletes = confirm(`You Delete ${id}`);
    if(deletes){
      this.api1.deleteContent(id)
      .subscribe(res=>{
        alert("Content Deleted");
        this.getAllContent();
      })
    }
  }
}
