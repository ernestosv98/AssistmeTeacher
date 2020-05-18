import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService : AuthService,
              private courseService : CoursesService,
              ) { }

  courses = []

  ngOnInit() {
    console.log(this.authService.GetID())
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((item) => {
      this.courses = item;
    })
  }


}
