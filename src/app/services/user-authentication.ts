import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ILoginUser } from '../models/ILodinUser';
import { IResponse } from '../models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class UserAuthentication {

  private adminAuthService: BehaviorSubject<boolean>
  private instructorAuthService: BehaviorSubject<boolean>
  private studentAuthService: BehaviorSubject<boolean>

  constructor(private _httpClient: HttpClient) {
    this.adminAuthService = new BehaviorSubject<boolean>(false);
    this.instructorAuthService = new BehaviorSubject<boolean>(false);
    this.studentAuthService = new BehaviorSubject<boolean>(false);
  }




  login(_user: ILoginUser) : Observable<IResponse>{
      return this._httpClient.post<IResponse>(`${environment.baseUrl}/login/login`, _user,{
        headers: new HttpHeaders({
          'content-type': "application/json"
        })
      });

    // localStorage.setItem("token","qwe123!@#");
    // this.authService.next(true);
  }
  loginAdmin(){
    this.adminAuthService.next(true);
  }

  logoutAdmin(){
    localStorage.removeItem("token");
    // this.authService.next(false);

    this.adminAuthService.next(false);
  }

  loginInstructor(){
    this.instructorAuthService.next(true);
  }

  logoutInstructor(){
    localStorage.removeItem("token");
    // this.authService.next(false);
    this.instructorAuthService.next(false);
  }

  loginStudent(){
    this.studentAuthService.next(true);
  }

  logoutStudent(){
    localStorage.removeItem("token");
    // this.authService.next(false);
    this.studentAuthService.next(false);
  }

  getAdminAuthenticationService(): BehaviorSubject<boolean>{
    return this.adminAuthService;
  }
  getInstructorAuthenticationService(): BehaviorSubject<boolean>{
    return this.instructorAuthService;
  }
  getStudentAuthenticationService(): BehaviorSubject<boolean>{
    return this.studentAuthService;
  }

}
