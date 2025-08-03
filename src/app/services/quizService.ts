import { ElementRef, Injectable, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class Quiz {
   private questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correct: 'Paris'
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correct: 'Mars'
    },
    {
      id: 3,
      question: 'What is the boiling point of water?',
      options: ['90°C', '100°C', '80°C', '120°C'],
      correct: '100°C'
    }
  ];

  getQuestions() {
    return this.questions;
  }

  calculateScore(answers: any): number {
    let score = 0;
    this.questions.forEach(q => {
      if (answers[q.id] === q.correct) score++;
    });
    return score;
  }

  generatePDF(element: HTMLElement) {
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('quiz-result.pdf');
    });
  }


}


