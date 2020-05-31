import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../services/auth.service';
import { getLocaleDateFormat, formatDate } from '@angular/common';
import { UserService } from '../services/user.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-course-modal',
  templateUrl: './add-course-modal.page.html',
  styleUrls: ['./add-course-modal.page.scss'],
})
export class AddCourseModalPage implements OnInit {

  addForm : FormGroup;
  viewDate: Date = new Date();
  events = [];
  subjects = "";
  days :string[]=[];
  user : any;

  constructor( private courseService : CoursesService,
                private authService : AuthService,
                private userService : UserService,
                private modalCtrl : ModalController,
                public toastController: ToastController ) { }

  ngOnInit() {
    this.initForm();
    this.authService.user$.subscribe((user) => {
      this.user = user;
    })
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
    console.log();

    var temp = {
      name : this.addForm.controls.Title.value,
      description : this.addForm.controls.Description.value,
      teachername : this.user.name,
      teacherID : this.authService.GetID(),
      subject : this.subjects,
      days : this.days,
      creationDate : formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      enrolled : [],
    }

    this.courseService.createCourse(temp)
    this.dismiss();
    this.presentToast()

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Created new course succesfully!',
      duration: 2000
    });
    toast.present();
  }

}
