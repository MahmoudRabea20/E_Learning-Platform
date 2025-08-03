import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  courseTitle = 'Web Development Course';
  currentLesson = 'html';
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  @Output() lessonSelected = new EventEmitter<string>();

  sections = [
    {
      title: 'Chemical Basis of Life',
      lessons: [
        { id: 'html', number: 1, title: 'Lesson 1: Carbohydrates & Lipids', icon: 'bi-camera-video' },
        { id: 'css', number: 2, title: 'Lesson 2 : Proteins & Nucleic Acids', icon: 'bi-camera-video' },
        { id: 'javascript', number: 3, title: 'Lesson 3 : Metabolism & Enzymes', icon: 'bi-camera-video' }
      ]
    },
    {
      title: 'Cell: Structure and Function ',
      lessons: [
        { id: 'design', number: 1, title: 'Lesson 1 : Cell Theory ', icon: 'bi-camera-video' },
        { id: 'figma', number: 2, title: 'Lesson 2 :Ultrastructure', icon: 'bi-camera-video' }
      ]
    },
    {
      title: 'Inheritance of Traits  ',
      lessons: [
        { id: 'bonus', number: 1, title: 'Lesson 1 :Karyotype, Mendel', icon: 'bi-camera-video' },
        { id: 'bonus2', number: 1, title: 'Lesson 2 : Blood groups, Rh factor,', icon: 'bi-camera-video' },
          { id: 'bonus3', number: 1, title: 'Lesson 3 : Genetic Disorders & Human Genome Project', icon: 'bi-camera-video' },


        
      ]
    },
    {
      title: 'Classification of Living Organisms',
      lessons: [
        { id: 'quiz', number: 1, title: 'Lesson 1 : Principles of Taxonomy and Binomial Nomenclature', icon: 'bi-question-circle' },
        { id: 'quiz2', number: 1, title: 'Lesson 2 : Kingdoms: Monera, Protista, Fungi, Plantae', icon: 'bi-question-circle' },
        { id: 'quiz3', number: 1, title: 'Lesson 3 : Animal Kingdom: Invertebrates and Vertebrates', icon: 'bi-question-circle' }
      ]
    },
    {
      title: 'Unit Five',
      lessons: [
        { id: 'Five1', number: 1, title: 'Lesson 1', icon: 'bi-question-circle' },
        { id: 'Five2', number: 1, title: 'Lesson 2', icon: 'bi-question-circle' },
        { id: 'Five3', number: 1, title: 'Lesson 3', icon: 'bi-question-circle' }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  selectLesson(lessonId: string): void {
    this.currentLesson = lessonId;
    this.lessonSelected.emit(lessonId);
  }

}
