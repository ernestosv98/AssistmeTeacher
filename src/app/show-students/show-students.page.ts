import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { CoursesService } from '../services/courses.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.page.html',
  styleUrls: ['./show-students.page.scss'],
})
export class ShowStudentsPage implements OnInit {

  @Input() item: any;
  
  constructor( private userService : UserService,
                private courseService : CoursesService,
                private modalCtrl : ModalController,
                public toastController: ToastController) { }

  students = [];

  ngOnInit() {
    this.getStudentInfo();
  }

  getStudentInfo(){
    this.item.Enrolled.forEach(element => {
      this.userService.getStudent(element).subscribe((student) => {
        this.students.push(student);
      })
    });
  }

  removeStudent(student : any){
    
    this.item.Enrolled.forEach(element => {
      if (student.id === element) {
        this.item.Enrolled.splice(this.item.Enrolled.indexOf(element),1)
      }
    });
    this.courseService.updateCourse(this.item.courseID, this.item)
    this.presentToast(student.name);
    
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentToast(name) {
    const toast = await this.toastController.create({
      message: 'Student ' + name + ' has been removed from the course.',
      duration: 2000
    });
    toast.present();
  }


}
