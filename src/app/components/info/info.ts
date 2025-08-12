import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { StudentService } from '../../services/student-service';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info implements OnInit {

  student!: IStudent;

  constructor(private _stdService: StudentService){}

  ngOnInit(): void {
    // this.student = this._stdService.getStudent();
  }
}
