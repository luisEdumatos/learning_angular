import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit{

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5.4,
        releaseDate: 'December, 2, 2020'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 48.99,
        code: 'LTQ-8800',
        duration: 120,
        rating: 5.4,
        releaseDate: 'December, 4, 2020'
      },
    ]
  }

}
