import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../services/auth.service';
import { getLocaleDateFormat, formatDate } from '@angular/common';

@Component({
  selector: 'app-add-course-modal',
  templateUrl: './add-course-modal.page.html',
  styleUrls: ['./add-course-modal.page.scss'],
})
export class AddCourseModalPage implements OnInit {

  addForm : FormGroup;

  constructor( private courseService : CoursesService,
                private authService : AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.addForm = new FormGroup({
      Title: new FormControl(null),
      Description: new FormControl(null),
      TeacherName: new FormControl(null),
      Subject: new FormControl(null),
    });
  }

  add() {
    var temp = {
      name : this.addForm.controls.Title.value,
      description : this.addForm.controls.Description.value,
      teachername : this.addForm.controls.TeacherName.value,
      teacherID : this.authService.GetID(),
      subject : this.addForm.controls.Subject.value,
      creationDate : formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      enrolled : [],
    }

    this.courseService.createCourse(temp)
  }

}
