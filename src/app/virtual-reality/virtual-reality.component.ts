import { ApiServiceTitle } from './../shared/apiTitle.service';
import { contentModel } from './../home/content.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-virtual-reality',
  templateUrl: './virtual-reality.component.html',
  styleUrls: ['./virtual-reality.component.css']
})
export class VirtualRealityComponent implements OnInit {
  formValue !: FormGroup;
  todoForm !: FormGroup;
  talks : contentModel [] = [];
  inprogress : contentModel[] = [];
  done: contentModel [] = [];
  columnData : any;
  isEditEnabled : boolean = false;
  updateIndex !: any;
  contentModelObj : contentModel = new contentModel();
  constructor(private fb : FormBuilder,
    private api : ApiService,
    private apiTitle : ApiServiceTitle) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      content : ['', Validators.required]
    })
    this.getAllContent();
    this.getAllTitle();
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

  getAllContent(){
    this.api.getContent()
    .subscribe(res=>{
      this.talks = res;
    })
  }

  getAllTitle(){
    this.apiTitle.getTitle()
    .subscribe(res=>{
      this.columnData = res;
    })
  }

  postContentDetail(){
    this.contentModelObj.content = this.formValue.value.content;

    if(this.contentModelObj.content === null){
      alert("Content not null!");
    }else{
      this.api.postContent(this.contentModelObj)
      .subscribe(res=>{
        alert("Content Added Successfully!");
        this.formValue.reset();
        this.getAllContent();
      })
    }

  }

  // updateContentDetail(id : any, data : any){
  //   this.contentModelObj.content = this.formValue.value.content;

  //   this.api.updateContent(id, data)
  //   .subscribe(res=>{
  //     alert("Update Content Success!");
  //     this.formValue.reset();
  //   })
  // }

  deleteContent(id : any){

    let deletes = confirm(`You delete ${id}`)
    if(deletes){
      this.api.deleteContent(id)
      .subscribe(res=>{
        alert("Content Deleted");
        this.getAllContent();
      })
    }
  }

  onEdit(item: contentModel, id : number){

    this.formValue.controls['content'].setValue(item.content);
    this.updateIndex = id;
    this.isEditEnabled = true;
  }

    updateContentDetail(){
    this.contentModelObj.content = this.formValue.value.content;
      console.log("Content", this.contentModelObj.content);

    this.api.updateContent(this.contentModelObj, this.contentModelObj.id)
    .subscribe(res=>{
      alert("Update Content Success!");
      this.formValue.reset();
      this.updateIndex = undefined;
      this.isEditEnabled = false;
    })
  }
}
