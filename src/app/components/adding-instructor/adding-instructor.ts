// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-adding-instructor',
//   imports: [],
//   templateUrl: './adding-instructor.html',
//   styleUrl: './adding-instructor.css'
// })
// export class AddingInstructor {

// }

// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IInstructor } from '../../models/iinstructor';

@Component({
  selector: 'app-adding-instructor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './adding-instructor.html',
  styleUrl: './adding-instructor.css'
})
export class AddingInstructor {
  InstructorForm: FormGroup;
  instructors: IInstructor[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', address: '123 Main St', phone: '1234567890', gender: 'Male', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password456', address: '456 Elm St', phone: '9876543210', gender: 'Female', age: 25 }
  ];
  editId: number | null = null;

  constructor() {
    this.InstructorForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)])
    });
  }

  get name() { return this.InstructorForm.get('name'); }
  get email() { return this.InstructorForm.get('email'); }
  get password() { return this.InstructorForm.get('password'); }
  get address() { return this.InstructorForm.get('address'); }
  get phone() { return this.InstructorForm.get('phone'); }
  get gender() { return this.InstructorForm.get('gender'); }
  get age() { return this.InstructorForm.get('age'); }

  Update(id: number) {
    const instructorToUpdate = this.instructors.find(instructor => instructor.id === id);
    if (instructorToUpdate) {
      this.InstructorForm.patchValue(instructorToUpdate);
      this.editId = id;  // Set edit mode
    }
  }

  Delete(id: number) {
    this.instructors = this.instructors.filter(instructor => instructor.id !== id);
    // If the deleted instructor is being edited, reset the form
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
        const index = this.instructors.findIndex(i => i.id === this.editId);
        if (index > -1) {
          this.instructors[index] = { id: this.editId, ...formData };
        }
        this.editId = null; // Exit edit mode
      } else {
        // Add new instructor
        const newId = this.instructors.length > 0 ? Math.max(...this.instructors.map(i => i.id)) + 1 : 1;
        this.instructors.push({ id: newId, ...formData });
      }

      this.InstructorForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}

