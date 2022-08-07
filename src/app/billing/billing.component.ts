import { ApiProjectService } from './../shared/apiProject.service';
import { projectModel } from '../model/project.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  formValue !: FormGroup;
  projectData: any;
  projectModelObj: projectModel = new projectModel();
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiProjectService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
    });
    this.getAllProject();
  }

  postProject() {
    this.projectModelObj.name = this.formValue.value.name;

    console.log();

    this.api.postProject(this.projectModelObj).subscribe((res) => {
      alert('Project added Successfully');
      this.formValue.reset();
      this.getAllProject();
    });
  }

  getAllProject() {
    this.api.getProject().subscribe((res) => {
      this.projectData = res;
    });
  }

  deleteProject(){

  }
}
