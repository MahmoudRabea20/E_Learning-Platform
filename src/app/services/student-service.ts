import { Injectable } from '@angular/core';
import { IStudent } from '../models/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student: IStudent;

  constructor(){
    this.student = {
      name: "Ahmed Riad",
      email: "Ahmed@gmail.com",
      phoneNumber: 1113635553,
      address: "Cairo, Helwan",
      gender: "Male",
      age: 18
    }
  }

  getStudent(): IStudent {
    return this.student;
  }

  addStudent(std: IStudent): void {
    this.student = {
      name: std.name,
      email: std.email,
      phoneNumber: std.phoneNumber,
      address: std.address,
      gender: std.gender,
      age: std.age
    }
  }
}
