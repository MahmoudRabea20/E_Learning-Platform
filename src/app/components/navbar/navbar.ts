import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserAuthentication } from '../../services/user-authentication';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  isLogged: boolean = false;

  constructor(private _authSer: UserAuthentication) {


  }

  ngOnInit(): void {
    this._authSer.getAuthenticationService().subscribe({
      next: (status) => {this.isLogged = status},
      error: (er) => {console.log(er)}

    })
  }

  logout(): void {
    this._authSer.logout();
  }
}
