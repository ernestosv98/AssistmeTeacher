import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-course-modal',
  templateUrl: './update-course-modal.page.html',
  styleUrls: ['./update-course-modal.page.scss'],
})
export class UpdateCourseModalPage implements OnInit {

  @Input() item: any;
  subjects = "";
  days : string[]=[];

  constructor( private courseService : CoursesService,
                private modalCtrl : ModalController ) { }

  ngOnInit() {
  }

  update():void {
    this.courseService.updateCourse(this.item.courseID, this.item)
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
