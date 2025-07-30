import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAdmin } from '../../models/iadmin';


@Component({
  selector: 'app-adding-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ],
  templateUrl: './adding-admin.html',
  styleUrl: './adding-admin.css'
})
export class AddingAdmin {
  admins: IAdmin[] = [];
  AdminForm: FormGroup;
  editId: number | null = null;

  constructor() {
    this.AdminForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z0-9_]*@gmail\\.com$")]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[\S]{8,}$/) ])
    });

    this.admins = [
      { id: 1, name: "Khaled Ali", email: '@gmail.com', password: 'password123' },
      { id: 2, name: "Taha Ahmed", email: 'example.vijn', password: 'password456' },
      { id: 3, name: "Reda Sayed", email: 'ayhaga@gmail.com', password: 'password789' }
    ];
  }

  get name() {
    return this.AdminForm.get('name');
  }

  get email() {
    return this.AdminForm.get('email');
  }

  get password() {
    return this.AdminForm.get('password');
  }

  Update(id: number) {
    const adminToUpdate = this.admins.find(admin => admin.id === id);
    if (adminToUpdate) {
      this.AdminForm.patchValue({
        name: adminToUpdate.name,
        email: adminToUpdate.email,
        password: adminToUpdate.password
      });
      this.editId = id;
    }
  }

  Delete(id: number) {
    this.admins = this.admins.filter(admin => admin.id !== id);
    if (this.editId === id) {
      this.AdminForm.reset();
      this.editId = null;
    }
  }

  onSubmit() {
    if (this.AdminForm.valid) {
      const formData = this.AdminForm.value;

      if (this.editId !== null) {
        // Update existing admin
        const index = this.admins.findIndex(admin => admin.id === this.editId);
        if (index !== -1) {
          this.admins[index] = { id: this.editId, ...formData };
        }
        this.editId = null;
      } else {
        // Add new admin
        const newId = this.admins.length > 0 ? Math.max(...this.admins.map(a => a.id)) + 1 : 1;
        this.admins.push({ id: newId, ...formData });
      }

      this.AdminForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
