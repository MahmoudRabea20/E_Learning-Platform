import { Injectable } from '@angular/core';
import { ISubject } from '../models/isubject';

@Injectable({
  providedIn: 'root'
})
export class ApiSubjectSrevice {
  subjects: ISubject[]

  constructor(){
    this.subjects = [
      {
        id: 1,
        teacherName: "Mr Ahmed",
        subjectName: "Physics",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 500,
        imgUrl: "physic.png"
      },
      {
        id: 2,
        teacherName: "Mr Khaled",
        subjectName: "Chemistery",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 500,
        imgUrl: "ch.png"
      },
      {
        id: 3,
        teacherName: "Mr Samy",
        subjectName: "Biology",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 600,
        imgUrl: "bi.png"
      },
      {
        id: 4,
        teacherName: "Mrs Sara",
        subjectName: "History",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 500,
        imgUrl: "ch.png"
      },
      {
        id: 5,
        teacherName: "Mr Tamer",
        subjectName: "Physics",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 400,
        imgUrl: "physic.png"
      },
      {
        id: 6,
        teacherName: "Mr Khaled",
        subjectName: "Chemistery",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 500,
        imgUrl: "ch.png"
      },
      {
        id: 7,
        teacherName: "Mr Samy",
        subjectName: "Biology",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 600,
        imgUrl: "bi.png"
      },
      {
        id: 8,
        teacherName: "Mrs Hadeer",
        subjectName: "History",
        subjectDescription: "Physics is a fundamental science that explores the nature of matter, energy, and the forces that govern the universe. It seeks to understand how objects move, how energy is transferred, and how the laws of nature operate from the smallest particles to the largest galaxies.",
        subjectPrice: 500,
        imgUrl: "ch.png"
      }
    ]
  }

  getAllSubjects(): ISubject[]{
    return this.subjects;
  }

  getSubjectById(id: number): ISubject | undefined{
    return this.subjects.find((sub) => sub.id == id);
  }
}
