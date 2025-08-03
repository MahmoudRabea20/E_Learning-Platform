
import { Component , ViewChild , ElementRef  } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz-service';
import { PDFService } from '../../services/pdfservice';
@Component({
  selector: 'app-quiz',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {

quizForm: FormGroup;
  submitted = false;
  score = 0;
  questions: any[] = [];

 @ViewChild('printThis', { static: false }) printThis!: ElementRef;

constructor(private formBuilder: FormBuilder , private elementRef: ElementRef , private QuizService : QuizService , private pdfService: PDFService) {
this.questions = this.QuizService.getQuestions();
    this.quizForm = this.formBuilder.group({});

    this.questions.forEach(q => {
      this.quizForm.addControl(q.id.toString(), this.formBuilder.control(''));
    });

 }

  submitQuiz() {
    this.submitted = true;
    this.score = this.QuizService.calculateScore(this.quizForm.value);
  }

  resetQuiz() {
    this.quizForm.reset();
    this.submitted = false;
    this.score = 0;
  }
   downloadPDF() {
    this.pdfService.generatePDF(this.printThis.nativeElement, 'section.pdf');
  }
  }







