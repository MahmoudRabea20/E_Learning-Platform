import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { CourseDetails } from '../course-details/course-details';

@Component({
  selector: 'app-course-dashboard',
  imports: [Sidebar, CourseDetails],
  templateUrl: './course-dashboard.html',
  styleUrl: './course-dashboard.css'
})
export class CourseDashboard {
protected title = 'course';
  selectedLesson: string = 'html';
}
