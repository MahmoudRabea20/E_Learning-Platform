import { Component, OnInit, Input, ViewChild , ElementRef, OnChanges, SimpleChanges, output } from '@angular/core';
// import * as AOS from '../../../../node_modules/aos';
// import AOS from '../../../../node_modules/aos';
import 'aos/dist/aos.css';
import { CommonModule } from '@angular/common';
import { Quiz } from "../quiz/quiz";
import { Assigment } from "../assigment/assigment";
import { PDFService } from '../../services/pdfservice';
import { Ilesson } from '../../models/ilesson';
import { LessonService } from '../../services/lesson-service';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-course-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails implements OnInit, OnChanges {

 @Input() lessonId!: number ;

  lessonData: Ilesson | null = null;
  currentTab: string = 'overview';

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {

    this.loadLesson();
  }

  ngOnChanges(changes: SimpleChanges) {
   if (changes['lessonId'] && changes['lessonId'].currentValue) {
  this.loadLesson();
}
  }

  loadLesson() {
    if (this.lessonId) {
      this.lessonService.getById(this.lessonId).subscribe({
        next: (lesson) => {
          this.lessonData = lesson;
          this.currentTab = 'overview';
        },
        error: (err) => {
          console.error('Error loading lesson', err);
          this.lessonData = null;
        }
      });
    }
  }

  setTab(tabName: string) {
    console.log('Switching tab to:', tabName);
  this.currentTab = tabName;
}

  onDownload() {
    if (this.lessonData?.pdfUrl) {
      this.lessonService.downloadFile(this.lessonData.pdfUrl);
    }
  }


}
