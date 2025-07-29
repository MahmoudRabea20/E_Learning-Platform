import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Assignment } from './components/assignment/assignment';
import { Details } from './components/details/details';
import { NotFound } from './components/not-found/not-found';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Profile } from './components/profile/profile';
import { Info } from './components/info/info';
import { Cart } from './components/cart/cart';
import { Payment } from './components/payment/payment';
import { CommonModule } from '@angular/common';
import { Admin } from './components/admin/admin';
import { Instructor } from './components/instructor/instructor';
import { AddingInstructor } from './components/adding-instructor/adding-instructor';
import { AddingClassTrack } from './components/adding-class-track/adding-class-track';
import { AddingAdmin } from './components/adding-admin/adding-admin';
import { AddingSubject } from './components/adding-subject/adding-subject';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, Navbar, Home, Footer, Assignment, Details, NotFound, Login, Register, Payment, Profile, Info, Cart, Admin, AddingInstructor, AddingClassTrack, AddingAdmin, AddingSubject, Instructor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'E_Learning';

  // page: 'units' | 'lessons' = 'units';

  // setPage(newPage: 'units' | 'lessons') {
  //   this.page = newPage;
  // }
}

