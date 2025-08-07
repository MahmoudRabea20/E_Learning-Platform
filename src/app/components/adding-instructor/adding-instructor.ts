

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IInstructor } from '../../models/iinstructor';
import { InstructorService } from '../../services/instructor-service';

@Component({
  selector: 'app-adding-instructor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './adding-instructor.html',
  styleUrl: './adding-instructor.css'
})
export class AddingInstructor implements OnInit {
  InstructorForm: FormGroup;
  instructors: IInstructor[] = [];
  editId: number | null = null;

  constructor(private _instructorService : InstructorService) {
    this.InstructorForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      gender: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  get firstName() { return this.InstructorForm.get('firstName'); }
  get lastName() { return this.InstructorForm.get('lasttName'); }
  get email() { return this.InstructorForm.get('email'); }
  get password() { return this.InstructorForm.get('password'); }
  get address() { return this.InstructorForm.get('address'); }
  get gender() { return this.InstructorForm.get('gender'); }
  get image() { return this.InstructorForm.get('image'); }
  get phoneNumber() { return this.InstructorForm.get('phoneNumber'); }

  ngOnInit(): void {
    this._instructorService.getAllInstructors().subscribe({
      next: (data) => {
        this.instructors = data;
      },
      error: (err) => {
        console.log(err.err.errors);
      }

    })
  }

  Update(id: number) {

    console.log(id);
    const instructorToUpdate = this.instructors.find(instructor => instructor.id === id);
    if (instructorToUpdate) {
      this.InstructorForm.get('password')?.clearValidators();
      this.InstructorForm.get('password')?.updateValueAndValidity();
      this.InstructorForm.get('password')?.disable();
      this.InstructorForm.patchValue(instructorToUpdate);
      this.editId = id;  // Set edit mode
    }
  }

  Delete(id: number) {
    // this.instructors = this.instructors.filter(instructor => instructor.id !== id);
    // If the deleted instructor is being edited, reset the form
    console.log(id);

    this._instructorService.deleteInstructor(id).subscribe({
          next : (data) => {

            console.log(data);
          },
          error: (err) => {
          console.error("Failed to delete Instructor:", err.error.errors)
        }
    });
    this.ngOnInit();
    if (this.editId === id) {
      this.InstructorForm.reset();
      this.editId = null;
    }
  }

  onSubmit() {
    if (this.InstructorForm.valid) {
      const formData = this.InstructorForm.value;

      if (this.editId !== null) {
        // Update existing instructor
        console.log(this.editId);

         const { password, ...instructorData } = formData;
        const index = this.instructors.findIndex(i => i.id === this.editId);
        if (index > -1) {
          this._instructorService.updateInstructor(this.editId, instructorData as IInstructor).subscribe({
            next: (data)=>{
              console.log(data);

            },
            error: (err) => {
              console.error("Failed to update instructor:", err.error.errors)
            }
          })
          this.ngOnInit();
        }
        this.editId = null; // Exit edit mode
      } else {
        // Add new instructor
        console.log(formData);

        this._instructorService.addInstructor(formData).subscribe({
          next : (data) => {

            console.log(data);
          },
          error: (err) => {
          console.log(err.error.errors)
        }
        })
      }

      this.InstructorForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}

