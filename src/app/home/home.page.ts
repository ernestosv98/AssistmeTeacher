import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';
import { ThrowStmt } from '@angular/compiler';

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
    if(this.subjects === "All" && this.searchBox.length > 0){
      this.searched = [];
      this.courses.forEach(element => {
        if(element.Title.includes(this.searchBox)){
          this.searched.push(element);
        } else if(element.Subject.includes(this.searchBox)){
          this.searched.push(element);
        } else if(element.TeacherName.includes(this.searchBox)){
          this.searched.push(element);
        }
      });
    } else if(this.subjects !== "All" && this.searchBox.length > 0) {
      this.searched = [];
      this.courses.forEach(element => {
        if(element.Title.includes(this.searchBox) && element.Subject.includes(this.subjects) ){
          this.searched.push(element);
        } else if(element.Subject.includes(this.searchBox) && element.Subject.includes(this.subjects)){
          this.searched.push(element);
        } else if(element.TeacherName.includes(this.searchBox) && element.Subject.includes(this.subjects) ){
          this.searched.push(element);
        }
      });
    } else if(this.subjects !== "All" && this.searchBox.length <= 0) {
      this.searched = [];
      this.courses.forEach(element => {
        if(element.Subject.includes(this.subjects)){
          this.searched.push(element);
        }
      });
    }
    else
    {
      this.getCourses();
    }
  }


}
