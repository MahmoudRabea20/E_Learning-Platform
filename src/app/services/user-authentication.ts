import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthentication {

  private authService: BehaviorSubject<boolean>

  constructor() {
    this.authService = new BehaviorSubject<boolean>(false);
  }

  login(){
    localStorage.setItem("token","qwe123!@#");
    this.authService.next(true);
  }

  logout(){
    localStorage.removeItem("token");
    this.authService.next(false);
  }

  getAuthenticationService(): BehaviorSubject<boolean>{
    return this.authService;
  }

}
