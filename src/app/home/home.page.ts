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
  searched = []
  searchBox = ""
  subjects = "All"

  ngOnInit() {
    console.log(this.authService.GetID())
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((item) => {
      this.courses = item;
      this.searched = item;
    })
  }

  searchCourses(){
    if(this.subjects.length > 0){
      if(this.subjects.includes("All") || this.searchBox.length > 0){
        this.searched = []
        this.courses.forEach(element => {
          if(element.Title.includes(this.searchBox)){
            this.searched.push(element)
          }
        });
        return;
      } else {
        let subTable = []
        this.searched = []
        this.courses.forEach(element => {
        if(element.Subject.includes(this.subjects)){
          subTable.push(element)
          if(this.searchBox.length > 0){
            subTable.forEach(course => {
              if(course.Title.includes(this.searchBox)){
                this.searched.push(course)
              }
            });
          } else {
            this.searched = subTable;
          }
        }
      });
      }
    } else {
      this.getCourses();
    }
  }


}
