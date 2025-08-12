
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
   private questions: any[] = [];
  constructor(private _HttpClient: HttpClient) {}

  getquiz(id: number): Observable<any> {
    return this._HttpClient.get(`http://localhost:5249/api/Quiz?id=${id}`);
  }

  loadQuestionsFromApi(id: number): Observable<any> {
    return new Observable(observer => {
      this.getquiz(id).subscribe((response: any) => {
        this.questions = response.questions;
        observer.next(response); 
        observer.complete();
      });
    });
  }

  getQuestions(): any[] {
    return this.questions;
  }

  calculateScore(answers: any): number {
    let score = 0;
    this.questions.forEach((q: any) => {
      const correctOption = q.options?.find((opt: any) => opt.isCorrect);
      if (answers[q.id] === correctOption?.id?.toString()) {
        score += q.mark ?? 1;
      }
    });
    return score;
  }


  
}
