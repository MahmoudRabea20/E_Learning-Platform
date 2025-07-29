import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ISubject } from '../../models/isubject';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiSubjectSrevice } from '../../services/api-subject-srevice';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  SelectedAcademicYear: number = 0;
  SelectedTrack: number = 0;
  subjects: ISubject[] = [];
  isLogged: boolean = false;

  constructor(private apiSubjectService: ApiSubjectSrevice){}

  ngOnInit(){
    this.subjects = this.apiSubjectService.getAllSubjects();


  }

}
